// src/components/Counter.jsx

import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div
      style={{
        border: '1px solid gray',
        padding: '15px',
        margin: '15px',
        borderRadius: '8px',
        textAlign: 'center',
        width: '200px'
      }}
    >
      <p style={{ fontSize: '18px', marginBottom: '10px' }}>
        Current Count: {count}
      </p>

      <button
        onClick={() => setCount(count + 1)}
        style={{ margin: '5px', padding: '5px 10px' }}
      >
        Increment
      </button>

      <button
        onClick={() => setCount(count - 1)}
        style={{ margin: '5px', padding: '5px 10px' }}
      >
        Decrement
      </button>

      <button
        onClick={() => setCount(0)}
        style={{ margin: '5px', padding: '5px 10px' }}
      >
        Reset
      </button>
    </div>
  );
}

export default Counter;
