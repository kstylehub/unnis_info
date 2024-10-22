import { Link } from "react-router-dom";
import React, { useState } from "react";
import back from "../../../../assets/previous.svg";
import camera from "../../../../assets/SkinAnalysis/camera.png";
import main_skin from "../../../../assets/SkinAnalysis/main_skin_analysis.png";
import { useSelector } from "react-redux";
import andImg from "../../../../assets/and_img.png";
import iosImg from "../../../../assets/ios_img.png";
function SkinAnalysis() {
  const [showModal, setShowModal] = useState(false);
  const user = useSelector((state) => state.ReducerUser.dataUser);

  const handleCameraClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  function ToSkinPage() {
    if (user) {
    }
  }
  return (
    <>
      <div className="absolute py-4 w-full h-full bg-[#FAE1E7] lg:px-8 px-4">
        <div className="flex justify-between sticky ">
          <div className="self-center">
            <Link to={"/"}>
              <img src={back} className="w-full" />
            </Link>
          </div>
          <div className="self-center lg:text-xl text-lg font-semibold">
            Skin Analysis
          </div>
          <div className="self-center">
            <img
              src={camera}
              className="w-full h-auto"
              onClick={handleCameraClick}
            />
          </div>
        </div>
        <div className="lg:my-12 my-6 mx-4 flex flex-col text-center justify-center items-center">
          <h1 className="lg:text-3xl text-2xl font-bold my-4">
            Skin Analysis Test
          </h1>
          <p className="lg:text-base text-sm font-medium mb-8">
            Analisa masalah kulitmu dan dapatkan rekomendasi produk sesuai jenis
            kulit!
          </p>
          <img src={main_skin} className="lg:w-10/12 md:w-6/12 w-9/12" />
          <div className="flex justify-center my-8">
            <Link to={"/skinsectionone"}>
              <button className="bg-white mx-1 rounded-lg lg:font-base text-sm font-semibold px-10 py-2 drop-shadow-md">
                MULAI
              </button>
            </Link>
            <button
              className="bg-white rounded-lg mx-1 lg:font-base text-sm font-semibold px-10 py-2 drop-shadow-md"
              onClick={handleCameraClick}
            >
              HASIL TES
            </button>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-opacity-70 bg-black flex justify-center items-center z-50">
          <div className="rounded-lg bg-white text-center lg:mx-20 mx-16">
            <div
              onClick={handleCloseModal}
              className="flex justify-end py-2 pr-4"
            >
              x
            </div>
            <div className="pb-4 lg:px-6 px-4">
              <h5 className="lg:mb-2 text-sm font-semibold leading-tight">
                Fitur ini dapat kamu gunakan di aplikasi UNNIS. unduh sekarang!{" "}
              </h5>
            </div>
            <hr></hr>
            <div className=" lg:px-6 px-4 py-4 flex w-full justify-center items-center">
              <Link
                to="https://play.google.com/store/apps/details?id=com.brommko.android.unnispark"
                target="_blank"
                className="flex justify-center items-center"
              >
                <img src={andImg} className="w-11/12" />
              </Link>

              <Link
                to="https://apps.apple.com/id/app/unnis-beauty-curator/id1600606073"
                target="_blank"
                className="flex justify-center items-center"
              >
                <img src={iosImg} className="w-11/12" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default SkinAnalysis;
