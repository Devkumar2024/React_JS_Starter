import "./foundation.css";
type HeaderProps = {
  name : string;
}

export function Header({name}: HeaderProps) {
  return (
    <div id="header">
      <h2>
        <a href="#">{name}</a>
      </h2>
      <nav id="navbar">
        <a href="#profile">About</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </nav>
    </div>
  );
}

// export default Header;
