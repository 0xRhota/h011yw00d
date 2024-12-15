import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChatInterface } from './components/ChatInterface';
import { loadCharacter } from './utils/loadCharacter';
import './index.css';

async function init() {
  try {
    const character = await loadCharacter('h011yw00d.character.json');
    
    ReactDOM.createRoot(document.getElementById('root')!).render(
      <React.StrictMode>
        <ChatInterface character={character} />
      </React.StrictMode>
    );
  } catch (error) {
    console.error('Failed to initialize application:', error);
    // Show error UI
    document.getElementById('root')!.innerHTML = `
      <div style="color: white; padding: 20px;">
        <h1>Failed to load chat interface</h1>
        <p>Please try refreshing the page. If the problem persists, contact support.</p>
      </div>
    `;
  }
}

init();