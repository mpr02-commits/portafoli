import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <Link to="/">Inicio</Link>
      <Link to="/projects">Proyectos</Link>
      <Link to="/contact">Contacto</Link>
      <Link to="/newsletter">Newsletter</Link>
    </nav>
  );
}