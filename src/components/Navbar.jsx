import { Link } from 'react-router-dom';
import { useState } from 'react';

function Navbar() {
  const [active, setActive] = useState('home');

  return (
    <nav className='navbar'>
      <Link to='/' onClick={() => setActive('home')}>Inicio</Link>
      <Link to='/projects' onClick={() => setActive('projects')}>Proyectos</Link>
      <Link to='/contact' onClick={() => setActive('contact')}>Contacto</Link>
      <Link to='/newsletter' onClick={() => setActive('newsletter')}>Newsletter</Link>
    </nav>
  );
}

export default Navbar;
