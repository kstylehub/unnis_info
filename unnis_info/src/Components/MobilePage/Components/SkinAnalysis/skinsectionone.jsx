import { Link } from "react-router-dom";
import back from "../../../../assets/previous.svg";
import camera from "../../../../assets/SkinAnalysis/camera_pink.png";
import skin from "../../../../assets/SkinAnalysis/skin_Section_one.png";
import React, { useState } from 'react';

function SkinSectionOne () {

    const [clickedButton, setClickedButton] = useState('10');
    const [clickedButtonGender, setClickedButtonGender] = useState('wanita');

    const handleClick = (button) => {
        setClickedButton(button);
    };

    const handleClickGender = (button) => {
        setClickedButtonGender(button);
    };

    const getButtonStyle = (button) => {
        if (clickedButton === button) {
        return {
            background: '#4ABFA1',
            color: 'white',
            fontWeight: 'bold'
        };
        } else {
        return {
            background: '#FFFFFF',
        };
        }
    };

    const getButtonStyleGender = (button) => {
        if (clickedButtonGender === button) {
        return {
            background: '#4ABFA1',
            color: 'white',
            fontWeight: 'bold'
        };
        } else {
        return {
            background: '#FFFFFF',
        };
        }
    };
    return (
        <>
            <div className="absolute py-4 w-full h-full bg-white lg:px-8 px-4">
                <div className="flex justify-between">
                    <div className="self-center">
                        <Link to={"/skinanalysis"}>
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
                        <div className="text-base text-center rounded-full transition duration-500 w-8 h-8 p-0.5 border-2 border-teal-600">
                            1
                        </div>
                        <div className="absolute top-0 -ml-12 text-center mt-10 w-32 text-xs text-teal-600">Data Diri</div>
                    </div>
                    <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-gray-400"></div>
                    <div className="flex items-center text-gray-400 relative">
                        <div className="text-base text-center rounded-full transition duration-500 w-8 h-8 p-0.5 border-2 border-gray-400">
                            2
                        </div>
                        <div className="absolute top-0 -ml-12 text-center mt-10 w-32 text-xs text-gray-400">Analisa Kulit</div>
                    </div>
                    <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-gray-400"></div>
                    <div className="flex items-center text-gray-400 relative">
                        <div className="text-base text-center rounded-full transition duration-500 w-8 h-8 p-0.5 border-2 border-gray-400">
                            3
                        </div>
                        <div className="absolute top-0 -ml-12 text-center mt-10 w-32 text-xs text-gray-400">Hasil Analisa</div>
                    </div>
                </div>
                <div className="lg:py-12 py-10">
                    <div className="flex flex-col text-center justify-center items-center">
                        <p className="font-bold lg:text-xl text-lg">1. Data Diri</p>
                        <div className="font-semibold text-base py-6 text-center">
                            Kita mulai analisis kulitmu, ya! <br></br>
                            Silahkan klik pilihan di bawah ini
                        </div>
                        <div className="mt-3 self-center lg:w-8/12">
                            <img src={skin} className="lg:w-full h-full" />
                        </div>
                        <div className="grid grid-cols-2 justify-center text-center py-4">
                            <button className="text-teal-600 border border-gray-400 px-10 py-1 rounded-lg mx-2"
                                onClick={() => handleClickGender('wanita')} 
                                style={getButtonStyleGender('wanita')}>
                                Wanita
                            </button>
                            <button className="text-teal-600 border border-gray-400 px-10 py-1 rounded-lg mx-2"
                                onClick={() => handleClickGender('Pria')} 
                                style={getButtonStyleGender('Pria')}>
                                Pria
                            </button>
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                            <button className="border border-gray-400 px-4 py-2 rounded-lg mx-2 text-teal-600"
                                onClick={() => handleClick('10')} 
                                style={getButtonStyle('10')}>
                                10-an
                            </button>
                            <button className="border border-gray-400 px-4 py-2 rounded-lg mx-2 text-teal-600"
                                onClick={() => handleClick('20')} 
                                style={getButtonStyle('20')}>
                                20-an
                            </button>
                            <button className="border border-gray-400 px-4 py-2 rounded-lg mx-2 text-teal-600"
                                onClick={() => handleClick('30')} 
                                style={getButtonStyle('30')}>
                                30-an
                            </button>
                            <button className="border border-gray-400 px-4 py-2 rounded-lg mx-2 text-teal-600"
                                onClick={() => handleClick('40')} 
                                style={getButtonStyle('40')}>
                                40-an
                            </button>
                            <button className="border border-gray-400 px-4 py-2 rounded-lg mx-2 text-teal-600"
                                onClick={() => handleClick('50')} 
                                style={getButtonStyle('50')}>
                                50-an
                            </button>
                            <button className="border border-gray-400 px-4 py-2 rounded-lg mx-2 text-teal-600"
                                onClick={() => handleClick('60')} 
                                style={getButtonStyle('60')}>
                                60-an
                            </button>
                        </div>
                    </div>
                </div>
                <Link to={"/skinsectiontwo"}>
                    <div className="absolute text-center w-full text-lg bottom-0 left-0 py-5 bg-[#4ABFA1] text-white">
                        Lanjut
                    </div>
                </Link>
            </div>
            
        </>
    )
}

export default SkinSectionOne;