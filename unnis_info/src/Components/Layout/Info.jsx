import React from "react";
import logoUnnis from "../../assets/Grouplogo.svg";
import logo from "../../assets/logo.png";
import andImg from "../../assets/and_img.png";
import iosImg from "../../assets/ios_img.png";
import barcode from "../../assets/icon_barcode.png";

function Info() {
  return (
    <div className="content h-full flex bg-[#F7F3EB] flex-col items-center justify-center lg:w-[40%] pr-10 pl-10 gap-y-10 w-screen hidden lg:block pt-[25vh]">
      <div className="text-center">
        <div className="pb-1 flex justify-center">
          <img
            src={logo}
            className="w-6/12"
            alt="Logo"
          />
        </div>
      </div>
      <div className="mt-6">
        <h6 className="text-center">
          Gak perlu bingung lagi, kecantikanmu akan bertambah!<br></br><br></br>
          <strong>'UNNIS'</strong> akan merekomendasikan produk kosmetik yang
          cocok untukmu. <br></br>Ayo berlangganan sekarang dan rasakan manfaatnya.
        </h6>
      </div>
      <div className="mt-10">
        <div className="flex justify-center">
          <div className="mx-2.5 text-center">
            <div className="flex flex-row justify-center items-center">
              <a
              href="https://play.google.com/store/apps/details?id=com.brommko.android.unnispark"
              target="_blank"
              className="flex justify-center items-center"
              >
                <img src={andImg} className="w-10/12" />
              </a>
              <a
                href="https://apps.apple.com/id/app/unnis/id1600606073"
                target="_blank"
                className="flex justify-center items-center"
              >
                <img src={iosImg} className="w-10/12" />
              </a>
            </div>
            
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Info;
