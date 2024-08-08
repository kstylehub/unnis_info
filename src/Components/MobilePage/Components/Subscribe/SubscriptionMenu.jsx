import { useEffect, useRef, useState } from "react";
import back from "../../../../assets/previous.svg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getFaqByCategory } from "../../../../Store/Actions/Actions";

function SubscriptionMenu() {
  const dataFaq = useSelector(
    (state) => state.ReducerFaqByCategory?.dataFaqByCategory
  );
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState(1);
  const [openQuestions, setOpenQuestions] = useState({});
  const [selectedOption, setSelectedOption] = useState("");
  const reportInputRefs = useRef([]);

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

  const categories = [
    {
      id: 0,
      name: "Informasi Berlangganan",
      link: "/subcription-information",
    },
    {
      id: 1,
      name: "Lihat Riwayat Pembayaran",
      link : "/history-payment"
    },
    {
      id: 2,
      name: "Welcome Voucher",
      link: "/welcome-voucher"
    },
    {
      id: 3,
      name: "Favorite Type Skincare",
    },
  ];

  function Category() {
    return (
      <>
        {categories.map((el, index) => (
          <>
            <Link
              to={el.link}
              className="mb-3 pl-3 flex justify-between items-center mt-2"
              key={index}
              //   onClick={() => handleClickReport(index)}
            >
              <div className="flex">
                <input
                  type="radio"
                  value={el.id}
                  checked={selectedOption === el.name}
                  //   onChange={handleOptionChange}
                  className="mr-4 hidden"
                  name="selectReport"
                  //   ref={(el) => (reportInputRefs.current[index] = el)}
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
            </Link>
            <div className="border flex w-[100%] mb-4"></div>
          </>
        ))}
      </>
    );
  }

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
              Subscription
            </div>
            <div className="w-4/12"></div>
          </div>
        </div>

        <hr></hr>
        <Category />
      </div>
    </>
  );
}

export default SubscriptionMenu;
