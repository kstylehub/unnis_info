import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postFeedback } from "../../../Store/Actions/Actions";
import back from "../../../assets/previous.svg";
import { Link } from "react-router-dom";

function Feedback() {
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  const [showEmail, setShowEmail] = useState(true);
  const [submissionStatus, setSubmissionStatus] = useState(null); // null, 'success', 'error'
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const feedbackData = {
      email: showEmail ? email : null,
      message: feedback,
    };
    try {
      const response = await dispatch(postFeedback(feedbackData));
      if (response) {
        setSubmissionStatus("success");
      } else {
        setSubmissionStatus("error");
      }
    } catch (error) {
      setSubmissionStatus("error");
    }
  };

  const closeModal = () => {
    setSubmissionStatus(null);
    setEmail("");
    setFeedback("");
    setShowEmail(true);
  };

  return (
    <>
      <div className="w-full h-full overflow-x-auto relative pb-20">
        <div className="top-0 sticky px-5 w-full z-20 bg-white pt-2 shadow-md">
          <div className="flex justify-center items-center py-3">
            <Link
              to={"/my-page"}
              className="w-4/12 flex items-center justify-start"
            >
              <img src={back} className="w-8 h-8" alt="Back" />
            </Link>
            <div className="w-4/12 text-xl font-semibold text-center">
              Feedback
            </div>
            <div className="w-4/12"></div>
          </div>
        </div>
        <form className="p-6 flex-col flex gap-5" onSubmit={handleSubmit}>
          <div className="">
            Email
            <input
              type="email"
              className="w-full border border-gray-300 bg-gray-100 rounded-md p-2 mt-2 text-sm"
              placeholder="Masukkan Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required={showEmail}
            />
          </div>
          <div className="">
            Feedback
            <textarea
              className="w-full border border-gray-300 bg-gray-100 rounded-md p-2 mt-2 text-sm"
              rows="5"
              placeholder="Masukkan Feedback"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              required
            />
          </div>
          <div className="flex-col flex justify-start items-start gap-2">
            <p className="font-bold">Email ditampilkan</p>
            <div className="flex gap-4">
              <input
                type="radio"
                className="border border-gray-300 bg-gray-100 rounded-md p-2"
                name="emailDisplay"
                checked={showEmail}
                onChange={() => setShowEmail(true)}
              />
              Setuju
            </div>
            <div className="flex gap-4">
              <input
                type="radio"
                className="border border-gray-300 bg-gray-100 rounded-md p-2"
                name="emailDisplay"
                checked={!showEmail}
                onChange={() => setShowEmail(false)}
              />
              Tidak Setuju (anonim)
            </div>
          </div>
          <button
            type="submit"
            className="text-center text-white bg-[#4ABFA1] rounded-lg p-2 mt-10 w-full"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Modal Success and Failed*/}
      {submissionStatus && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-md shadow-lg text-center">
            {submissionStatus === "success" ? (
              <>
                <h2 className="text-xl font-bold mb-4">Thank you for your feedback!</h2>
                <p className="text-sm">Your feedback has been successfully submitted.</p>
              </>
            ) : (
              <>
                <h2 className="text-xl font-bold mb-4">Submission Failed</h2>
                <p className="text-sm">There was an error submitting your feedback. Please try again later.</p>
              </>
            )}
            <button
              onClick={closeModal}
              className="mt-6 px-4 py-2 bg-[#4ABFA1] text-white rounded-lg w-full"
            >
              Done
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Feedback;
