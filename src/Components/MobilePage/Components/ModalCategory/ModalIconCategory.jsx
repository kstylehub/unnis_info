import React, { useEffect, useRef, useState } from "react";
import Close from "../../../../assets/Close.svg";
import { useDispatch } from "react-redux";
import Baby from "../../../../assets/Homepage/Category Icon/baby.svg";
import Body from "../../../../assets/Homepage/Category Icon/body.svg";
import Category from "../../../../assets/Homepage/Category Icon/category.svg";
import Cleansing from "../../../../assets/Homepage/Category Icon/cleansing.svg";
import Face from "../../../../assets/Homepage/Category Icon/face.svg";
import Food from "../../../../assets/Homepage/Category Icon/food.svg";
import Hair from "../../../../assets/Homepage/Category Icon/hair.svg";
import Makeup from "../../../../assets/Homepage/Category Icon/make_up.svg";
import Mask from "../../../../assets/Homepage/Category Icon/mask.svg";
import Skinanalysis from "../../../../assets/Homepage/Category Icon/skin_analysis.svg";
import Skincare from "../../../../assets/Homepage/Category Icon/skincare.svg";
import Suncare from "../../../../assets/Homepage/Category Icon/suncare.svg";
import { useNavigate } from "react-router-dom";

const ModalIcon = ({ isOpen, onClose }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const reportInputRefs = useRef([]);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  useEffect(() => {}, [selectedOption]);

  let categoryIcon = [
    { src: Skinanalysis, label: "Skin Analysis", to: "/skinanalysis" },
    { src: Skincare, label: "Skincare" },
    { src: Cleansing, label: "Cleansing" },
    { src: Mask, label: "Mask" },
    { src: Suncare, label: "Suncare" },
    { src: Face, label: "Face" },
    { src: Makeup, label: "Lip & Eye" },
    { src: Body, label: "Body" },
    { src: Hair, label: "Hair" },
    { src: Baby, label: "Kids & Baby" },
    { src: Food, label: "Food" },
  ];

  const handleToCategory = (label) => {
    console.log((label));
    if(label == "Skin Analysis") {
      navigate("/skinanalysis")
    }
  }

  return isOpen ? (
    <>
      <div className="fixed z-50 lg:left-[36.5%] inset-0 flex items-center opacity-70 bg-black justify-center lg:w-[26.8%] w-[100vw] shadow-lg shadow-indigo-500/50"></div>
      <div className="fixed z-50 lg:left-[36.5%] inset-0 flex items-center justify-center lg:w-[26.8%] w-[100vw] shadow-lg shadow-indigo-500/50">
        <div className="z-50 bg-white  rounded-lg border border-gray-400 p-3 w-screen shadow-lg top-[45%] lg:w-[100%] relative">
          <div className="z-50 bg-white max-h-[50%] h-[60vh]">
            <div className="flex justify-between items-center mb-2 bg-white">
              <h2 className="text-sm font-bold pl-3">
                What Category Are You Looking For ?
              </h2>
              <button
                onClick={onClose}
                className="text-gray-600 hover:text-gray-800 pr-3"
                type="button"
              >
                <img src={Close} className="w-4 h-4" />
              </button>
            </div>
            <div className="modal-content grid grid-cols-4 max-h-[inherit] h-full w-full">
              {categoryIcon.map((item, index) => {
                return (
                  <button
                    className="justify-self-center"
                    style={{ textAlign: "-webkit-center" }}
                    onClick={()=>handleToCategory(item.label)}
                  >
                    <div
                      className="p-2 w-12 h-12 border rounded-lg border-[#4abfa27c]"
                      key={index}
                    >
                      <img src={item.src} className="w-full h-full" />
                    </div>
                    <div
                      className=" truncate text-center"
                      style={{ textOverflow: "ellipsis" }}
                    >
                      {item.label}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  ) : null;
};

export default ModalIcon;
