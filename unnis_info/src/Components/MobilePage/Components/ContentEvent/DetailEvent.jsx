import { useDispatch, useSelector } from "react-redux";
import { getEvent } from "../../../../Store/Actions/Actions";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import CommentBox from "./CommentBox";
import { getCommentEvent } from "../../../../Store/Actions/Actions";
function DetailEvent() {
  const { id } = useParams();

  const event = useSelector((state) => state.ReducerEventData.event);
  const comment = useSelector((state) => state.ReducerCommentEvent.event);
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEvent());
    dispatch(getCommentEvent(id));
  }, []);

  const data = event?.dataEvent;
  const dataComment = comment?.dataReview;
  console.log(dataComment,">>>ini data komen");

  const dataDetail = data?.filter((el) => {
    return el.id == id;
  });
  

  function Display() {
    return (
      <>
        {dataDetail?.map((el) => {
          const lastDate = el.startDate;
          const firstDate = el.endDate;
          const lastDateObj = new Date(lastDate);
          const firstDateObj = new Date(firstDate);
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

          return (
            <div
              className="absolute flex-justify space-y-2 w-full h-screen overflow-y-auto"
              key={el.id}
            >
              <div className="font-sans text-lg mb-1">
                <h1>{el.title}</h1>
              </div>
              <div className="text-gray-700 text-sm border-b-2 w-auto">
                <h1>{el.subtitle}</h1>
              </div>
              <div className="grid lg: grid-cols-2 border-b-2">
                <div className="font-sans text-sm mb-1">Periode Event</div>
                <div className="font-sans text-sm mb-1">
                  {formattedFirstDate} ~ {formattedLastDate}
                </div>
              </div>
              <div className="grid grid-cols-2 border-b-4 border-pink-200">
                <div className="flex justify-center border-r-2">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="w-4 h-4"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M15.75 4.5a3 3 0 11.825 2.066l-8.421 4.679a3.002 3.002 0 010 1.51l8.421 4.679a3 3 0 11-.729 1.31l-8.421-4.678a3 3 0 110-4.132l8.421-4.679a3 3 0 01-.096-.755z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="text-sm">Share</div>
                </div>
                <div className="flex justify-center">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-4 h-4"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                      />
                    </svg>
                  </div>
                  <div className="text-sm">Likes</div>
                </div>
              </div>
              <img
                className="w-full border-b-4 border-pink-200"
                src={el.thumbnail}
                alt="img"
              ></img>
              <div>
                <CommentBox />
              </div>
              <div>
                <div className="border rounded-lg border-hidden p-2 mt-4">
                  {dataComment.map((el, index) => (
                    <div key={index} className="flex items-start flex-col mb-2">
                      <div className="bg-gray-300 h-10 w-10 rounded-full mb-2"></div>
                      <div className="flex justify-between w-full">
                        <div>
                          <p className="font-bold">User {index + 1}</p>
                          <p className="text-sm">{el.descReviewer}</p>
                          {/* <p className="text-xs text-gray-500">
                            {getTimeAgo(new Date())}
                          </p> */}
                        </div>
                        {/* {userComments[index] && (
                          <div className="relative">
                            <button
                              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 rounded"
                              onClick={() => handleEdit(index)}
                            >
                              Edit
                            </button>
                            {selectedCommentIndex === index && (
                              <div className="absolute top-0 right-8 flex flex-col space-y-2 p-2 bg-white border border-gray-300 rounded-lg shadow">
                                <button
                                  className="text-red-500 hover:text-red-600 font-bold"
                                  onClick={() => handleDelete(index)}
                                >
                                  Delete
                                </button>
                                <button
                                  className="text-yellow-500 hover:text-yellow-600 font-bold"
                                  onClick={() => handleReport(index)}
                                >
                                  Report
                                </button>
                              </div>
                            )}
                          </div>
                        )} */}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  }
  return <Display />;
}

export default DetailEvent;
