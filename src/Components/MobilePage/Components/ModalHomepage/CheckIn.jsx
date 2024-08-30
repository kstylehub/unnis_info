import { Link } from "react-router-dom";
import back from "../../../../assets/previous.svg";
import bg from "../../../../assets/CheckIn/check_in_reward.jpg";
import stampoff1 from "../../../../assets/CheckIn/stampoff_1.png";
import stampoff2 from "../../../../assets/CheckIn/stampoff_2.png";
import stampoff3 from "../../../../assets/CheckIn/stampoff_3.png";
import stampoff4 from "../../../../assets/CheckIn/stampoff_4.png";
import stampoff5 from "../../../../assets/CheckIn/stampoff_5.png";
import stampoff6 from "../../../../assets/CheckIn/stampoff_6.png";
import stampoff7 from "../../../../assets/CheckIn/stampoff_7.png";

function CheckIn() {
  return (
    <>
      <div className="bg-white h-screen flex-col flex overflow-hidden">
        <div className="top-0 sticky w-full z-20 bg-white pt-2 shadow">
          <div className="flex justify-center items-center py-3 px-5">
            <Link
              to={"/community"}
              className="w-3/12 flex items-center justify-start"
            >
              <img src={back} className="w-8 h-8" alt="Back" />
            </Link>
            <div className="w-5/12 text-lg font-semibold text-center">
              Check In Reward
            </div>
            <div className="w-3/12"></div>
          </div>
        </div>
        <div className="flex-grow h-full w-full">
          <div className="h-full w-full flex">
            <img src={bg} className=""></img>
          </div>
        </div>
        <div className="absolute top-[58%] left-[20%]">
          <div className="flex flex-col gap-3">
            <div className="flex gap-2">
              <img src={stampoff1} className="w-14 h-14" alt="Stampoff7" />
              <img src={stampoff2} className="w-14 h-14" alt="Stampoff7" />
              <img src={stampoff3} className="w-14 h-14" alt="Stampoff7" />
              <img src={stampoff4} className="w-14 h-14" alt="Stampoff7" />
            </div>
            <div className="flex gap-2">
              <img src={stampoff5} className="w-14 h-14" alt="Stampoff7" />
              <img src={stampoff6} className="w-14 h-14" alt="Stampoff7" />
              <img src={stampoff7} className="w-14 h-14" alt="Stampoff7" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CheckIn;
