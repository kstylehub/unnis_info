import { useDispatch, useSelector } from "react-redux";
import { getEvent, postCommentEvent } from "../../../../Store/Actions/Actions";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
// import CommentBox from "./CommentBox";
import { getCommentEvent } from "../../../../Store/Actions/Actions";
import ImageComponent from "./ImageComponent";
import back from "../../../../assets/previous.svg";

function DetailEvent() {
  const { id } = useParams();

  const event = useSelector((state) => state.ReducerEventData.event);
  const comment = useSelector((state) => state.ReducerCommentEvent.event);
  const user = useSelector((state) => state.ReducerUser.dataUser);
  const idMember = user[0].id;
  console.log(user,">>>> ini user");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEvent());
    dispatch(getCommentEvent(id));
  }, [id]);

  const data = event?.dataEvent;
  const dataComment = comment?.dataReview;

  const dataDetail = data?.filter((el) => {
    return el.id == id;
  });

  const idEvent = dataDetail?.[0].id;
  const getTimeAgo = (date) => {
    const now = new Date();
    const commentDate = new Date(date);

    const diffTime = Math.abs(now - commentDate);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    return diffDays === 0 ? "hari ini" : `${diffDays} hari sebelumnya`;
  };
  const imageUrl =
    "https://wordpressunnis.s3.ap-southeast-1.amazonaws.com/images/member/623c20cfd6e5f001c0a829be.jpg";

  function CommentBox(dataId) {
    const [inputComment, setInputComment] = useState("");
    function HandleChange(e) {
      setInputComment(e.substring(0, 300));
    }
    function handleSubmit() {
      const body = {
        idEvent: idEvent,
        idMember: idMember,
        descReviewer: inputComment,
      };
      dispatch(postCommentEvent(body));
    }
    return (
      <>
        <form onSubmit={handleSubmit} className=" relative border border-black">
          <textarea
            className="w-full focus:outline-0"
            rows="7"
            placeholder="Silahkan tinggalkan komentar terkait event ini."
            value={inputComment}
            onChange={(e) => HandleChange(e.target.value)}
          ></textarea>
          <button
            className="bg-slate-200 hover:bg-slate-400 opacity-50 text-black text-center text-sm font-sans  py-0 px-0 absolute bottom-2  right-6"
            type="submit"
          >
            Submit Komentar
          </button>
          <div className="absolute bottom-2 right-36">
            <p className="text-sm text-gray-500">
              {inputComment.length}/300 characters
            </p>
          </div>
        </form>
      </>
    );
  }
  function DisplayComment() {
    function HitungUmur(birthYear) {
      let birthDate = new Date(birthYear)
      let difference = Date.now() - birthDate.getTime();
      let ageDate = new Date(difference);
      let result = Math.abs(ageDate.getUTCFullYear() - birthYear);
      console.log(result," <<<");
      if(birthYear <=10) {
        return "20 -an"
      }
      if(result <= 29) {
        return "20 -an"
      }else if (result <= 39) {
        return "30 -an"
      }else if (result <= 49) {
        return "40 -an"
      }else {
        return  "50 -an"
      }
    }
  
    return (
      <>
        {dataComment?.map((el) => (
          console.log(el),
          <div className="flex flex-row border-b-2 space-y-4" key={el.nameReviewer}>
            <div className="flex flex-col w-full">
              <div className="flex items-start flex-row mb-2 w-full space-x-5">
                <div className="bg-gray-300 h-19 w-16 rounded-full mb-2">
                  {/* Ganti imageUrl dengan el.imageUrl */}
                  <ImageComponent imageUrl={el.imageUrl} />
                </div>
                <div className="flex flex-col w-full">
                  <div className="flex flex-col">
                    <p className="font-md">{el.nameReviewer}</p>
                    <p className="text-xs text-gray-500">
                      {HitungUmur(el.birthYear)} | {el.skinType} | {el.skinColor}
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-5">
                <p className="text-sm">{el.descReviewer}</p>
              </div>
            </div>
            <p className="flex justify-end text-xs text-gray-500 w-40">
              {getTimeAgo(new Date())}
            </p>
          </div>
        ))}
      </>
    );
  }
  
  function Display() {
    return (
      <>
        <div className="flex justify-between">
          <div className="self-center">
            <Link to={"/event"}>
              <img src={back} className="w-full" />
            </Link>
          </div>
          <div className="self-center flex justify-center font-bold">
            <h1>EVENT</h1>
          </div>
          <div className="self-center"></div>
        </div>
        <div></div>
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
              className="absolute flex-justify space-y-2 w-full h-full overflow-y-auto"
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
                <div className="flex justify-start space-x-1">
                  <div className="text-m font-sans mb-4">Komentar</div>
                  <div className="text-red-600">{dataComment?.length}</div>
                </div>
                <CommentBox />
              </div>
              <div>
                <div className="border rounded-lg border-hidden p-2 mt-4">
                  <DisplayComment />
                  <div className="relative mb-10"></div>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  }
  return (
    <>
      <Display />
    </>
  );
}

export default DetailEvent;
