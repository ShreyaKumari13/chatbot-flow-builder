import React from 'react';
import FlowBuilder from './components/FlowBuilder/FlowBuilder';
import './App.css';

/**
 * Main App component for the Chatbot Flow Builder
 * Features a clean, full-screen flow builder interface
 */
function App() {
  return (
    <div className="App">
      <FlowBuilder />
    </div>
  );
}

export default App;
