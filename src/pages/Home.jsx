import { useEffect, useState } from 'react';

function Home() {
  const [count, setCount] = useState(0);
  useEffect(() => { document.title = 'Portafolio'; }, []);
  
  return (
    <div>
      <h1>DigitalEvolution S.A</h1>
      <p>Contador: {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
}

export default Home;
