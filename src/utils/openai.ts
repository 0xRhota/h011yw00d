import OpenAI from 'openai';
import { config } from '../config';

const openai = new OpenAI({
  apiKey: config.openaiApiKey,
  dangerouslyAllowBrowser: true
});

export async function getChatCompletion(
  messages: { role: 'user' | 'assistant' | 'system'; content: string }[]
) {
  try {
    const completion = await openai.chat.completions.create({
      messages,
      model: "gpt-4-1106-preview",
      temperature: 0.7,
      max_tokens: 1000,
    });

    return completion.choices[0]?.message?.content || '';
  } catch (error) {
    console.error('Error getting chat completion:', error);
    throw error;
  }
} 