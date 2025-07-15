import React, { useState } from "react";
import { Button, Form, Row, Col, Container, InputGroup } from "react-bootstrap";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaHome,
  FaUser,
  FaBuilding,
  FaComment,
} from "react-icons/fa";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ContactForm.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    mobile: "",
    message: "",
    recaptcha: false,
  });

  const iconContainerStyles = {
    width: "50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f5f5f5",
    border: "1px solid #ccc",
    borderRadius: "4px 0 0 4px",
  };

  const focusedIconStyles = {
    ...iconContainerStyles,
    border: "2px solid #8B4513",
    borderRight: "none",
    backgroundColor: "#fff",
  };

  const inputStyles = {
    flex: 1,
    border: "1px solid #ccc",
    borderLeft: "none",
    borderRadius: "0 4px 4px 0",
    paddingLeft: "10px",
  };

  const focusedInputStyles = {
    ...inputStyles,
    border: "2px solid #8B4513",
    borderLeft: "none",
    outline: "none",
  };

  const [focusedField, setFocusedField] = useState(null);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <>
      <Header />
      <div className="min-vh-100">
        {/* Artistic Banner */}
        <div
          className="position-relative"
          style={{ height: "400px", overflow: "hidden" }}
        >
          {/* Artistic Background */}
          <div
            className="w-100 h-100 position-absolute"
            style={{
              background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
            }}
          >
            <svg
              className="position-absolute w-100 h-100"
              viewBox="0 0 1200 400"
              preserveAspectRatio="xMidYMid slice"
              style={{ opacity: 0.3 }}
            >
              {/* SVG Paths */}
              <path
                d="M0,200 Q150,100 300,150 T600,120 T900,180 T1200,140"
                stroke="#8B4513"
                strokeWidth="3"
                fill="none"
              />
              <path
                d="M0,250 Q200,150 400,200 T800,170 T1200,190"
                stroke="#A0522D"
                strokeWidth="2"
                fill="none"
              />
              <path
                d="M0,180 Q180,80 360,130 T720,110 T1200,160"
                stroke="#CD853F"
                strokeWidth="2"
                fill="none"
              />
              <path
                d="M0,320 Q250,220 500,270 T1000,240 T1200,280"
                stroke="#D2691E"
                strokeWidth="3"
                fill="none"
              />
              <path
                d="M0,280 Q300,180 600,230 T1200,210"
                stroke="#8B4513"
                strokeWidth="2"
                fill="none"
              />
              <path
                d="M0,160 Q120,60 240,110 T480,90 T720,130 T960,100 T1200,120"
                stroke="#A0522D"
                strokeWidth="1.5"
                fill="none"
              />
              <path
                d="M0,300 Q100,200 200,250 T400,230 T600,270 T800,250 T1000,290 T1200,270"
                stroke="#CD853F"
                strokeWidth="1.5"
                fill="none"
              />
            </svg>
          </div>
          {/* Logo Circle */}
          <div className="position-absolute top-50 start-50 translate-middle">
            <div
              className="d-flex align-items-center justify-content-center bg-white rounded-circle shadow-lg"
              style={{
                width: "120px",
                height: "120px",
                border: "4px solid #8B4513",
              }}
            >
              <div
                className="rounded-circle d-flex align-items-center justify-content-center"
                style={{
                  width: "60px",
                  height: "60px",
                  backgroundColor: "#8B4513",
                }}
              >
                <div
                  className="rounded-circle bg-white"
                  style={{ width: "25px", height: "25px" }}
                />
              </div>
            </div>
          </div>
          {/* Hindi Title */}
          <div
            className="position-absolute top-50 start-50 translate-middle text-center"
            style={{ marginTop: "120px" }}
          >
            <h1
              className="fw-bold mb-2"
              style={{
                fontSize: "2.5rem",
                fontFamily: "serif",
                textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
                color: "#8B4513",
              }}
            >
              माँ अनंता अभ्युदय सामाजिक सेवा समिति (माँ)
            </h1>
          </div>
          {/* Breadcrumb */}
          <div className="position-absolute bottom-0 start-0 mb-3 ms-3">
            <div className="bg-white rounded shadow p-2 d-flex align-items-center justify-content-start">
              <FaHome size={16} className="me-1" style={{ color: "#8B4513" }} />
              <span className="mx-2" style={{ color: "#8B4513" }}>
                |
              </span>
              <span style={{ color: "#8B4513" }}>Contact Us</span>
            </div>
          </div>
        </div>
        {/* Contact Section */}
        <div className="py-5 bg-light text-dark">
          <Container>
            <h2
              className="text-center mb-5 display-5 fw-bold"
              style={{ color: "#8B4513" }}
            >
              GET IN TOUCH
            </h2>
            <Row className="justify-content-center">
              <Col lg={11}>
                <div className="bg-white rounded shadow p-4 p-md-5">
                  <Row className="gx-5">
                    {/* Left Info */}
                    <Col lg={5} className="mb-4">
                      <div
                        className="p-4 text-white rounded"
                        style={{ backgroundColor: "#8B4513", height: "100%" }}
                      >
                        <h3 className="fw-bold mb-4">MAA</h3>
                        <div className="d-flex mb-3">
                          <FaMapMarkerAlt className="me-3 mt-1" />
                          <div>
                            <p className="mb-1">
                              SHRI CHATURBUJ SHREE RAM MANDIR MANADV
                            </p>
                            <p className="mb-1">
                              Tehsil – NALCHA, Dist – DHAR
                              <br />
                              PIN - 451 221, Madhya Pradesh, India
                            </p>
                          </div>
                        </div>
                        <div className="d-flex mb-3">
                          <FaPhone className="me-3 mt-1" />
                          <div>
                            <p className="mb-1">+91 9893200011</p>
                            <p className="mb-1">+91 9424032111</p>
                          </div>
                        </div>
                        <div className="d-flex">
                          <FaEnvelope className="me-3 mt-1" />
                          <p className="mb-0">maa.anantamandu@gmail.com</p>
                        </div>
                      </div>
                    </Col>

                    {/* Right Form */}
                    <Col lg={7}>
                      <Form onSubmit={handleSubmit}>
                        <Row className="mb-4">
                          <Col md={6} className="mb-3">
                            <div className="d-flex" style={{ height: "56px" }}>
                              <div
                                style={
                                  focusedField === "name"
                                    ? focusedIconStyles
                                    : iconContainerStyles
                                }
                              >
                                <FaUser
                                  size={18}
                                  style={{ color: "#8B4513" }}
                                />
                              </div>
                              <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                onFocus={() => setFocusedField("name")}
                                onBlur={() => setFocusedField(null)}
                                placeholder="Enter your full name *"
                                style={
                                  focusedField === "name"
                                    ? focusedInputStyles
                                    : inputStyles
                                }
                                required
                              />
                            </div>
                          </Col>
                          <Col md={6}>
                            <div className="d-flex" style={{ height: "56px" }}>
                              <div
                                style={
                                  focusedField === "organization"
                                    ? focusedIconStyles
                                    : iconContainerStyles
                                }
                              >
                                <FaBuilding
                                  size={18}
                                  style={{ color: "#8B4513" }}
                                />
                              </div>
                              <input
                                type="text"
                                name="organization"
                                value={formData.organization}
                                onChange={handleInputChange}
                                onFocus={() => setFocusedField("organization")}
                                onBlur={() => setFocusedField(null)}
                                placeholder="Enter organization name"
                                style={
                                  focusedField === "organization"
                                    ? focusedInputStyles
                                    : inputStyles
                                }
                              />
                            </div>
                          </Col>
                        </Row>

                        <Row className="mb-4">
                          <Col md={6} className="mb-3">
                            <div className="d-flex" style={{ height: "56px" }}>
                              <div
                                style={
                                  focusedField === "email"
                                    ? focusedIconStyles
                                    : iconContainerStyles
                                }
                              >
                                <FaEnvelope
                                  size={18}
                                  style={{ color: "#8B4513" }}
                                />
                              </div>
                              <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                onFocus={() => setFocusedField("email")}
                                onBlur={() => setFocusedField(null)}
                                placeholder="Enter your email *"
                                style={
                                  focusedField === "email"
                                    ? focusedInputStyles
                                    : inputStyles
                                }
                                required
                              />
                            </div>
                          </Col>
                          <Col md={6}>
                            <div className="d-flex" style={{ height: "56px" }}>
                              <div
                                style={
                                  focusedField === "mobile"
                                    ? focusedIconStyles
                                    : iconContainerStyles
                                }
                              >
                                <FaPhone
                                  size={18}
                                  style={{ color: "#8B4513" }}
                                />
                              </div>
                              <input
                                type="tel"
                                name="mobile"
                                value={formData.mobile}
                                onChange={handleInputChange}
                                onFocus={() => setFocusedField("mobile")}
                                onBlur={() => setFocusedField(null)}
                                placeholder="Enter mobile number *"
                                pattern="[0-9]{10}"
                                title="Please enter a valid 10-digit mobile number"
                                style={
                                  focusedField === "mobile"
                                    ? focusedInputStyles
                                    : inputStyles
                                }
                                required
                              />
                            </div>
                          </Col>
                        </Row>

                        <div className="mb-4">
                          <div className="d-flex">
                            <div
                              style={
                                focusedField === "message"
                                  ? focusedIconStyles
                                  : iconContainerStyles
                              }
                            >
                              <FaComment
                                size={18}
                                style={{ color: "#8B4513" }}
                              />
                            </div>
                            <textarea
                              name="message"
                              rows={4}
                              value={formData.message}
                              onChange={handleInputChange}
                              onFocus={() => setFocusedField("message")}
                              onBlur={() => setFocusedField(null)}
                              placeholder="Enter your message *"
                              style={{
                                ...inputStyles,
                                height: "100px",
                                resize: "none",
                                borderRadius: "0 4px 4px 0",
                              }}
                              required
                            ></textarea>
                          </div>
                        </div>

                        <Button
                          type="submit"
                          variant="primary"
                          style={{ backgroundColor: "#8B4513", border: "none" }}
                        >
                          Submit
                        </Button>
                      </Form>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        {/* Location Map */}
        <div className="bg-light pb-5">
          <Container fluid>
            <h2
              className="text-center mb-4 display-6"
              style={{ color: "#8B4513" }}
            >
              OUR LOCATION
            </h2>
            <div className="bg-white rounded shadow">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.1165997040202!2d75.39555697415273!3d22.349225779651448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396241cf6fd72615%3A0x2626a442d9b9a912!2sShri%20Ram%20Chaturbhuj%20Mandir%20Mandav!5e0!3m2!1sen!2sin!4v1752570431131!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="SEWA Location Map"
              />
            </div>
          </Container>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
