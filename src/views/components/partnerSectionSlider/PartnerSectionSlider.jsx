import React, { useState, useEffect } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const PartnerSectionSlider = ({
  images = [], // Array of images
  heading,
  content,
  partners = [],
  flexDirection = "row", // "row" or "row-reverse"
  autoAdvanceInterval = 3000, // Interval in milliseconds for auto-advancing
}) => {
  const isReversed = flexDirection === "row-reverse";
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        nextImage();
        setFade(true);
      }, 500); // Match this duration with the CSS transition duration
    }, autoAdvanceInterval);

    return () => clearInterval(interval);
  }, [currentImageIndex, images.length, autoAdvanceInterval]);

  const handleImageClick = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
      setFade(true);
    }, 500); // Match this duration with the CSS transition duration
  };

  return (
    <div className="container pt-2 pb-4">
      <style>
        {`
          .fade-container {
            transition: opacity 0.9s ease-in-out;
            opacity: 1;
          }
          .fade-container.fade-exit {
            opacity: 0;
          }
          @media (max-width: 991.98px) {
            .partner-row {
              display: block;
            }
            .partner-col {
              width: 100%;
              max-width: 100%;
              flex: 0 0 100%;
            }
          }
        `}
      </style>
      <div className="row align-items-center partner-row">
        <div
          className={`col-12 col-md-6 partner-col ${
            isReversed ? "order-md-2" : "order-md-1"
          }`}
        >
          <div style={{ position: "relative" }}>
            <div className={`fade-container ${fade ? "" : "fade-exit"}`}>
              <img
                src={images[currentImageIndex]}
                alt="Partner"
                className="img-fluid rounded-4 w-100"
                style={{
                  objectFit: "cover",
                  maxHeight: "500px",
                  cursor: "pointer",
                }}
                onClick={() => handleImageClick(currentImageIndex)}
              />
            </div>
            <button
              onClick={prevImage}
              style={{
                position: "absolute",
                left: "10px",
                top: "50%",
                transform: "translateY(-50%)",
                background: "rgba(0, 0, 0, 0.5)",
                color: "white",
                border: "none",
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={() => {
                setFade(false);
                setTimeout(() => {
                  nextImage();
                  setFade(true);
                }, 500); // Match this duration with the CSS transition duration
              }}
              style={{
                position: "absolute",
                right: "10px",
                top: "50%",
                transform: "translateY(-50%)",
                background: "rgba(0, 0, 0, 0.5)",
                color: "white",
                border: "none",
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
        <div
          className={`col-12 col-md-6 partner-col p-5 ${
            isReversed ? "order-md-1" : "order-md-2"
          }`}
        >
          <h2 className="fw-bold">{heading}</h2>
          <p>{content}</p>
        </div>
      </div>
      {/* Lightbox */}
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={images.map((src) => ({ src }))}
        index={lightboxIndex}
      />
    </div>
  );
};

export default PartnerSectionSlider;
