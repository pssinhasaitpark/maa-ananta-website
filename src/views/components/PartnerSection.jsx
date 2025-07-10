// PartnerSection.jsx
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const PartnerSection = ({
  image,
  heading,
  content,
  partners = [],
  flexDirection = "row", // "row" or "row-reverse"
}) => {
  const isReversed = flexDirection === "row-reverse";

  return (
    <div className="container">
    <div className="row align-items-center">
      <div className={`col-6 ${isReversed ? "order-2" : "order-1"}`}>
        <img
          src={image}
          alt="Partner"
          className="img-fluid rounded-4 w-100"
          style={{ objectFit: "cover", maxHeight: "500px" }}
        />
      </div>
      <div className={`col-6 p-5 ${isReversed ? "order-1" : "order-2"}` }>
        <h2 className="fw-bold">{heading}</h2>
        <p>{content}</p>
        {/* <p className="fw-semibold">Current CSR Partners:</p>/ */}
        {/* <ul>
          {partners.map((partner, idx) => (
            <li key={idx}>{partner}</li>
          ))}
        </ul> */}
      </div>
    </div>
    </div>
  );
};

export default PartnerSection;
