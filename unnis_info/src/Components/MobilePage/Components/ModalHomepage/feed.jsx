import { Link } from "react-router-dom";
import back from "../../../../assets/previous.svg";
import logo from "../../../../assets/logo.png";
import camera_pink from "../../../../assets/SkinAnalysis/camera_pink.png";
import React, { useState } from 'react';


function Feed() {

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

    return (
    <>
        <div className="pb-2 w-full h-full ">
            <div className="top-0 sticky lg:px-8 px-4 w-full bg-white pt-2">
                <div className="flex justify-between">
                    <div className="self-center">
                        <Link to={"/"}>
                            <img src={back} className="w-full" />
                        </Link>
                    </div>
                    <div className="self-center flex justify-center">
                        <img src={logo} className="w-3/12" /> 
                    </div>
                    <div className="self-center">
                        <img src={camera_pink} className="w-5/12" /> 
                    </div>
                </div>
                <div className="flex justify-between text-center justify-center py-3">
                    <a href="">NEW</a>
                    <a href="">CATEGORY</a>
                    <a href="">REVIEW</a>
                    <a href="">EVENT</a>
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
                    <a href="/feeddetail">
                        <div className="mt-2 mb-5 rounded-lg px-3">
                            <img src="https://wordpressunnis.s3.ap-southeast-1.amazonaws.com/images/feed/thumbnail/629ef844d6e5f05ffff8d2b4.png" className="w-full rounded-xl"/>
                        </div>
                    </a> 
                    <div className="my-5 rounded-lg px-3"><img src="https://wordpressunnis.s3.ap-southeast-1.amazonaws.com/images/feed/thumbnail/629f1454d6e5f05ffff8d2b7.png" className="w-full rounded-xl"/></div>
                    <div className="my-5 rounded-lg px-3"><img src="https://wordpressunnis.s3.ap-southeast-1.amazonaws.com/images/feed/thumbnail/62a15955d6e5f05ffff8d2ca.png" className="w-full rounded-xl"/></div>
                    <div className="my-5 rounded-lg px-3"><img src="https://wordpressunnis.s3.ap-southeast-1.amazonaws.com/images/feed/thumbnail/62a15931d6e5f05ffff8d2c9.png" className="w-full rounded-xl"/></div>
                </div>
            </div>
        </div>
    </>  
    )
    
}

export default Feed;