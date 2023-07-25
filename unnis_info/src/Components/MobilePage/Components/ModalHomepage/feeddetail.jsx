import { Link } from "react-router-dom";
import back from "../../../../assets/previous.svg";
import mark from "../../../../assets/mark.png";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getEvent } from "../../../../Store/Actions/Actions";
import React, { useState } from 'react';


function FeedDetail() {
    return (
        <>
            <div className="pb-2 w-full h-full ">
                <div className="top-0 sticky lg:px-8 px-4 w-full bg-white pt-2">
                    <div className="flex justify-between pt-2 pb-4">
                        <div className="self-center">
                            <Link to={"/feed"}>
                                <img src={back} className="w-full" />
                            </Link>
                        </div>
                        <div className="self-center text-center text-xl">
                            FEED
                        </div>
                        <div className="self-center w-1/12 flex justify-center">
                            <img src={mark} className="w-6/12" /> 
                        </div>
                    </div>   
                </div>
                <hr className="mb-2"></hr>
                <div className="pb-1 pt-3 lg:px-8 px-4">
                    <div className="">
                        {/* Title */}
                        Catch Me Patch, Bantu Kamu Kempiskan Jerawat dan Bekasnya, Lho!
                    </div>
                    <div className="text-sm text-right text-gray-300">
                        {/* Date */}
                        17 Mar 2023
                    </div>
                </div>    
                <div className="bg-gray-300 h-1 my-2 mb-6"></div>
                <div className="px-2">
                    <div className="mt-2 mb-5 rounded-lg px-3">
                        <img src="https://wordpressunnis.s3.ap-southeast-1.amazonaws.com/images/feed/thumbnail/629ef844d6e5f05ffff8d2b4.png" className="w-full"/>
                    </div>
                    <div className="mt-2 mb-5 rounded-lg px-3">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                        It has survived not only five centuries, but also the leap into electronic typesetting, 
                        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
                        sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like 
                        Aldus PageMaker including versions of Lorem Ipsum.
                    </div>    
                    <div className="mt-2 mb-5 rounded-lg px-3">
                        <img src="https://wordpressunnis.s3.ap-southeast-1.amazonaws.com/images/feed/thumbnail/629ef844d6e5f05ffff8d2b4.png" className="w-full"/>
                    </div>
                    <div className="mt-2 mb-5 rounded-lg px-3">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                        It has survived not only five centuries, but also the leap into electronic typesetting, 
                        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
                        sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like 
                        Aldus PageMaker including versions of Lorem Ipsum.
                    </div>  
                </div>
                
            </div>
        </>  
    )
    
}

export default FeedDetail;