import '../styles/Header.css';

function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">LinksCorp</div>
        <ul className="nav-links">
          <li><Link to={"/banktransfer"} className='Linkers'>Join Now</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
