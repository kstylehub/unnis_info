import { useDispatch, useSelector } from "react-redux";
import Back from "../../../../assets/previous.svg";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getFeedById, getFeedReview } from "../../../../Store/Actions/Actions";

function DetailFeed() {
  const { id } = useParams();
  const feedDetail = useSelector(
    (state) => state.ReducerAllFeedById?.dataFeedById
  );
  const eventReview = useSelector(
    (state) => state.ReducerReviewEventById?.eventReviewById
  );
  const dataFeed = feedDetail?.data;
  const dataReview = eventReview?.dataReview;
  const [imgSrc, setImgSrc] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      dispatch(getFeedById(id));
      dispatch(getFeedReview(id));
    }
  }, [dispatch, id]);

  const formatDate = (dateString) => {
    const options = { day: "numeric", month: "short", year: "numeric" };
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB", options);
  };

  const [text, setText] = useState("");
  const maxChars = 300;

  const handleChange = (e) => {
    if (e.target.value.length <= maxChars) {
      setText(e.target.value);
    }
  };

  const handleSubmit = () => {
    console.log("Submitted text:", text);
    // Handle the submit action here
  };

  useEffect(() => {
    if (dataFeed) {
      if (dataFeed.imgFeed && dataFeed.imgFeed !== "-" && dataFeed.imgFeed !== "") {
        const img = new Image();
        img.src = dataFeed.imgFeed;
        img.onload = () => setImgSrc(dataFeed.imgFeed);
        img.onerror = () => {
          if (dataFeed.thumbnail && dataFeed.thumbnail !== "-" && dataFeed.thumbnail !== "") {
            setImgSrc(dataFeed.thumbnail);
          } else {
            setImgSrc("");
          }
        };
      } else if (dataFeed.thumbnail && dataFeed.thumbnail !== "-" && dataFeed.thumbnail !== "") {
        setImgSrc(dataFeed.thumbnail);
      } else {
        setImgSrc("");
      }
    }
  }, [dataFeed]);

  return (
    <>
      <div className="bg-white relative">
        <div className="pt-4 pb-1 sticky top-0 z-20 bg-white shadow-md px-4">
          <div className="flex justify-between py-2 px-2">
            <div className="justify-center items-center w-4/12 p-1">
              <Link to="/feed">
                <img src={Back} className="w-12/12" alt="Back" />
              </Link>
            </div>
            <div className="w-4/12 flex justify-center gap-4 uppercase font-semibold text-xl">
              FEED
            </div>
            <div className="w-4/12 flex justify-end items-center pb-2">
              <svg
                className=" h-8 w-8 text-gray-800 dark:text-white"
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
                  d="m17 21-5-4-5 4V3.889a.92.92 0 0 1 .244-.629.808.808 0 0 1 .59-.26h8.333a.81.81 0 0 1 .589.26.92.92 0 0 1 .244.63V21Z"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="h-screen">
          {dataFeed ? (
            <div className="bg-white">
              <div className="flex-col px-6 py-5">
                <div className="text-xl py-1">{dataFeed.title}</div>
                <div className="text-right text-sm pt-2">
                  {formatDate(dataFeed.createDate)}
                </div>
              </div>
              <div className="pt-1 bg-gray-200"></div>
              <div>
              <div>
              <div>
                {imgSrc && <img src={imgSrc} alt="Feed" />}
              </div>
              </div>
              </div>
              <div className="pt-1 bg-gray-200"></div>
              <div className="pt-1 bg-gray-200"></div>
              <div className="px-6 py-4">
                <div className="">Comment 0</div>
                <div className="relative py-3">
                  <textarea
                    value={text}
                    onChange={handleChange}
                    className="w-full h-40 p-2 border border-gray-300 rounded resize-none"
                    placeholder="Please, leave a comment related to this event."
                  ></textarea>

                  <div className="flex justify-between items-center mt-2">
                    <div className="text-gray-600">
                      {text.length}/{maxChars}
                    </div>
                    <button
                      onClick={handleSubmit}
                      className="bg-gray-400 text-white px-4 py-2 rounded"
                    >
                      Submit Comment
                    </button>
                  </div>
                </div>
              </div>
              <div className="pt-1 bg-gray-200"></div>
              <hr></hr>
              <div className="py-4">
                {Array.isArray(dataReview) && dataReview.length > 0 ? (
                  dataReview.map((review, reviewIndex) => (
                    <div key={reviewIndex} className="bg-white py-2">
                      <div className="px-6 flex justify-between items-center">
                        <div className="w-2/12">
                          {review.imgReviewer ? (
                            <img src={review.imgReviewer} />
                          ) : (
                            <div className="h-10 w-10 bg-gray-400 rounded-full"></div>
                          )}
                        </div>
                        <div className="flex flex-col w-10/12">
                          <div className="">{review.nameReviewer}</div>
                          <div className="text-gray-400 text-sm">
                            0 tahun|-|-
                          </div>
                        </div>
                        <div className="text-gray-400 w-2/12 text-sm py-3">
                          {review.date} hari lalu
                        </div>
                      </div>
                      <div className="px-6 py-3">{review.descReviewer}</div>
                      <div className="px-6 flex justify-end underline text-red-500 text-sm pb-5">
                        Report Comment
                      </div>
                      <hr></hr>
                    </div>
                  ))
                ) : (
                  <div></div>
                )}
              </div>
            </div>
          ) : (
            <div className="flex justify-center items-center h-full">
              <p>No feeds available</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default DetailFeed;
