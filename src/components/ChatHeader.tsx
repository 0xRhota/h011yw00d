import React from 'react';

interface Props {
  characterName: string;
}

export function ChatHeader({ characterName }: Props) {
  return (
    <header className="p-4 border-b border-gray-700">
      <h1 className="text-2xl font-bold text-center text-white">
        🎬 h011yw00d
      </h1>
    </header>
  );
}