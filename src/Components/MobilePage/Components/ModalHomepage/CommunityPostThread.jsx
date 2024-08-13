import { Link, useNavigate } from "react-router-dom";
import back from "../../../../assets/previous.svg";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { postThread } from "../../../../Store/Actions/Actions";

function CommunityPostThread() {
  const [thread, setThread] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.ReducerUser?.dataUser);
  const dataUser = Array.isArray(user?.dataMember)
    ? user?.dataMember
    : [user?.dataMember];
  const memberId = dataUser.length > 0 ? dataUser[0]?.id : null;
  const user2 = dataUser.length > 0 ? dataUser[0] : null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (memberId && thread) {
      let dataThread = {
        idMember: +memberId,
        thread: thread,
      };
      try {
        dispatch(postThread(dataThread));
        setThread("");
        navigate('/community');
      } catch (error) {
        toast.error("Failed to submit report. Please try again.");
      }
    } else {
      toast.warn("Please fill in all fields before submitting.");
    }
  };

  function getBirthDateDescription() {
    if (dataUser) {
      if (dataUser?.birthDate <= 2010) {
        return "10-an";
      } else if (dataUser?.birthDate <= 2000) {
        return "20-an";
      } else if (dataUser?.birthDate <= 1990) {
        return "30-an";
      } else if (dataUser?.birthDate <= 1980) {
        return "40-an";
      } else if (dataUser?.birthDate <= 1970) {
        return "50-an";
      } else if (dataUser?.birthDate <= 1960) {
        return "60-an";
      } else {
        return dataUser?.birthDate;
      }
    }
    return "";
  }

  return (
    <>
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
              Post Thread
            </div>
            <div className="w-4/12"></div>
          </div>
        </div>
        <div className="flex flex-col p-5">
          <div className="flex gap-3">
            <div className="rouended-full h-10 w-10">
              {user2?.photoProfile ? (
                <img src={user2.photoProfile}></img>
              ) : (
                <div className="w-10 h-10 rounded-full bg-[#4ABFA1]"></div>
              )}
              <img src={user2.photoProfile}></img>
            </div>
            <div className="flex flex-col">
              <div className="text-sm font-semibold">{user2?.username}</div>
              <div className="text-sm ">
                {user2.birthDate !== 0
                  ? getBirthDateDescription(user2?.birthDate)
                  : " - "}
                / {user2?.skinType ? user2?.skinType : "-"} /
                {user2?.skinTone ? user2?.skinTone : "-"}
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="gap-3 flex flex-col pt-4">
            <div className="flex items-center justify-center">
              <textarea
                className=" px-4 border border-gray-500 w-full rounded pt-2 focus:outline-none"
                rows="4"
                placeholder="What do you want to talk about?"
                value={thread}
                onChange={(e) => setThread(e.target.value)}
              />
            </div>
            <div className="w-full flex justify-end">
              <button
                type="submit"
                className=" text-white bg-[#4ABFA1] py-2 px-5 rounded"
              >
                Post
              </button>
            </div>
          </form>
        </div>
        <ToastContainer />
      </div>
    </>
  );
}

export default CommunityPostThread;
