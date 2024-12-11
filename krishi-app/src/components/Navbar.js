import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaHome, FaBook, FaTasks } from "react-icons/fa";
import { MdOutlineContactSupport } from "react-icons/md";
import { IoCall, IoLogIn } from "react-icons/io5";

const Navbar = () => {
  const chatbotLink =
    "https://mediafiles.botpress.cloud/5327ca0d-df4d-44af-89b5-56f14fc5397a/webchat/bot.html";
  const soilHealthLink = "https://soilhealth.dac.gov.in/home";
  const programsSchemesLink =
    "https://pib.gov.in/PressReleaseIframePage.aspx?PRID=2002012";

  const handleChatClick = (event) => {
    event.preventDefault();
    window.open(chatbotLink, "_blank");
  };
  const handleSoilHealthClick = (event) => {
    event.preventDefault();
    window.open(soilHealthLink, "_blank");
  };
  const handleProgramsSchemesClick = (event) => {
    event.preventDefault();
    window.open(programsSchemesLink, "_blank");
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="brand">
          <Link to="/" className="website-name">
            KRUSHI PLANNER
          </Link>
        </div>

        <div className="nav-links">
          <Link to="/">
            <FaHome />
            Home
          </Link>
          <Link to="/about">
            <MdOutlineContactSupport />
            About Us
          </Link>
          <a href={programsSchemesLink} onClick={handleProgramsSchemesClick}>
            <FaBook />
            Programmes & Schemes
          </a>
          <Link to="/contact">
            <IoCall />
            Contact
          </Link>
          <Link to="/login">
            <IoLogIn />
            Login
          </Link>
          <Link to="/register">
            <IoLogIn />
            Register
          </Link>
          <Link to="/ecommerce">
            <IoLogIn />
            Ecommerce
          </Link>
        
          <div className="dropdown">
            <button className="dropbtn">
              <FaTasks />
              Tasks
            </button>
            <div className="dropdown-content">
              <Link to="/crops">Crops</Link>
              <Link to="/tools">Tools</Link>
              <a href={chatbotLink} onClick={handleChatClick}>
                Chatbot
              </a>
              <a href={soilHealthLink} onClick={handleSoilHealthClick}>
                Soil Health
              </a>
              <a
                href="http://127.0.0.1:5000"
                target="_blank"
                rel="noopener noreferrer"
              >
                Crop Recommendation
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
