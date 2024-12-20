import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ComponentsA.css";
import Logo from "../Assets/SchLogo.png";

const NavBar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false); // Track hamburger menu visibility

  const menuItems = [
    {
      name: "About",
      submenu: [
        { name: "Why Choose Zeari", link: "/WChooseZ" },
        { name: "History", link: "/History" },
        { name: "Our Mission", link: "/mission" },
      ],
    },
    {
      name: "Admission",
      submenu: [
        { name: "Web Development", link: "/web-dev" },
        { name: "SEO", link: "/seo" },
        { name: "Marketing", link: "/marketing" },
      ],
    },
    { name: "News Events", link: "/NewsArchive" },
  ];

  const toggleSubmenu = (index) => {
    setActiveMenu(activeMenu === index ? null : index);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setActiveMenu(null); // Close any open submenus when toggling the main menu
  };

  return (
    <nav className="navbar">
      <div className="navBarLogo">
        <Link to="/">
          <img src={Logo} alt="School Logo" />
        </Link>
      </div>
      {/* Hamburger Button */}
      <div className="hamburger" onClick={toggleMenu}>
        {!menuOpen ? (
          <>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </>
        ) : (
          <span className="cancel-icon">✖</span>
        )}
      </div>
      {/* Menu */}
      <ul className={`menu ${menuOpen ? "open" : ""}`}>
        {menuItems.map((item, index) => (
          <li key={index} className="menu-item">
            {item.submenu ? (
              <span
                className="menu-link"
                onClick={() => toggleSubmenu(index)}
              >
                {item.name}
              </span>
            ) : (
              <Link
                to={item.link}
                className="menu-link"
                onClick={() => setMenuOpen(false)} // Close menu when a link is clicked
              >
                {item.name}
              </Link>
            )}

            {/* Submenu */}
            {item.submenu && (
              <ul
                className={`submenu ${activeMenu === index ? "show" : ""}`}
              >
                {item.submenu.map((subItem, subIndex) => (
                  <li key={subIndex} className="submenu-item">
                    <Link
                      to={subItem.link}
                      className="submenu-link"
                      onClick={() => setMenuOpen(false)} // Close menu on submenu click
                    >
                      {subItem.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;

