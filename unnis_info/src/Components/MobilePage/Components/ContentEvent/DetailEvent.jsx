import { useDispatch, useSelector } from "react-redux";
import Back from "../../../../assets/previous.svg";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  getEventbyId,
  getReviewEventbyId,
} from "../../../../Store/Actions/Actions";

function DetailEvent() {
  const { id } = useParams();
  const eventDetail = useSelector((state) => state.ReducerEventById?.eventById);
  const eventReview = useSelector(
    (state) => state.ReducerReviewEventById?.eventReviewById
  );
  const dataEvent = eventDetail?.dataEvent;
  const dataReview = eventReview?.dataReview;

  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      dispatch(getEventbyId(id));
      dispatch(getReviewEventbyId(id));
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

  return (
    <>
      <div className="bg-white relative">
        <div className="pt-4 pb-1 sticky top-0 z-20 bg-white shadow-md px-4">
          <div className="flex justify-between py-2 px-2">
            <div className="justify-center items-center w-4/12 p-1">
              <Link to="/event">
                <img src={Back} className="w-12/12" alt="Back" />
              </Link>
            </div>
            <div className="w-4/12 flex justify-center gap-4 uppercase font-semibold text-xl">
              EVENT
            </div>
            <div className="w-4/12 "></div>
          </div>
        </div>
        <div className="">
          {Array.isArray(dataEvent) && dataEvent.length > 0 ? (
            dataEvent.map((el, index) => (
              <div key={index} className="bg-white">
                <div>
                  <img src={el.thumbnail} alt="Event Thumbnail" />
                </div>
                <div className="pt-1 bg-gray-200"></div>
                <div className="flex-col px-6 py-5">
                  <div className="text-xl pb-1">{el.title}</div>
                  <div className="">{el.subtitle}</div>
                </div>
                <hr />
                <div className="flex px-6 py-4">
                  <div className="w-6/12 text-gray-500">Event Period</div>
                  <div className="w-7/12 text-right text-sm">
                    {formatDate(el.startDate)} ~ {formatDate(el.endDate)}
                  </div>
                </div>
                <hr />
                <div className="flex px-6 py-4">
                  <div className="w-6/12 flex justify-center gap-3 text-center">
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
                    Share
                  </div>
                  <div className="flex w-6/12 justify-center gap-2">
                    <svg
                      className="w-6 h-6 text-red-600 dark:text-white"
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
                    {el.likesNum} likes
                  </div>
                </div>
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
            ))
          ) : (
            <div className="flex justify-center items-center h-full">
              <p>No events available</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default DetailEvent;
