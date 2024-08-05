import { Link, Outlet } from "react-router-dom";
import NavigationButtom from "../../NavigatonBottom/NavigationBottom";
import LogoUnnis from "../../../../assets/unnis_logo.png";
import Alert from "../../../../assets/Community/alert.svg";
import {
  dislikeThreadCommunity,
  getAllCommunity,
  likeThreadCommunity,
  reportThreadCommunity,
} from "../../../../Store/Actions/Actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import coin from "../../../../assets/Homepage/coin.png";
import CommunityTopBar from "../TopBar/CommunityTopBar";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Community() {
  const AllCommunity = useSelector(
    (state) => state.ReducerAllCommunity.Community
  );
  const getUser = useSelector((state) => state.ReducerUser.dataUser);
  const dataToMap = Array.isArray(getUser?.dataMember)
    ? getUser?.dataMember
    : [getUser?.dataMember];
  const memberId = dataToMap.length > 0 ? dataToMap[0]?.id : null;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCommunity());
    loadLikeStatusFromLocalStorage();
  }, [dispatch]);

  const [report, setReport] = useState("");
  const [likeStatus, setLikeStatus] = useState({}); // Object to store like status for each thread
  const [showActionModal, setShowActionModal] = useState(false);
  const [showReportModal, setShowReportModal] = useState(false);
  const [idMember, setIdMember] = useState(0);

  const handleAction = (e) => {
    e.preventDefault();
    if (idMember && memberId && report) {
      let dataReport = {
        idThread: +idMember,
        idMember: +memberId,
        reason_report: report,
      };
      try {
        dispatch(reportThreadCommunity(dataReport));
        toast.success("Report successfully submitted!");
        setReport("");
        setShowActionModal(false);
      } catch (error) {
        toast.error("Failed to submit report. Please try again.");
      }
    } else {
      toast.warn("Please fill in all fields before submitting.");
    }
  };

  const handleLike = (comId) => {
    if (comId && memberId) {
      let data = {
        idThread: +comId,
        idMember: +memberId,
      };
      try {
        setTimeout(() => {
          window.location.reload();
        }, 500);
        dispatch(likeThreadCommunity(data));
        setLikeStatus((prevStatus) => ({
          ...prevStatus,
          [comId]: true,
        }));
        saveLikeStatusToLocalStorage(comId, true);
      } catch (error) {
        toast.error("Failed to like thread. Please try again.");
      }
    }
  };

  const handleDislike = (comId) => {
    if (comId && memberId) {
      let data = {
        idThread: +comId,
        idMember: +memberId,
      };
      try {
        setTimeout(() => {
          window.location.reload();
        }, 500);
        dispatch(dislikeThreadCommunity(data));
        setLikeStatus((prevStatus) => ({
          ...prevStatus,
          [comId]: false,
        }));
        saveLikeStatusToLocalStorage(comId, false);
      } catch (error) {
        toast.error("Failed to dislike thread. Please try again.");
      }
    }
  };

  const saveLikeStatusToLocalStorage = (comId, status) => {
    const likeStatus = JSON.parse(localStorage.getItem('likeStatus')) || {};
    likeStatus[comId] = status;
    localStorage.setItem('likeStatus', JSON.stringify(likeStatus));
  };

  const loadLikeStatusFromLocalStorage = () => {
    const savedLikeStatus = JSON.parse(localStorage.getItem('likeStatus')) || {};
    setLikeStatus(savedLikeStatus);
  };

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
          <CommunityTopBar />
        </div>
        <div className="">
          {AllCommunity?.map((com) => (
            <div key={com.id} className="bg-white flex flex-col ">
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
                    <div className="flex justify-center text-sm items-center pl-4 font-bold">
                      {com.user}
                    </div>
                  </div>
                  <div
                    className=""
                    onClick={() => {
                      setShowReportModal(true);
                      setIdMember(com.id);
                    }}
                  >
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
                        d="M6 12h.01m6 0h.01m5.99 0h.01"
                      />
                    </svg>
                  </div>
                </div>
                <div className="py-5 text-sm">{com.thread}</div>
                <div className="flex justify-between items-center text-sm">
                  <div className="text-gray-400 text-xs">
                    {calculateDaysAgo(com.createdDate)} hari yang lalu
                  </div>
                  <div className="flex justify-center items-center gap-3">
                    {!likeStatus[com.id] ? (
                      <div
                        onClick={() => handleLike(com.id)}
                        className="flex justify-center items-center gap-1 cursor-pointer"
                      >
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
                    ) : (
                      <div
                        onClick={() => handleDislike(com.id)}
                        className="flex justify-center items-center gap-1 cursor-pointer"
                      >
                        <svg
                          className="w-6 h-6 text-red-600 dark:text-white"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="m12.75 20.66 6.184-7.098c2.677-2.884 2.559-6.506.754-8.705-.898-1.095-2.206-1.816-3.72-1.855-1.293-.034-2.652.43-3.963 1.442-1.315-1.012-2.678-1.476-3.973-1.442-1.515.04-2.825.76-3.724 1.855-1.806 2.201-1.915 5.823.772 8.706l6.183 7.097c.19.216.46.34.743.34a.985.985 0 0 0 .743-.34Z" />
                        </svg>
                        {com.like}
                      </div>
                    )}

                    <Link
                      to={`/community/thread/${com.id}`}
                      className="flex justify-center items-center gap-1"
                    >
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
                    </Link>
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
      {showActionModal && <ActionModal />}
      {showReportModal && <ReportModal />}
      <ToastContainer />
    </>
  );

  function ActionModal() {
    return (
      <form className="absolute inset-0 flex items-center justify-center z-20">
        <div className="bg-black opacity-50 absolute inset-0"></div>
        <div className="absolute bg-white p-8 rounded shadow-lg">
          <h2 className=" mb-6">Yakin ingin report thread?</h2>
          <div className="flex justify-center gap-6">
            <button
              onClick={handleAction}
              className="px-4 py-2 bg-[#4ABFA1] text-white rounded"
            >
              Report
            </button>
            <button
              onClick={() => setShowActionModal(false)}
              className=" px-4 py-2 bg-gray-200 rounded"
            >
              Batal
            </button>
          </div>
        </div>
      </form>
    );
  }

  function ReportModal() {
    const reasons = [
      "Konten tidak sesuai",
      "Menyinggung pihak lain",
      "Mengandung SARA",
      "Spam",
      "Lainnya",
    ];

    return (
      <div className="absolute inset-0 flex items-center justify-center z-50">
        <div className="bg-black opacity-50 absolute inset-0"></div>
        <div className="absolute bottom-0 left-0 right-0 bg-white  rounded-t-2xl shadow-lg z-10">
          <div className="flex justify-between  p-4 border-b">
            <h2 className="  font-bold uppercase">pilih alasan report akun</h2>
            <div className="" onClick={() => setShowReportModal(false)}>
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
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
                  d="M6 18 17.94 6M18 18 6.06 6"
                />
              </svg>
            </div>
          </div>

          <div className="flex flex-col justify-center p-4 gap-6 text-sm">
            {reasons.map((report) => (
              <div
                key={report}
                onClick={() => {
                  setReport(report);
                  setShowActionModal(true);
                  setShowReportModal(false);
                }}
              >
                {report}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Community;
