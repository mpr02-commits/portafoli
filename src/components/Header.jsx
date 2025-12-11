import { Link } from 'react-router-dom';
import { FaCode, FaUsers } from 'react-icons/fa';

function Header() {
  return (
    <header className='header'>
      <h1><FaCode /> DigitalEvolution S.A</h1>
      <p><FaUsers /> Portafolio profesional del equipo</p>
      <nav className='navbar'>
        <Link to='/'>Inicio</Link>
        <Link to='/projects'>Proyectos</Link>
        <Link to='/contact'>Contacto</Link>
        <Link to='/newsletter'>Newsletter</Link>
      </nav>
    </header>
  );
}

export default Header;
