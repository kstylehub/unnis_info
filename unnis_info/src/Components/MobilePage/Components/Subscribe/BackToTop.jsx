import React, { useState, useEffect } from 'react';

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed p-3">
      <button
      className={`fixed bottom-5 right-5 p-3 bg-gray-500 hover:bg-gray-700 text-white rounded-full ${
        isVisible ? 'visible' : 'hidden'
      }`}
      onClick={scrollToTop}
    >
      ^up
    </button>
    </div>
  );
};

export default BackToTopButton;
