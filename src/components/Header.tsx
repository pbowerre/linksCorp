import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  return (
    <header className="header">
        <div className="logo">LinksCorp <sup>Trading Firm</sup></div>
        <ul className="nav-links">
          <li><Link to={"/banktransfer"} className='Linkers'>Join Now</Link></li>
        </ul>
    </header>
  );
}

export default Header;
