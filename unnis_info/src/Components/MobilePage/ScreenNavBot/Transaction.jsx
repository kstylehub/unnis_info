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
        padding: '0.5rem 3.5rem',
        background: 'transparent',
      };
    } else {
      return {
        border: 'none',
        borderRadius: '9999px',
        padding: '0.5rem 3.5rem',
        background: 'transparent',
      };
    }
  };

  return (
    <>
      <div className="bg-white h-full my-6">
        <div className="text-xl justify-content-center">
          <p className="font-bold lg:flex justify-center text-2xl">MY TRANSACTION</p>
          <div className="lg:flex justify-center my-6">
            <Link to={"/transaction/transsubs"}>
              <button
                style={getButtonStyle('subs')}
                onClick={() => handleClick('subs')}
              >
                Subscription
              </button>
            </Link>
            <Link to={"/transaction/transproduct"}>
              <button
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
