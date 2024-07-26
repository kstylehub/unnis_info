import { Link, Outlet } from "react-router-dom";
import NavigationButtom from "../../NavigatonBottom/NavigationBottom";
import LogoUnnis from "../../../../assets/unnis_logo.png";
import Alert from "../../../../assets/Community/alert.svg";
import { getAllCommunity } from "../../../../Store/Actions/Actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import coin from "../../../../assets/Homepage/coin.png";

function CommunityTopBar() {
  const getUser = useSelector((state) => state.ReducerUser.dataUser);
  const dataUser = getUser?.dataMember?.[0];

  return (
    <>
      <div className="pt-1 pb-1 sticky top-0 z-5 bg-white">
        <div className="flex justify-between">
          <div className="justify-center items-center w-3/12 p-1">
            <img src={LogoUnnis} className="w-12/12" />
          </div>
          <div className="flex justify-center items-center gap-1">
            <img src={coin} className="w-5 h-5  flex items-center"></img>
            <p className="font-bold text-[#4ABFA1] text-lg">
              {dataUser ? `${dataUser.point}` : "0"}
            </p>
          </div>
          <div className="w-3/12 flex justify-center gap-4">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                />
              </svg>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
            </div>
          </div>
        </div>
        <hr className="mt-2"></hr>
        <div className="flex px-3 gap-2 py-2">
          <div className="w-1/12 flex justify-center items-center">
            <img src={Alert} className="w-full h-full p-0.5" />
          </div>
          <div className="w-11/12 text-xs text-[#4ABFA1] font-bold">
            The opinions expressed in this community are personal and may
            different from expert opinions.
          </div>
        </div>
      </div>
    </>
  );
}

export default CommunityTopBar;
