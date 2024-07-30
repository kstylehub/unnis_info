import React, { useState } from "react";
import { Link } from "react-router-dom";
import back from "../../../assets/previous.svg";

function ChangePassword() {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const EyeOpenIcon = () => (
    <svg
      className="w-6 h-6 text-gray-400 dark:text-white"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        fillRule="evenodd"
        d="M4.998 7.78C6.729 6.345 9.198 5 12 5c2.802 0 5.27 1.345 7.002 2.78a12.713 12.713 0 0 1 2.096 2.183c.253.344.465.682.618.997.14.286.284.658.284 1.04s-.145.754-.284 1.04a6.6 6.6 0 0 1-.618.997 12.712 12.712 0 0 1-2.096 2.183C17.271 17.655 14.802 19 12 19c-2.802 0-5.27-1.345-7.002-2.78a12.712 12.712 0 0 1-2.096-2.183 6.6 6.6 0 0 1-.618-.997C2.144 12.754 2 12.382 2 12s.145-.754.284-1.04c.153-.315.365-.653.618-.997A12.714 12.714 0 0 1 4.998 7.78ZM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
        clipRule="evenodd"
      />
    </svg>
  );

  const EyeClosedIcon = () => (
    <svg
      className="w-6 h-6 text-gray-400 dark:text-white"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="m4 15.6 3.055-3.056A4.913 4.913 0 0 1 7 12.012a5.006 5.006 0 0 1 5-5c.178.009.356.027.532.054l1.744-1.744A8.973 8.973 0 0 0 12 5.012c-5.388 0-10 5.336-10 7A6.49 6.49 0 0 0 4 15.6Z" />
      <path d="m14.7 10.726 4.995-5.007A.998.998 0 0 0 18.99 4a1 1 0 0 0-.71.305l-4.995 5.007a2.98 2.98 0 0 0-.588-.21l-.035-.01a2.981 2.981 0 0 0-3.584 3.583c0 .012.008.022.01.033.05.204.12.402.211.59l-4.995 4.983a1 1 0 1 0 1.414 1.414l4.995-4.983c.189.091.386.162.59.211.011 0 .021.007.033.01a2.982 2.982 0 0 0 3.584-3.584c0-.012-.008-.023-.011-.035a3.05 3.05 0 0 0-.21-.588Z" />
      <path d="m19.821 8.605-2.857 2.857a4.952 4.952 0 0 1-5.514 5.514l-1.785 1.785c.767.166 1.55.25 2.335.251 6.453 0 10-5.258 10-7 0-1.166-1.637-2.874-2.179-3.407Z" />
    </svg>
  );

  return (
    <>
      <div className="w-full h-full overflow-x-auto relative pb-20">
        <div className="top-0 sticky w-full z-20 bg-white pt-2 shadow">
          <div className="flex justify-center items-center py-3 px-5">
            <Link to={"/mypage/account"} className="w-3/12 flex items-center justify-start">
              <img src={back} className="w-8 h-8" alt="Back" />
            </Link>
            <div className="w-6/12 text-lg font-semibold text-center">
              Change Password
            </div>
            <div className="w-3/12"></div>
          </div>
        </div>
        <div className="flex flex-col text-sm">
          <div className="border-b px-6 py-5 ">
            <div className="flex flex-col gap-3">
              <div className="font-bold">Kata sandi saat ini</div>
              <div className="relative">
                <input
                  type={showCurrentPassword ? "text" : "password"}
                  className="w-full h-10 border bg-gray-200 rounded-md px-4 focus:outline-[#4ABFA1]"
                  placeholder="Kata sandi (6-12 karakter)"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer" onClick={() => setShowCurrentPassword(!showCurrentPassword)}>
                  {showCurrentPassword ? <EyeClosedIcon /> : <EyeOpenIcon />}
                </div>
              </div>
              <div className="text-gray-400 text-xs">Silahkan masukkan kata sandi yang digunakan saat ini</div>
            </div>
          </div>

          <div className="border-b px-6 py-5 ">
            <div className="flex flex-col gap-3">
              <div className="font-bold">Kata sandi baru</div>
              <div className="relative">
                <input
                  type={showNewPassword ? "text" : "password"}
                  className="w-full h-10 border bg-gray-200 rounded-md px-4 focus:outline-[#4ABFA1]"
                  placeholder="Kata sandi baru"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer" onClick={() => setShowNewPassword(!showNewPassword)}>
                  {showNewPassword ? <EyeClosedIcon /> : <EyeOpenIcon />}
                </div>
              </div>
              <div className="text-gray-400 text-xs">Buat kata sandi dengan 6 karakter atau lebih</div>
            </div>
          </div>

          <div className="border-b p-6 ">
            <div className="flex flex-col gap-3">
              <div className="font-bold">Masukkan kembali kata sandi</div>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  className="w-full h-10 border bg-gray-200 rounded-md px-4 focus:outline-[#4ABFA1]"
                  placeholder="Masukkan kembali kata sandi"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                  {showConfirmPassword ? <EyeClosedIcon /> : <EyeOpenIcon />}
                </div>
              </div>
              <div className="text-gray-400 text-xs">Please re-enter the new password</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChangePassword;
