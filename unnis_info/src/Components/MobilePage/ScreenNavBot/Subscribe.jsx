import beautyBox from "../../../assets/BeautyBox.jpeg";
import subPict from "../../../assets/Subs.jpg";
import BackToTopButton from "../Components/Subscribe/BackToTop";
import React, { useState, useEffect } from "react";
// import NavigationButtom from "../NavigatonBottom/NavigationBottom";
// import NavbarPhone from "../NavbarPhone/NavbarPhone";
import back from "../../../assets/previous.svg";
import camera_pink from "../../../assets/SkinAnalysis/camera_pink.png";
import logo from "../../../assets/logo.png";

import { Link } from "react-router-dom";
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
      <div className="bg-white relative">
        <div className="top-0 sticky z-10 bg-white lg:px-8 px-4 w-fullshadow-b-3 pt-2 pb-1">
          <div className="flex justify-between">
            <div className="self-center">
              <Link to={"/"}>
                <img src={back} className="w-full" />
              </Link>
            </div>
            <div className="self-center flex justify-center">
              <img src={logo} className="w-4/12" />
            </div>
            <div className="self-center">
              <img src={camera_pink} className="w-5/12" />
            </div>
          </div>
          <div className="flex justify-center items-center space-x-16 text-[#8e9093] bg-white text-sm">
            <div className=" py-2 flex text-center justify-center items-center">
              <Link to={"/event"}>
                <h3>Event</h3>
              </Link>
            </div>
            <div className=" py-2 flex text-center justify-center items-center">
              <Link to={"/feed"}>
                <h3>Feed</h3>
              </Link>
            </div>
            <div className=" py-2 flex text-center justify-center items-center">
              <Link to={"/subscribe"}>
                <h3>Subscription</h3>
              </Link>
            </div>
            <div className=" py-2 flex text-center justify-center items-center">
              <Link to={"/recycle"}>
                <h3>Recycle</h3>
              </Link>
            </div>
          </div>
        </div>
        
        <div className="overflow-y-auto">
          <div className="relative">
            <img src={beautyBox} alt="Backgrond Image" className="w-full" />
            <button className=" absolute bottom-1 left-1/2 transform -translate-x-1/2 -translate-y-3/4 px-2 py-1 bg-blue-500 hover:bg-blue-700 text-white rounded-full shadow">
              Daftar Sekarang
            </button>
          </div>
          <div>
            <img src={subPict} alt="Backgrond Image" className="w-full" />
          </div>
          <div
            className={`absolute bottom-5 right-5 ${
              isVisible ? "d-block" : "d-none"
            }`}
          >
            <BackToTopButton />
          </div>
        </div>
      </div>
      {/* <div className="bg-white pt-2.5 pb-1 px-1.5 sticky bottom-0 z-20">
        <NavigationButtom />
      </div> */}
    </>
  );
}

export default Subscribe;
