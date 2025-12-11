import { Link } from 'react-router-dom';
import { FaCode, FaUsers, FaHome, FaProjectDiagram, FaEnvelope, FaNewspaper } from 'react-icons/fa';

function Header() {
  return (
    <header className='header' style={{position: 'relative', overflow: 'hidden'}}>
      {/* Fondo con imagen */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(rgba(26, 35, 126, 0.9), rgba(40, 53, 147, 0.9)), url(https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        zIndex: 1
      }}></div>
      
      <div style={{position: 'relative', zIndex: 2, textAlign: 'center'}}>
        {/* Logo/icono grande */}
        <div style={{
          fontSize: '4rem',
          color: 'white',
          marginBottom: '1rem',
          display: 'inline-block',
          background: 'rgba(255,255,255,0.2)',
          width: '120px',
          height: '120px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto'
        }}>
          <FaCode />
        </div>
        
        <h1 style={{fontSize: '3.5rem', marginBottom: '0.5rem', textShadow: '2px 2px 8px rgba(0,0,0,0.5)'}}>
          DigitalEvolution S.A
        </h1>
        <p style={{fontSize: '1.4rem', opacity: 0.95, marginBottom: '2rem'}}>
          <FaUsers /> Soluciones Web Innovadoras
        </p>
        
        <nav className='navbar'>
          <Link to='/'><FaHome /> Inicio</Link>
          <Link to='/projects'><FaProjectDiagram /> Proyectos</Link>
          <Link to='/contact'><FaEnvelope /> Contacto</Link>
          <Link to='/newsletter'><FaNewspaper /> Newsletter</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
