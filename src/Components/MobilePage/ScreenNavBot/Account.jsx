import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteAccount, logout } from "../../../Store/Actions/Actions";
import NavigationButtom from "../NavigatonBottom/NavigationBottom";
import LogoUnnis from "../../../assets/unnis_logo.png";
import back from "../../../assets/previous.svg";

function Account() {
  const dispatch = useDispatch();
  const [isLoggedOut, setIsLoggedOut] = useState(false);
  const [isDelAccount, setIsDelAccount] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [showModalDelAccount, setShowModalDelAccount] = useState(false);
  const [showConfirmDelModal, setShowConfirmDelModal] = useState(false);
  const [deleteReason, setDeleteReason] = useState("");
  const user = useSelector((state) => state.ReducerUser.dataUser);
  const dataToMap = Array.isArray(user?.dataMember) ? user?.dataMember : user;

  function handleLogout() {
    dispatch(logout());
    setIsLoggedOut(true);
    setShowLogoutModal(false);
  }

  function handleDeleteAccount() {
    const id = dataToMap.id;
    dispatch(deleteAccount(id, { reason: deleteReason }));
    setShowConfirmDelModal(false);
    setShowModalDelAccount(false);
    setIsDelAccount(true);
  }

  function AccountPage() {
    if (isLoggedOut || isDelAccount) {
      return <KlikLogin />;
    } else {
      return <Page />;
    }
  }

  return (
    <>
      <AccountPage />
      {showLogoutModal && <LogoutModal />}
      {showModalDelAccount && <DelAccModal />}
      {showConfirmDelModal && <ConfirmDelModal />}
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
          <Link to="/mypage/account/changepassword" className="flex items-center justify-between p-5 border-b">
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
          </Link>
          <div
            className="flex items-center justify-between p-5 border-b"
            onClick={() => setShowModalDelAccount(true)}
          >
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
            onClick={() => setShowLogoutModal(true)}
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

  function LogoutModal() {
    return (
      <div className="absolute inset-0 flex items-center justify-center z-50">
        <div className="bg-black opacity-50 absolute inset-0"></div>
        <div className="bg-white p-8 rounded shadow-lg z-10">
          <h2 className=" mb-6">Anda yakin akan keluar aplikasi?</h2>
          <div className="flex justify-center gap-6">
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-[#4ABFA1] text-white rounded"
            >
              Keluar
            </button>
            <button
              onClick={() => setShowLogoutModal(false)}
              className=" px-4 py-2 bg-gray-200 rounded"
            >
              Batal
            </button>
          </div>
        </div>
      </div>
    );
  }

  function DelAccModal() {
    const reasons = [
      "Untuk Mendaftar dengan akun lain",
      "Jumlah produk yang terdaftar sedikit",
      "Tidak terlalu bermanfaat",
      "Tidak ada produk yang kucari",
      "Aplikasinya berjalan lambat",
      "Ingin berpindah ke layanan/aplikasi lain",
      "Aplikasi tidak nyaman untuk digunakan",
      "Lainnya",
    ];

    return (
      <div className="absolute inset-0 flex items-center justify-center z-50">
        <div className="bg-black opacity-50 absolute inset-0"></div>
        <div className="absolute bottom-0 left-0 right-0 bg-white  rounded-t-2xl shadow-lg z-10">
          <div className="flex justify-between  p-4 border-b">
            <h2 className="  font-bold uppercase">
              pilih alasan penghapusan akun
            </h2>
            <div className="" onClick={() => setShowModalDelAccount(false)}>
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18 17.94 6M18 18 6.06 6"
                />
              </svg>
            </div>
          </div>

          <div className="flex flex-col justify-center p-4 gap-6 text-sm">
            {reasons.map((reason) => (
              <div
                key={reason}
                onClick={() => {
                  setDeleteReason(reason);
                  // setShowModalDelAccount(false);
                  setShowConfirmDelModal(true);
                }}
              >
                {reason}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  function ConfirmDelModal() {
    return (
      <div className="absolute inset-0 flex items-center justify-center z-50">
        <div className="bg-black opacity-50 absolute inset-0"></div>
        <div className="bg-white p-8 rounded shadow-lg z-10">
          <h2 className=" mb-6">Anda yakin akan menghapus akun?</h2>
          <div className="flex justify-center gap-6">
            <button
              onClick={handleDeleteAccount}
              className="px-4 py-2 bg-[#4ABFA1] text-white rounded"
            >
              Hapus
            </button>
            <button
              onClick={() => setShowConfirmDelModal(false)}
              className=" px-4 py-2 bg-gray-200 rounded"
            >
              Batal
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Account;
