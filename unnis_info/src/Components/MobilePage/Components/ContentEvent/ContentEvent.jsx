import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEvent } from "../../../../Store/Actions/Actions";
import { Link } from "react-router-dom";

function ContentEvent() {
  const event = useSelector((state) => state.ReducerEventData.event);
  const loading = useSelector((state) => state.ReducerEventData.loading);
  const dispatch = useDispatch();

  const [activeButton, setActiveButton] = useState("All");

  useEffect(() => {
    dispatch(getEvent());
  }, [dispatch]);

  const data = event?.dataEvent;

  // Sort the events by end date in descending order
  const sortedData = data
    ?.slice()
    .sort((a, b) => new Date(b.endDate) - new Date(a.endDate));

  function AllEvent() {
    return sortedData?.map((el) => {
      const lastDate = el.endDate;
      const firstDate = el.startDate;
      const lastDateObj = new Date(lastDate);
      const firstDateObj = new Date(firstDate);
      const currentDate = new Date();
      const lastday = lastDateObj.getDate().toString().padStart(2, "0");
      const firstday = firstDateObj.getDate().toString().padStart(2, "0");
      const monthNames = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "Mei",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Okt",
        "Nov",
        "Des",
      ];
      const lastMonth = monthNames[lastDateObj.getMonth()];
      const firstMonth = monthNames[firstDateObj.getMonth()];
      const lastyear = lastDateObj.getFullYear();
      const firstyear = firstDateObj.getFullYear();
      const formattedLastDate = `${lastday}-${lastMonth}-${lastyear}`;
      const formattedFirstDate = `${firstday}-${firstMonth}-${firstyear}`;

      // Calculate remaining days until event ends
      function calculateRemainingDays(currentDate, endDate) {
        const end = new Date(endDate);
        const diffTime = end - currentDate;
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays;
      }

      const remainingDays = calculateRemainingDays(currentDate, lastDate);
      const formattedRemainingDays =
        remainingDays >= 0
          ? `Event will end in ${remainingDays} days`
          : "Event no longer available";

      const eventEnded = currentDate > lastDateObj;

      return (
        <div
          key={el.id}
          className={`relative max-w rounded overflow-hidden shadow-lg ${
            eventEnded ? "opacity-50" : "hover:shadow-xl"
          } transition duration-300`}
        >
          <div className="">
            <Link to={`/event/detailevent/${el.id}`}>
              <div className="relative">
                <img className="w-full" src={el.thumbnail} alt="Image" />
                {eventEnded && (
                  <div className="absolute inset-0 bg-[#040404b2] bg-opacity-75 flex items-center justify-center">
                    <span className="text-white text-lg">
                      Event no longer available
                    </span>
                  </div>
                )}
              </div>
              <div className="px-6 py-3 justify-center items-center">
                <div className="font-sans font-bold uppercase">{el.title}</div>
                <p
                  className="text-gray-700 text-s w-full text-sm"
                  style={{
                    display: "-webkit-box",
                    WebkitLineClamp: 1,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    lineHeight: "1.4",
                  }}
                >
                  {el.subtitle}
                </p>
                <div className="flex items-center justify-between space-x-2 py-2 text-xs">
                  <div>
                    <p className="text-gray-700">
                      {formattedFirstDate} ~ {formattedLastDate}
                    </p>
                  </div>
                  <div className="flex">
                    {!eventEnded ? (
                      <p className="text-red-600 text-xs px-2 py-1/2 border border-red-600 rounded-full">
                        {formattedRemainingDays}
                      </p>
                    ) : (
                      " "
                    )}
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      );
    });
  }

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  const getButtonStyle = (button) => {
    return activeButton === button
      ? "px-4 py-0.5 bg-transparan border border-black rounded-full text-black"
      : "px-4 py-0.5 bg-transparan border border-gray-400 rounded-full text-[#8e9093]";
  };

  return (
    <div className="max-w-screen space-y-2 overflow-y-auto">
      <div className="flex justify-center items-center py-2 overflow-x-auto min-w-100 w-full text-sm space-x-7">
        <div className="flex justify-center items-center">
          <button
            className={getButtonStyle("All")}
            onClick={() => handleButtonClick("All")}
          >
            All
          </button>
        </div>
        <div className="flex justify-center">
          <button
            className={getButtonStyle("Unnis")}
            onClick={() => handleButtonClick("Unnis")}
          >
            Unnis
          </button>
        </div>
        <div className="flex justify-center">
          <button
            className={getButtonStyle("Supporters")}
            onClick={() => handleButtonClick("Supporters")}
          >
            Supporters
          </button>
        </div>
        <div className="flex justify-center">
          <button
            className={getButtonStyle("Event Lain")}
            onClick={() => handleButtonClick("Event Lain")}
          >
            Event Lain
          </button>
        </div>
      </div>
      <div className="">
        <AllEvent />
      </div>
    </div>
  );
}

export default ContentEvent;
