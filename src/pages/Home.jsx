import { useEffect, useState } from 'react';

const Home = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = 'Portafolio DigitalEvolution';
  }, []);

  return (
    <div>
      <h2>Bienvenido a DigitalEvolution S.A</h2>
      <p>Somos un equipo de 4 desarrolladores especializados en soluciones web.</p>
      <button onClick={() => setCount(count + 1)}>Contador: {count}</button>
      <p> useState usado</p>
      <p> useEffect usado</p>
    </div>
  );
};

export default Home;
