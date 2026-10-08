import "./foundation.css";

export function Header() {
  return (
    <div id="header">
      <h2>
        <a href="#">Dev K.</a>
      </h2>
      <nav id="navbar">
        <a href="#profile">About</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </nav>
    </div>
  );
}

export default Header;
