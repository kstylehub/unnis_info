import back from "../../../../assets/previous.svg";
import logo from "../../../../assets/logo.png";
import camera_pink from "../../../../assets/SkinAnalysis/camera_pink.png";
import Banner from "../../../../assets/Recycle/img_banner_recycle.png";
import Gold from "../../../../assets/Recycle/ic_gold_cup.svg";
import Silver from "../../../../assets/Recycle/ic_silver_cup.svg";
import Bronze from "../../../../assets/Recycle/ic_bronze_cup.svg";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getRecycleHistoryById,
  getVRecycleLeaderboard,
} from "../../../../Store/Actions/Actions";
import { Link } from "react-router-dom";

function Recycle() {
  const recycleLeaderboard = useSelector(
    (state) => state.ReducerRecycleLeaderboard.recycleLeaderboard.dataReward
  );
  const recycleHistory = useSelector(
    (state) => state.ReducerRecycleHistory.recycleHistory
  );
  console.log("data recycle >> ", recycleHistory);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVRecycleLeaderboard());
    dispatch(getRecycleHistoryById(32));
  }, [dispatch]);

  const formatDate = (dateString) => {
    const options = { day: "numeric", month: "short", year: "numeric" };
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB", options);
  };

  function Leaderboard() {
    const dataLeaderboard = recycleLeaderboard;
    const sortedData = dataLeaderboard
      ?.slice()
      .sort((a, b) => b.count - a.count);
    let index = 1;

    return (
      <>
        {sortedData?.map((el) => {
          return (
            <div key={el.idHistory} className="px-4 py-1.5">
              <div className="bg-white rounded-full px-5 py-3 shadow-lg">
                <div className="flex justify-between items-center">
                  <div className="flex gap-4 items-center">
                    <div className="">
                      <div className="">{index++}</div>
                    </div>
                    {el.photo ? (
                      <img
                        className="rounded-full w-10 h-10 object-cover"
                        src={el.photo}
                        alt="Image"
                      ></img>
                    ) : (
                      <div className="rounded-full w-10 h-10 bg-[#4ABFA1]"></div>
                    )}

                    <div className="">{el.username}</div>
                  </div>

                  <div className="font-semibold text-[#818181] flex justify-end items-center">
                    {el.count} points
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  }

  function History() {
    const dataHistory = recycleHistory;
    const sortedData = dataHistory
      ?.slice()
      .sort((b, a) => b.dateEvent - a.dateEvent);
    return (
      <>
        {sortedData?.map((el) => {
          return (
            <div key={el.idHistory} className="px-4 py-1">
              <div className=" px-5 py-2 ">
                <div className="flex justify-between items-center">
                  <div className="">{formatDate(el.dateEvent)}</div>
                  <div className="font-semibold text-[#818181] flex justify-end items-center">
                    {el.count} points
                  </div>{" "}
                  <div className="border border-[#4ABFA1] rounded-full px-3 py-0.5 text-[#4ABFA1]">
                    Klaim
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  }

  return (
    <div className=" h-screen flex-col flex relative overflow-hidden">
      <div className="top-0 sticky lg:px-8 px-4 w-full bg-white pt-2 border-b-2 border-[#E0E0E0]">
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
      <div className=" flex- overflow-y-scroll">
        <div className="w-full">
          <div className="">
            <img src={Banner} className="w-full" />
          </div>
        </div>
        <div className="bg-[#cacaca] p-1" />
        <div className="flex justify-center px-6 py-5">
          <div className="w-1/12">
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeWidth="2"
                d="M11.083 5.104c.35-.8 1.485-.8 1.834 0l1.752 4.022a1 1 0 0 0 .84.597l4.463.342c.9.069 1.255 1.2.556 1.771l-3.33 2.723a1 1 0 0 0-.337 1.016l1.03 4.119c.214.858-.71 1.552-1.474 1.106l-3.913-2.281a1 1 0 0 0-1.008 0L7.583 20.8c-.764.446-1.688-.248-1.474-1.106l1.03-4.119A1 1 0 0 0 6.8 14.56l-3.33-2.723c-.698-.571-.342-1.702.557-1.771l4.462-.342a1 1 0 0 0 .84-.597l1.753-4.022Z"
              />
            </svg>
          </div>
          <div className="w-10/12 flex flex-col">
            <div className="font-bold">Reward History</div>
            <div className="text-xs pe-4">
              * Click the claim button to redeem Reward Points for Coins that
              you can use.
            </div>
          </div>
          <div className="w-2/12 flex items-end text-xs gap-0.5 text-[#9e9e9e]">
            View All
            <svg
              className=" w-4 h-4 text-[#9e9e9e] dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m9 5 7 7-7 7"
              />
            </svg>
          </div>
        </div>{" "}
        <History />
        <hr />
        <div className="bg-[#e8e8e8] h-[28vw]">
          <div className="flex text-start px-6 py-5 font-bold gap-2">
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
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
                d="m7.171 12.906-2.153 6.411 2.672-.89 1.568 2.34 1.825-5.183m5.73-2.678 2.154 6.411-2.673-.89-1.568 2.34-1.825-5.183M9.165 4.3c.58.068 1.153-.17 1.515-.628a1.681 1.681 0 0 1 2.64 0 1.68 1.68 0 0 0 1.515.628 1.681 1.681 0 0 1 1.866 1.866c-.068.58.17 1.154.628 1.516a1.681 1.681 0 0 1 0 2.639 1.682 1.682 0 0 0-.628 1.515 1.681 1.681 0 0 1-1.866 1.866 1.681 1.681 0 0 0-1.516.628 1.681 1.681 0 0 1-2.639 0 1.681 1.681 0 0 0-1.515-.628 1.681 1.681 0 0 1-1.867-1.866 1.681 1.681 0 0 0-.627-1.515 1.681 1.681 0 0 1 0-2.64c.458-.361.696-.935.627-1.515A1.681 1.681 0 0 1 9.165 4.3ZM14 9a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
              />
            </svg>
            Leaderboard
          </div>
          <Leaderboard />
        </div>
      </div>
      <div className="left-0 right-0 buttom-0 sticky justify-center py-4 bg-[#4ABFA1] items-center px-3">
        <div className="justify-center items-center flex text-white text-lg">
          Get Rewards
        </div>
      </div>
    </div>
  );
}

export default Recycle;
