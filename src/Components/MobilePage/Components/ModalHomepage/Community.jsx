import { Link, Outlet } from "react-router-dom";
import NavigationButtom from "../../NavigatonBottom/NavigationBottom";
import LogoUnnis from "../../../../assets/unnis_logo.png";
import Alert from "../../../../assets/Community/alert.svg";
import { getAllCommunity } from "../../../../Store/Actions/Actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import coin from "../../../../assets/Homepage/coin.png";
import CommunityTopBar from "../TopBar/CommunityTopBar";

function Community() {
  const AllCommunity = useSelector(
    (state) => state.ReducerAllCommunity.Community
  );
  const getUser = useSelector((state) => state.ReducerUser.dataUser);
  const dataUser = getUser?.dataMember?.[0];

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCommunity());
  }, []);

  // Function to calculate the difference in days between today and a given date
  const calculateDaysAgo = (dateString) => {
    const createdDate = new Date(dateString);
    const currentDate = new Date();
    const differenceInTime = currentDate - createdDate;
    const differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24));
    return differenceInDays;
  };

  return (
    <>
      <div className="bg-white relative">
        <div className="pt-3 pb-1 sticky top-0 z-20 bg-white shadow">
        <CommunityTopBar/>
        </div>
        <div className="">
          {AllCommunity?.map((com) => (
            <div key={com} className="bg-white flex flex-col ">
              <div className="px-5 py-6">
                <div className="flex justify-between">
                  <div className="flex">
                    <div className="rounded-full flex justify-center items-center ">
                      {com.photo_profile ? (
                        <img
                          src={com.photo_profile}
                          className="rounded-full w-8 h-8 object-cover"
                        />
                      ) : (
                        <img className="w-8 h-8 bg-[#4ABFA1] rounded-full" />
                      )}
                    </div>
                    <div className="flex justify-center text-sm items-center pl-4">
                      {com.user}
                    </div>
                  </div>
                  <div className="">
                    <svg
                      class="w-6 h-6 text-gray-800 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-width="2"
                        d="M6 12h.01m6 0h.01m5.99 0h.01"
                      />
                    </svg>
                  </div>
                </div>
                <div className="py-5 text-sm">{com.thread}</div>
                <div className="flex justify-between items-center text-sm">
                  <div className="">
                    {calculateDaysAgo(com.createdDate)} hari yang lalu
                  </div>
                  <div className="flex justify-center items-center gap-3">
                    <div className="flex justify-center items-center gap-1">
                      <svg
                        className="w-6 h-6 text-[#4ABFA1] dark:text-white"
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
                          d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
                        />
                      </svg>
                      {com.like}
                    </div>
                    <div className="flex justify-center items-center gap-1">
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
                          d="M7 9h5m3 0h2M7 12h2m3 0h5M5 5h14a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-6.616a1 1 0 0 0-.67.257l-2.88 2.592A.5.5 0 0 1 8 18.477V17a1 1 0 0 0-1-1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z"
                        />
                      </svg>
                      {com.reply}
                    </div>
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
                        strokeWidth="2"
                        d="M7.926 10.898 15 7.727m-7.074 5.39L15 16.29M8 12a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm12 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm0-11a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="py-1 bg-gray-200"></div>
            </div>
          ))}
          <div className="bg-white pt-2.5 pb-1 px-1.5 sticky bottom-0 z-20">
            <NavigationButtom />
          </div>
        </div>
      </div>
    </>
  );
}

export default Community;
