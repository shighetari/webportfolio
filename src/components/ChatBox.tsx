import React, { useState, useEffect, useRef } from "react";
import { sendPromptToAssistant } from "../services/AssistantService";
import "../assets/scss/_ChatBox.scss";
import userIcon from "/icons/kalilinux-svgrepo-com.svg";
import assistantIcon from "/icons/linux-tux-svgrepo-com.svg";
import messageIcon from "/icons/arch-linux-svgrepo-com(2).svg";

interface TextContent {
  type: string;
  text: {
    value: string;
    annotations: any[];
  };
}

interface Message {
  id: string;
  content: TextContent[];
  role: string;
  created_at: number;
}

type MessageExchange = {
  role: string;
  prompt: string;
  response: string;
};

export const ChatBox = () => {
  const [input, setInput] = useState("");
  const [conversation, setConversation] = useState<MessageExchange[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<null | HTMLDivElement>(null);
  const [threadId, setThreadId] = useState<string | undefined>(undefined);
  // Placeholder visibility toggle function
  const [isHelpMenuVisible, setIsHelpMenuVisible] = useState(false);

  // Toggle help menu visibility
  const toggleHelpMenu = () => {
    setIsHelpMenuVisible(!isHelpMenuVisible);
  };

  // Method to update chat input with a suggestion
  const handleSuggestionSelect = (suggestion: string) => {
    setInput(suggestion);
    setIsHelpMenuVisible(false); // Close the help menu after selection
    console.log(suggestion, "handleSuggestionSelect()");
  };

  const handleSendClick = async () => {
    try {
      setIsTyping(true);
      const { threadId: newThreadId, messagesResponse } =
        await sendPromptToAssistant(input, threadId);

      // Update threadId if a new one is received
      if (newThreadId && threadId !== newThreadId) {
        setThreadId(newThreadId);
      }

      const userMessage: MessageExchange = {
        prompt: input,
        response: "",
        role: "user",
      };

      const assistantResponse = messagesResponse.data.find(
        (msg: Message) => msg.role === "assistant"
      );

      if (assistantResponse) {
        const assistantMessage: MessageExchange = {
          prompt: "",
          response: assistantResponse.content[0].text.value,
          role: "assistant",
        };

        setConversation([...conversation, userMessage, assistantMessage]);
      } else {
        setConversation([...conversation, userMessage]);
      }

      setInput("");
      setIsTyping(false);
    } catch (error) {
      console.error("Failed to send prompt:", error);
      setIsTyping(false);
    }
  };

  // Send message on Enter, new line on Shift + Enter
  const handleKeyPress = (e: any) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendClick();
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
    const chatInput = document.getElementById("chat-input");
    if (chatInput) chatInput.focus();
  }, [conversation, isTyping]);

  return (
    <div className="chat-box">
      <button className="help-button" onClick={toggleHelpMenu}>
        ?
      </button>
      {isHelpMenuVisible && (
        <div className="help-menu">
          <ul>
            <li onClick={() => handleSuggestionSelect("Who are you?")}>
              Who are you?
            </li>
            <li onClick={() => handleSuggestionSelect("Who is Francisco?")}>
              Who is Francisco?
            </li>
            <li
              onClick={() =>
                handleSuggestionSelect("Why should I hire Francisco?")
              }
            >
              Why should I hire Francisco?
            </li>
            <li onClick={() => handleSuggestionSelect("Кто ты?")}>Кто ты?</li>
            <li onClick={() => handleSuggestionSelect("Кто такой Франциско?")}>
              Кто такой Франциско?
            </li>
          </ul>
        </div>
      )}
      <div className="conversation">
        {conversation.map((exchange, index) => (
          <div key={index} className={`exchange ${exchange.role}`}>
            <div
              className={
                exchange.role === "user" ? "user-message" : "assistant-message"
              }
            >
              {exchange.role === "user"
                ? ` ${exchange.prompt}`
                : ` ${exchange.response}`}
              <img
                src={exchange.role === "user" ? userIcon : assistantIcon}
                alt={`${exchange.role} icon`}
                className={`chat-head-icon ${exchange.role}-icon`}
              />
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="typing-indicator">Assistant is typing...</div>
        )}
        <div ref={messagesEndRef} />
      </div>
      <div className="input-area">
        <img src={messageIcon} alt="Message Icon" className="input-icon" />
        <textarea
          id="chat-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type your message here"
          disabled={isTyping} // Disable input when assistant is typing
        />

        <button onClick={handleSendClick} disabled={isTyping}>
          Send
        </button>
      </div>
    </div>
  );
};
