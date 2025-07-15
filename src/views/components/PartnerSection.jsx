import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

const PartnerSection = ({
  image,
  heading,
  content,
  partners = [],
  flexDirection = "row", // "row" or "row-reverse"
}) => {
  const isReversed = flexDirection === "row-reverse";
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxSlides, setLightboxSlides] = useState([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const handleImageClick = () => {
    const slides = [{ src: image }];
    setLightboxSlides(slides);
    setLightboxIndex(0);
    setLightboxOpen(true);
  };

  return (
    <div className="container pt-2 pb-4">
      <div className="row align-items-center">
        <div className={`col-6 ${isReversed ? "order-2" : "order-1"}`}>
          <img
            src={image}
            alt="Partner"
            className="img-fluid rounded-4 w-100"
            style={{ objectFit: "cover", maxHeight: "500px", cursor: "pointer" }}
            onClick={handleImageClick}
          />
        </div>
        <div className={`col-6 p-5 ${isReversed ? "order-1" : "order-2"}`}>
          <h2 className="fw-bold">{heading}</h2>
          <p>{content}</p>
        </div>
      </div>

      {/* Lightbox */}
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={lightboxSlides}
        index={lightboxIndex}
      />
    </div>
  );
};

export default PartnerSection;
