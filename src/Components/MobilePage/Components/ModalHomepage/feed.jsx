import { Link } from "react-router-dom";
import back from "../../../../assets/previous.svg";
import logo from "../../../../assets/logo.png";
import camera_pink from "../../../../assets/SkinAnalysis/camera_pink.png";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllFeed } from "../../../../Store/Actions/Actions";

function Feed() {
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
  const allInfluencer = useSelector(
    (state) => state.ReducerAllInfluencer.influencer || []
  );

  
  function AllFeed() {
    const dataFeed = feed?.data;
    const sortedData = dataFeed
    ?.slice()
    .sort((a, b) => new Date(b.createDate) - new Date(a.createDate));
    console.log(sortedData);
    
    let filterData;
    if (clickedButton === "All") {
      filterData = sortedData;
    } else {
      filterData = sortedData.filter((el) => el.category === clickedButton);
    }
    return (
      <>
        {filterData?.map((el) => (
          <div key={el.idFeed}>
            <Link to={`/feeddetail/${el.idFeed}`}>
              <img
                className="w-full rounded-3xl py-2 px-3"
                src={el.thumbnail}
                alt="Image"
              ></img>
            </Link>
          </div>
        ))}
      </>
    );
  }

  return (
    <>
      <div className="pb-2 h-full overflow-x-auto relative">
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
        <div className="flex overflow-x-auto ml-5 gap-3 text-sm scrollbar-hide py-2 text-center">
          <button
            className=" min-w-[4vw] items-center border-gray-400 border py-1 px-3 rounded-full"
            onClick={() => handleClick("All")}
            style={getButtonStyle("All")}
          >
            All
          </button>
          <button
            className="min-w-[7vw] items-center border-gray-400 border py-1 px-3 rounded-full"
            onClick={() => handleClick("Unnis A to Z")}
            style={getButtonStyle("Unnis A to Z")}
          >
            Unnis A to Z
          </button>
          <button
            className=" min-w-[7vw] items-center border-gray-400 border py-1 px-3 rounded-full"
            onClick={() => handleClick("New Report")}
            style={getButtonStyle("New Report")}
          >
            New Report
          </button>
          <button
            className="min-w-[7vw] items-center border-gray-400 border py-1 px-3 rounded-full"
            onClick={() => handleClick("Editor's Pick")}
            style={getButtonStyle("Editor's Pick")}
          >
            Editor's Pick
          </button>
          <button
            className="min-w-[7vw] items-center border-gray-400 border py-1 px-3 rounded-full"
            onClick={() => handleClick("Unnis Letter")}
            style={getButtonStyle("Unnis Letter")}
          >
            Unnis Letter
          </button>
          <button
            className="min-w-[7vw] items-center border-gray-400 border py-1 px-3 rounded-full"
            onClick={() => handleClick("Event Lain")}
            style={getButtonStyle("Event Lain")}
          >
            Event Lain
          </button>
        </div>
        <div>
          <AllFeed />
        </div>
      </div>
    </>
  );
}

export default Feed;
