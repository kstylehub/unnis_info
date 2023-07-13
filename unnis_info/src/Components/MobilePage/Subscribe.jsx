
import beautyBox from "../../assets/BeautyBox.jpeg";
import subPict from "../../assets/Subs.jpg";
import BackToTopButton from "./Subscribe/BackToTop";
import React, { useState, useEffect } from 'react';
function Subscribe() {
  const [isVisible, setIsVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    const isVisible = true; // Ganti dengan posisi scroll yang sesuai

    setIsVisible(isVisible);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div className="overflow-y-auto">
        <div className="relative">
          <img src={beautyBox} alt="Backgrond Image" className="w-full h-auto"></img>
          <button className="absolute bottom-1 left-1/2 transform -translate-x-1/2 -translate-y-3/4 px-2 py-1 bg-blue-500 hover:bg-blue-700 text-white rounded-full shadow">
            Daftar Sekarang
          </button>
        </div>
        <div>
          <img
            src={subPict}
            alt="Backgrond Image"
            className="w-full h-auto"
          ></img>
        </div>
        <div
          className={`absolute bottom-5 right-5 ${
            isVisible ? "d-block" : "d-none"
          }`}
        >
          <BackToTopButton />
        </div>
      </div>
    </>
  );
}

export default Subscribe;
