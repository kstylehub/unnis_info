import { Link } from "react-router-dom";
import back from "../../../../assets/previous.svg";
import logo from "../../../../assets/logo.png";
import camera_pink from "../../../../assets/SkinAnalysis/camera_pink.png";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllFeed } from "../../../../Store/Actions/Actions";

function Feed() {
  // Modal
  const [showModal, setShowModal] = useState(false);

  const handleCameraClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  // Active Button
  const [clickedButton, setClickedButton] = useState("all");

  const handleClick = (button) => {
    setClickedButton(button);
  };

  const getButtonStyle = (button) => {
    if (clickedButton === button) {
      return {
        color: "black",
        border: "1px solid black",
      };
    } else {
      return {
        color: "gray",
      };
    }
  };

  // Connect database
  const feed = useSelector((state) => state.ReducerFeed.dataFeed);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllFeed());
  }, [dispatch]);

  function AllFeed() {
    const data = feed?.data;
    return (
      <>
        {data?.map((el) => (
          <Link to={handleCameraClick} key={el.id} onClick={handleCameraClick}>
            <img
              className="w-full rounded-3xl py-2 px-3"
              src={el.thumbnail}
              alt="Image"
            />
          </Link>
        ))}
      </>
    );
  }

  return (
    <>
      <div className="pb-2 h-full overflow-x-auto">
        <div className="top-0 sticky lg:px-8 px-4 w-full z-20 bg-white pt-2">
          <div className="flex justify-between">
            <div className="self-center">
              <Link to={"/"}>
                <img src={back} className="w-full" alt="Back" />
              </Link>
            </div>
            <div className="self-center flex justify-center">
              <img src={logo} className="w-4/12" alt="Logo" />
            </div>
            <div className="self-center">
              <img src={camera_pink} className="w-5/12" alt="Camera" />
            </div>
          </div>
          <div className="flex justify-center space-x-16 text-[#8e9093] bg-white text-sm">
            <div className="py-2">
              <Link to={"/event"}>
                <h3>Event</h3>
              </Link>
            </div>
            <div className="py-2">
              <Link to={"/feed"}>
                <h3>Feed</h3>
              </Link>
            </div>
            <div className="py-2">
              <Link to={"/subscribe"}>
                <h3>Subscription</h3>
              </Link>
            </div>
            <div className="py-2">
              <Link to={"/recycle"}>
                <h3>Recycle</h3>
              </Link>
            </div>
          </div>
        </div>
        <hr className="pb-2" />

        <div className="flex overflow-x-auto px-4 justify-center items-center lg:space-x-6 space-x-2 text-sm scrollbar-hide pb-1">
          <div
            className="border-gray-400 border py-1 px-3 rounded-lg"
            onClick={() => handleClick("all")}
            style={getButtonStyle("all")}
          >
            <button className="text-sm">All</button>
          </div>
          <div
            className="border-gray-400 border py-1 px-3 rounded-lg"
            onClick={() => handleClick("UnnisAtoZ")}
            style={getButtonStyle("UnnisAtoZ")}
          >
            <button className="text-sm">Unnis A to Z</button>
          </div>
          <div
            className="border-gray-400 border py-1 px-3 rounded-lg"
            onClick={() => handleClick("report")}
            style={getButtonStyle("report")}
          >
            <button className="text-sm">New Report</button>
          </div>
          <div
            className="border-gray-400 border py-1 px-3 rounded-lg"
            onClick={() => handleClick("editor")}
            style={getButtonStyle("editor")}
          >
            <button className="text-sm">Editor's Pick</button>
          </div>
          <div
            className="border-gray-400 border py-1 px-3 rounded-lg"
            onClick={() => handleClick("letter")}
            style={getButtonStyle("letter")}
          >
            <button className="text-sm">Unnis Letter</button>
          </div>
        </div>

        <div>
          <AllFeed />
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-opacity-70 bg-black flex justify-center items-center z-50">
          <div className="rounded-lg bg-white text-center">
            <div className="py-8 lg:px-6 px-4">
              <h5 className="lg:mb-2 text-sm font-semibold leading-tight">
                Fitur ini hanya dapat digunakan pada aplikasi UNNIS
              </h5>
            </div>
            <hr />
            <button
              className="lg:py-4 py-3 inline-block rounded px-6 text-sm text-green-600"
              onClick={handleCloseModal}
              type="button"
            >
              Kembali
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Feed;
