import React, { useState } from "react";
import ArrowBot from "../../../../assets/Polygon10.svg";
import Close from "../../../../assets/Close.svg";

const ModalMyPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const categories = [
    {
      name: "Indonesia",
      number: "+62",
      flag: "https://img.icons8.com/color/48/indonesia-circular.png"
    },
    {
      name: "Korea(Republic of)",
      number: "+82",
      flag: "https://img.icons8.com/color/48/south-korea-circular.png"
    },
    {
      name: "Vietnam",
      number: "+84",
      flag: "https://img.icons8.com/color/48/vietnam-circular.png"
    },
  ];

  function Category() {
    return (
      <>
        {categories.map((el) => {
          return (
            <div className="mb-3" key={el.name}>
              <label>
                <input
                  type="radio"
                  value={el.name}
                  checked={selectedOption === el.name}
                  onChange={handleOptionChange}
                  className="mr-4"
                />
                {el.name}
              </label>
            </div>
          );
        })}
      </>
    );
  }

  return (
    <>
      <button
        className="border rounded-lg p-1 flex text-center items-center gap-x-1"
        onClick={handleModalOpen}
      >
        <h1>Country</h1>
        <img src={ArrowBot} className="h-3 w-3" />
      </button>

      {showModal && (
        <div className="fixed lg:left-[55%] inset-0 flex items-center justify-center bg-black lg:w-[30%] w-[100vw] shadow-lg shadow-indigo-500/50">
          <div className="z-100 bg-white rounded-lg p-3 w-screen top-[45%] lg:w-[100%]  relative">
            <div className="z-100 bg-white max-h-[50%] h-[60vh]">
              <div className="flex justify-between items-left mb-2 bg-white">
                <h2 className="text-base pl-3">Search by country name or dial code</h2>
                <button
                  onClick={handleModalClose}
                  className="text-gray-600 hover:text-gray-800 pr-3"
                >
                  <img src={Close} className="w-4 h-4" />
                </button>
              </div>
              <div className="border mb-4"></div>
              <div className="modal-content items-left flex overflow-y-auto max-h-[inherit]">
                <div className="pl-3 h-full">
                  <Category />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalMyPage;
