import { useState, useCallback } from 'react';
import type { Character } from '../types/Character';
import type { Message } from '../types/Message';
import { getChatCompletion } from '../utils/openai';

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
    
    // Start typing indicator
    setIsTyping(true);
    
    try {
      // Prepare messages for OpenAI
      const systemMessage = `You are ${character.name}. ${character.bio.join(' ')}
        Style guide: ${character.style.all.join(' ')} ${character.style.chat.join(' ')}`;
      
      const chatMessages = [
        { role: 'system', content: systemMessage },
        ...messages.map(msg => ({
          role: msg.sender === 'user' ? 'user' : 'assistant',
          content: msg.text
        })),
        { role: 'user', content: text }
      ] as const;

      // Get AI response
      const response = await getChatCompletion(chatMessages);
      
      // Add bot message
      const botMessage: Message = {
        sender: 'bot',
        text: response,
        timestamp: Date.now(),
      };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Failed to get chat response:', error);
      // Add error message
      const errorMessage: Message = {
        sender: 'bot',
        text: 'Sorry, I encountered an error while processing your message.',
        timestamp: Date.now(),
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  }, [character, messages]);

  return {
    messages,
    isTyping,
    sendMessage,
  };
}