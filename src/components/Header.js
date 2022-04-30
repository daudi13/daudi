import { Close, MenuOutlined } from "@material-ui/icons";
import React, {useState} from "react";
import { NavLink } from "react-router-dom";
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
          <NavLink to="/" onClick={handleMenu}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/Projects" onClick={handleMenu}>
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink to="/Contacts" onClick={handleMenu}>
            Contacts
          </NavLink>
        </li>
        <li className="green">  
          <a href="https://docs.google.com/document/d/1MsR-jqkGn9NEIxPS5ftDGdFUnQRi9t03gT0d9fXtyMU/edit?usp=sharing" target="_blank" rel="noreferrer">
            Hire me
          </a>
        </li>
      </ul>
    </nav>
  </header>)
}

export default Header;