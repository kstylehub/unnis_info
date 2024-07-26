import React from "react";
import logoUnnis from "../../assets/Grouplogo.svg";
import logo from "../../assets/logo.png";
import andImg from "../../assets/and_img.png";
import iosImg from "../../assets/ios_img.png";
import barcode from "../../assets/icon_barcode.png";

function Info2() {
  return (
    <div className="content h-7/12 rounded-l-3xl flex-col items-center justify-center lg:w-[40%] px-20 pl-12 pb-40 pt-40 w-screen hidden lg:block mt-[17vh] mb-[20vh]">
      <div className="text-center pt-28 flex flex-col px-6 gap-3">
        <div className="flex justify-center py-3">
            <div className="text-2xl text-white bg-[#4ABFA1] w-6/12 py-1 rounded-full">
                Available For
            </div>
        </div>
        <div className="font-black text-7xl text-[#4ABFA1]">
            DOWNLOAD
        </div>
        <div className="my-4 px-8">
          <h6 className="text-center text-2xl text-[#6E6E6E]">
            Hi, Jangan lupa untuk unduh aplikasi UNNIS sekarang :)
          </h6>
        </div>
        <div className="mt-6 px-10">
          <div className="flex justify-center">
            <div className="px-2 text-center">
              <div className="flex flex-row justify-center items-center">
                <a
                  href="https://play.google.com/store/apps/details?id=com.brommko.android.unnispark"
                  target="_blank"
                  className="flex justify-center items-center"
                >
                  <img src={andImg} className="w-11/12" />
                </a>
                <a
                  href="https://apps.apple.com/id/app/unnis/id1600606073"
                  target="_blank"
                  className="flex justify-center items-center"
                >
                  <img src={iosImg} className="w-11/12" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info2;
