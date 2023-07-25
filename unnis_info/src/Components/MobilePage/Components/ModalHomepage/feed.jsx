import { Link } from "react-router-dom";
import back from "../../../../assets/previous.svg";
import logo from "../../../../assets/logo.png";
import camera_pink from "../../../../assets/SkinAnalysis/camera_pink.png";
import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllFeed } from "../../../../Store/Actions/Actions";


function Feed() {

    // Modal 
    const [showModal, setShowModal] = useState(false); 

    const handleCameraClick = () => {
        setShowModal(true);
    }; 

    const handleCloseModal = () => {
        setShowModal(false);
    };


    // Active Button
    const [clickedButton, setClickedButton] = useState('all');

    const handleClick = (button) => {
        setClickedButton(button);
    };

    const getButtonStyle = (button) => {
        if (clickedButton === button) {
            return {
                color: 'black',
                border: '1px solid black'
            };
        } else {
            return {
                color: 'gray',
            };
        }
    };

    // Connect database 
    const feed = useSelector((state) => state.ReducerFeed.dataFeed);

    console.log(feed.data,"dataFeed");
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllFeed());
    }, []);

    function AllFeed() {
        const data = feed?.data;
        return (
            <>
            {data?.map((el) => (
                <Link to={handleCameraClick} key={el.id}
                    onClick={handleCameraClick}>
                    <img
                        className="w-full rounded-3xl py-2 px-3 "
                        src={el.thumbnail}
                        alt="Image"
                    />
                </Link>
            ))}
            </>
        );
    }

    return (
    <>
        <div className="pb-2 w-full h-full overflow-y-auto">
            <div className="top-0 sticky lg:px-8 px-4 w-full bg-white pt-2">
                <div className="flex justify-between">
                    <div className="self-center">
                        <Link to={"/"}>
                            <img src={back} className="w-full" />
                        </Link>
                    </div>
                    <div className="self-center flex justify-center">
                        <img src={logo} className="w-4/12" /> 
                    </div>
                    <div className="self-center">
                        <img src={camera_pink} className="w-5/12" /> 
                    </div>
                </div>
                <div className="flex justify-between text-center justify-center py-3">
                    <a href="/newProduct">NEW</a>
                    <a href="/newProduct">CATEGORY</a>
                    <a href="">REVIEW</a>
                    <a href="/event">EVENT</a>
                    <a href="">FEED</a>
                </div>    
            </div>
            <hr className="mb-2"></hr>
            <div className="pb-1">
                <div className="flex lg:px-8 px-4 py-2 overflow-x-auto lg:space-x-6 space-x-2 text-sm">
                    <div>
                        <button 
                            className="px-4 py-0.5 min-w-max border border-gray-400 rounded-full"
                            onClick={() => handleClick('all')} 
                            style={getButtonStyle('all')}>
                            All
                        </button>
                    </div>
                    <div>
                        <button 
                            className="px-4 py-0.5 min-w-max border border-gray-400 rounded-full"
                            onClick={() => handleClick('UnnisAtoZ')} 
                            style={getButtonStyle('UnnisAtoZ')}>
                            Unnis A to Z
                        </button>
                    </div>
                    <div>
                        <button 
                            className="px-4 py-0.5 min-w-max border border-gray-400 rounded-full"
                            onClick={() => handleClick('report')} 
                            style={getButtonStyle('report')}>
                            New Report
                        </button>
                    </div>
                    <div>
                        <button 
                            className="px-4 py-0.5 min-w-max border border-gray-400 rounded-full"
                            onClick={() => handleClick('editor')} 
                            style={getButtonStyle('editor')}>
                            Editor's Pick
                        </button>
                    </div>
                    <div>
                        <button 
                            className="px-4 py-0.5 min-w-max border border-gray-400 rounded-full"
                            onClick={() => handleClick('letter')} 
                            style={getButtonStyle('letter')}>
                            Unnis Letter
                        </button>
                    </div>
                </div>
                <div>
                <AllFeed />   
                </div>
            </div>
        </div>

        {/* Modal */}
        {showModal && (
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-opacity-70 bg-black flex justify-center items-center z-50">
                <div className ="rounded-lg bg-white text-center lg:mx-20 mx-16">
                    <div className="py-8 lg:px-6 px-4">
                        <h5 className="lg:mb-2 text-sm font-semibold leading-tight">
                        Fitur ini hanya dapat digunakan pada aplikasi UNNIS
                        </h5>
                    </div>
                    <hr></hr>
                    <button className="lg:py-4 py-3 inline-block rounded px-6 text-sm text-green-600"
                        onClick={handleCloseModal}
                        type="button">
                        Kembali
                    </button>
                </div>
            </div>
        )}
    </>  
    )
    
}

export default Feed;