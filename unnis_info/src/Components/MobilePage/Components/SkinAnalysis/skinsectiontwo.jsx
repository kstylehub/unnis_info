import { Link } from "react-router-dom";
import back from "../../../../assets/previous.svg";
import camera from "../../../../assets/SkinAnalysis/camera_pink.png";
import check from "../../../../assets/SkinAnalysis/check.png";
import React, { useState } from 'react';

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
                {/* Content */}
                <div className="lg:py-12 py-10">
                    <div className="flex flex-col text-center justify-center items-center">
                        <p className="font-bold lg:text-xl text-lg">2. Analisa Kulit</p>
                        <div className="font-semibold text-base py-6 text-center">
                            Kulit terasa tertarik setelah cuci muka?
                        </div>
                        <div className="mt-3 self-center lg:w-8/12">
                            {/* <img src={skin} className="lg:w-full h-full" /> */}
                        </div>
                        <div class="flex item-center relative">
                            <div class="flex flex-col items-center mr-4">
                                <input id="inline-radio" type="radio" value="" name="inline-radio-group" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                                <label for="inline-radio" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Tertarik</label>
                            </div>
                            <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-[#4ABFA1]"></div>
                            <div class="flex flex-col items-center mr-4">
                                <input id="inline-radio" type="radio" value="" name="inline-radio-group" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                                <label for="inline-radio" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"></label>
                            </div>
                            <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-[#4ABFA1]"></div>
                            <div class="flex flex-col items-center mr-4">
                                <input id="inline-radio" type="radio" value="" name="inline-radio-group" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                                <label for="inline-radio" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Normal</label>
                            </div>
                            <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-[#4ABFA1]"></div>
                            <div class="flex flex-col items-center mr-4">
                                <input id="inline-radio" type="radio" value="" name="inline-radio-group" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                                <label for="inline-radio" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"></label>
                            </div>
                            <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-[#4ABFA1]"></div>
                            <div class="flex flex-col items-center mr-4">
                                <input id="inline-radio" type="radio" value="" name="inline-radio-group" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                                <label for="inline-radio" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Lembab</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <Link to={"/skinsectionone"}>
                        <div className="absolute text-center w-6/12 border-r-2 border-white bottom-0 left-0 py-5 bg-[#4ABFA1] text-white">
                            Kembali
                        </div>
                    </Link>   
                    <Link to={"/skinsectionthree"}>
                        <div className="absolute text-center w-6/12 bottom-0 right-0 py-5 bg-[#4ABFA1] text-white">
                            Lanjut
                        </div>
                    </Link> 
                </div>
                
            </div>
        </>
    )
}

export default SkinSectionTwo;