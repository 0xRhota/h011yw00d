import React, { useRef, useEffect } from 'react';
import type { Character } from '../types/Character';
import { useChat } from '../hooks/useChat';
import { ChatMessage } from './ChatMessage';
import { ChatInput } from './ChatInput';
import { ChatHeader } from './ChatHeader';
import { ChatTypingIndicator } from './ChatTypingIndicator';
import { useAutoScroll } from '../hooks/useAutoScroll';

interface Props {
  character: Character;
}

export function ChatInterface({ character }: Props) {
  const { messages, isTyping, sendMessage } = useChat(character);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const scrollToBottom = useAutoScroll(messagesEndRef);

  useEffect(scrollToBottom, [messages]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-black p-4">
      <div className="w-full max-w-3xl h-[80vh] flex flex-col bg-black border border-gray-700 rounded-lg shadow-2xl">
        <ChatHeader characterName={character.name} />
        
        <main className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.map((message) => (
            <ChatMessage key={message.timestamp} message={message} />
          ))}
          {isTyping && <ChatTypingIndicator />}
          <div ref={messagesEndRef} />
        </main>

        <footer className="p-4 border-t border-gray-700">
          <ChatInput onSend={sendMessage} />
        </footer>
      </div>
    </div>
  );
}