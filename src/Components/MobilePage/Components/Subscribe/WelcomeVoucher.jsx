import { Link } from "react-router-dom";
import back from "../../../../assets/previous.svg";
import Box from "../../../../assets/box_transaction.png";
import CartButtom from "../BottomBar/CartBottom";

function WelcomeVoucher() {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-white relative">
        <div className="top-0 sticky lg:px-8 px-4 w-full z-20 bg-white pt-2 shadow-md">
          <div className="flex justify-center items-center py-3">
            <Link to={"/subcription-menu"} className="w-1/12 flex items-center justify-center">
              <img src={back} className="w-8 h-8" alt="Back" />
            </Link>
            <div className="w-11/12 text-xl font-semibold items-center lg:ps-8">
              Welcome Voucher
            </div>
          </div>
        </div>
        <img src={"https://s3.ap-northeast-2.amazonaws.com/hiunnis.com/images/voucherGratis.jpeg"} className="w-full h-auto" alt="Box" />
        <div className="pt-5 flex flex-col justify-center items-center lg:text-lg text-sm">
        <Link to={"/"}>
              <button className="px-6 my-3 font-semibold text-white text-base border rounded-full py-2 border-green-500 bg-[#43BFA1]">
                Berlangganan Sekarang
              </button>
        </Link>
        </div>
        <div className="bg-white pt-2.5 pb-1 px-1.5 sticky bottom-0 z-20">
          {/* <CartButtom /> */}
        </div>
      </div>
    </>
  );
}

export default WelcomeVoucher;
