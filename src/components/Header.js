import { Close, MenuOutlined } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <header className="header">
    <div className="menu-icons">
      <MenuOutlined className="menu"/>
    </div>
    <nav>
      <ul>
        <div className="closed">
          <Close className="close"/>
        </div>
        <li>
          <Link to="/">
            About
          </Link>
        </li>
        <li>
          <Link to="/">
            Experience
          </Link>
        </li>
        <li>
          <Link to="/">
            Projects
          </Link>
        </li>
        <li>
          <Link to="/">
            Contacts
          </Link>
        </li>
        <li>
          <Link to="/">
            Hire me
          </Link>
        </li>
      </ul>
    </nav>
  </header>
)

export default Header;