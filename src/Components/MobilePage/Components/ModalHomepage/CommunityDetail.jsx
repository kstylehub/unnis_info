import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getCommunityById, postReply } from "../../../../Store/Actions/Actions";
import back from "../../../../assets/previous.svg";

function CommunityDetail() {
  const { id } = useParams();
  const [reply, setReply] = useState("");
  const dispatch = useDispatch();

  const dataComment = useSelector(
    (state) => state.ReducerCommunityById?.communityById
  );
  const user = useSelector((state) => state.ReducerUser?.dataUser);

  const dataToMap = Array.isArray(user?.dataMember)
    ? user?.dataMember
    : [user?.dataMember];
  const memberId = dataToMap.length > 0 ? dataToMap[0]?.id : null;

  useEffect(() => {
    dispatch(getCommunityById(id));
  }, [dispatch, id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (dataComment && memberId && reply) {
      let dataReply = {
        idThread: +dataComment.id,
        idMember: +memberId,
        reply: reply,
      };
      // console.log(dataReply);
      dispatch(postReply(dataReply));
      setReply(""); // Clear the input after submitting
      setTimeout(() => {
        window.location.reload();
      }, 500);
    }
  };

  const calculateDaysAgo = (dateString) => {
    const createdDate = new Date(dateString);
    const currentDate = new Date();
    const differenceInTime = currentDate - createdDate;
    const differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24));
    return differenceInDays;
  };

  return (
    <div className="bg-white h-screen flex-col flex overflow-hidden">
      <div className="top-0 sticky w-full z-20 bg-white pt-2 shadow">
        <div className="flex justify-center items-center py-3 px-5">
          <Link
            to={"/community"}
            className="w-4/12 flex items-center justify-start"
          >
            <img src={back} className="w-8 h-8" alt="Back" />
          </Link>
          <div className="w-4/12 text-lg font-semibold text-center">
            Comment
          </div>
          <div className="w-4/12"></div>
        </div>
      </div>
      <div className="flex-grow overflow-y-auto">
        <div key={dataComment?.id} className="bg-white flex flex-col">
          <div className="px-5 py-6 border-b-4">
            <div className="flex justify-between">
              <div className="flex">
                <div className="rounded-full flex justify-center items-center">
                  {dataComment?.photo_profile ? (
                    <img
                      src={dataComment.photo_profile}
                      className="rounded-full w-8 h-8 object-cover"
                      alt="Profile"
                    />
                  ) : (
                    <div className="w-8 h-8 bg-[#4ABFA1] rounded-full"></div>
                  )}
                </div>
                <div className="flex justify-center text-sm items-center pl-4 font-bold">
                  {dataComment?.user}
                </div>
              </div>
              <div className="">
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
            <div className="py-5 text-sm">{dataComment?.thread}</div>
            <div className="flex justify-between items-center text-sm">
              <div className="text-gray-400 text-xs">
                {calculateDaysAgo(dataComment?.createdDate)} hari yang lalu
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
                  {dataComment?.like}
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
                  {dataComment?.reply}
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
        </div>
        {dataComment?.reply_thread?.map((reply) => (
          <div key={reply.id} className="bg-white flex flex-col">
            <div className="px-5 py-4 border-t">
              <div className="flex justify-between">
                <div className="flex">
                  <div className="rounded-full flex justify-center items-center">
                    {reply.photo_profile ? (
                      <img
                        src={reply.photo_profile}
                        className="rounded-full w-8 h-8 object-cover"
                        alt="Profile"
                      />
                    ) : (
                      <div className="w-8 h-8 bg-[#4ABFA1] rounded-full"></div>
                    )}
                  </div>
                  <div className="flex justify-center text-sm items-center pl-4 font-bold">
                    {reply.user}
                  </div>
                </div>
                <div className="">
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
              <div className="py-3 text-sm">{reply.thread}</div>
              <div className="flex justify-between  text-sm">
                <div className="text-gray-400 text-xs">

                  {calculateDaysAgo(reply?.createdDate) > 0 ? calculateDaysAgo(reply?.createdDate)+" hari yang lalu" : "hari ini"} 
                </div>
                <div className="flex justify-center items-center gap-3 pe-1">
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
                    {reply.like}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-white p-1.5 sticky bottom-0 w-full border-t">
        <form onSubmit={handleSubmit}>
          <div className="flex items-center justify-center">
            <input
              className="w-10/12 h-12 px-4 focus:outline-none"
              placeholder="Write a comment"
              value={reply}
              onChange={(e) => setReply(e.target.value)}
            />
            <button
              type="submit"
              className="rotate-90 w-2/12 flex items-center justify-center"
            >
              <svg
                className=" w-[50%] text-[#4ABFA1] dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2a1 1 0 0 1 .932.638l7 18a1 1 0 0 1-1.326 1.281L13 19.517V13a1 1 0 1 0-2 0v6.517l-5.606 2.402a1 1 0 0 1-1.326-1.281l7-18A1 1 0 0 1 12 2Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CommunityDetail;
