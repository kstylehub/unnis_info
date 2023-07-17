import Aloncepict from "../../../../assets/Alonce.jpg";
import lipTint from "../../../../assets/LipTint.jpg";
import Tov from "../../../../assets/Tov.jpg";
function ContentEvent() {
  return (
    <div className="max-w-screen space-y-2 overflow-y-auto">
      <div className="flex px-10  py-2 overflow-x-auto min-w-100 w-full space-x-4">
        <div>
          <button className="px-4 bg-transparant hover:bg-slate-300 text-grey-300 border border-black rounded-full">
            All
          </button>
        </div>
        <div>
          <button className="px-4 bg-transparant hover:bg-slate-300 text-grey-300 border border-black rounded-full">
            Unnis
          </button>
        </div>
        <div>
          <button className="px-4 bg-transparant hover:bg-slate-300 text-grey-300 border border-black rounded-full">
            Supporters
          </button>
        </div>
        <div>
          <button className="px-4 bg-transparant min-w-max hover:bg-slate-300 text-grey-300 border border-black rounded-full">
            Event Lain
          </button>
        </div>
      </div>
      <div className="">
        <a
          href="#"
          className="relative max-w rounded overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
        >
          <img
            className="w-full border-t-4 border-pink-300"
            src={Aloncepict}
            alt="Image"
          ></img>
          <div className="px-6 py-4 flex-justify space-y-1 border-b-4 border-pink-300">
            <div className="font-sans text-m mb-1">
              [ALONCE] SALE UP TO 50% OFF
            </div>
            <p className="text-gray-700 text-s w-full">
              Live sale will be Held at 8 August start from 12:00 PM
            </p>
            <div className="flex space-x-2">
              <div>
                <p className="text-red-600 text-xs px-2 py-1/2 border border-red-600 rounded-full">
                  D-5
                </p>
              </div>
              <div>
                <p className="text-gray-700 text-xs">21.11.24 ~ 21.11.30</p>
              </div>
            </div>
          </div>
        </a>
        <a
          href="#"
          className="relative max-w rounded overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
        >
          <img className="w-full" src={lipTint} alt="Image"></img>
          <div className="px-6 py-4 flex-justify space-y-1 border-b-4 border-pink-300">
            <div className="font-sans text-m mb-1">
              [LIP TINT] 3.3 SALE EVENT
            </div>
            <p className="text-gray-700 text-s w-full">
              Diskon 30% untuk semua produk lip tint di unnis pick
            </p>
            <div className="flex space-x-2">
              <div>
                <p className="text-red-600 text-xs px-2 py-1/2 border border-red-600 rounded-full">
                  D-4
                </p>
              </div>
              <div>
                <p className="text-gray-700 text-xs">21.02.01 ~ 21.02.07</p>
              </div>
            </div>
          </div>
        </a>
        <a
          href="#"
          className="relative max-w rounded overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
        >
          <img className="w-full" src={Tov} alt="Image"></img>
          <div className="px-6 py-4 flex-justify space-y-1 border-b-4 border-pink-300">
            <div className="font-sans text-m mb-1">
              [TOV] ALL PRODUCT BUY 2 GET 2
            </div>
            <p className="text-gray-700 text-s w-full">
              Diskon 30% untuk semua produk lip tint di unnis pick
            </p>
            <div className="flex space-x-2">
              <div>
                <p className="text-red-600 text-xs px-2 py-1/2 border border-red-600 rounded-full">
                  D-3
                </p>
              </div>
              <div>
                <p className="text-gray-700 text-xs">21.02.01 ~ 21.02.07</p>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
export default ContentEvent;
