import { Link } from "react-router-dom";
import React, { useState } from 'react'; // Import the useState hook
import back from "../../../../assets/previous.svg";
import search from "../../../../assets/search.svg";
import camera from "../../../../assets/camera.png";
import main_skin from "../../../../assets/main_skin_analysis.png";

function SkinAnalysis () {
    const [showModal, setShowModal] = useState(false); // State for controlling the modal visibility

    const handleCameraClick = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <>
            <div className="absolute lg:py-6 py-2 w-full h-full bg-[#FAE1E7] lg:px-6 px-2">
                {/* Modal */}
                {showModal && (
                    <div className="absolute bg-opacity-77 bg-black flex justify-center items-center">
                        <div className="bg-white p-4 rounded-lg">
                            <p>This is the modal content.</p>
                            <button onClick={handleCloseModal}>Close</button>
                        </div>
                    </div>
                )}
                <div className="flex justify-between sticky ">
                    <div className="self-center">
                        <Link to={"/"}>
                            <img src={back} className="w-full" />
                        </Link>
                    </div>
                    <div className="self-center lg:text-2xl text-md font-semibold">
                        Skin Analysis
                    </div>
                    <div className="self-center">
                        <img src={camera} className="w-full" onClick={handleCameraClick} /> 
                    </div>
                </div>
                <div className="lg:m-20 my-10 mx-4 flex flex-col text-center justify-center items-center">
                    <h1 className="lg:text-3xl text-xl font-bold my-4">Skin Analysis Test</h1>
                    <p className="lg:text-md text-sm font-semibold mb-10">Analisa masalah kulitmu dan dapatkan rekomendasi produk sesuai jenis kulit!</p>
                    <img src={main_skin} className="lg:w-10/12 md:w-6/12 w-9/12" />
                    <div className="flex justify-center my-10">
                        <Link to={""}>
                        <button className="bg-white mx-1 rounded-lg font-lg font-semibold lg:px-12 px-10 py-3 drop-shadow-md">
                            MULAI
                        </button>
                        </Link>
                        <Link to={""}>
                        <button className="bg-white mx-1 rounded-lg font-lg font-semibold lg:px-12 px-10 py-3 drop-shadow-md">
                            HASIL TES
                        </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SkinAnalysis;
