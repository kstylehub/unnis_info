import React, { useEffect, useRef, useState } from "react";
import ArrowBot from "../../../../assets/Polygon10.svg";
import Close from "../../../../assets/Close.svg";
import { useDispatch } from "react-redux";
import { postReport } from "../../../../Store/Actions/Actions";

const ModalReport = ({ isOpen, onClose, idReview }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const reportInputRefs = useRef([]);
  const dispatch = useDispatch()

  useEffect(() => {
  }, [selectedOption, ]);

  const handleClickReport = (index) => {
    if (reportInputRefs.current[index]) {
      reportInputRefs.current[index].click();
    }
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    let data = {
      idReview: +idReview,
      reason:event.target.value
    }
    dispatch(postReport(data))
    onClose();
  };

  const handleModalOpen = () => {
    setShowModal(true);
  };

  const categories = [
    {
      id: 0,
      name: "ini adalah spam",
    },
    {
      id: 1,
      name: "Konten ini mengandung diskriminasi, ancaman dan melanggar nilai/norma sosial",
    },
    {
      id: 2,
      name: "Konten ini mengandung SARA dan vulgar",
    },
  ];

  function Category() {
    return (
      <>
        {categories.map((el, index) => (
          <>
            <div
              className="mb-3 pl-3 flex justify-between items-center"
              key={index}
              onClick={() => handleClickReport(index)}
            >
              <div className="flex">
                <input
                  type="radio"
                  value={el.id}
                  checked={selectedOption === el.name}
                  onChange={handleOptionChange}
                  className="mr-4 hidden"
                  name="selectReport"
                  ref={(el) => (reportInputRefs.current[index] = el)}
                />
                <label htmlFor="selectReport" className="">
                  {el.name}
                </label>
              </div>
              <div className="mx-2">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  height="1em"
                  width="1em"
                >
                  <path d="M5.536 21.886a1.004 1.004 0 001.033-.064l13-9a1 1 0 000-1.644l-13-9A.998.998 0 005 3v18a1 1 0 00.536.886zM7 4.909L17.243 12 7 19.091V4.909z" />
                </svg>
              </div>
            </div>
            <div className="border flex w-[100%] mb-4"></div>
          </>
        ))}
      </>
    );
  }

  return isOpen ? (
    <div className="fixed z-50 lg:left-[37.5%] inset-0 flex items-center justify-center  lg:w-[25%] w-[100vw] shadow-lg shadow-indigo-500/50">
      <div className="z-50 bg-white  rounded-lg border border-gray-400 p-3 w-screen shadow-lg top-[45%] lg:w-[100%] relative">
        <div className="z-50 bg-white max-h-[50%] h-[60vh]">
          <div className="flex justify-between items-center mb-2 bg-white">
            <h2 className="text-xl font-bold pl-3">Report Comment</h2>
            <button
              onClick={onClose}
              className="text-gray-600 hover:text-gray-800 pr-3"
              type="button"
            >
              <img src={Close} className="w-4 h-4" />
            </button>
          </div>
          <div className="border mb-4"></div>
          <div className="modal-content overflow-y-auto max-h-[inherit] h-full w-full">
              <Category />
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default ModalReport;
