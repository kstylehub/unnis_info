import { useDispatch, useSelector } from "react-redux";
import { getEvent } from "../../../../Store/Actions/Actions";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
function DetailEvent() {
  const { id } = useParams();

  const event = useSelector((state) => state.ReducerEventData.event);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEvent());
  }, []);
  const data = event?.dataEvent;

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
              className="absolute flex-justify space-y-2 overflow-y-auto w-full"
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
              <div className="bg-white rounded-none p-4 shadow-md">
                <h2 className="text-md mb-2">Komentar</h2>
                <div className="flex items-center gap-4 mb-4">
                  <input
                    className="flex flex-col text-start p-10 h-50 w-full border rounded-lg border-black"
                    type="text"
                    placeholder="Silahkan tinggalkan komentar terkait event ini."
                  ></input>
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
