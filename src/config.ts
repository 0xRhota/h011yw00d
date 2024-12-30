export const config = {
  openaiApiKey: import.meta.env.VITE_OPENAI_API_KEY || process.env.OPENAI_API_KEY,
  apiUrl: import.meta.env.VITE_API_URL || 'http://localhost:3000'
}; 