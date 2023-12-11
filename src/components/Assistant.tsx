import React, {
  useState,
  useEffect,
  useRef,
  ChangeEvent,
  KeyboardEvent,
  useCallback,
} from "react";
import { sendPromptToAssistant } from "../services/AssistantService";
import "../assets/scss/_Assistant.scss";
import userIcon from "/icons/kalilinux-svgrepo-com.svg"
import assistantIcon from "/icons/linux-tux-svgrepo-com.svg"
import inputIcon from "/icons/arch-linux-svgrepo-com(2).svg";

type ResponseType = { type: "user" | "bot"; text: string };

const Assistant = () => {
  const [input, setInput] = useState<string>("");
  const [responses, setResponses] = useState<ResponseType[]>([]);
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [threadId, setThreadId] = useState<string | undefined>(undefined);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false); // State to track if the chat box is open
  const assistantRef = useRef<HTMLDivElement | null>(null); // Ref for the chat box
  const [inputDisabled, setInputDisabled] = useState(false);
  const [helpOptions, setHelpOptions] = useState([
    "Who are you?",
    "Who is Francisco?",
    "Why should I hire Francisco?",
  ]); // Add more help options as needed
  const [isHelpOptionsVisible, setIsHelpOptionsVisible] = useState(false);

  // Function to toggle the chat box open or closed
  const toggleChat = () => {
    setIsOpen(!isOpen);
  };
  // Click event handler to detect clicks outside of the Assistant component
  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (assistantRef.current && !assistantRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  }, []);

  // Effect to add an event listener to the document
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  //Start of Chat logic
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSend = async () => {
    if (input.trim() && !inputDisabled) {
      setInputDisabled(true); // Disable input to prevent spamming
      setResponses([...responses, { type: "user", text: input }]);
      setIsTyping(true);

      try {
        const { threadId: newThreadId, messagesResponse } = await sendPromptToAssistant(
          input,
          threadId
        );

        // Update threadId if a new one is received
        if (newThreadId) {
          setThreadId(newThreadId);
        }

        // Extract the most recent message from the assistant, which is at index 0
        const recentAssistantMessage = messagesResponse.data.find(
          (msg: any) => msg.role === "assistant"
        );
        const messageText = recentAssistantMessage
          ? recentAssistantMessage.content[0].text.value
          : "I didn't get a response.";

        setResponses((responses) => [...responses, { type: "bot", text: messageText }]);
      } catch (error) {
        console.error("Error while getting assistant's response:", error);
        setResponses((responses) => [
          ...responses,
          { type: "bot", text: "Sorry, something went wrong." },
        ]);
      } finally {
        setIsTyping(false);
        setInput("");
      }
      setInputDisabled(false); // Re-enable input after receiving the response
    }
  };

  // Toggle help options visibility
  const toggleHelpOptions = () => {
    setIsHelpOptionsVisible(!isHelpOptionsVisible);
    console.log("toggleHelpOptions()");
  };

  // Function to handle help option selection
  const handleHelpOptionClick = (option: string) => {
    setInput(option); // Set input to selected option
    setIsHelpOptionsVisible(false); // Close the help menu after selection
    console.log(option, "handleHelpOptionClick()");
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [responses]);

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="assistant-wrapper" ref={assistantRef}>
      {!isOpen && (
        <button className="assistant-toggle" onClick={toggleChat}>
          <img src="icons/catdog.png" alt="Open Chat" />
        </button>
      )}

      {isOpen && (
        <div className="assistant-container">
          {/* Help button */}
          <button className="help-button" onClick={toggleHelpOptions}>
            ?
          </button>

          {/* Help options */}
          <div
            className={`help-options ${
              isHelpOptionsVisible ? "help-options-visible" : ""
            }`}
          >
            {helpOptions.map((option, index) => (
              <div
                key={index}
                className="help-option"
                onClick={() => handleHelpOptionClick(option)}
              >
                {option}
              </div>
            ))}
          </div>

          {/* Chat box UI */}
          <div className="assistant-toggle">
            <img src="icons/catdog.png" alt="Assistant Avatar" onClick={toggleChat} />
          </div>
          {/* <button className="assistant-minimize" onClick={toggleChat}>
            Minimize
          </button> */}
          <div className="assistant-chat">
            <div className="messages">
              {responses.map((response, index) => (
                <div key={index} className={`message ${response.type}`}>
                   <img src={response.type === "user" ? userIcon : assistantIcon} alt={response.type} />
                  {response.text}
                </div>
              ))}
              {isTyping && <div className="message bot typing">Typing.</div>}
              <div ref={messagesEndRef} />
            </div>
            <div className="input-area">
            <img src={inputIcon} alt="Input Icon" className="input-icon" />
              <input
                type="text"
                value={input}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything..."
                disabled={inputDisabled}
              />
              <button onClick={handleSend} disabled={isTyping || !input.trim()}>
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Assistant;
