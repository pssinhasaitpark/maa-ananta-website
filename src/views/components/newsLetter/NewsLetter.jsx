// import React, { useEffect, useRef } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

// const LeftToRightTicker = () => {
//   const tickerRef = useRef(null);
//   const contentRef = useRef(null);

//   useEffect(() => {
//     const ticker = tickerRef.current;
//     const content = contentRef.current;
//     let position = ticker.offsetWidth;

//     const animate = () => {
//       position--;
//       if (position < -content.offsetWidth) {
//         position = ticker.offsetWidth;
//       }
//       content.style.transform = `translateX(${position}px)`;
//       requestAnimationFrame(animate);
//     };

//     animate();
//   }, []);

//   return (
//     <div className="container border-top border-bottom py-1 bg-white overflow-hidden">
//       <div
//         ref={tickerRef}
//         className="position-relative w-100"
//         style={{ height: "30px" }}
//       >
//         <div
//           ref={contentRef}
//           className="position-absolute d-inline-flex gap-4 text-nowrap"
//         >
//           <span> Education </span>
//           <span>Children's Home </span>
//           <span>Tranning Farmers</span>
//           <span>Preservation of Local Culture</span>
//           <span>Environmental Protection</span>
//           <span>Research on Environment</span>
//           <span>Health Care</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LeftToRightTicker;
import React, { useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const items = [
  "Education",
  "Children's Home",
  "Training Farmers",
  "Preservation of Local Culture",
  "Environmental Protection",
  "Research on Environment",
  "Health Care",
];

const LeftToRightTicker = () => {
  const tickerRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ticker = tickerRef.current;
    const content = contentRef.current;
    let position = ticker.offsetWidth;

    const animate = () => {
      position--;
      if (position <= -content.offsetWidth / 2) {
        position = 0; // Instantly jump to start of loop
      }
      content.style.transform = `translateX(${position}px)`;
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  // Generate items with | separator and duplicate for seamless loop
  const renderItems = () => {
    const pipedItems = items.map((item, index) => (
      <span key={index} className="px-2">
        {item}
        <span className="px-2">|</span>
      </span>
    ));

    // Duplicate items once more for loop effect
    return [...pipedItems, ...pipedItems];
  };

  return (
    <div className="container border-top border-bottom py-1 bg-white overflow-hidden">
      <hr />
      <div
        ref={tickerRef}
        className="position-relative w-100"
        style={{ height: "30px" }}
      >
        <div
          ref={contentRef}
          className="position-absolute d-inline-flex text-nowrap"
        >
          {renderItems()}
        </div>
      </div>
      <hr />


    </div>
  );
};

export default LeftToRightTicker;
