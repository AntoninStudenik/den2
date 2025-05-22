import React from 'react';

function Display({ messages, onDelete }) {
  return (
    <div>
      <h1>Tvé poznámky</h1>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {messages.map((msg, idx) => (
          <li
            key={idx}
            style={{
              marginBottom: '16px',
              background: '#fff',
              border: '1px solid #ccc',
              borderRadius: '8px',
              padding: '10px',
              boxShadow: '0 10px 20px rgba(0,0,0,0.40)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              maxWidth: '400px'
            }}
          >
            <span>{msg}</span>
            <button
              style={{ marginLeft: '16px' }}
              onClick={() => onDelete(idx)}
            >
              Smazat
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Display;