import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { resetDetailProduct } from "../../../../Store/Actions/Actions";

const Page404 = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const goToHome = () => {
    navigate("/");
  };

  useEffect(() => {
    dispatch(resetDetailProduct());
  }, [dispatch]);

  return (
    <div className="not-found-page flex justify-center align-center items-center flex-col h-full px-3">
      <h1 className="title text-2xl font-bold">404 - Page Not Found</h1>
      <p className="message pb-10 pt-2 text-gray-600">
        Maaf, halaman yang Anda cari tidak ditemukan.
      </p>
      <button
        className="home-button px-10 py-3 bg-[#4ABFA1] text-white rounded-lg hover:bg-[#4abfa2cb]"
        onClick={goToHome}
      >
        Kembali ke Home
      </button>
    </div>
  );
};

export default Page404;
