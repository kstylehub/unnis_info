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
import ModalSort from "../Components/ModalCategory/ModalSort";
import bg from "../../../assets/bg.jpg";
import { useDispatch, useSelector } from "react-redux";
import { getAllReviewSubs } from "../../../Store/Actions/Actions";
import ModalReport from "../Components/ModalCategory/ModalReportComment";

function Subscribe() {
  const dataReviewSub = useSelector(
    (state) => state.ReducerSubReview.dataSubReview
  );
  const dispatch = useDispatch();
  const [isVisible, setIsVisible] = useState(true);
  const [isButton, setIsButton] = useState(true);
  const [showModalReport, setShowModalReport] = useState(false);
  const [textReport, setTextReport] = useState("")
  const [sortBy, setSortBye] = useState()
  const [idReview, setIdReview] = useState(0)

  useEffect(() => {
    dispatch(getAllReviewSubs());
  }, []);

  const filteredData =
    dataReviewSub && dataReviewSub.dataReview
      ? sortBy == "Top Likes" ? dataReviewSub.dataReview.sort((a,b)=> +b.likeReview - +a.likeReview) : sortBy == "Newest" ? dataReviewSub.dataReview.sort((a, b) => new Date(b.createDate) - new Date(a.createDate)) :
      dataReviewSub.dataReview
      : [];

    
  // console.log(dataReviewSub);
  const handleReport = (id) => {
    setIdReview(id)
    setShowModalReport(!showModalReport)
  }
  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    const isVisible = true; // Ganti dengan posisi scroll yang sesuai

    setIsVisible(isVisible);
  };

  const handleButtonSubs = (e) => {
    if (e == 1) {
      setIsButton(true);
    } else {
      setIsButton(false);
    }
  };

 

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function sortByLike(val) {
    // setLikeCategory(val);
    setSortBye(val)
  }

  function reportBySelect(val) {
    setTextReport(val)
  }

  function toggleModalReport(){
    setShowModalReport(!showModalReport)
  }
  // console.log(filteredData);
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
          <div className="flex my-1 justify-center items-center space-x-16 text-[#8e9093] bg-white text-xs">
            <div
              className={`${
                isButton == true ? "text-black border-black" : ""
              } border rounded-full px-3 py-1  flex text-center justify-center items-center`}
            >
              <button type="button" onClick={() => handleButtonSubs(1)}>
                <p className={`${isButton == true ? "text-black" : ""}`}>
                  Subscription
                </p>
              </button>
            </div>
            <div
              className={`${
                isButton == false ? "text-black border-black" : ""
              } border rounded-full px-3 py-1 flex text-center justify-center items-center`}
            >
              <button type="button" onClick={() => handleButtonSubs(2)}>
                <p className={`${isButton == false ? "text-black" : ""}`}>
                  Review
                </p>
              </button>
            </div>
          </div>
        </div>
        <di className="border flex my-2"></di>

        <div className="overflow-y-auto">
          {/* SUBSCRIPTION */}
          <div className={`${isButton == true ? "" : "hidden"}`}>
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

          {/* REVIEW */}
          <div className={`${isButton == true ? "hidden" : ""}`}>
            <ModalReport  isOpen={showModalReport} onClose={toggleModalReport} idReview={idReview}/>
            <div className="flex justify-end mr-4">
              <ModalSort sortByLike={sortByLike} />
            </div>
            {filteredData.map((el)=> {
              return (
                <>
                  <div className="m-4">
                    <div className="flex justify-between">
                      <div className="flex gap-5 items-center">
                        <div className="w-12 h-12 rounded-full flex justify-center overflow-hidden">
                          <img
                            src="https://yt3.ggpht.com/ytc/AIf8zZT8EkSCvgiqhKo2Oo72obw0m-IPAKjQYW9aErM_1g=s88-c-k-c0x00ffffff-no-rj"
                            class="object-cover w-full h-full"
                          />
                        </div>
                        <div className="text-sm">
                          <p>{el.nameReviewer}</p>
                          <p className="text-gray-500">0 tahun | -| -</p>
                        </div>
                      </div>
                      <div className="flex text-xs items-center gap-2">
                        <svg
                          viewBox="0 0 1024 1024"
                          fill="red"
                          height="1em"
                          width="1em"
                        >
                          <path d="M923 283.6a260.04 260.04 0 00-56.9-82.8 264.4 264.4 0 00-84-55.5A265.34 265.34 0 00679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 00-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z" />
                        </svg>
                        <p>{el.likeReview}</p>
                        <p>suka</p>
                      </div>
                    </div>
                    <div className="mt-5">
                      <img src={el.imageReview} />
                      <div className="mt-5">
                        <div className="">
                          <p className="text-justify">
                            {el.descReviewer}
                            <button className="text-red-600 pl-2" type="button">
                              close {">"}
                            </button>
                          </p>
                        </div>
                        <button className="text-xs text-red-600 mt-5 underline" type="button" onClick={()=>handleReport(el.id)}>
                          Laporan Ulasan
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex border my-5"></div>
                </>
              )
            })}
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
