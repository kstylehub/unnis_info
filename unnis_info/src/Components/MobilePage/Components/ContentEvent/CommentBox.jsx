import React, { useState } from "react";

const CommentBox = () => {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const handleChange = (event) => {
    const { value } = event.target;
    setComment(value.substring(0, 300)); // Limit the comment to 300 characters
  };

  const handleSubmit = () => {
    if (comment.trim()) {
      setComments((prevComments) => [...prevComments, comment.trim()]);
      setComment("");
    }
  };
  const commentCount = comments.length;

  return (
    <div className="">
      <div className="flex justify-start">
        <div className="text-m font-sans mb-4">Komentar</div>
        <div className="text-red-600">{commentCount}</div>
      </div>
      <div className="bg-white shadow p-4 w-full ">
        <div className="border border-black">
          <textarea
            className="w-full focus:outline-0"
            rows="7"
            placeholder="Silahkan tinggalkan komentar terkait event ini."
            value={comment}
            onChange={handleChange}
          ></textarea>
          <button
            className="bg-slate-200 hover:bg-slate-400 opacity-50 text-black text-center text-sm font-sans  py-0 px-0 absolute bottom-10 right-6"
            onClick={handleSubmit}
            disabled={comment.trim().length === 0}
          >
            Submit Komentar
          </button>
          <div className="absolute bottom-10 right-36">
            <p className="text-sm text-gray-500">
              {comment.length}/300 characters
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentBox;
