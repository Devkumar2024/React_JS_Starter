import './foundation.css'
type FooterProps = {
  name : string;
}


export function Footer({name}:FooterProps) {
  const currentYear: number = new Date().getFullYear();
  return <div id="footer">
    <footer>&copy; Copyright {currentYear}, {name}. All rights reserved.</footer>
    <ul id="Links">
        <li><a href="https://www.linkedin.com/" target="blank">Linkedin</a></li>
        <li><a href="https://www.github.com/" target="blank">Github</a></li>
    </ul>
  </div>;
}

// export default Footer;
