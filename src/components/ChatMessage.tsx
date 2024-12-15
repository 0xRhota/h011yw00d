import React from 'react';
import type { Message } from '../types/Message';

interface Props {
  message: Message;
}

export function ChatMessage({ message }: Props) {
  return (
    <div
      className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
    >
      <div
        className={`max-w-[70%] rounded-lg p-3 ${
          message.sender === 'user'
            ? 'bg-gray-700 bg-opacity-50 border border-gray-500'
            : 'bg-gray-800 bg-opacity-50 border border-gray-600'
        } text-gray-100`}
      >
        {message.text}
      </div>
    </div>
  );
}