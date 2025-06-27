import './Navbar.css';
import Logo from '../../assets/logo.png';
import { IoHome, IoCart, IoMail } from "react-icons/io5";
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar">
        <Link to="/" className="logo">
            <img className="logo-img" src={Logo} alt="Logo" />
            Meu site React
        </Link> 
        <ul className="nav-links">
          <li><Link to="/"><IoHome /> Início</Link></li>
          <li><Link to="/servicos"><IoCart /> Serviços</Link></li>
          <li><Link to="/contato"><IoMail /> Contato</Link></li>
        </ul>
        {/* mobile */}
        <ul className="nav-links-mobile">
          <li><Link to="/"><IoHome /> Início</Link></li>
          <li><Link to="/servicos"><IoCart /> Serviços</Link></li>
          <li><Link to="/contato"><IoMail /> Contato</Link></li>
        </ul>
      </nav> 
    );
}

export default Navbar;