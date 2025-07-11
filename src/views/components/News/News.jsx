import React, { useState, useEffect } from "react";
import { img1, img2, img3, img4, img5 } from "../../../assets";

const ContentSlider = ({
  title = "Latest Content",
  items = [],
  slidesToShow = 4,
  autoSlide = false,
  autoSlideInterval = 3000,
  showDots = false,
  backgroundColor = "#6e3228",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(slidesToShow);

  // Handle responsive design
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 576) {
        setItemsPerSlide(1);
      } else if (window.innerWidth < 768) {
        setItemsPerSlide(2);
      } else if (window.innerWidth < 992) {
        setItemsPerSlide(3);
      } else {
        setItemsPerSlide(slidesToShow);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [slidesToShow]);

  // Auto slide functionality
  useEffect(() => {
    if (autoSlide && items.length > itemsPerSlide) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex >= items.length - itemsPerSlide ? 0 : prevIndex + 1
        );
      }, autoSlideInterval);
      return () => clearInterval(interval);
    }
  }, [autoSlide, autoSlideInterval, items.length, itemsPerSlide]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= items.length - itemsPerSlide ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex <= 0 ? items.length - itemsPerSlide : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const canGoPrev = currentIndex > 0;
  const canGoNext = currentIndex < items.length - itemsPerSlide;

  return (
    <div className="content-slider-container my-5">
      {/* Header */}
      <div
        className="slider-header d-flex justify-content-between align-items-center p-3 text-white"
        style={{ backgroundColor: "#6e3228" }}
      >
        <h3 className="mb-0 fs-2 fw-bold">{title}</h3>
        <div className="slider-controls">
          <button
            className="btn btn-outline-light btn-sm me-2"
            onClick={prevSlide}
            disabled={!canGoPrev}
            style={{ opacity: canGoPrev ? 1 : 0.5 }}
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          <button
            className="btn btn-outline-light btn-sm"
            onClick={nextSlide}
            disabled={!canGoNext}
            style={{ opacity: canGoNext ? 1 : 0.5 }}
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>

      {/* Slider Content */}
      <div className="slider-content overflow-hidden py-3">
        <div
          className="slider-track d-flex transition-transform"
          style={{
            transform: `translateX(-${(currentIndex * 100) / itemsPerSlide}%)`,
            transition: "transform 0.3s ease-in-out",
          }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="slider-item flex-shrink-0"
              style={{ width: `${100 / itemsPerSlide}%` }}
            >
              <div className="card h-100 border-0 shadow-sm m-2">
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="card-img-top"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                )}
                <div className="card-body d-flex flex-column">
                  <div className="mb-2">
                    <span className="badge bg-secondary me-2">
                      {item.category}
                    </span>
                    <small className="text-muted">{item.date}</small>
                  </div>
                  <h5 className="card-title text-dark mb-3">{item.title}</h5>
                  {item.excerpt && (
                    <p className="card-text text-muted flex-grow-1">
                      {item.excerpt}
                    </p>
                  )}
                  <div className="mt-auto">
                    <a
                      href={item.link || "#"}
                      className="btn btn-link text-decoration-none p-0"
                    >
                      {item.readMoreText || "Read More"}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots indicator */}
      {showDots && items.length > itemsPerSlide && (
        <div className="slider-dots text-center py-3">
          {Array.from({ length: Math.ceil(items.length / itemsPerSlide) }).map(
            (_, index) => (
              <button
                key={index}
                className={`btn btn-sm rounded-circle mx-1 ${
                  Math.floor(currentIndex / itemsPerSlide) === index
                    ? "btn-primary"
                    : "btn-outline-secondary"
                }`}
                style={{ width: "12px", height: "12px", padding: 0 }}
                onClick={() => goToSlide(index * itemsPerSlide)}
              />
            )
          )}
        </div>
      )}

      {/* FontAwesome CDN for icons */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
      />
    </div>
  );
};

// Example usage component
const News = () => {
  const sampleItems = [
    {
      image: img2,
      category: "News",
      date: "November 2 2023",
      title:
        "In Elaben's honour, IUF declares Nov 2 as International Day for Informal Sector",
      excerpt:
        "A significant milestone in recognizing the contributions of informal sector workers worldwide.",
      link: "#",
      readMoreText: "Read More",
    },
    {
      image: img1,
      category: "News",
      date: "June 26 2025",
      title:
        "ILO's Policy Guidelines for the Promotion of Decent work in Recycling: SEWA's Intervention",
      excerpt:
        "SEWA's comprehensive approach to promoting decent work conditions in the recycling sector.",
      link: "#",
      readMoreText: "Read More",
    },
    {
      image: img5,
      category: "News",
      date: "June 26 2025",
      title: "Dan Gallin: A lifelong fighter for workers and a hero for SEWA",
      excerpt:
        "Remembering the contributions of a dedicated advocate for workers' rights.",
      link: "#",
      readMoreText: "Read More",
    },
    {
      image: img4,
      category: "News",
      date: "February 10 2025",
      title:
        "In Conversation with Honorable Finance Minister Shri. Nirmala Sitharaman",
      excerpt:
        "A detailed discussion on policy initiatives and their impact on the informal sector.",
      link: "#",
      readMoreText: "Read More",
    },
    {
      image: img3,
      category: "News",
      date: "January 15 2025",
      title: "Global Summit on Women's Economic Empowerment",
      excerpt:
        "Key insights from the international conference on women's economic participation.",
      link: "#",
      readMoreText: "Read More",
    },
    {
      image: img1,
      category: "News",
      date: "December 20 2024",
      title: "Annual Report: Progress in Sustainable Development Goals",
      excerpt:
        "Comprehensive review of achievements and challenges in meeting SDG targets.",
      link: "#",
      readMoreText: "Read More",
    },
  ];

  return (
    <div className="container p-0">
      {/* Bootstrap CSS */}
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css"
        rel="stylesheet"
      />

      {/* Main slider */}
      <ContentSlider
        title="Latest Content"
        items={sampleItems}
        slidesToShow={4}
        autoSlide={false}
        backgroundColor="#6A1706"
        showDots={true}
      />

      {/* Example with different configuration */}
      <ContentSlider
        title="Recent Updates"
        items={sampleItems.slice(0, 3)}
        slidesToShow={3}
        autoSlide={true}
        autoSlideInterval={4000}
        backgroundColor="#6A1706"
        showDots={false}
      />
    </div>
  );
};

export default News;
