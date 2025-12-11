import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className='navbar'>
      <Link to='/'>Inicio</Link>
      <Link to='/projects'>Proyectos</Link>
      <Link to='/contact'>Contacto</Link>
      <Link to='/newsletter'>Newsletter</Link>
    </nav>
  );
}

export default Navbar;
