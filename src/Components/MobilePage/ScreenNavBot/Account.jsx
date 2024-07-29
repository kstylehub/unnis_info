import React, { useState } from "react";
import { Link} from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../../Store/Actions/Actions";
import NavigationButtom from "../NavigatonBottom/NavigationBottom";
import LogoUnnis from "../../../assets/unnis_logo.png";
import back from "../../../assets/previous.svg";

function Account() {
  const dispatch = useDispatch();
  const [isLoggedOut, setIsLoggedOut] = useState(false);

  function handleLogout() {
    dispatch(logout());
    setIsLoggedOut(true);
  }

  function AccountPage() {

    if (isLoggedOut) {
      return <KlikLogin />;
    } else {
      return <Page />;
    }
  }

  return (
    <>
      <AccountPage />
    </>
  );

  function Page() {
    return (
      <div className="w-full h-full overflow-x-auto relative pb-20">
        <div className="top-0 sticky w-full z-20 bg-white pt-2 shadow">
          <div className="flex justify-center items-center py-3 px-5">
            <Link
              to={"/my-page"}
              className="w-4/12 flex items-center justify-start"
            >
              <img src={back} className="w-8 h-8" alt="Back" />
            </Link>
            <div className="w-4/12 text-lg font-semibold text-center">
              Account
            </div>
            <div className="w-4/12"></div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center justify-between p-5 border-b">
            <div className="w-11/12 ps-2">Ubah Kata Sandi</div>
            <div className="w-1/12 justify-end">
              <svg
                className="w-5 h-5 text-[#4ABFA1] dark:text-[#4ABFA1]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 8 14"
              >
                <path
                  stroke="black"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                  d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
                />
              </svg>
            </div>
          </div>
          <div className="flex items-center justify-between p-5 border-b">
            <div className="w-11/12 ps-2">Hapus Akun</div>
            <div className="w-1/12 justify-end">
              <svg
                className="w-5 h-5 text-[#4ABFA1] dark:text-[#4ABFA1]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 8 14"
              >
                <path
                  stroke="black"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                  d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
                />
              </svg>
            </div>
          </div>
          <div
            className="flex items-center justify-between p-5 border-b"
            onClick={handleLogout}
          >
            <div className="w-11/12 ps-2">Log Out</div>
            <div className="w-1/12 justify-end">
              <svg
                className="w-5 h-5 text-[#4ABFA1] dark:text-[#4ABFA1]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 8 14"
              >
                <path
                  stroke="black"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                  d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }

  function KlikLogin() {
    return (
      <>
        <div className="h-full" style={{ overflow: "hidden" }}>
          <div className="bg-white h-full w-full">
            <div className="justify-center items-center py-6">
              <div className="flex text-center justify-center pb-5 text-lg">
                <h1>ACCOUNT</h1>
              </div>
              <hr className="flex-auto border-t-1 transition duration-500 ease-in-out border-gray-300"></hr>
              <div className="px-20 py-24">
                <div className="flex justify-center pb-4">
                  <img src={LogoUnnis} alt="Logo Unnis" />
                </div>
                <div className="items-center text-center pb-4">
                  <h1 className="pb-4 font-semibold">
                    Kekhawatiran tentang kosmetik sudah berakhir!
                  </h1>
                  <p>
                    Login sekarang dan dapatkan rekomendasi kosmetik khusus
                    untukmu.
                  </p>
                </div>
                <div className="text-sm text-center py-2 bg-[#4ABFA1] text-white">
                  <Link to={"/login"}>
                    <button>Login Sekarang</button>
                  </Link>
                </div>
                <div className="text-[#4ABFA1] text-center pt-2">
                  <h1 className="font-semibold text-sm">v.2.6.30</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white pt-2.5 pb-1 px-1.5 sticky bottom-0 z-20">
            <NavigationButtom />
          </div>
        </div>
      </>
    );
  }
}

export default Account;
