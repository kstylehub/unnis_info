import { Link } from "react-router-dom";
import back from "../../../../assets/previous.svg";
import Box from "../../../../assets/box_transaction.png";
import CartButtom from "../BottomBar/CartBottom";

function HistoryPayment() {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-white relative">
        <div className="top-0 sticky lg:px-8 px-4 w-full z-20 bg-white pt-2 shadow-md">
          <div className="flex justify-center items-center py-3">
            <Link to={"/subcription-menu"} className="w-1/12 flex items-center justify-center">
              <img src={back} className="w-8 h-8" alt="Back" />
            </Link>
            <div className="w-11/12 text-xl font-semibold items-center lg:ps-8">
              History Payment
            </div>
          </div>
        </div>
        <div className="flex-grow">
          <div className="pt-20 flex flex-col justify-center items-center lg:text-lg text-sm">
            <img src={Box} className="w-5/12 h-auto" alt="Box" />
            <p className="mb-3 mt-12 text-base">
              Kamu belum terdaftar dalam langganan apapun
            </p>
          </div>
        </div>
        <div className="bg-white pt-2.5 pb-1 px-1.5 sticky bottom-0 z-20">
          {/* <CartButtom /> */}
        </div>
      </div>
    </>
  );
}

export default HistoryPayment;
