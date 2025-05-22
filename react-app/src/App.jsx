import React, { useState } from 'react';
import Form from './components/Form';
import Display from './components/Display';

function App() {
  const [messages, setMessages] = useState([]);

  // Funkce pro zpracování odeslaného textu z Form.jsx
  const handleFormSubmit = (text) => {
 if (text.trim() !== '') {
      setMessages([text, ...messages]);
    }
  };


const handleDelete = (idx) => {
    setMessages(messages.filter((_, i) => i !== idx));
  };


  return (
    <div>
      <Display messages={messages} onDelete={handleDelete} />
      <Form onSubmit={handleFormSubmit} />
    </div>
  );
}

export default App;
