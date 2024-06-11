import React, { useRef, useEffect } from 'react';
import '../css/ScaleDecider.css'



function ScaleDecider() {
  const scrollContainerRef = useRef(null);

  const handleScroll = (event) => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      const maxScrollLeft = scrollWidth - clientWidth;

      if (scrollLeft + event.deltaY >= maxScrollLeft) {
        // Scroll to the start
        scrollContainerRef.current.scrollLeft = 0;
        event.preventDefault();
      } else if (scrollLeft + event.deltaY <= 0) {
        // Scroll to the end
        scrollContainerRef.current.scrollLeft = maxScrollLeft;
        event.preventDefault();
      } else {
        scrollContainerRef.current.scrollLeft += event.deltaY;
        event.preventDefault();
      }
    }
  };

  const scrollLeft = () => {
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      const maxScrollLeft = scrollWidth - clientWidth;
    if (scrollContainerRef.current) {
      if(scrollLeft - 200 <= 0){
        scrollContainerRef.current.scrollLeft = maxScrollLeft;
      }else{
        scrollContainerRef.current.scrollLeft -= 200; // Adjust the value as needed
      }
    }
  };

  const scrollRight = () => {
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    const maxScrollLeft = scrollWidth - clientWidth;
    if (scrollContainerRef.current) {
      if(scrollLeft + 200 >= maxScrollLeft){
        scrollContainerRef.current.scrollLeft = 0;
      }else{
        scrollContainerRef.current.scrollLeft += 200; // Adjust the value as needed
      }
    }
  };

  return (
    <div className="carousel">
      <div
        className="scroll-container"
        ref={scrollContainerRef}
        onWheel={handleScroll}
      >
        {Array.from({ length: 10 }, (_, index) => (
          <div key={index} className="scroll-item">
            Item {index + 1}
          </div>
        ))}
      </div>
      <button onClick={scrollLeft}>Left</button>
      <button onClick={scrollRight}>Right</button>
    </div>
  );
}

export default ScaleDecider;