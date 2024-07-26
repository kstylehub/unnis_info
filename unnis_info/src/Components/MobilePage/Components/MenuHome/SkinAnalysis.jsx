import { Link } from "react-router-dom";
import React, { useState } from "react";
import back from "../../../../assets/previous.svg";
import camera from "../../../../assets/SkinAnalysis/camera.png";
import main_skin from "../../../../assets/SkinAnalysis/main_skin_analysis.png";
import { useSelector } from "react-redux";

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

      {/* Modal */}
      {showModal && (
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-opacity-70 bg-black flex justify-center items-center z-50">
          <div className="rounded-lg bg-white text-center lg:mx-20 mx-16">
            <div className="py-8 lg:px-6 px-4">
              <h5 className="lg:mb-2 text-sm font-semibold leading-tight">
                Fitur ini hanya dapat digunakan pada aplikasi UNNIS
              </h5>
            </div>
            <hr></hr>
            <button
              className="lg:py-4 py-3 inline-block rounded px-6 text-sm text-green-600"
              onClick={handleCloseModal}
              type="button"
            >
              Kembali
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default SkinAnalysis;
