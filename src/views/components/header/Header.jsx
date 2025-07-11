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
import { Logo } from "../../../assets/index.js";
import "./Header.css"; // Assuming you have a CSS file for additional styles
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    {
      label: "SEWA",
      items: [
        "Home",
        "SEWA’s Services",
        "Career and Research Opportunities",
        "Contact Us",
      ],
    },
    {
      label: "ABOUT US",
      items: [
        "History",
        "SEWA’s 11 Questions",
        "SEWA's Structure",
        "FCRA Details",
      ],
    },
    {
      label: "PUBLICATIONS",
      items: [
        "Papers",
        "Ansuya – SEWA’s Newsletter",
        "Reports & Appeal",
        "Books",
        "Archives",
        "Blog",
      ],
    },
    { label: "GALLERY", items: ["Photo Gallery", "Audio and Video Library"] },
    {
      label: "MEMBERSHIP AND AFFILIATIONS",
      items: ["SEWA’s Membership", "SEWA’s Affiliations"],
    },
    {
      label: "STRUGGLE FOR VOICE, VISIBILITY AND VALIDITY",
      items: [
        "Four Pillars of SEWA",
        "SEWA’s Campaigns",
        "SEWA’s sister Organizations",
      ],
    },
  ];

  return (
    <>
      <header className="bg-white header-shadow ">
        <div className="container-fluid border shadow-sm">
          <nav className="navbar navbar-expand-lg navbar-light py-4">
            <div className="navbar-brand d-flex align-items-center me-auto">
              <div className="">
                <img
                  src={Logo}
                  alt="SEWA Logo"
                  className="img-fluid headerIcon"
                />
              </div>
            </div>
            <div className="d-none d-md-flex align-items-center">
              <span className="me-3 text-muted fs-5" >
                Follow Us:
              </span>
              <div className="d-flex gap-2 me-3">
                {[
                  FaYoutube,
                  FaFacebookF,
                  FaLinkedinIn,
                  FaInstagram,
                  FaTwitter,
                  FaWhatsapp,
                ].map((Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="text-decoration-none d-flex align-items-center justify-content-center social-icon text-muted rounded"
                    style={{
                      width: "30px",
                      height: "32px",
                      transition: "all 0.3s ease",
                    }}
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
              <div className="language-selector d-flex align-items-center px-4">
                <span
                  className=" me-1 "
                  style={{ fontSize: "1.2rem", color: "#333" }}
                >
                  EN
                </span>
                <FaChevronDown size={12} style={{ color: "#666" }} className="mx-1" />
              </div>
            </div>
           <button
  className={`btn btn-link border-0 p-0 ms-3 text-muted hamburger-btn`}
  type="button"
  onClick={toggleMenu}
>
  <span className="hamburger-icon " />
</button>

          </nav>
        </div>
        <div
          className={`${
            isMenuOpen ? "d-block" : "d-none"
          } bg-white border-top menu-shadow`}
        >
          <div className="w-100 d-flex container">
            <div className="row w-100">
              {navItems.map((section, sectionIndex) => (
                <div
                  key={sectionIndex}
                  className="col-lg-3 col-md-4 col-sm-6 py-4"
                >
                  <h5
                    className="text-uppercase  px-3 py-2 m-0 fw-bold"
                    style={{ color: "#6A1706" }}
                  >
                    {section.label}
                  </h5>
                  <ul className="list-unstyled">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="px-3 py-1">
                        <a
                          href="#"
                          className="text-decoration-none text-dark menu-item"
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
