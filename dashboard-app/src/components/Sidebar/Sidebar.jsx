import "./Sidebar.css"; // path to css file
import React from "react"; // react import
import { navigationLinks } from "../../utils/navLinks";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Now left sidebar hide and unhide

const Sidebar = () => {
  const history = useNavigate();

  const [activeLinkIdx, setActiveLinkIdx] = useState(1);

  const handleLinkClick = (event, id, location) => {
    event.preventDefault();
    history(location);
    setActiveLinkIdx(id);
  };

  // useEffect(() => {})
  return (
    <div className="sidebar">
      <div className="user-info">
        <div className="info-img img-fit-cover">
          <img src="https://picsum.photos/200" alt="profile image" />
        </div>
        <span className="info-name">User 1</span>
      </div>
      <nav className="navigation">
        <ul className="nav-list">
          {navigationLinks.map((navigationLink) => (
            <li className="nav-item" key={navigationLink.id}>
              <a
                href={navigationLink.link}
                className={`nav-link ${
                  navigationLink.id === activeLinkIdx ? "active" : ""
                }`}
                onClick={(event) =>
                  handleLinkClick(event, navigationLink.id, navigationLink.link)
                }
              >
                <img
                  src={navigationLink.image}
                  className="nav-link-icon"
                  alt={navigationLink.title}
                />
                <span className="nav-link-text">{navigationLink.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
