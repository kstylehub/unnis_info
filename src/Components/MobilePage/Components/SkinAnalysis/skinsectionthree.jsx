import { Link } from "react-router-dom";
import back from "../../../../assets/previous.svg";
import camera from "../../../../assets/SkinAnalysis/camera_pink.png";
import React, { useState } from 'react';
import check from "../../../../assets/SkinAnalysis/check.png";

function SkinSectionThree () {
    const [showModal, setShowModal] = useState(false); 

    const handleCameraClick = () => {
        setShowModal(true);
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

            {/* Modal */}
            {showModal && (
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-opacity-70 bg-black flex justify-center items-center z-50">
                <div className ="rounded-lg bg-white text-center lg:mx-20 mx-16">
                    <div className="py-8 lg:px-6 px-4">
                        <h5 className="lg:mb-2 text-sm font-semibold leading-tight">
                        Hasil analisa dapat diakses dengan mengunduh aplikasi UNNIS
                        </h5>
                    </div>
                    <hr></hr>
                    <Link to={"/skinanalysis"}>
                        <button className="lg:py-4 py-3 inline-block rounded px-6 text-sm text-green-600"
                            type="button">
                            Selesai
                        </button>
                    </Link>
                </div>
            </div>
        )}

        </>
    )
}

export default SkinSectionThree;