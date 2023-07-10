import React, {useState} from "react"
import unnis from '../../assets/unnisBox.png'
import Info from "./Info"
import Content from "./Content"
function Home() {
    return (
        <div className="bg-green-500 fixed h-full w-full">
            <div className="flex justify-center items-center h-full w-screen ">
                    <Info/>
                    <Content/>
            </div>
        </div>
    )
}

export default Home