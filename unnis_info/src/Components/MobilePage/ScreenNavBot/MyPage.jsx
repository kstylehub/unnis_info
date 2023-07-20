import NavigationButtom from "../NavigatonBottom/NavigationBottom";
import coin from "../../../assets/MyPage/coin.png";
import profile from "../../../assets/MyPage/profile.png";
import recycle from "../../../assets/MyPage/recycle.png";

function MyPage () {
    return (
        <>
        <div className="bg-white h-full w-full py-6 ">
            <div className="px-2 pb-5">
                <div className="justify-center items-center">
                    <p className="font-bold flex justify-center items-center lg:text-xl text-lg">My Profile</p> 
                </div> 
            </div>
            <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-gray-300"></div>
            <div className="flex flex-col py-3 px-4">
                <div className="flex flex-row justify-between">
                    <div className="font-bold text-sm">
                        Kode Referral : PPNBTG
                    </div>
                    <button className="bg-[#4ABFA1] text-xs font-bold rounded-full py-1 px-3 text-white">
                        Undang Teman
                    </button>
                </div>
                <div className="flex flex-row text-sm mt-1 text-gray-500">
                    <div className="">
                       Undang teman dan dapatkan bonus 
                    </div>
                    <img src={coin} className="w-1/12 pb-1 pl-2"/>
                    <div className="text-[#4ABFA1] text-sm font-bold items-center">
                       500
                    </div>
                </div>
            </div>
            <hr className="flex-auto border-t-1 transition duration-500 ease-in-out border-gray-300"></hr>
            <div className="flex flex-col py-3 px-4 justify-center items-center">
                <img src={profile} className="w-3/12 pb-1 pl-2 mt-6"/>
                <div className="flex flex-row justify-center items-center mt-2">
                    <img src={recycle} className="w-1/12"/>
                    <div className="font-bold text-base mx-1">
                        My Name
                    </div>
                </div>
                <div className="text-xs mt-1">
                    30-an / netral / right
                </div>
            </div>
            <div className="flex py-2 mt-1 px-4 flex items-center justify-between w-full bg-gray-200">
                <div className="flex">
                    <img src={recycle} className="w-7 h-6"/>
                    <div className="text-[#4ABFA1] text-sm font-bold mx-2">
                        Recycle
                    </div>
                </div>
                <div className="flex flex-row justify-center items-center">
                   <div className="mx-3 text-[#4ABFA1] text-sm font-bold">
                        Jelajahi 
                    </div>
                    <svg class="w-2 h-2 text-gray-800 dark:text-[#4ABFA1]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"/>
                    </svg> 
                </div>
            </div>
            <div className="flex">
                <div className="text-sm text-center w-6/12 border-r-2 border-white py-2 bg-[#4ABFA1] text-white">
                    Kembali
                </div>

                <div className="text-sm text-center w-6/12 py-2 bg-[#4ABFA1] text-white">
                    Lanjut
                </div>
            </div>
        </div>
        
        <div className="bg-slate-50 pt-2.5 pb-1 px-1.5 sticky bottom-0 z-20">
          <NavigationButtom />
        </div>
        </>
    )
}

export default MyPage