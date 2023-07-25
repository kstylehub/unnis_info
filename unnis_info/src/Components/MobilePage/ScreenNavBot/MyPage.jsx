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

function MyPage() {
  const user = useSelector((state) => state.ReducerUser.dataUser);

  function KlikLogin() {
    return (
      <div className="bg-white h-full w-full py-6">
        <div className="flex justify-center">
          <h1>MY PAGE</h1>
        </div>
        <div className="mx-20 mt-24">
          <div className="flex justify-center pb-4">
            <img src={LogoUnnis} alt="Logo Unnis" />
          </div>
          <div className="items-center text-center pb-4">
            <h1 className="pb-4 font-semibold">
              Kekhawatiran tentang kosmetik sudah berakhir!
            </h1>
            <p>
              Login sekarang dan dapatkan rekomendasi kosmetik khusus untukmu.
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
    );
  }

  const dispatch = useDispatch();
  function handleLogout() {
    dispatch(logout());
  }

  function Profile() {
    return (
      <>
        <div className="bg-white h-full w-full py-6 ">
          <div className="px-2 pb-5">
            <div className="justify-center items-center">
              <p className="font-bold flex justify-center items-center lg:text-xl text-lg">
                My Profile
              </p>
              <hr className="flex-auto border-t-1 transition duration-500 ease-in-out border-gray-300"></hr>
              <div className="flex flex-col py-3 px-4 justify-center items-center">
                <img src={profile} className="w-3/12 pb-1 pl-2 mt-6" />
                <div className="flex flex-row justify-center items-center mt-2">
                  <div className="font-bold text-base mx-1">My Name</div>
                </div>
                <div className="text-xs mt-1">30-an / netral / right</div>
              </div>
              <div className="flex py-3 mt-1 px-5 flex items-center justify-between w-full bg-gray-200">
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
                    class="w-2 h-2 text-[#4ABFA1] dark:text-[#4ABFA1]"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 8 14"
                  >
                    <path
                      stroke="#4ABFA1"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex bg-gray-200 py-0.5">
                <div className="text-sm bg-white py-3 mr-0.5 text-center w-6/12 border-r border-white text-black">
                  Alamatku
                </div>
                <div className="text-sm bg-white py-3 text-center w-6/12 py-2 text-black">
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
                    1
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
                    1
                  </div>
                </div>
                <div className="flex flex-col w-3/12 justify-center item-center bg-white ml-1 py-2">
                  <div className="flex justify-center item-center">
                    <img src={coin_new} className="w-3/12" />
                  </div>
                  <div className="text-xs">Coin</div>
                  <div className="text-[#4ABFA1] text-sm flex justify-center">
                    1
                  </div>
                </div>
                <div className="flex flex-col w-3/12 justify-center item-center bg-white ml-1 py-2">
                  <div className="flex justify-center item-center">
                    <img src={love} className="w-3/12" />
                  </div>
                  <div className="text-xs">Likes</div>
                  <div className="text-[#4ABFA1] text-sm flex justify-center">
                    1
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-full bg-gray-200 pb-1">
                <div className="flex flex-row items-left justify-left px-5 bg-white py-4">
                  <img src={coupon} className="w-7 p-1" />
                  <div className="text-sm font-bold mx-2 flex items-center">
                    PROMO
                  </div>
                </div>
                <hr></hr>
                <div className="flex py-3 px-5 flex items-center justify-between w-full bg-white">
                  <div className="text-sm">Voucher</div>
                  <div className="flex flex-row justify-center items-center">
                    <svg
                      class="w-2 h-2 text-[#4ABFA1] dark:text-[#4ABFA1]"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 8 14"
                    >
                      <path
                        stroke="black"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-full bg-gray-200 pb-1">
                <div className="flex flex-row items-left justify-left px-5 bg-white py-3">
                  <img src={product} className="w-7 p-1" />
                  <div className="text-sm font-bold mx-2 flex items-center">
                    PRODUCT
                  </div>
                </div>
                <hr></hr>
                <div className="grid grid-cols-2">
                  <div className="py-3 px-5 flex items-center justify-between w-full bg-white border-r">
                    <div className="text-sm">Keranjang</div>
                    <div className="flex flex-row justify-center items-center">
                      <svg
                        class="w-2 h-2 text-[#4ABFA1] dark:text-[#4ABFA1]"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 8 14"
                      >
                        <path
                          stroke="black"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="py-3 px-5 flex items-center justify-between w-full bg-white">
                    <div className="text-sm">Berlangganan</div>
                    <div className="flex flex-row justify-center items-center">
                      <svg
                        class="w-2 h-2 text-[#4ABFA1] dark:text-[#4ABFA1]"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 8 14"
                      >
                        <path
                          stroke="black"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className=" py-3 px-5 flex items-center justify-between w-full bg-white border-r border-t">
                    <div className="text-sm">Pengiriman</div>
                    <div className="flex flex-row justify-center items-center">
                      <svg
                        class="w-2 h-2 text-[#4ABFA1] dark:text-[#4ABFA1]"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 8 14"
                      >
                        <path
                          stroke="black"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="py-3 px-5 flex items-center justify-between w-full bg-white border-t"></div>
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
                    <div className="text-sm">Riwayat Event</div>
                    <div className="flex flex-row justify-center items-center">
                      <svg
                        class="w-2 h-2 text-[#4ABFA1] dark:text-[#4ABFA1]"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 8 14"
                      >
                        <path
                          stroke="black"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="py-3 px-5 flex items-center justify-between w-full bg-white">
                    <div className="text-sm">Klaim Event</div>
                    <div className="flex flex-row justify-center items-center">
                      <svg
                        class="w-2 h-2 text-[#4ABFA1] dark:text-[#4ABFA1]"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 8 14"
                      >
                        <path
                          stroke="black"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-full bg-gray-200">
                <div className="flex flex-row items-left justify-left px-5 bg-white py-3">
                  <img src={setting} className="w-7 p-1" />
                  <div className="text-sm font-bold mx-2 flex items-center">
                    SETTING
                  </div>
                </div>
                <hr></hr>
                <div className="grid grid-cols-2">
                  <div className="py-3 px-5 flex items-center justify-between w-full bg-white border-r">
                    <div className="text-sm">FAQ</div>
                    <div className="flex flex-row justify-center items-center">
                      <svg
                        class="w-2 h-2 text-[#4ABFA1] dark:text-[#4ABFA1]"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 8 14"
                      >
                        <path
                          stroke="black"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="py-3 px-5 flex items-center justify-between w-full bg-white">
                    <div className="text-sm">Akun</div>
                    <div className="flex flex-row justify-center items-center">
                      <svg
                        class="w-2 h-2 text-[#4ABFA1] dark:text-[#4ABFA1]"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 8 14"
                      >
                        <path
                          stroke="black"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-full bg-gray-200 pt-1 pb-0.5">
                <div className="flex flex-row items-left justify-left px-5 bg-white py-3">
                  <img src={phone} className="w-7 p-1" />
                  <div className="text-sm font-bold mx-2 flex items-center">
                    CONTACT US
                  </div>
                </div>
                <hr></hr>
                <div className="grid grid-cols-2">
                  <div className="py-3 px-5 flex items-center justify-between w-full bg-white border-r">
                    <div className="text-sm">Chat Us</div>
                    <div className="flex flex-row justify-center items-center">
                      <svg
                        class="w-2 h-2 text-[#4ABFA1] dark:text-[#4ABFA1]"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 8 14"
                      >
                        <path
                          stroke="black"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="py-3 px-5 flex items-center justify-between w-full bg-white">
                    <div className="text-sm">Email Us</div>
                    <div className="flex flex-row justify-center items-center">
                      <svg
                        class="w-2 h-2 text-[#4ABFA1] dark:text-[#4ABFA1]"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 8 14"
                      >
                        <path
                          stroke="black"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
                        />
                      </svg>
                    </div>
                  </div>
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
              <button
                className="text-sm text-center w-6/12 py-2 bg-[#4ABFA1] text-white"
                onClick={() => handleLogout()}
              >
                Logout
              </button>
              <div className="bg-slate-50 pt-2.5 pb-1 px-1.5 sticky bottom-0 z-20">
                <NavigationButtom />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  function LoginPage() {
    if (user) {
      return <Profile />;
    } else {
      return <KlikLogin />;
    }
  }

  return (
    <>
      <LoginPage />
      <div className="bg-slate-50 pt-2.5 pb-1 px-1.5 sticky bottom-0 z-20">
        <NavigationButtom />
      </div>
    </>
  );
}

export default MyPage;
