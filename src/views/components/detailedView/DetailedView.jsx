// DetailedView.js
import React from "react";
import { useParams } from "react-router-dom";

const DetailedView = ({ items }) => {
  const { id } = useParams();
  const item = items.find((item) => item.id === parseInt(id));

  if (!item) {
    return <div>Item not found</div>;
  }

  return (
    <div className="container my-5">
      <div className="card">
        {item.image && (
          <img
            src={item.image}
            alt={item.title}
            className="card-img-top"
            style={{ height: "400px", objectFit: "cover" }}
          />
        )}
        <div className="card-body">
          <h5 className="card-title">{item.title}</h5>
          <p className="card-text">{item.excerpt}</p>
          <p className="card-text">{item.detailedContent}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailedView;
