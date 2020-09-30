import React, { useState, useEffect, useRef } from "react";

const images = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];

const selected = {
  backgroundColor: "gray",
  color: "red",
};

function ImageScroll() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollView, setScrollView] = useState([]);
  const selectedRef = useRef(null);

  useEffect(() => {
    const getScrollView = () => {
      if (currentIndex === 0) return images.slice(0, 3);
      if (currentIndex === images.length - 1) return images.slice(-3);

      return images.slice(currentIndex - 1, currentIndex + 2);
    };
    if (!selectedRef.current) setScrollView(getScrollView());
  }, [currentIndex]);

  const onNext = () => {
    selectedRef.current = null;
    if (currentIndex < images.length - 1) setCurrentIndex((c) => c + 1);
  };
  const onBack = () => {
    selectedRef.current = null;
    if (currentIndex > 0) setCurrentIndex((c) => c - 1);
  };

  const handleSelected = (_, x) => {
    selectedRef.current = true;
    const find = images.indexOf(x);
    setCurrentIndex(find);
  };

  return (
    <div style={{ width: 300 }}>
      {images.map((x, index) => (
        <div key={index} style={index === currentIndex ? selected : null}>
          {x}
        </div>
      ))}
      <button onClick={onBack}>&lt;</button>
      {scrollView.map((x) => (
        <div
          className="scrollView"
          style={images[currentIndex] === x ? selected : null}
          onClick={(_) => handleSelected(_, x)}
        >
          {x}
        </div>
      ))}
      <button onClick={onNext}>&gt;</button>
    </div>
  );
}

export default ImageScroll;
