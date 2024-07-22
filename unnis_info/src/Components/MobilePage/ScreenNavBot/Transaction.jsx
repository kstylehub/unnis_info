import NavigationButtom from "../NavigatonBottom/NavigationBottom";
import { Link, Outlet } from "react-router-dom";
import React, { useState } from "react";

function Transaction() {
  const [clickedButton, setClickedButton] = useState("subs");

  const handleClick = (button) => {
    setClickedButton(button);
  };

  const getButtonStyle = (button) => {
    if (clickedButton === button) {
      return {
        border: "1px solid black",
        borderRadius: "9999px",
      };
    } else {
      return {
        border: "none",
        borderRadius: "9999px",
      };
    }
  };

  return (
    <>
      <div className="h-full" style={{overflow:"hidden"}}>
        <div className="bg-white h-full w-full py-6 px-2">
          <div className="justify-center items-center">
            <p className="font-bold flex justify-center items-center lg:text-xl text-lg">
              MY TRANSACTION
            </p>
            <div className="flex justify-center py-4">
              <Link to={"/transaction/transsubs"}>
                <button
                  className=" py-1 px-10 text-base"
                  style={getButtonStyle("subs")}
                  onClick={() => handleClick("subs")}
                >
                  Subscription
                </button>
              </Link>
              <Link to={"/transaction/transproduct"}>
                <button
                  className=" py-1 px-10 text-base"
                  style={getButtonStyle("product")}
                  onClick={() => handleClick("product")}
                >
                  Product Purchase
                </button>
              </Link>
            </div>
            <Outlet />
          </div>
        </div>
        <div className="bg-white pt-2.5 pb-1 px-1.5 sticky bottom-0 z-20">
          <NavigationButtom />
        </div>
      </div>
    </>
  );
}

export default Transaction;
