import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaYoutube,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp,
  FaChevronDown,
} from "react-icons/fa";
import { Logo } from "../../../assets";
import "./Header.css";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { label: "Education", href: "#education", current: true },
    { label: "Children's Home", href: "#childrens-home", current: true },
    { label: "Training Farmers", href: "#training-farmers", current: true },
    { label: "Preservation of Local Culture", href: "#culture", current: true },
    { label: "Environmental Protection", href: "#environment", current: true },
    { label: "Research on Environment", href: "#research", current: true },
    { label: "Health Care", href: "#healthcare", current: true },
    { label: "About Us", href: "#about", current: false },
    { label: "Contact", href: "#contact", current: false },
  ];

  return (
    <>
      {/* Add Bootstrap CSS */}
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
        rel="stylesheet"
      />

      <header
        style={{
          backgroundColor: "#fff",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        }}
      >
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg navbar-light py-2">
            {/* Logo Section */}
            <div className="navbar-brand d-flex align-items-center me-auto ps-5">
              <img src={Logo} className="headerIcon" alt="" />
            </div>

            {/* Right side - Social Media and Language (Desktop) */}
            <div className="d-none d-md-flex align-items-center">
              <span
                className="me-3"
                style={{ fontSize: "0.9rem", color: "#666" }}
              >
                Follow Us :
              </span>
              <div className="d-flex gap-2 me-3">
                <a
                  href="#"
                  className="text-decoration-none d-flex align-items-center justify-content-center"
                  style={{
                    color: "#666",
                    width: "32px",
                    height: "32px",
                    borderRadius: "4px",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = "#8B4513";
                    e.target.style.backgroundColor = "#f5f5f5";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = "#666";
                    e.target.style.backgroundColor = "transparent";
                  }}
                >
                  <FaYoutube size={16} />
                </a>
                <a
                  href="#"
                  className="text-decoration-none d-flex align-items-center justify-content-center"
                  style={{
                    color: "#666",
                    width: "32px",
                    height: "32px",
                    borderRadius: "4px",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = "#8B4513";
                    e.target.style.backgroundColor = "#f5f5f5";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = "#666";
                    e.target.style.backgroundColor = "transparent";
                  }}
                >
                  <FaFacebookF size={16} />
                </a>
                <a
                  href="#"
                  className="text-decoration-none d-flex align-items-center justify-content-center"
                  style={{
                    color: "#666",
                    width: "32px",
                    height: "32px",
                    borderRadius: "4px",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = "#8B4513";
                    e.target.style.backgroundColor = "#f5f5f5";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = "#666";
                    e.target.style.backgroundColor = "transparent";
                  }}
                >
                  <FaLinkedinIn size={16} />
                </a>
                <a
                  href="#"
                  className="text-decoration-none d-flex align-items-center justify-content-center"
                  style={{
                    color: "#666",
                    width: "32px",
                    height: "32px",
                    borderRadius: "4px",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = "#8B4513";
                    e.target.style.backgroundColor = "#f5f5f5";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = "#666";
                    e.target.style.backgroundColor = "transparent";
                  }}
                >
                  <FaInstagram size={16} />
                </a>
                <a
                  href="#"
                  className="text-decoration-none d-flex align-items-center justify-content-center"
                  style={{
                    color: "#666",
                    width: "32px",
                    height: "32px",
                    borderRadius: "4px",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = "#8B4513";
                    e.target.style.backgroundColor = "#f5f5f5";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = "#666";
                    e.target.style.backgroundColor = "transparent";
                  }}
                >
                  <FaTwitter size={16} />
                </a>
                <a
                  href="#"
                  className="text-decoration-none d-flex align-items-center justify-content-center"
                  style={{
                    color: "#666",
                    width: "32px",
                    height: "32px",
                    borderRadius: "4px",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = "#8B4513";
                    e.target.style.backgroundColor = "#f5f5f5";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = "#666";
                    e.target.style.backgroundColor = "transparent";
                  }}
                >
                  <FaWhatsapp size={16} />
                </a>
              </div>
              <div className="d-flex align-items-center">
                <span
                  className="fw-bold me-1"
                  style={{
                    fontSize: "0.9rem",
                    color: "#333",
                  }}
                >
                  EN
                </span>
                <FaChevronDown size={12} style={{ color: "#666" }} />
              </div>
            </div>

            <button
              className="border-0 p-0 ms-3 bg-transparent"
              type="button"
              onClick={toggleMenu}
              style={{
                fontSize: "1.5rem",
                color: "#666",
                display: "block", // force show always
              }}
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </nav>
        </div>

        {/* Menu - Shows on all screens */}
        <div
          className={`${isMenuOpen ? "d-block" : "d-none"}`}
          style={{
            backgroundColor: "#fff",
            borderTop: "1px solid #e0e0e0",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          }}
        >
          <div className="container-fluid py-3">
            <div className="row">
              <div className="col-12">
                {navItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="d-block text-decoration-none py-3 px-3 border-bottom"
                    style={{
                      color: item.current ? "#8B4513" : "#333",
                      fontWeight: item.current ? "600" : "400",
                      fontSize: "1rem",
                      borderBottomColor: "#f0f0f0 !important",
                      transition: "all 0.3s ease",
                    }}
                    onClick={() => setIsMenuOpen(false)}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = "#f8f9fa";
                      e.target.style.color = "#8B4513";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = "transparent";
                      e.target.style.color = item.current ? "#8B4513" : "#333";
                    }}
                  >
                    {item.label}
                    {item.current && (
                      <span
                        className="ms-2"
                        style={{ fontSize: "0.8rem", color: "#666" }}
                      >
                        (current)
                      </span>
                    )}
                  </a>
                ))}

                {/* Mobile Social Media */}
                <div className="mt-4 pt-3 border-top">
                  <p
                    className="mb-3 fw-bold"
                    style={{ fontSize: "0.9rem", color: "#333" }}
                  >
                    Follow Us :
                  </p>
                  <div className="d-flex gap-3 mb-3">
                    <a
                      href="#"
                      className="text-decoration-none"
                      style={{ color: "#666" }}
                    >
                      <FaYoutube size={24} />
                    </a>
                    <a
                      href="#"
                      className="text-decoration-none"
                      style={{ color: "#666" }}
                    >
                      <FaFacebookF size={24} />
                    </a>
                    <a
                      href="#"
                      className="text-decoration-none"
                      style={{ color: "#666" }}
                    >
                      <FaLinkedinIn size={24} />
                    </a>
                    <a
                      href="#"
                      className="text-decoration-none"
                      style={{ color: "#666" }}
                    >
                      <FaInstagram size={24} />
                    </a>
                    <a
                      href="#"
                      className="text-decoration-none"
                      style={{ color: "#666" }}
                    >
                      <FaTwitter size={24} />
                    </a>
                    <a
                      href="#"
                      className="text-decoration-none"
                      style={{ color: "#666" }}
                    >
                      <FaWhatsapp size={24} />
                    </a>
                  </div>
                  <div className="d-flex align-items-center">
                    <span
                      className="fw-bold me-2"
                      style={{
                        fontSize: "0.9rem",
                        color: "#333",
                      }}
                    >
                      Language: EN
                    </span>
                    <FaChevronDown size={12} style={{ color: "#666" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Add Bootstrap JS */}
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    </>
  );
};

export default Header;
