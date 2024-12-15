import { useState, useCallback } from 'react';
import type { Character } from '../types/Character';
import type { Message } from '../types/Message';

export function useChat(character: Character) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  const sendMessage = useCallback(async (text: string) => {
    // Add user message
    const userMessage: Message = {
      sender: 'user',
      text,
      timestamp: Date.now(),
    };
    setMessages(prev => [...prev, userMessage]);
    
    // Simulate bot typing
    setIsTyping(true);
    
    // Simulate bot response after a delay
    setTimeout(() => {
      const botMessage: Message = {
        sender: 'bot',
        text: `As ${character.name}, I acknowledge your message: "${text}"`,
        timestamp: Date.now(),
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds
  }, [character]);

  return {
    messages,
    isTyping,
    sendMessage,
  };
}