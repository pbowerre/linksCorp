import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  return (
    <div className="header">
        <div className="logo">LinksCorp <sup>FinTech</sup></div>
        <div className="nav-links">
          <Link to={"/banktransfer"} className='Linkers'>Join us Now</Link>
        </div>
    </div>
  );
}

export default Header;
