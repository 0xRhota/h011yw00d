import React, { useState } from 'react';

interface Props {
  onSend: (message: string) => void;
}

export function ChatInput({ onSend }: Props) {
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    onSend(input);
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex space-x-2">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your message..."
        className="flex-1 p-3 bg-gray-900 text-gray-100 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 placeholder-gray-500"
      />
      <button
        type="submit"
        className="px-6 py-3 bg-gray-800 text-white rounded-lg border border-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all"
      >
        Send
      </button>
    </form>
  );
}