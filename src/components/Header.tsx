import '../styles/Header.css';

function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">LinksCorp</div>
        <ul className="nav-links">
          <li><a href="#product">Join Now</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
