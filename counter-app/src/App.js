import React, { useState, useEffect} from 'react';

function App() {
  const initialCount = parseInt(localStorage.getItem('count')) || 0;
  const [count, setCount] = useState(initialCount);
  useEffect(() => {
    localStorage.setItem('count', count);
  }, [count]);



  const increment = () => setCount(count + 1);
  const decrement = () => {
    if (count > 0){
      setCount(count - 1);
    }
  }
  return (
    <div className="App">
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default App;