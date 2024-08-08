import { useEffect, useState } from "react";
import back from "../../../../assets/previous.svg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getFaqByCategory } from "../../../../Store/Actions/Actions";

function HistoryEvent() {
  const dataFaq = useSelector(
    (state) => state.ReducerFaqByCategory?.dataFaqByCategory
  );
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState(1);
  const [openQuestions, setOpenQuestions] = useState({});

  useEffect(() => {
    dispatch(getFaqByCategory(selectedCategory));
  }, [selectedCategory, dispatch]);

  const handleCategoryClick = (id) => {
    setSelectedCategory(id);
    setOpenQuestions({});
  };

  const toggleQuestion = (id) => {
    setOpenQuestions((prevOpenQuestions) => ({
      ...prevOpenQuestions,
      [id]: !prevOpenQuestions[id],
    }));
  };

  return (
    <>
      <div className="w-full h-full overflow-x-auto relative pb-20">
        <div className="top-0 sticky w-full z-20 bg-white pt-2 shadow">
          <div className="flex justify-center items-center py-3 px-5">
            <Link
              to={"/my-page"}
              className="w-4/12 flex items-center justify-start"
            >
              <img src={back} className="w-8 h-8" alt="Back" />
            </Link>
            <div className="w-4/12 text-lg font-semibold text-center">
              Riwayat Event
            </div>
            <div className="w-4/12"></div>
          </div>
          <div className="border-t pt-2">
            <div className="flex justify-evenly text-center">
              <div
                className={`w-4/12 hover:border hover:rounded-full hover:border-black mb-2 cursor-pointer ${
                  selectedCategory === 1 ? "rounded-full border border-black" : ""
                }`}
                onClick={() => handleCategoryClick(1)}
              >
                Terdaftar
              </div>
              <div
                className={`w-4/12 hover:border hover:rounded-full hover:border-black mb-2 cursor-pointer ${
                    selectedCategory === 2 ? "rounded-full border border-black" : ""
                  }`}
                onClick={() => handleCategoryClick(2)}
              >
                Berhasil
              </div>
            </div>
          </div>
        </div>

        <hr></hr>
        <div className="">
          {/* {dataFaq?.map((faq) => (
            <div key={faq.id} className=" border-b">
              <div className="flex" onClick={() => toggleQuestion(faq.id)}>
                <div
                  className={
                    openQuestions[faq.id]
                      ? "text-[#4ABFA1] font-semibold cursor-pointer w-11/12 px-5 py-3"
                      : "font-semibold cursor-pointer w-11/12 px-5 py-3"
                  }
                >
                  {faq.question}
                </div>
                <div className="w-1/12 flex items-center">
                  {openQuestions[faq.id] ? (
                    <svg
                      className="w-5 h-5 text-[#4ABFA1] dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m5 15 7-7 7 7"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-5 h-5 text-gray-800  dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m19 9-7 7-7-7"
                      />
                    </svg>
                  )}
                </div>
              </div>

              <div className="bg-gray-100 px-5 ">
                {openQuestions[faq.id] && (
                  <div className="mt-2  text-gray-700 py-3">{faq.answer}</div>
                )}
              </div>
            </div>
          ))} */}
        </div>
      </div>
    </>
  );
}

export default HistoryEvent;
