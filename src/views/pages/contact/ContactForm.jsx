import React, { useState } from "react";
import { Button, Form, Row, Col, Container, InputGroup } from "react-bootstrap";
import {
  MapPin,
  Phone,
  Mail,
  Home,
  User,
  Building2,
  MessageSquare,
} from "lucide-react";
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
              <Home size={16} className="me-1" style={{ color: "#8B4513" }} />
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
                    {/* Left - Info */}
                    <Col lg={5} className="mb-4">
                      <div
                        className="p-4 text-white rounded"
                        style={{ backgroundColor: "#8B4513", height: "100%" }}
                      >
                        <h3 className="fw-bold mb-4">MAA</h3>
                        <div className="d-flex mb-3">
                          <MapPin size={20} className="me-3 mt-1 text-white" />
                          <div>
                            <p className="mb-1">
                              SHRI CHATURBUJ SHREE RAM MANDIR MANADV
                            </p>
                            <p className="mb-1">
                              Tehsil –NALCHA, Dist –DHAR
                              <br />
                              PIN - 451 221, Madhya Pradesh, India
                            </p>
                          </div>
                        </div>
                        <div className="d-flex mb-3">
                          <Phone size={20} className="me-3 mt-1 text-white" />
                          <div>
                            <p className="mb-1">+91 9893200011</p>
                            <p className="mb-1">+91 9424032111</p>
                          </div>
                        </div>
                        <div className="d-flex">
                          <Mail size={20} className="me-3 mt-1 text-white" />
                          <p className="mb-0">maa.anantamandu@gmail.com</p>
                        </div>
                      </div>
                    </Col>
                    {/* Right - Form */}
                    <Col lg={7} className="mb-4">
                      <Form onSubmit={handleSubmit}>
                        <Row className="mb-3 text-dark">
                          <Col md={6} className="mb-3 mb-md-0">
                            <InputGroup>
                              <InputGroup.Text
                                style={{
                                  backgroundColor: "#f8f9fa",
                                  borderColor: "#8B4513",
                                }}
                              >
                                <User size={18} style={{ color: "#8B4513" }} />
                              </InputGroup.Text>
                              <input
                                type="text"
                                name="name"
                                placeholder="Enter your full name *"
                                value={formData.name}
                                onChange={handleInputChange}
                                className=" py-3"
                                style={{ borderColor: "#8B4513" }}
                                required
                              />
                            </InputGroup>
                          </Col>
                          <Col md={6}>
                            <InputGroup>
                              <InputGroup.Text
                                style={{
                                  backgroundColor: "#f8f9fa",
                                  borderColor: "#8B4513",
                                }}
                              >
                                <Building2
                                  size={18}
                                  style={{ color: "#8B4513" }}
                                />
                              </InputGroup.Text>
                              <input
                                type="text"
                                name="organization"
                                placeholder="Enter organization name"
                                value={formData.organization}
                                onChange={handleInputChange}
                                className="py-3"
                                style={{ borderColor: "#8B4513" }}
                              />
                            </InputGroup>
                          </Col>
                        </Row>
                        <Row className="mb-3">
                          <Col md={6} className="mb-3 mb-md-0">
                            <InputGroup>
                              <InputGroup.Text
                                style={{
                                  backgroundColor: "#f8f9fa",
                                  borderColor: "#8B4513",
                                }}
                              >
                                <Mail size={18} style={{ color: "#8B4513" }} />
                              </InputGroup.Text>
                              <input
                                type="email"
                                name="email"
                                placeholder="Enter your email *"
                                value={formData.email}
                                onChange={handleInputChange}
                                className=" py-3"
                                style={{ borderColor: "#8B4513" }}
                                required
                              />
                            </InputGroup>
                          </Col>
                          <Col md={6}>
                            <InputGroup>
                              <InputGroup.Text
                                style={{
                                  backgroundColor: "#f8f9fa",
                                  borderColor: "#8B4513",
                                }}
                              >
                                <Phone size={18} style={{ color: "#8B4513" }} />
                              </InputGroup.Text>
                              <input
                                type="tel"
                                name="mobile"
                                placeholder="Enter mobile number *"
                                value={formData.mobile}
                                onChange={handleInputChange}
                                className="py-3"
                                style={{ borderColor: "#8B4513" }}
                                pattern="[0-9]{10}"
                                title="Please enter a valid 10-digit mobile number"
                                required
                              />
                            </InputGroup>
                          </Col>
                        </Row>
                        <div className="mb-3 col-sm-12">
                          <InputGroup>
                            <InputGroup.Text
                              style={{
                                backgroundColor: "#f8f9fa",
                                borderColor: "#8B4513",
                                alignItems: "flex-start",
                                paddingTop: "12px",
                              }}
                            >
                              <MessageSquare
                                size={18}
                                style={{ color: "#8B4513" }}
                              />
                            </InputGroup.Text>
                            <textarea
                              rows={4}
                              name="message"
                              placeholder="Write your message here... *"
                              value={formData.message}
                              onChange={handleInputChange}
                              className="py-3"
                              style={{
                                borderColor: "#8B4513",
                                resize: "vertical",
                              }}
                              required
                            />
                          </InputGroup>
                        </div>
                        <div className="d-flex flex-column flex-md-row align-items-center justify-content-between mt-4">
                          <Form.Check
                            type="checkbox"
                            name="recaptcha"
                            checked={formData.recaptcha}
                            onChange={handleInputChange}
                            label="I'm not a robot"
                            style={{ color: "#8B4513" }}
                            className="fs-6 mb-3 mb-md-0"
                            required
                          />
                          <Button
                            type="submit"
                            size="lg"
                            className="px-5 py-3 border-0 fw-semibold"
                            style={{ backgroundColor: "#8B4513" }}
                          >
                            SUBMIT MESSAGE
                          </Button>
                        </div>
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
                src="https://www.google.com/maps/embed?pb=..."
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
