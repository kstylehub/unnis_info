import NavigationButtom from "../NavigatonBottom/NavigationBottom";
import coin from "../../../assets/MyPage/coin.png";
import profile from "../../../assets/MyPage/profile.png";
import recycle from "../../../assets/MyPage/recycle.png";
import { Link } from "react-router-dom";
import LogoUnnis from "../../../assets/unnis_logo.png";
import { useState } from "react";
import review from "../../../assets/MyPage/review.png";
import coin_new from "../../../assets/MyPage/coin_new.png";
import love from "../../../assets/MyPage/love.png";
import mark from "../../../assets/MyPage/mark.png";
import coupon from "../../../assets/MyPage/coupon.png";
import product from "../../../assets/MyPage/bag.png";
import gift from "../../../assets/MyPage/gift.png";
import setting from "../../../assets/MyPage/setting.png";
import toggle from "../../../assets/MyPage/toggle.png";
import phone from "../../../assets/MyPage/phone.png";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../Store/Actions/Actions";
import ModalMyPage from "../Components/ModalMyPage/ModalMyPage";

function MyPage() {
  const user = useSelector((state) => state.ReducerUser.dataUser);
  const getDataUser = useSelector((state) => state.ReducerUser.dataUser);
  const dataUser = getDataUser?.dataMember?.[0];
  const dataToMap = Array.isArray(getDataUser?.dataMember) ? getDataUser?.dataMember : getDataUser;


  console.log(dataToMap);
  function getBirthDateDescription() {
    if (dataUser) {
      if (dataUser?.birthDate <= 2010) {
        return "10-an";
      } else if (dataUser?.birthDate <= 2000) {
        return "20-an";
      } else if (dataUser?.birthDate <= 1990) {
        return "30-an";
      } else if (dataUser?.birthDate <= 1980) {
        return "40-an";
      } else if (dataUser?.birthDate <= 1970) {
        return "50-an";
      } else if (dataUser?.birthDate <= 1980) {
        return "60-an";
      } else {
        return dataUser?.birthDate;
      }
    }
    return "";
  }

  function KlikLogin() {
    return (
      <>
        <div className="h-full" style={{ overflow: "hidden" }}>
          <div className="bg-white h-full w-full">
            <div className="justify-center items-center py-6 ">
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

  const dispatch = useDispatch();
  function handleLogout() {
    dispatch(logout());
  }

  function Profile() {
    return (
      <>
        <div className="sticky bg-white top-0">
          <div className="flex text-center justify-center py-4 text-lg font-semibold shadow">
            <h1>Account</h1>
          </div>
        </div>
        {dataToMap.map((data, index) => (
          <div key={index} className="bg-white  w-full ">
            <div className="justify-center items-center">
              <hr className="flex-auto transition duration-500 ease-in-out "></hr>
              <div className="flex flex-col py-3 px-4">
                <div className="flex flex-row justify-between">
                  <div className="font-bold text-sm">
                    Referral Code : {data.referral}
                  </div>
                  <button className="bg-[#4ABFA1] text-xs font-bold rounded-full py-1 px-3 text-white">
                    Invite Friends
                  </button>
                </div>
                <div className="flex flex-row text-sm mt-1 text-gray-500 items-center">
                  <div className="">Invite friends and get bonuses</div>
                  <img src={coin} className="w-1/12 pb-1 pl-2" />
                  <div className="text-[#4ABFA1] text-sm font-bold items-center">
                    500
                  </div>
                </div>
              </div>
              <hr className=""></hr>
              <div className="flex justify-between py-4">
                <div className=" flex justify-end px-4 pt-4">
                  <svg
                    className="w-8 h-8 text-white dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M10.779 17.779 4.36 19.918 6.5 13.5m4.279 4.279 8.364-8.643a3.027 3.027 0 0 0-2.14-5.165 3.03 3.03 0 0 0-2.14.886L6.5 13.5m4.279 4.279L6.499 13.5m2.14 2.14 6.213-6.504M12.75 7.04 17 11.28"
                    />
                  </svg>
                </div>
                <div className="flex flex-col pb-3 px-4 justify-center items-center">
                  <svg
                    className="w-28 h-28 text-gray-300 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 20a7.966 7.966 0 0 1-5.002-1.756l.002.001v-.683c0-1.794 1.492-3.25 3.333-3.25h3.334c1.84 0 3.333 1.456 3.333 3.25v.683A7.966 7.966 0 0 1 12 20ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10c0 5.5-4.44 9.963-9.932 10h-.138C6.438 21.962 2 17.5 2 12Zm10-5c-1.84 0-3.333 1.455-3.333 3.25S10.159 13.5 12 13.5c1.84 0 3.333-1.455 3.333-3.25S13.841 7 12 7Z"
                      clipRule="evenodd"
                    />
                  </svg>

                  <div className="flex flex-row justify-center items-center mt-2">
                    <div className="font-bold text-base mx-1">
                      {data.username}
                    </div>
                  </div>
                  <div className="text-xs mt-1">
                    {data.birthDate !== 0
                      ? getBirthDateDescription(data?.birthDate)
                      : " - "}
                    / {data.skinType ? data.skinType : " - "} /{" "}
                    {data.skinColor ? data.skinColor : " - "}
                  </div>
                </div>
                <div className=" flex justify-end px-4 pt-4">
                  <svg
                    className="w-8 h-8 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M10.779 17.779 4.36 19.918 6.5 13.5m4.279 4.279 8.364-8.643a3.027 3.027 0 0 0-2.14-5.165 3.03 3.03 0 0 0-2.14.886L6.5 13.5m4.279 4.279L6.499 13.5m2.14 2.14 6.213-6.504M12.75 7.04 17 11.28"
                    />
                  </svg>
                </div>
              </div>

              <div className="flex py-3 mt-1 px-5 items-center justify-between w-full bg-gray-200">
                <div className="flex">
                  <img src={recycle} className="w-7 h-6" />
                  <div className="text-[#4ABFA1] text-sm font-bold mx-2">
                    Recycle
                  </div>
                </div>
                <div className="flex flex-row justify-center items-center">
                  <div className="mx-3 text-[#4ABFA1] text-sm font-bold">
                    Jelajahi
                  </div>
                  <svg
                    className="w-2 h-2 text-[#4ABFA1] dark:text-[#4ABFA1]"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 8 14"
                  >
                    <path
                      stroke="#4ABFA1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex bg-gray-200 py-0.5">
                <div className="text-sm bg-white py-3 mr-0.5 text-center w-6/12 border-r border-white text-black">
                  My Address
                </div>
                <div className="text-sm bg-white py-3 text-center w-6/12  text-black">
                  Check-in
                </div>
              </div>
              <div className="flex justify-center item-center bg-gray-200 py-0.5 pb-1 text-center">
                <div className="flex flex-col w-3/12 justify-center item-center bg-white mr-1 py-2">
                  <div className="flex justify-center item-center">
                    <img src={review} className="w-3/12" />
                  </div>
                  <div className="text-xs">Ulasan Saya</div>
                  <div className="text-[#4ABFA1] text-sm flex justify-center">
                    0
                  </div>
                </div>
                <div className="flex flex-col w-3/12 justify-center item-center bg-white py-2">
                  <div className="flex justify-center item-center">
                    <img src={mark} className="w-3/12" />
                  </div>
                  <div className="text-xs">
                    Postingan <br></br>Favorit
                  </div>
                  <div className="text-[#4ABFA1] text-sm flex justify-center ">
                    0
                  </div>
                </div>
                <div className="flex flex-col w-3/12 justify-center item-center bg-white ml-1 py-2">
                  <div className="flex justify-center item-center">
                    <img src={coin_new} className="w-3/12" />
                  </div>
                  <div className="text-xs">Coin</div>
                  <div className="text-[#4ABFA1] text-sm flex justify-center">
                    {data.point ? data.point : 0}
                  </div>
                </div>
                <div className="flex flex-col w-3/12 justify-center item-center bg-white ml-1 py-2">
                  <div className="flex justify-center item-center">
                    <img src={love} className="w-3/12" />
                  </div>
                  <div className="text-xs">Likes</div>
                  <div className="text-[#4ABFA1] text-sm flex justify-center">
                    {data.heart ? data.heart : 0}
                  </div>
                </div>
              </div>
              {/* <div className="flex flex-col w-full bg-gray-200 pb-1">
               <div className="flex flex-row items-left justify-left px-5 bg-white py-4">
                 <img src={coupon} className="w-7 p-1" />
                 <div className="text-sm font-bold mx-2 flex items-center">
                   PROMO
                 </div>
               </div>
               <hr></hr>
               <div className="flex py-3 px-5 items-center justify-between w-full bg-white">
                 <div className="text-sm">Voucher</div>
                 <div className="flex flex-row justify-center items-center">
                   <svg
                     className="w-2 h-2 text-[#4ABFA1] dark:text-[#4ABFA1]"
                     aria-hidden="true"
                     xmlns="http://www.w3.org/2000/svg"
                     fill="none"
                     viewBox="0 0 8 14"
                   >
                     <path
                       stroke="black"
                       strokeLinecap="round"
                       strokeLinejoin="round"
                       strokeWidth="2"
                       d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
                     />
                   </svg>
                 </div>
               </div>
             </div> */}
              <div className="flex flex-col w-full bg-gray-200 pb-1">
                <div className="flex flex-row items-left justify-left px-5 bg-white py-3">
                  <img src={product} className="w-7 p-1" />
                  <div className="text-sm font-bold mx-2 flex items-center">
                    PRODUCT
                  </div>
                </div>
                <hr></hr>
                <div className="">
                  <div className="py-3 px-5 flex items-center justify-between w-full bg-white">
                    <div className="text-sm">Cart</div>
                    <div className="flex flex-row justify-center items-center">
                      <svg
                        className="w-2 h-2 text-[#4ABFA1] dark:text-[#4ABFA1]"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 8 14"
                      >
                        <path
                          stroke="black"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="py-3 px-5 flex items-center justify-between w-full bg-white border-t">
                    <div className="text-sm">Transaction</div>
                    <div className="flex flex-row justify-center items-center">
                      <svg
                        className="w-2 h-2 text-[#4ABFA1] dark:text-[#4ABFA1]"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 8 14"
                      >
                        <path
                          stroke="black"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className=" py-3 px-5 flex items-center justify-between w-full bg-white border-t">
                    <div className="text-sm">Subscription</div>
                    <div className="flex flex-row justify-center items-center">
                      <svg
                        className="w-2 h-2 text-[#4ABFA1] dark:text-[#4ABFA1]"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 8 14"
                      >
                        <path
                          stroke="black"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className=" pt-3 pb-1 px-5 flex items-center justify-between w-full bg-white border-t">
                    <div className="text-sm">Ingredients</div>
                    <div className="flex flex-row justify-center items-center">
                      <svg
                        className="w-2 h-2 text-[#4ABFA1] dark:text-[#4ABFA1]"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 8 14"
                      >
                        <path
                          stroke="black"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="pb-3 px-5 flex items-center justify-between w-full bg-white"></div>
                </div>
              </div>
              <div className="flex flex-col w-full bg-gray-200 pb-1">
                <div className="flex flex-row items-left justify-left px-5 bg-white py-3">
                  <img src={gift} className="w-7 p-1" />
                  <div className="text-sm font-bold mx-2 flex items-center">
                    EVENT
                  </div>
                </div>
                <hr></hr>
                <div className="grid grid-cols-2">
                  <div className="py-3 px-5 flex items-center justify-between w-full bg-white border-r">
                    <div className="text-sm">Event History</div>
                    <div className="flex flex-row justify-center items-center">
                      <svg
                        className="w-2 h-2 text-[#4ABFA1] dark:text-[#4ABFA1]"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 8 14"
                      >
                        <path
                          stroke="black"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="py-3 px-5 flex items-center justify-between w-full bg-white">
                    <div className="text-sm">Claim Event</div>
                    <div className="flex flex-row justify-center items-center">
                      <svg
                        className="w-2 h-2 text-[#4ABFA1] dark:text-[#4ABFA1]"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 8 14"
                      >
                        <path
                          stroke="black"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-full bg-gray-200 pb-1">
                <div className="flex flex-row items-left justify-left px-5 bg-white py-3">
                  <svg
                    className="w-7 h-7 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M7 9h5m3 0h2M7 12h2m3 0h5M5 5h14a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-6.616a1 1 0 0 0-.67.257l-2.88 2.592A.5.5 0 0 1 8 18.477V17a1 1 0 0 0-1-1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z"
                    />
                  </svg>
                  <div className="text-sm font-bold mx-2 flex items-center">
                    HELP
                  </div>
                </div>
                <hr></hr>
                <div className="grid grid-cols-1">
                  <div className="py-3 px-5 flex items-center justify-between w-full bg-white border-r">
                    <div className="text-sm">Help Center</div>
                    <div className="flex flex-row justify-center items-center">
                      <svg
                        className="w-2 h-2 text-[#4ABFA1] dark:text-[#4ABFA1]"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 8 14"
                      >
                        <path
                          stroke="black"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-full bg-gray-200 pb-0.5">
                <div className="flex flex-row items-left justify-left px-5 bg-white py-3">
                  <img src={setting} className="w-7 p-1" />
                  <div className="text-sm font-bold mx-2 flex items-center">
                    SETTING
                  </div>
                </div>
                <hr></hr>
                <div className="grid grid-cols-2">
                  <Link
                    to="/mypage/faq"
                    className="py-3 px-5 flex items-center justify-between w-full bg-white border-r"
                  >
                    <div className="text-sm">FAQ</div>
                    <div className="flex flex-row justify-center items-center">
                      <svg
                        className="w-2 h-2 text-[#4ABFA1] dark:text-[#4ABFA1]"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 8 14"
                      >
                        <path
                          stroke="black"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
                        />
                      </svg>
                    </div>
                  </Link>
                  <div
                    className="py-3 px-5 flex items-center justify-between w-full bg-white"
                    onClick={() => handleLogout()}
                  >
                    <div className="text-sm">Log Out</div>
                    <div className="flex flex-row justify-center items-center">
                      <svg
                        className="w-2 h-2 text-[#4ABFA1] dark:text-[#4ABFA1]"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 8 14"
                      >
                        <path
                          stroke="black"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
                        />
                      </svg>
                    </div>
                  </div>
                  <Link
                    to="/mypage/contactus"
                    className="py-3 px-5 flex items-center justify-between w-full bg-white border-r"
                  >
                    <div className="text-sm">Contact Us</div>
                    <div className="flex flex-row justify-center items-center">
                      <svg
                        className="w-2 h-2 text-[#4ABFA1] dark:text-[#4ABFA1]"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 8 14"
                      >
                        <path
                          stroke="black"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
                        />
                      </svg>
                    </div>
                  </Link>
                  <Link
                    to={"/mypage/feedback"}
                    className="py-3 px-5 flex items-center justify-between w-full bg-white"
                  >
                    <div className="text-sm">Feedback</div>
                    <div className="flex flex-row justify-center items-center">
                      <svg
                        className="w-2 h-2 text-[#4ABFA1] dark:text-[#4ABFA1]"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 8 14"
                      >
                        <path
                          stroke="black"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
                        />
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>

              <div className="flex flex-col w-full bg-gray-200 py-0.5">
                <div className="flex flex-row items-left justify-left px-5 bg-white py-4">
                  <img src={toggle} className="w-7 p-1" />
                  <div className="text-sm font-bold mx-2">
                    PENGATURAN NOTIFIKASI
                  </div>
                </div>
              </div>
           
            </div>
               <div className="bg-white pt-2.5 pb-1 px-1.5 sticky bottom-0 left-0 right-0 z-20">
                <NavigationButtom />
              </div>
          </div>
        ))}
      </>
    );
  }

  function LoginPage() {
    // console.log(user);
    if (user) {
      return <Profile />;
    } else {
      return <KlikLogin />;
    }
  }

  return (
    <>
      <LoginPage />
    </>
  );
}

export default MyPage;
