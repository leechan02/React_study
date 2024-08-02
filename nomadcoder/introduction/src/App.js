import React, { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);
  const onClick = () => setCounter(counter + 1);
  console.log('render');
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onClick}>Add 1</button>
    </div>
  );
}

export default App;
