import React, {useState} from "react"
import unnis from '../../assets/unnisBox.png'
import Info from "./Info"
import Content from "./Content"
import { Outlet } from "react-router-dom"
function Home() {
    return (
        <div className="bg-[#4ABFA1] fixed h-full w-full">
            <div className="flex justify-center items-center h-screen w-screen ">
                    <Info/>
                    <Outlet/>
            </div>
        </div>
    )
}

export default Home