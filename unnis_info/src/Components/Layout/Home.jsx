import React, {useState} from "react"
import unnis from '../../assets/unnisBox.png'
import Info from "./Info"
import Content from "./Content"
function Home() {
    return (
        <div className="bg-[#4ABFA1] fixed h-full w-full">
            <div className="flex justify-center items-center h-screen w-screen ">
                    <Info/>
                    <Content/>
            </div>
        </div>
    )
}

export default Home