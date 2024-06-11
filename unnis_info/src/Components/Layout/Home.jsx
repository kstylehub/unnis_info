import React, {useState} from "react"
import unnis from '../../assets/unnisBox.png'
import Info from "./Info"
import Content from "./Content"
import { Outlet } from "react-router-dom"
import Background from "../../assets/Background/Background.png"
import Info2 from "./Info2"

function Home() {
    return (
        <div 
            className="bg-[#ffff] fixed h-full w-full" 
            style={{ backgroundImage: `url(${Background})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <div className="flex justify-center items-center h-screen w-screen">
                <Info />
                <Outlet />
                <Info2 />
            </div>
        </div>
    );
}

export default Home;