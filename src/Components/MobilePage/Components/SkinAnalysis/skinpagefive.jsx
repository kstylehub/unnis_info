import { Link } from "react-router-dom";
import girlfive from "../../../../assets/SkinAnalysis/girl_page_five.png";
import girltemplate from "../../../../assets/SkinAnalysis/girl_template.png";

function SkinPageFive () {
    return (
        <>
        <div className="py-12">
            <div className="flex flex-col text-center justify-center items-center">
                <p className="font-bold lg:text-xl text-lg">2. Analisa Kulit</p>
                <div className="font-semibold text-base py-6 text-center">
                    Apakah kulitmu memiliki jerawat?
                </div>
                <div className="mt-3 flex justify-between w-full px-2">
                    <img src={girlfive} className="w-3/12" />
                    <img src={girltemplate} className="w-3/12" />
                </div>
            </div>
            <div className="flex items-center px-10 mt-5">
                <div className="flex items-center text-teal-600 relative">
                    <input id="skinpageone1" type="radio" value="" name="skinpageone-group" className="accent-teal-600 w-4 h-4 bg-[#4ABFA1] border-gray-400 "></input>
                    <div className="absolute top-0 -ml-14 text-center mt-6 w-32 text-xs text-black">Tertarik</div>
                </div>
                <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-gray-400"></div>
                <div className="flex items-center relative">
                    <input id="skinpageone2" type="radio" value="" name="skinpageone-group" className="accent-teal-600 w-4 h-4 bg-[#4ABFA1] border-gray-400 "></input>
                </div>
                <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-gray-400"></div>
                <div className="flex items-center relative">
                    <input checked id="skinpageone3" type="radio" value="" name="skinpageone-group" className="accent-teal-600 w-4 h-4 bg-[#4ABFA1] border-gray-400 "></input>
                    <div className="absolute top-0 -ml-14 text-center mt-6 w-32 text-xs text-black">Normal</div>
                </div>
                <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-gray-400"></div>
                <div className="flex items-center relative">
                    <input id="skinpageone4" type="radio" value="" name="skinpageone-group" className="accent-teal-600 w-4 h-4 bg-[#4ABFA1] border-gray-400 "></input>
                </div>
                <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-gray-400"></div>
                <div className="flex items-center relative">
                    <input id="skinpageone5" type="radio" value="" name="skinpageone-group" className="accent-teal-600 w-4 h-4 bg-[#4ABFA1] border-gray-400 "></input>
                    <div className="absolute top-0 -ml-14 text-center mt-6 w-32 text-xs text-black">Lembab</div>
                </div>
            </div>
        </div>

        <div className="flex flex-col">
            <Link to={"/skinsectiontwo/pagefour"}>
                <div className="absolute text-lg text-center w-6/12 border-r-2 border-white bottom-0 left-0 py-5 bg-[#4ABFA1] text-white">
                    Kembali
                </div>
            </Link>   
            <Link to={"/skinsectiontwo/pagesix"}>
                <div className="absolute text-lg text-center w-6/12 bottom-0 right-0 py-5 bg-[#4ABFA1] text-white">
                    Lanjut
                </div>
            </Link> 
        </div>
        </> 
    )
}

export default SkinPageFive;