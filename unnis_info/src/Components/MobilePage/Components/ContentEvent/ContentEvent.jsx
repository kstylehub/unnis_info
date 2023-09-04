import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getEvent } from "../../../../Store/Actions/Actions";
import { CircleLoader,RingLoader } from "react-spinners";
import { Link } from "react-router-dom";

function ContentEvent() {
  const event = useSelector((state) => state.ReducerEventData.event);
  const loading = useSelector((state) => state.ReducerEventData.loading);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEvent());
  }, []);
  const data = event?.dataEvent;
 

 

  function AllEvent() {
    return data?.map((el) => {
      const lastDate = el.endDate;
      const firstDate = el.startDate;
      const lastDateObj = new Date(lastDate);
      const firstDateObj = new Date(firstDate)
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
      
      const formattedFirstDate = `${firstday}-${firstMonth}-${firstyear}`
      function hitungSelisihHari(firstDate, lastDate) {
        const start = new Date(firstDate);
        const end = new Date(lastDate);
        const selisihMs = end - start;
        const selisihHari = selisihMs / (1000 * 60 * 60 * 24);
        return selisihHari
      }
      function formatSelisihHari(firstDate, lastDate) {
        const selisihHari = hitungSelisihHari(firstDate, lastDate);
        return `D-${Math.floor(selisihHari)}`;
      }

      const formattedSelisihHari = formatSelisihHari(firstDate,lastDate);
      
      return (
        <>
          <Link
            to={`/detail-event/${el.id}`}
            className="relative max-w rounded overflow-hidden shadow-lg hover:shadow-xl transition duration-100"
          >
            <img
              className="w-full border-t-4 border-pink-200"
              src={el.thumbnail}
              alt="Image"
            ></img>
            <div className="px-6 py-4 flex-justify space-y-1 border-b-4 border-pink-200">
              <div className="font-sans text-m mb-1">{el.title}</div>
              <p className="text-gray-700 text-s w-full">{el.subtitle}</p>
              <div className="flex space-x-2">
                <div>
                  <p className="text-red-600 text-xs px-2 py-1/2 border border-red-600 rounded-full">
                    {formattedSelisihHari}
                  </p>
                </div>
                <div>
                  <p className="text-gray-700 text-xs">{formattedFirstDate} ~ {formattedLastDate}</p>
                </div>
              </div>
            </div>
            </Link>
          </>
      );
    });
  }

  return (
    <div className="max-w-screen space-y-2 overflow-y-auto">
      <div className="flex px-10  py-2 overflow-x-auto min-w-100 w-full space-x-4">
        <div>
          <button className="px-4 bg-transparant hover:bg-slate-300 text-grey-300 border border-black rounded-full">
            All
          </button>
        </div>
        <div>
          <button className="px-4 bg-transparant hover:bg-slate-300 text-grey-300 border border-black rounded-full">
            Unnis
          </button>
        </div>
        <div>
          <button className="px-4 bg-transparant hover:bg-slate-300 text-grey-300 border border-black rounded-full">
            Supporters
          </button>
        </div>
        <div>
          <button className="px-4 bg-transparant min-w-max hover:bg-slate-300 text-grey-300 border border-black rounded-full">
            Event Lain
          </button>
        </div>
      </div>
      <div className="">
      {loading ? ( <div className="flex justify-center items-center h-screen">
            <CircleLoader color="#0000ff" size={30} /> </div>) : (
               <AllEvent />
            )}
      </div>
    </div>
  );
}
export default ContentEvent;
