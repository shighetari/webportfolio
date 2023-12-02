import React, { useState, useEffect, useRef } from 'react';
import { sendPromptToAssistant } from '../services/AssistantService';
import '../assets/scss/_ChatBox.scss';

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
    const [input, setInput] = useState('');
    const [conversation, setConversation] = useState<MessageExchange[]>([]);
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<null | HTMLDivElement>(null);
    const [threadId, setThreadId] = useState<string | undefined>(undefined);
  
    const handleSendClick = async () => {
      try {
          setIsTyping(true);
          const { threadId: newThreadId, messagesResponse } = await sendPromptToAssistant(input, threadId);
  
          // Update threadId if a new one is received
          if (newThreadId && threadId !== newThreadId) {
              setThreadId(newThreadId);
          }
  
          const userMessage: MessageExchange = {
              prompt: input,
              response: '',
              role: 'user'
          };
  
          const assistantResponse = messagesResponse.data.find((msg: Message) => msg.role === 'assistant');
          
          if (assistantResponse) {
              const assistantMessage: MessageExchange = {
                  prompt: '',
                  response: assistantResponse.content[0].text.value,
                  role: 'assistant'
              };
        
              setConversation([...conversation, userMessage, assistantMessage]);
          } else {
              setConversation([...conversation, userMessage]);
          }
  
          setInput('');
          setIsTyping(false);
      } catch (error) {
          console.error('Failed to send prompt:', error);
          setIsTyping(false);
      }
  };
  
      

    // Send message on Enter, new line on Shift + Enter
    const handleKeyPress = (e: any) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        handleSendClick();
      }
    };

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
      };
      
  
useEffect(() => {
  scrollToBottom();
  const chatInput = document.getElementById('chat-input');
  if (chatInput) chatInput.focus();
}, [conversation]);

    return (
        <div className="chat-box">
          <div className="conversation">
            
          {conversation.map((exchange, index) => (
            <div key={index} className={`exchange ${exchange.role}`}>
                {exchange.role === 'user' ? (
                <div className="user-message">You: {exchange.prompt}</div>
                ) : (
                <div className="assistant-message">Assistant: {exchange.response}</div>
                )}
            </div>
            ))}

            {isTyping && <div className="typing-indicator">Assistant is typing...</div>}
            <div ref={messagesEndRef} />
          </div>
          <div className="input-area">
            <textarea
              id="chat-input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message here"
            />
            <button onClick={handleSendClick}>Send</button>
          </div>
        </div>
      );
    };