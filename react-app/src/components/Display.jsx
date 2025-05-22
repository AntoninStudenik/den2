import React from 'react';
import './Display.css';

function Display({ messages, onDelete }) {
  return (
    <div>
      <h1>Tvé poznámky</h1>
      <ul style={{ listStyle: 'none', padding: 0,
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '16px'
      }}>
        {messages.map((msg, idx) => (
          <li
            key={idx}
            className="note-item"
            style={{
              marginBottom: '15px',
              background: '#DDDDDD',
              border: '1px solid #ccc',
              borderRadius: '10px',
              padding: '10px',
              boxShadow: '0 10px 20px rgba(100, 113, 255, 0.4)',
              maxWidth: '90vw',
              minWidth: '80px',
              wordBreak: 'break-word',
              verticalAlign: 'top'
            }}
          >
            <span style={{ wordBreak: 'break-word', whiteSpace: 'pre-wrap' }}>{msg}</span>
            <button
              className="delete-btn"
              style={{ marginLeft: '75%', verticalAlign: 'top' }}
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