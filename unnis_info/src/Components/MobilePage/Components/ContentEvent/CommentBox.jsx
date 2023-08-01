import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCommentEvent } from "../../../../Store/Actions/Actions";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const CommentBox = () => {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [userComments, setUserComments] = useState({});
  const [editIndex, setEditIndex] = useState(null);
  const [selectedCommentIndex, setSelectedCommentIndex] = useState(null);

  const commentBoxRef = useRef(null);
  
  

  const data = event?.dataEvent;
 

  useEffect(() => {
    // Event listener to handle click outside the comment area and cancel editing
    const handleClickOutside = (event) => {
      if (commentBoxRef.current && !commentBoxRef.current.contains(event.target)) {
        handleCancel();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleChange = (event) => {
    const { value } = event.target;
    setComment(value.substring(0, 300));
  };

 
  const handleSubmit = () => {
    if (comment.trim()) {
      if (editIndex !== null) {
        setComments((prevComments) => {
          const updatedComments = [...prevComments];
          updatedComments[editIndex] = comment.trim();
          return updatedComments;
        });
        setUserComments((prevUserComments) => {
          const updatedUserComments = { ...prevUserComments };
          updatedUserComments[editIndex] = { text: comment.trim(), date: new Date() };
          return updatedUserComments;
        });
        setEditIndex(null);
      } else {
        setComments((prevComments) => [...prevComments, comment.trim()]);
        setUserComments((prevUserComments) => ({
          ...prevUserComments,
          [comments.length]: { text: comment.trim(), date: new Date() },
        }));
      }
      setComment('');
    }
  };

  const handleEdit = (index) => {
    setComment(comments[index]);
    setEditIndex(index);
    setSelectedCommentIndex(index);
  };

  const handleDelete = (index) => {
    setComments((prevComments) => prevComments.filter((_, i) => i !== index));
    setUserComments((prevUserComments) => {
      const updatedUserComments = { ...prevUserComments };
      delete updatedUserComments[index];
      return updatedUserComments;
    });
    setSelectedCommentIndex(null);
  };

  const handleCancel = () => {
    setComment('');
    setEditIndex(null);
    setSelectedCommentIndex(null);
  };

  const commentCount = comments.length;

  const getTimeAgo = (date) => {
    const now = new Date();
    const commentDate = new Date(date);

    const diffTime = Math.abs(now - commentDate);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    return diffDays === 0 ? "hari ini" : `${diffDays} hari sebelumnya`;
  };
 
  return (
    <div className="">
      {data}
      <div className="flex justify-start">
        <div className="text-m font-sans mb-4">Komentar</div>
        <div className="text-red-600">{commentCount}</div>
      </div>
      <div className="bg-white shadow p-4 w-full ">
        <div className=" relative border border-black">
          <textarea
            className="w-full focus:outline-0"
            rows="7"
            placeholder="Silahkan tinggalkan komentar terkait event ini."
            value={comment}
            onChange={handleChange}
          ></textarea>
          <button
            className="bg-slate-200 hover:bg-slate-400 opacity-50 text-black text-center text-sm font-sans  py-0 px-0 absolute bottom-2  right-6"
            onClick={handleSubmit}
            disabled={comment.trim().length === 0}
          >
            Submit Komentar
          </button>
          <div className="absolute bottom-2 right-36">
            <p className="text-sm text-gray-500">
              {comment.length}/300 characters
            </p>
          </div>
        </div>
        <div className="border rounded-lg border-hidden p-2 mt-4">
        {comments.map((c, index) => (
          <div key={index} className="flex items-start flex-col mb-2">
            <div className="bg-gray-300 h-10 w-10 rounded-full mb-2"></div>
            <div className="flex justify-between w-full">
              <div>
                <p className="font-bold">User {index + 1}</p>
                <p className="text-sm">{c}</p>
                <p className="text-xs text-gray-500">{getTimeAgo(new Date())}</p>
              </div>
              {userComments[index] && (
                <div className="relative">
                  <button
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 rounded"
                    onClick={() => handleEdit(index)}
                  >
                    Edit
                  </button>
                  {selectedCommentIndex === index && (
                    <div
                      className="absolute top-0 right-8 flex flex-col space-y-2 p-2 bg-white border border-gray-300 rounded-lg shadow"
                    >
                      <button
                        className="text-red-500 hover:text-red-600 font-bold"
                        onClick={() => handleDelete(index)}
                      >
                        Delete
                      </button>
                      <button
                        className="text-yellow-500 hover:text-yellow-600 font-bold"
                        onClick={() => handleReport(index)}
                      >
                        Report
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default CommentBox;
