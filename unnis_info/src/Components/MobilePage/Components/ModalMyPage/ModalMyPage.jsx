import React, { useState } from "react";
import ArrowBot from "../../../../assets/Polygon10.svg";
import Close from "../../../../assets/Close.svg";

const ModalMyPage = ({handleSelectedCountry}) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  handleSelectedCountry(selectedOption)
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    setShowModal(false)
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
      flag: "https://img.icons8.com/color/48/indonesia-circular.png",
    },
    {
      name: "Korea(Republic of)",
      number: "+82",
      flag: "https://img.icons8.com/color/48/south-korea-circular.png",
    },
    {
      name: "Vietnam",
      number: "+84",
      flag: "https://img.icons8.com/color/48/vietnam-circular.png",
    },
  ];

  function Category() {
    return (
      <>
        {categories.map((el) => {
          return (
            <div className="mb-3" key={el.name}>
              <label className="flex flex-row justify-start">
                <input
                  type="radio"
                  value={el.number}
                  checked={selectedOption === el.number}
                  onChange={handleOptionChange}
                  className="mr-4"
                />
                <img className="" src={el.flag}></img>
                <div className="px-3 flex flex-col text-start justify-start">
                  <div className="">{el.name}</div>
                  <div className="text-sm text-gray-500">{el.number}</div>
                </div>
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
        type="button"
        className="border rounded-lg px-1 py-3 flex text-center items-center gap-x-1 w-full justify-center border-[#4ABFA1] bg-gray-100"
        onClick={handleModalOpen}
      >
        <h1>{!selectedOption ? "Country" : `${selectedOption}`}</h1>
        <img src={ArrowBot} className="h-3 w-3" />
      </button>

      {showModal && (
        <div className="fixed lg:left-[55%] inset-0 flex items-center justify-center bg-black lg:w-[30%] w-[100vw] shadow-lg shadow-indigo-500/50">
          <div className="z-100 bg-white rounded-lg p-3 w-screen top-[45%] lg:w-[100%]  relative">
            <div className="z-100 bg-white max-h-[50%] h-[60vh]">
              <div className="flex justify-between items-left mb-2 bg-white">
                <h2 className="text-base pl-3 py-3">
                  Search by country name or dial code
                </h2>
                <button
                  onClick={handleModalClose}
                  className="text-gray-600 hover:text-gray-800 pr-3"
                >
                  <img src={Close} className="w-4 h-4" />
                </button>
              </div>
              <div className="border mb-4"></div>
              <div className="modal-content items-center overflow-y-auto max-h-[inherit]">
                <div className="pl-3 h-full ">
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
