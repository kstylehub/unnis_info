import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {
  deleteReply,
  dislikeReplyCommunity,
  getCommunityById,
  likeReplyCommunity,
  postReply,
  reportReplyCommunity,
} from "../../../../Store/Actions/Actions";
import back from "../../../../assets/previous.svg";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLocation } from "react-router-dom";
function CommunityDetail() {
  const location = useLocation();
  const [selectedProducts, setSelectedProducts] = useState(
    location.state?.selectedProducts || []
  );
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
    loadLikeStatusFromLocalStorage();
  }, [dispatch, id]);

  const [report, setReport] = useState("");
  const [likeStatus, setLikeStatus] = useState({});
  const [showReportConfirmModal, setShowReportConfirmModal] = useState(false);
  const [showDeleteConfirmModal, setShowDeleteConfirmModal] = useState(false);
  const [showReportModal, setShowReportModal] = useState(false);
  const [showChooseModal, setShowChooseModal] = useState(false);
  const [idMember, setIdMember] = useState(0);
  const [idMemberReply, setIdMemberReply] = useState(0);
  const [showProduct, setShowProduct] = useState(false);

  const handleRemoveProduct = (productId) => {
  // console.log("Removing Product with ID:", productId);
  setSelectedProducts((prevProducts) =>
    prevProducts.filter((product) => product.id !== productId)
  );
};

  const handleSubmit = (e) => {
    e.preventDefault();
    if (dataComment && memberId && reply) {
      let dataReply = {
        idThread: +dataComment.id,
        idMember: +memberId,
        reply: reply,
        id_products: selectedProducts.map((product) => product.id),
      };
      dispatch(postReply(dataReply));
      setReply("");
      setSelectedProducts([]);
      dispatch(getCommunityById(id));
    }
  };
  const handleAction = (e) => {
    e.preventDefault();
    if (idMember && memberId && report) {
      let dataReport = {
        idReplyThread: +idMember,
        idMember: +memberId,
        reason_report: report,
      };
      try {
        dispatch(reportReplyCommunity(dataReport));
        toast.success("Report successfully submitted!");
        setReport("");
        setShowReportConfirmModal(false);
      } catch (error) {
        toast.error("Failed to submit report. Please try again.");
      }
    } else {
      toast.warn("Please fill in all fields before submitting.");
    }
  };

  const handleDelete = () => {
    if (idMember) {
      try {
        dispatch(deleteReply(idMember));
        setShowDeleteConfirmModal(false);
        toast.success("Delete Reply successfully!");
      } catch (error) {
        toast.error("Failed to submit report. Please try again.");
      }
      setTimeout(() => {
        dispatch(getCommunityById(id));
        window.location.reload();
      }, 500);
    } else {
      toast.warn("Id Reply Not Defined");
    }
  };

  const handleLike = (comId) => {
    if (comId && memberId) {
      let data = {
        idReplyThread: +comId,
        idMember: +memberId,
      };
      try {
        setTimeout(() => {
          window.location.reload();
        }, 500);
        dispatch(likeReplyCommunity(data));
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
        idReplyThread: +comId,
        idMember: +memberId,
      };
      try {
        setTimeout(() => {
          window.location.reload();
        }, 500);
        dispatch(dislikeReplyCommunity(data));
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

  // Fungsi toggle
  const handleToggleProduct = () => {
    setShowProduct((prev) => !prev); // Toggle state
  };

  const handleChoose = () => {
    setShowChooseModal(false);
    setShowReportModal(true);
  };

  const handleActionDel = () => {
    setShowDeleteConfirmModal(true);
    setShowChooseModal(false);
  };

  const saveLikeStatusToLocalStorage = (comId, status) => {
    const likeStatus = JSON.parse(localStorage.getItem("likeStatus")) || {};
    likeStatus[comId] = status;
    localStorage.setItem("likeStatus", JSON.stringify(likeStatus));
  };

  const loadLikeStatusFromLocalStorage = () => {
    const savedLikeStatus =
      JSON.parse(localStorage.getItem("likeStatus")) || {};
    setLikeStatus(savedLikeStatus);
  };

  const handleWhatsAppShare = () => {
    const message = encodeURIComponent(
      "Yuk download Unnis di https://play.google.com/store/apps/details?id=com.brommko.android.unnispark"
    );
    const url = `https://wa.me/?text=${message}`;
    window.open(url, "_blank");
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
                  {dataComment?.isAdmin && (
                    <span className="pl-2 text-green-500">✓</span>
                  )}
                </div>
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
              </div>
            </div>
          </div>
        </div>
        {/* Map Reply Thread */}
        {dataComment?.reply_thread?.map((reply) => (
          <div key={reply.idReply} className="bg-white flex flex-col">
            <div className="px-5 py-4 border-t">
              <div className="flex justify-between">
                <div className="flex">
                  <div className="rounded-full flex justify-center items-center">
                    {reply.photo_profile ? (
                      <img
                        src={reply.photo_profile}
                        className="rounded-full w-6 h-6 object-cover"
                        alt="Profile"
                      />
                    ) : (
                      <div className="w-6 h-6 bg-[#4ABFA1] rounded-full"></div>
                    )}
                  </div>
                  <div className="flex justify-center text-sm items-center pl-3 font-bold">
                    {reply.user}
                    {reply.isAdmin && (
                      <svg
                        className="w-4 h-4 ms-1 text-[#4ABFA1] dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width=""
                        height=""
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2c-.791 0-1.55.314-2.11.874l-.893.893a.985.985 0 0 1-.696.288H7.04A2.984 2.984 0 0 0 4.055 7.04v1.262a.986.986 0 0 1-.288.696l-.893.893a2.984 2.984 0 0 0 0 4.22l.893.893a.985.985 0 0 1 .288.696v1.262a2.984 2.984 0 0 0 2.984 2.984h1.262c.261 0 .512.104.696.288l.893.893a2.984 2.984 0 0 0 4.22 0l.893-.893a.985.985 0 0 1 .696-.288h1.262a2.984 2.984 0 0 0 2.984-2.984V15.7c0-.261.104-.512.288-.696l.893-.893a2.984 2.984 0 0 0 0-4.22l-.893-.893a.985.985 0 0 1-.288-.696V7.04a2.984 2.984 0 0 0-2.984-2.984h-1.262a.985.985 0 0 1-.696-.288l-.893-.893A2.984 2.984 0 0 0 12 2Zm3.683 7.73a1 1 0 1 0-1.414-1.413l-4.253 4.253-1.277-1.277a1 1 0 0 0-1.415 1.414l1.985 1.984a1 1 0 0 0 1.414 0l4.96-4.96Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </div>
                </div>
                <div
                  className=""
                  onClick={() => {
                    setShowChooseModal(true);
                    setIdMember(reply.idReply);
                    setIdMemberReply(reply.idMember);
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
              <div className="py-2 text-sm ps-9">{reply.thread}</div>

              <div className="flex flex-col flex-wrap gap-2 pb-2">
                {reply?.product_suggests?.map((product, index) => (
                  <div
                    key={index}
                    className="bg-gray-100 rounded-md px-3 py-1 text-xs text-gray-700 ms-9"
                  >
                    <div className="flex gap-2 py-1 items-center">
                      <div className="w-2/12">
                        {product.imageUrl ? (
                          <div className="">
                            <img
                              className=" w-11 h-11"
                              src={product.imageUrl}
                            ></img>
                          </div>
                        ) : (
                          <div className="">
                            <img
                              className="objext-contain bg-black"
                              src={product.imageUrl}
                            ></img>
                          </div>
                        )}
                      </div>

                      <div className="flex flex-col w-9/12 gap-0.5">
                        <div className="uppercase text-gray-400">
                          {product.brandName}
                        </div>
                        <div className="">{product.productName}</div>
                      </div>
                      <div className="w-1/12 flex items-center">
                        <Link to={`/newProduct/detailproduct/${product.id}`}>
                          <svg
                            className="w-6 h-6 text-gray-500 dark:text-white"
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
                              d="m9 5 7 7-7 7"
                            />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-between text-sm">
                <div className="text-gray-400 text-xs ps-9">
                  {calculateDaysAgo(reply?.createdDate) > 0
                    ? calculateDaysAgo(reply?.createdDate) + " hari yang lalu"
                    : "hari ini"}
                </div>
                <div className="flex justify-center items-center gap-3 pe-1">
                  {!likeStatus[reply?.idReply] ? (
                    <div
                      onClick={() => handleLike(reply?.idReply)}
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
                      {reply?.like}
                    </div>
                  ) : (
                    <div
                      onClick={() => handleDislike(reply?.idReply)}
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
                      {reply?.like}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white sticky bottom-0 w-full border-t">
        <form onSubmit={handleSubmit}>
          <div className="flex items-center justify-center gap-2 p-1.5">
            {/* Icon Plus/Cross */}
            <div
              className="w-1/12 flex justify-center"
              onClick={handleToggleProduct}
            >
              {showProduct ? (
                <svg
                  className="w-7 h-7 text-[#4ABFA1] cursor-pointer rotate-45"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4.243a1 1 0 1 0-2 0V11H7.757a1 1 0 1 0 0 2H11v3.243a1 1 0 1 0 2 0V13h3.243a1 1 0 1 0 0-2H13V7.757Z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  className="w-7 h-7 text-[#4ABFA1] cursor-pointer"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4.243a1 1 0 1 0-2 0V11H7.757a1 1 0 1 0 0 2H11v3.243a1 1 0 1 0 2 0V13h3.243a1 1 0 1 0 0-2H13V7.757Z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </div>

            {/* Input komentar */}
            <input
              className="w-10/12 h-12 px-4 focus:outline-none border text-sm rounded-full"
              placeholder="Write a comment"
              value={reply}
              onChange={(e) => setReply(e.target.value)}
            />

            {/* Tombol submit */}
            <button
              type="submit"
              className="rotate-90 w-1/12 flex items-center justify-center"
            >
              <svg
                className="text-[#4ABFA1] dark:text-white"
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

          {/* Render Selected Products */}
          {selectedProducts.length > 0 && (
            <div className="bg-gray-100 p-3  rounded-lg w-full">
              <div className="flex flex-wrap w-full gap-2">
                {selectedProducts.map((product) => (
                  <div
                    key={product.id}
                    className="flex items-center gap-2 bg-white p-2 rounded w-full shadow-sm justify-between"
                  >
                    <img
                      src={product.images}
                      alt={product.name}
                      className="w-10 h-10 rounded"
                    />
                    <div className="w-8/12">
                      <div className="text-xs font-medium">{product.brand}</div>
                      <div className="text-xs text-gray-500">
                        {product.name}
                      </div>
                    </div>
                    {/* Remove Icon */}
                    <div
                      className="text-red-500 cursor-pointer flex justify-start"
                      onClick={() => handleRemoveProduct(product.id)}
                    >
                      <svg
                        className="w-4 h-4"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6.293 6.293a1 1 0 0 1 1.414 0L12 9.586l4.293-4.293a1 1 0 0 1 1.414 1.414L13.414 11l4.293 4.293a1 1 0 0 1-1.414 1.414L12 12.414l-4.293 4.293a1 1 0 0 1-1.414-1.414L10.586 11 6.293 6.707a1 1 0 0 1 0-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* "Choose Product" section */}
          {selectedProducts.length < 3 && (
            <div className="bg-gray-100 p-2 border-t">
              <Link to={`/community/product/${id}`}>
                <div className="bg-white rounded-lg p-2 justify-center flex">
                  <div className="flex flex-col justify-center items-center">
                    <svg
                      className="w-8 h-8 text-gray-500 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1"
                        d="M9 10V6a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v4m3-2 .917 11.923A1 1 0 0 1 17.92 21H6.08a1 1 0 0 1-.997-1.077L6 8h12Z"
                      />
                    </svg>
                    <div className="text-gray-500 text-sm">Choose Product</div>
                  </div>
                </div>
              </Link>
            </div>
          )}
        </form>
      </div>
      {showReportModal && <ReportModal />}
      {showChooseModal && <ChooseModal />}
      {showReportConfirmModal && <ReportConfirmModal />}
      {showDeleteConfirmModal && <DeleteConfirmModal />}
      <ToastContainer />
    </div>
  );

  function ReportConfirmModal() {
    return (
      <form className="absolute inset-0 flex items-center justify-center z-20">
        <div className="bg-black opacity-50 absolute inset-0"></div>
        <div className="absolute bg-white p-8 rounded shadow-lg">
          <h2 className=" mb-6">Yakin ingin report reply?</h2>
          <div className="flex justify-center gap-6">
            <button
              onClick={handleAction}
              className="px-4 py-2 bg-[#4ABFA1] text-white rounded"
            >
              Report
            </button>
            <button
              onClick={() => setShowReportConfirmModal(false)}
              className=" px-4 py-2 bg-gray-200 rounded"
            >
              Batal
            </button>
          </div>
        </div>
      </form>
    );
  }

  function DeleteConfirmModal() {
    return (
      <form className="absolute inset-0 flex items-center justify-center z-20">
        <div className="bg-black opacity-50 absolute inset-0"></div>
        <div className="absolute bg-white p-8 rounded shadow-lg">
          <h2 className=" mb-6">Yakin ingin hapus reply?</h2>
          <div className="flex justify-center gap-6">
            <button
              onClick={handleDelete}
              className="px-4 py-2 bg-[#4ABFA1] text-white rounded"
            >
              Delete
            </button>
            <button
              onClick={() => setShowDeleteConfirmModal(false)}
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
                  setShowReportConfirmModal(true);
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
  function ChooseModal() {
    return (
      <div className="absolute inset-0 flex items-center justify-center z-50">
        <div className="bg-black opacity-50 absolute inset-0"></div>
        <div className="absolute bottom-0 left-0 right-0 bg-white  rounded-t-2xl shadow-lg z-10">
          <div className="flex justify-between  p-4 border-b">
            <h2 className="  font-bold uppercase">pilih aksi selanjutnya</h2>
            <div className="" onClick={() => setShowChooseModal(false)}>
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

          <div className="flex w-full flex-col justify-start text-start p-4 gap-6 text-sm">
            <button className="text-start" onClick={() => handleChoose()}>
              Report Reply
            </button>
            {idMemberReply == memberId && (
              <button className="text-start" onClick={() => handleActionDel()}>
                Delete Reply
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default CommunityDetail;
