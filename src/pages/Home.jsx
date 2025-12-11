import { useEffect, useState } from 'react';
import { FaReact, FaNodeJs, FaDatabase, FaRocket } from 'react-icons/fa';

function Home() {
  const [visits, setVisits] = useState(0);
  
  useEffect(() => {
    document.title = 'DigitalEvolution - Portafolio';
    setVisits(prev => prev + 1);
  }, []);
  
  return (
    <div className='page-container'>
      <h2> ¡Bienvenido a nuestro portafolio!</h2>
      <p>Somos <strong>DigitalEvolution S.A</strong>, un equipo de 4 desarrolladores especializados en soluciones web innovadoras.</p>
      
      <div style={{margin: '2rem 0'}}>
        <button onClick={() => setVisits(visits + 1)}>
          <FaRocket /> Visitas a esta página: {visits}
        </button>
        <p><small> Demostración de useState y useEffect</small></p>
      </div>
      
      <h3> Nuestro stack tecnológico:</h3>
      <div style={{display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1rem'}}>
        <div style={{background: '#61dafb20', padding: '1rem', borderRadius: '8px'}}>
          <FaReact /> React
        </div>
        <div style={{background: '#68a06320', padding: '1rem', borderRadius: '8px'}}>
          <FaNodeJs /> Node.js
        </div>
        <div style={{background: '#4db33d20', padding: '1rem', borderRadius: '8px'}}>
          <FaDatabase /> MongoDB
        </div>
      </div>
    </div>
  );
}

export default Home;
