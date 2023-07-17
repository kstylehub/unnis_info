import NavigationButtom from "../NavigatonBottom/NavigationBottom";
import { Link, Outlet } from "react-router-dom";
import React, { useState } from 'react';

function Transaction() {
  const [clickedButton, setClickedButton] = useState('subs');

  const handleClick = (button) => {
    setClickedButton(button);
  };

  const getButtonStyle = (button) => {
    if (clickedButton === button) {
      return {
        border: '1px solid black',
        borderRadius: '9999px',
        background: 'transparent',
      };
    } else {
      return {
        border: 'none',
        borderRadius: '9999px',
        background: 'transparent',
      };
    }
  };

  return (
    <>
      <div className="bg-white h-full w-full py-6 px-2">
        <div className="justify-center items-center">
          <p className="font-bold flex justify-center items-center lg:text-2xl text-lg">MY TRANSACTION</p>
          <div className="flex justify-center lg:py-6 py-4">
            <Link to={"/transaction/transsubs"}>
              <button
                className="lg:text-lg lg:px-16 py-1 px-10 lg:px-6 text-md"
                style={getButtonStyle('subs')}
                onClick={() => handleClick('subs')}
              >
                Subscription
              </button>
            </Link>
            <Link to={"/transaction/transproduct"}>
              <button
                className="lg:text-lg lg:px-16 py-1 px-10 text-md lg:px-6"
                style={getButtonStyle('product')}
                onClick={() => handleClick('product')}
              >
                Product Purchase
              </button>
            </Link>
          </div>
          <Outlet />
        </div>
      </div>
      <div className="bg-slate-50 pt-2.5 pb-1 px-1.5 sticky bottom-0 z-20">
        <NavigationButtom />
      </div>
    </>
  );
}

export default Transaction;
