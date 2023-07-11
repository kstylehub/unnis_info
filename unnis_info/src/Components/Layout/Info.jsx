import React from "react";
import logoUnnis from "../../assets/favicon.ico";
import andImg from "../../assets/and_img.png";
import iosImg from "../../assets/ios_img.png";
import barcode from "../../assets/icon_barcode.png";

function Info() {
  return (
    <div className="content h-full flex flex-col items-center justify-center pr-14 pl-28 gap-y-10 w-screen hidden md:block mt-[50vh]">
      <div className="text-center">
        <div className="pb-2 flex justify-center">
          <img src={logoUnnis} className="w-16 h-16" alt="Logo" />
        </div>
        <h4 className="font-bold">UNNIS APP</h4>
      </div>
      <div className="mt-10">
        <h6 className="text-center">
          Gak perlu bingung lagi, kecantikanmu akan bertambah!{" "}
          <strong>'UNNIS'</strong> akan merekomendasikan produk kosmetik yang
          cocok untukmu. Ayo berlangganan sekarang dan rasakan manfaatnya.
        </h6>
      </div>
      <div className="mt-10">
        <div className="flex justify-center">
          <div className="mx-2.5 text-center">
            <h3>Unduh Aplikasi</h3>
            <a href="https://play.google.com/store/apps/details?id=com.brommko.android.unnispark" target="_blank">
            <img src={andImg} style={{ width: 150, height: 60 }} />
            </a>
            <a href="https://apps.apple.com/id/app/unnis/id1600606073" target="_blank">
            <img src={iosImg} style={{ width: 150, height: 60 }} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
