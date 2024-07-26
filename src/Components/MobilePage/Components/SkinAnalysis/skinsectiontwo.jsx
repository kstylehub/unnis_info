import { Link, Outlet } from "react-router-dom";
import back from "../../../../assets/previous.svg";
import camera from "../../../../assets/SkinAnalysis/camera_pink.png";
import check from "../../../../assets/SkinAnalysis/check.png";

function SkinSectionTwo () {
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
                        <div className="text-base text-center rounded-full transition duration-500 w-8 h-8 p-0.5 border-2 border-[#4ABFA1]">
                            2
                        </div>
                        <div className="absolute top-0 -ml-12 text-center mt-10 w-32 text-xs text-[#4ABFA1]">Analisa Kulit</div>
                    </div>
                    <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-gray-400"></div>
                    <div className="flex items-center text-gray-400 relative">
                        <div className="text-base text-center rounded-full transition duration-500 w-8 h-8 p-0.5 border-2 border-gray-400">
                            3
                        </div>
                        <div className="absolute top-0 -ml-12 text-center mt-10 w-32 text-xs text-gray-400">Hasil Analisa</div>
                    </div>
                </div>
                <Outlet />       
            </div>
        </>
    )
}

export default SkinSectionTwo;