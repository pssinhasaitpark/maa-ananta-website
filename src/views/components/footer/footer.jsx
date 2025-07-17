import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaYoutube,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log("Subscribed with email:", email);
    setIsSubscribed(true);
  };

  return (
    <div className="container px-0">
      <div className="row mx-0" style={{ backgroundColor: "#6A1706" }}>
        <div className="col-12 py-4 text-center">
          <h2
            className="text-white mb-3"
            style={{ fontSize: "2rem", fontWeight: "400" }}
          >
            Subscribe to Our Newsletter
          </h2>
          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-8">
              <form onSubmit={handleSubscribe}>
                <div className="input-group">
                  <input
                    type="email"
                    className="form-control no-focus-outline text-light rounded-0"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{
                      backgroundColor: "rgba(255,255,255,0.1)",
                      border: "2px solid rgba(255,255,255,0.3)",
                      fontSize: "1rem",
                      outline: "none",
                      boxShadow: "none",
                    }}
                    required
                  />
                  <button
                    className="btn fw-bolder btn-light px-4 no-focus-outline border-0 rounded-0 fw-bolder bg-light outline-0"
                    type="submit"
                    style={{
                      color: "#8B4513",

                      padding: "12px 24px",
                      fontSize: "1.3rem",

                      boxShadow: "none",
                    }}
                  >
                    Subscribe
                  </button>
                </div>
              </form>
              {isSubscribed && (
                <p className="text-white mt-2">Subscribed successfully!</p>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="row mx-0 bg-light py-3">
        <div className="col-12">
          <div className="d-flex  justify-content-between align-items-center flex-wrap border-bottom border-top py-3 border-black">
            <nav className="navbar navbar-expand-lg m-lg-0 mx-auto navbar-light p-0">
              <div className="navbar-nav d-sm-block d-lg-flex align-items-center ">
                <a
                  className="nav-link text-secondary px-2 "
                  href="#"
                  style={{ fontSize: "1rem" }}
                >
                  Home
                </a>
                <div className="vr mx-2 d-none d-lg-block" />
                <a
                  className="nav-link text-secondary px-2"
                  href="#"
                  style={{ fontSize: "1rem" }}
                >
                  Services
                </a>
                <div className="vr mx-2 d-none d-lg-block" />
                <a
                  className="nav-link text-secondary px-lg-2 px-0"
                  href="#"
                  style={{ fontSize: "1rem" }}
                >
                  Career and Research Opportunities
                </a>
                <div className="vr mx-2 d-none d-lg-block" />
                <Link
                  className="nav-link text-secondary px-lg-2 px-0"
                  to="/contact"
                  style={{ fontSize: "1rem" }}
                >
                  Contact Us
                </Link>
              </div>
            </nav>

            <div className="d-flex m-lg-0 mx-auto align-items-center">
              <span
                className="text-secondary me-3"
                style={{ fontSize: "1rem" }}
              >
                Follow Us:
              </span>
              <div className="d-flex">
                <a
                  href="#"
                  className="text-secondary mx-2"
                  style={{ fontSize: "1.4rem" }}
                >
                  <FaYoutube />
                </a>
                <a
                  href="#"
                  className="text-secondary mx-2"
                  style={{ fontSize: "1.4rem" }}
                >
                  <FaFacebookF />
                </a>
                <a
                  href="#"
                  className="text-secondary mx-2"
                  style={{ fontSize: "1.4rem" }}
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href="#"
                  className="text-secondary mx-2"
                  style={{ fontSize: "1.4rem" }}
                >
                  <FaInstagram />
                </a>
                <a
                  href="#"
                  className="text-secondary mx-2"
                  style={{ fontSize: "1.4rem" }}
                >
                  <FaTwitter />
                </a>
                <a
                  href="#"
                  className="text-secondary mx-2"
                  style={{ fontSize: "1.4rem" }}
                >
                  <FaWhatsapp />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row mx-0 border-bottom py-4 border-black">
        <div className="col-12 py-4 px-4">
          <div className="container">
            <p
              className="text-center mb-3"
              style={{
                fontSize: "1.1rem",
                lineHeight: "1.6",
                color: "#666",
                fontWeight: "400",
              }}
            >
              Maa Ananta Abyudaya Samjik Sewa Samiti (MAA) is a organization
              based in Indore, Madhya Pradesh, dedicated to the upliftment of
              tribal and rural communities in the Nimar and Malwa regions. It
              focuses on education, child welfare, vocational training,
              environmental conservation, and health awareness to promote
              holistic and sustainable development.
            </p>

            <hr
              className="my-3"
              style={{ width: "60%", margin: "0 auto", color: "#ddd" }}
            />

            <p
              className="text-center mb-0"
              style={{
                fontSize: "1.1rem",
                lineHeight: "1.6",
                color: "#666",
                fontWeight: "400",
              }}
            >
              Empowering communities through education, care, and sustainable
              development — one step at a time with MAA.
            </p>
          </div>
        </div>
      </div>

      <div className="row mx-0">
        <div className="col-12 py-2 px-4">
          <p
            className="text-start mb-0"
            style={{ color: "#999", fontSize: "0.9rem" }}
          >
            Maa Ananta Abyudaya Samjik Sewa Samiti (MAA) © 2025 | All Rights
            Reserved
          </p>
        </div>
      </div>

      <style jsx>{`
        .form-control::placeholder {
          color: rgba(255, 255, 255, 0.7) !important;
        }

        .form-control:focus {
          background-color: rgba(255, 255, 255, 0.1) !important;
          border-color: rgba(255, 255, 255, 0.5) !important;
          color: white !important;
          box-shadow: none !important;
          outline: none !important;
        }

        .nav-link:hover {
          color: #8b4513 !important;
        }

        a {
          text-decoration: none !important;
        }

        a:hover {
          color: #8b4513 !important;
        }

        /* More specific selectors for removing focus outline */
        .no-focus-outline:focus,
        .no-focus-outline:focus-visible,
        .form-control:focus,
        .form-control:focus-visible,
        .btn:focus,
        .btn:focus-visible {
          box-shadow: none !important;
          border-color: rgba(255, 255, 255, 0.3) !important;
          outline: none !important;
        }
      `}</style>
    </div>
  );
};

export default Footer;
