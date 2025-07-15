import React, { useState, useEffect } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import {
  img1,
  img2,
  img3,
  img4,
  img5,
  DataImg1,
  DataImg2,
  DataImg3,
  DataImg4,
  DataImg5,
  DataImg6,
  DataImg7, 
  DataImg8,
  DataImg9,
  DataImg10,
  DataImg11,
  DataImg12,
  DataImg13,
  DataImg14,
  DataImg15,
  DataImg16,
  DataImg17,
  DataImg18,
  DataImg19,
  group1,
} from "../../../assets";
import sampleItems from "../../utiles/sampleItems.json";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import PartnerSection from "../PartnerSection";

const Modal = ({ item, onClose, onImageClick }) => {
  return (
    <div
      className="modal show d-block"
      tabIndex="-1"
      role="dialog"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      onClick={onClose}
    >
      <div
        className="modal-dialog modal-dialog-centered"
        role="document"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title fw-bolder">{item.title}</h5>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            {item.image && (
              <img
                src={item.image}
                alt={item.title}
                className="img-fluid mb-3"
                style={{
                  height: "200px",
                  objectFit: "cover",
                  cursor: "pointer",
                }}
                onClick={() => onImageClick(item.image)}
              />
            )}
            <p>{item.excerpt}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const ContentSlider = ({
  title = "Education",
  items = [],
  slidesToShow = 4,
  autoSlide = false,
  autoSlideInterval = 3000,
  showDots = false,
  backgroundColor = "#6e3228",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(slidesToShow);
  const [selectedItem, setSelectedItem] = useState(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [lightboxSlides, setLightboxSlides] = useState([]);

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

  const openModal = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  const handleImageClick = (imageSrc) => {
    const slides = items.map((item) => ({ src: item.image }));
    const index = items.findIndex((item) => item.image === imageSrc);
    setLightboxSlides(slides);
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="content-slider-container my-4">
      {/* Header */}
      <div
        className="slider-header d-flex justify-content-between align-items-center p-3 text-white"
        style={{ backgroundColor: "#6e3228" }}
      >
        <h3 className="mb-0 fs-2 fw-bolder">{title}</h3>
        <div className="slider-controls">
          <button
            className="btn btn-outline-light btn-sm me-2"
            onClick={prevSlide}
            disabled={!canGoPrev}
            style={{ opacity: canGoPrev ? 1 : 0.5 }}
          >
            <FaChevronLeft />
          </button>

          <button
            className="btn btn-outline-light btn-sm"
            onClick={nextSlide}
            disabled={!canGoNext}
            style={{ opacity: canGoNext ? 1 : 0.5 }}
          >
            <FaChevronRight />
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
                    style={{
                      height: "200px",
                      objectFit: "cover",
                      cursor: "pointer",
                    }}
                    onClick={() => handleImageClick(item.image)}
                  />
                )}
                <div className="card-body d-flex flex-column">
                  <div className="mb-2">
                    <span className="badge bg-secondary me-2">
                      {item.category}
                    </span>
                    <small className="text-muted">{item.date}</small>
                  </div>
                  <h5 className="card-title text-dark mb-3 fw-bolder">
                    {item.title}
                  </h5>
                  {item.excerpt && (
                    <p className="card-text text-muted flex-grow-1">
                      {item.excerpt && item.excerpt.substring(0, 135)}
                      {item.excerpt && item.excerpt.length > 135 ? "..." : ""}
                    </p>
                  )}
                  <div className="mt-auto">
                    <button
                      onClick={() => openModal(item)}
                      className="btn btn-link text-decoration-none p-0"
                    >
                      {item.readMoreText || "Read More"}
                    </button>
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

      {/* Modal */}
      {selectedItem && (
        <Modal
          item={selectedItem}
          onClose={closeModal}
          onImageClick={handleImageClick}
        />
      )}

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

// Example usage component
const News = () => {
  // Map the imported JSON data to include the actual image imports
  const itemsWithImages = sampleItems.sampleItems.map((item) => {
    // Replace the image names with the actual imported images
    const imageMap = {
      DataImg1: DataImg1,
      DataImg2: DataImg2,
      DataImg3: DataImg3,
      DataImg4: DataImg4,
      DataImg5: DataImg5,
      DataImg12: DataImg12,
      DataImg13: DataImg13,
    };
    return { ...item, image: imageMap[item.image] };
  });
  const itemsWithImagees2 = sampleItems.seminarData.map((item) => {
    // Replace the image names with the actual imported images
    const imageMap = {
      DataImg1: DataImg1,
      DataImg2: DataImg2,
      DataImg3: DataImg3,
      DataImg4: DataImg4,
      DataImg5: DataImg5,
      DataImg6: DataImg6,
      DataImg7: DataImg7,
      DataImg8: DataImg8,
      DataImg9: DataImg9,
      DataImg10: DataImg10,
      DataImg11: DataImg11,
      DataImg12: DataImg12,
      DataImg13: DataImg13,
      DataImg14: DataImg14,
      DataImg15: DataImg15,
      DataImg16: DataImg16,
      DataImg17: DataImg17,
      DataImg18: DataImg18,
      DataImg19: DataImg19,
    };
    return { ...item, image: imageMap[item.image] };
  });

  return (
    <div className="container p-0">
      {/* Main slider */}
      <ContentSlider
        title="Education"
        items={itemsWithImages}
        slidesToShow={4}
        autoSlide={false}
        backgroundColor="#6A1706"
        showDots={true}
      />
      <PartnerSection
        image={group1}
        heading="वृद्ध आश्रम में आवश्यक वस्तुओं का वितरण एवं वृद्धों के साथ हास्य विनोद करते हुए महेश्वर में "
        content="24 जनवरी 2019 को महेश्वर में माँ अनंता अभुदय सामाजिक सेवा संस्था द्वारा वृद्ध आश्रम में सेवा कार्यक्रम आयोजित किया गया। इस अवसर पर आश्रम में आवश्यक वस्तुओं का वितरण किया गया, जिसमें दैनिक उपयोग की सामग्री शामिल थी। संस्था के सदस्यों ने बुज़ुर्गों के साथ समय बिताया, हास्य-विनोद और संवाद के माध्यम से उन्हें आनंदित किया। इस सेवाभावी पहल ने वृद्धजनों के चेहरे पर मुस्कान बिखेरी और सामाजिक सरोकार की एक सुंदर मिसाल पेश की।"
        // partners={["Company A", "Company B"]}
        flexDirection="row-reverse"
      />
      {/* Example with different configuration */}
      <ContentSlider
        title="Recent Updates"
        items={itemsWithImagees2}
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
