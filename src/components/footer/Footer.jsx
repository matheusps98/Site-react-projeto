import './Footer.css';
import { IoHeart, IoLogoGithub } from 'react-icons/io5';

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Desenvolvido com <IoHeart className="heart" /> <br /> Por <a href="https://github.com/matheusps98" target="_blank" rel="noopener noreferrer"><IoLogoGithub className="github" />Matheus Silva</a></p>
    </footer>
  );
}

export default Footer;
