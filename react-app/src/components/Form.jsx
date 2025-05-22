import React, { useState } from 'react';

function Form({ onSubmit }) {
  const [value, setValue] = useState('');

  const handleChange = (e) => setValue(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(value);
    }
    setValue('');
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      style={{ 
        position: 'fixed', 
        bottom: 0, 
        left: 0, 
        width: '100%', 
        background: '#fff', 
        padding: '10px', 
        boxShadow: '0 -2px 8px rgba(0,0,0,0.05)' 
      }}
    >
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Napiš něco…"
        style={{ width: '70%', padding: '8px', fontSize: '16px' }}
      />
      <button type="submit" style={{ padding: '8px 16px', marginLeft: '8px' }}>
        Odeslat
      </button>
    </form>
  );
}

export default Form;