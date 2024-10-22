import { Link } from "react-router-dom";
import back from "../../../../assets/previous.svg";
import camera from "../../../../assets/SkinAnalysis/camera_pink.png";
import React, { useState } from 'react';
import check from "../../../../assets/SkinAnalysis/check.png";
import andImg from "../../../../assets/and_img.png";
import iosImg from "../../../../assets/ios_img.png";
function SkinSectionThree () {
    const [showModal, setShowModal] = useState(false); 

    const handleCameraClick = () => {
        setShowModal(true);
    };

    const handleCameraClick2 = () => {
        setShowModal(false);
    };

    return (
        <>
            <div className="absolute py-4 w-full h-full bg-white lg:px-8 px-4">
                <div className="flex justify-between">
                    <div className="self-center">
                        <Link to={"/skinsectionone"}>
                            <img src={back} className="lg:w-full h-auto" />
                        </Link>
                    </div>
                    <div className="self-center lg:text-xl text-lg font-semibold">
                        Skin Analysis
                    </div>
                    <div className="self-center">
                        <img src={camera} className="w-full" /> 
                    </div>
                </div>
                <div className="flex items-center m-6">
                    <div className="flex items-center text-teal-600 relative">
                        <div className="text-base text-center rounded-full transition duration-500 w-8 h-8 p-1.5 border-2 border-[#4ABFA1] bg-[#4ABFA1]">
                            <img src={check} className="lg:w-full h-auto" />
                        </div>
                        <div className="absolute top-0 -ml-12 text-center mt-10 w-32 text-xs text-[#4ABFA1]">Data Diri</div>
                    </div>
                    <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-[#4ABFA1]"></div>
                    <div className="flex items-center text-[#4ABFA1] relative">
                        <div className="text-base text-center rounded-full transition duration-500 w-8 h-8 p-1.5 border-2 border-[#4ABFA1] bg-[#4ABFA1]">
                            <img src={check} className="lg:w-full h-auto" />
                        </div>
                        <div className="absolute top-0 -ml-12 text-center mt-10 w-32 text-xs text-[#4ABFA1]">Analisa Kulit</div>
                    </div>
                    <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-[#4ABFA1]"></div>
                    <div className="flex items-center text-[#4ABFA1] relative">
                        <div className="text-base text-center rounded-full transition duration-500 w-8 h-8 p-0.5 border-2 border-[#4ABFA1]">
                            3
                        </div>
                        <div className="absolute top-0 -ml-12 text-center mt-10 w-32 text-xs text-[#4ABFA1]">Hasil Analisa</div>
                    </div>
                </div>
                <div className="py-12">
                    <div className="flex flex-col text-center justify-center items-center">
                        <p className="font-bold lg:text-xl text-lg">3. Hasil Analisa</p>
                        <div className="font-semibold text-base py-6 px-6 text-center">
                            Sekarang kamu selangkah lebih dekat menuju kulit glowing! <br></br>
                            Klik untuk melihat hasil analisa.
                        </div>
                        <button className="px-20 py-2 mt-6 border border-gray-600 rounded-sm"
                                onClick={handleCameraClick}>
                            Hasil Analisa
                        </button>
                    </div>
                </div>
                <div className="flex flex-col">
                    <Link to={"/skinsectiontwo/pagesix"}>
                        <div className="absolute text-lg text-center w-6/12 border-r-2 border-white bottom-0 left-0 py-5 bg-[#4ABFA1] text-white">
                            Kembali
                        </div>
                    </Link>   
                    <Link to={"/skinanalysis"}>
                        <div className="absolute text-lg text-center w-6/12 bottom-0 right-0 py-5 bg-[#4ABFA1] text-white">
                            Selesai
                        </div>
                    </Link> 
                </div>
            </div>

            {showModal && (
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-opacity-70 bg-black flex justify-center items-center z-50">
          <div className="rounded-lg bg-white text-center lg:mx-20 mx-16">
            <div
              onClick={handleCameraClick2}
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
    )
}

export default SkinSectionThree;