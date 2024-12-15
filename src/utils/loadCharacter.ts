import type { Character } from '../types/Character';

export async function loadCharacter(filename: string): Promise<Character> {
  try {
    const response = await fetch(`/characters/${filename}`);
    if (!response.ok) {
      throw new Error(`Failed to load character: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error loading character:', error);
    throw error;
  }
}