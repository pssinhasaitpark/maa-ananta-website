import React, { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Here you can add logic to send the email to your backend or email service
    console.log("Subscribed with email:", email);
    setIsSubscribed(true);
  };

  return (
    <div className="container px-0">
      {/* Newsletter Subscription Section */}
      <div className="row mx-0" style={{ backgroundColor: "#6A1706" }}>
        <div className="col-12 py-4 text-center">
          <h2
            className="text-white mb-3"
            style={{ fontSize: "2rem", fontWeight: "400" }}
          >
            Subscribe to Our Newsletter
          </h2>
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-4">
              <form onSubmit={handleSubscribe}>
                <div className="input-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{
                      backgroundColor: "rgba(255,255,255,0.1)",
                      border: "2px solid rgba(255,255,255,0.3)",
                      color: "white",
                      borderRadius: "0",
                      padding: "12px 16px",
                      fontSize: "1rem",
                    }}
                    required
                  />
                  <button
                    className="btn btn-light px-4"
                    type="submit"
                    style={{
                      backgroundColor: "white",
                      color: "#8B4513",
                      border: "none",
                      borderRadius: "0",
                      fontWeight: "500",
                      padding: "12px 24px",
                      fontSize: "1rem",
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

      {/* Navigation and Social Media Section */}
      <div className="row mx-0 bg-light py-3">
        <div className="col-12">
          <div className="d-flex justify-content-between align-items-center flex-wrap border-bottom border-top py-3 border-black">
            {/* Navigation Menu */}
            <nav className="navbar navbar-expand-lg navbar-light p-0">
              <div className="navbar-nav d-flex flex-row align-items-center">
                <a
                  className="nav-link text-secondary px-2"
                  href="#"
                  style={{ fontSize: "1rem" }}
                >
                  Home
                </a>
                <div className="vr mx-2" />
                <a
                  className="nav-link text-secondary px-2"
                  href="#"
                  style={{ fontSize: "1rem" }}
                >
                  Services
                </a>
                <div className="vr mx-2" />
                <a
                  className="nav-link text-secondary px-2"
                  href="#"
                  style={{ fontSize: "1rem" }}
                >
                  Career and Research Opportunities
                </a>
                <div className="vr mx-2" />
                <a
                  className="nav-link text-secondary px-2"
                  href="/contact"
                  style={{ fontSize: "1rem" }}
                >
                  Contact Us
                </a>
              </div>
            </nav>

            {/* Social Media Icons */}
            <div className="d-flex align-items-center">
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
                  style={{ fontSize: "1.2rem" }}
                >
                  <i className="fab fa-youtube"></i>
                </a>
                <a
                  href="#"
                  className="text-secondary mx-2"
                  style={{ fontSize: "1.2rem" }}
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="#"
                  className="text-secondary mx-2"
                  style={{ fontSize: "1.2rem" }}
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a
                  href="#"
                  className="text-secondary mx-2"
                  style={{ fontSize: "1.2rem" }}
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="#"
                  className="text-secondary mx-1"
                  style={{ fontSize: "1.2rem" }}
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="#"
                  className="text-secondary mx-2"
                  style={{ fontSize: "1.2rem" }}
                >
                  <i className="fab fa-whatsapp"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
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

      {/* Footer */}
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

      {/* Font Awesome CSS for icons */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
      />

      {/* Bootstrap CSS */}
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css"
        rel="stylesheet"
      />

      <style jsx>{`
        .form-control::placeholder {
          color: rgba(255, 255, 255, 0.7) !important;
        }

        .form-control:focus {
          background-color: rgba(255, 255, 255, 0.1) !important;
          border-color: rgba(255, 255, 255, 0.5) !important;
          color: white !important;
          box-shadow: none !important;
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
      `}</style>
    </div>
  );
};

export default Footer;
