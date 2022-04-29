import { Close, MenuOutlined } from "@material-ui/icons";
import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./Header.css"

const Header = () => {
  const [active, setActive] = useState(false);

  const handleMenu = () => {
    setActive(prevState => prevState ? false : true)
}
  
  return(<header className="header">
    <div className="menu-icons">
      <MenuOutlined className="menu" onClick={handleMenu}/>
    </div>
    <nav className={active ? 'active slider' : 'slider'}>
      <ul>
        <div className="closed">
          <Close className="close" onClick={handleMenu}/>
        </div>
        <li>
          <Link to="/">
            About
          </Link>
        </li>
        <li>
          <Link to="/Projects">
            Projects
          </Link>
        </li>
        <li>
          <Link to="/Contacts">
            Contacts
          </Link>
        </li>
        <li className="green">  
          <Link to="./https://www.google.com/">
            Hire me
          </Link>
        </li>
      </ul>
    </nav>
  </header>)
}

export default Header;