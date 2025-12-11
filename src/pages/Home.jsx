import { useEffect, useState } from 'react';
import { FaReact, FaNodeJs, FaDatabase, FaRocket, FaLaptopCode, FaServer, FaPalette } from 'react-icons/fa';

function Home() {
  const [visits, setVisits] = useState(0);
  
  useEffect(() => {
    document.title = 'DigitalEvolution - Portafolio';
    setVisits(prev => prev + 1);
  }, []);
  
  const teamMembers = [
    { 
      id: 1, 
      name: 'Manu P.', 
      role: 'Full Stack Dev', 
      icon: <FaLaptopCode />, 
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80' 
    },
    { 
      id: 2, 
      name: 'Carlos M.', 
      role: 'Backend Specialist', 
      icon: <FaServer />, 
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616c113a1c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80' 
    },
    { 
      id: 3, 
      name: 'Ana R.', 
      role: 'Frontend Expert', 
      icon: <FaReact />, 
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80' 
    },
    { 
      id: 4, 
      name: 'Laura T.', 
      role: 'UI/UX Designer', 
      icon: <FaPalette />, 
      avatar: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80' 
    }
  ];
  
  return (
    <div className='page-container'>
      <h2> ¡Bienvenido a DigitalEvolution!</h2>
      <p>Somos un equipo de <strong>4 desarrolladores especializados</strong> en crear soluciones web innovadoras para empresas y startups.</p>
      
      {/* CONTADOR */}
      <div style={{margin: '2rem 0', textAlign: 'center'}}>
        <button onClick={() => setVisits(visits + 1)} style={{fontSize: '1.2rem'}}>
          <FaRocket /> Visitas a esta página: <strong>{visits}</strong>
        </button>
        <p><small> Demostración de useState y useEffect en React</small></p>
      </div>
      
      {/* EQUIPO */}
      <h3> Nuestro Equipo</h3>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', margin: '2rem 0'}}>
        {teamMembers.map(member => (
          <div key={member.id} className='team-card' style={{flexDirection: 'column', textAlign: 'center'}}>
            <div className='team-avatar' style={{
              backgroundImage: 'url(' + member.avatar + ')',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}>
              {/* Avatar con imagen */}
            </div>
            <div className='team-info'>
              <h3>{member.name}</h3>
              <p style={{color: '#666'}}>{member.role}</p>
              <p style={{fontSize: '0.9rem', marginTop: '0.5rem'}}>
                Especialista en {member.role.includes('Frontend') ? 'React' : member.role.includes('Backend') ? 'Node.js' : 'soluciones completas'}
              </p>
            </div>
          </div>
        ))}
      </div>
      
      {/* TECNOLOGÍAS */}
      <h3> Tecnologías que dominamos</h3>
      <div style={{display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1rem', justifyContent: 'center'}}>
        <div style={{background: 'linear-gradient(135deg, #61dafb 0%, #21a1f1 100%)', color: 'white', padding: '1.5rem 2rem', borderRadius: '10px', fontSize: '1.2rem'}}>
          <FaReact style={{marginRight: '10px'}} /> React
        </div>
        <div style={{background: 'linear-gradient(135deg, #68a063 0%, #3c7e34 100%)', color: 'white', padding: '1.5rem 2rem', borderRadius: '10px', fontSize: '1.2rem'}}>
          <FaNodeJs style={{marginRight: '10px'}} /> Node.js
        </div>
        <div style={{background: 'linear-gradient(135deg, #4db33d 0%, #2d8623 100%)', color: 'white', padding: '1.5rem 2rem', borderRadius: '10px', fontSize: '1.2rem'}}>
          <FaDatabase style={{marginRight: '10px'}} /> MongoDB
        </div>
      </div>
      
      {/* CTA */}
      <div style={{marginTop: '3rem', textAlign: 'center', padding: '2rem', background: '#f8f9fa', borderRadius: '10px'}}>
        <h3> ¿Tienes un proyecto en mente?</h3>
        <p>Contáctanos y hagámoslo realidad juntos.</p>
        <a href='/contact' style={{display: 'inline-block', marginTop: '1rem'}}>
          <button style={{fontSize: '1.2rem', padding: '1rem 2rem'}}>
            Hablar con nuestro equipo
          </button>
        </a>
      </div>
    </div>
  );
}

export default Home;
