import React from "react";
import logoUnnis from "../../assets/Grouplogo.svg";
import logo from "../../assets/logo.png";
import andImg from "../../assets/and_img.png";
import iosImg from "../../assets/ios_img.png";
import barcode from "../../assets/icon_barcode.png";

function Info2() {
  return (
    <div className="content h-7/12 rounded-l-3xl flex-col items-center justify-center lg:w-[40%] pr-12 pl-12 pb-40 pt-36 hidden lg:block mt-[17vh] mb-[20vh]">
      <div className="text-center mt-12">
        <div className="flex justify-center mt-36">
          <img
            src={logo}
            className="w-7/12"
            alt="Logo"
          />
        </div>
      </div>
      
    </div>
  );
}

export default Info2;
