import Polygon from "../../../assets/Polygon5.svg";
import Polygon1 from "../../../assets/Polygon2.svg";
import Skin from "../../../assets/skin.svg";
import Package from "../../../assets/PackageGreen.svg";
import Gift from "../../../assets/GiftMenu.svg";
import RecycleImg from "../../../assets/Recycle.svg";
import Reatured from "../../../assets/ReaturedProduct.svg";
import Vegan from "../../../assets/VEGAN.svg";
import VideoImg from "../../../assets/video.svg";
import Feed from "../../../assets/feed.svg";
import banner1 from "../../../assets/banner1.svg";
import banner2 from "../../../assets/banner2.svg";
import shuadam from "../../../assets/shuadam.svg";
import Bg_top from "../../../assets/Homepage/top_bg.png";
import coin from "../../../assets/Homepage/coin.png";
import invitation from "../../../assets/undangan.svg";
import React, { useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel";
import { Link, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getActiveBanner,
  getAllFeed,
  getAllReview,
  getEvent,
  getTopProduct,
} from "../../../Store/Actions/Actions";
import ModalLoginWarn from "../Components/ModalHomepage/ModalLoginWarn";

function ContentNavbar() {
  const product = useSelector((state) => state.ReducerTopProduct.topProduct);
  const allReview = useSelector((state) => state.ReducerReview.dataReview);
  const allFeed = useSelector((state) => state.ReducerFeed.dataFeed);
  const allEvent = useSelector((state) => state.ReducerEventData.event);
  const getUser = useSelector((state) => state.ReducerUser.dataUser);
  const allBanner = useSelector((state) => state.ReducerActiveBanner.banner);
  const dataUser = getUser?.dataMember?.[0];

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTopProduct());
    dispatch(getAllReview());
    dispatch(getAllFeed());
    dispatch(getEvent());
    dispatch(getActiveBanner());
  }, []);

  function TopProduct() {
    const truncatedData = product.dataProduct?.slice(0, 6);
    return (
      <>
        {truncatedData?.map((el) => {
          const name = el.name;
          const truncatedText =
            name.length > 20 ? `${name.slice(0, 20)}...` : name;
          return (
            <div className="" key={el.id}>
              <div className="border rounded-full py-2 px-4 mx-5 max-w-max min-w-fit">
                <div className="">
                  <img src={el.images[0]} className="w-16 h-14" />
                </div>
              </div>
              <div className="text-center">
                <div className="text-xs text-slate-500">
                  <p>{el.brand}</p>
                </div>
                <div className="text-sm">
                  <p>{truncatedText}</p>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  }

  function BoxReview() {
    const dataReview = allReview?.dataReview;
    const truncatedData = dataReview?.slice(0, 4);

    return (
      <>
        {truncatedData?.map((el) => {
          const desc = el.descReviewer;
          const truncatedText =
            desc.length > 50 ? `${desc.slice(0, 50)}...` : desc;
          return (
            <div className="gap-2 mb-5" key={el.id}>
              <img src={el.imageReview} className="h-28 w-screen mb-1" />
              <h1 className="text-sm mb-1">{el.nameReviewer}</h1>
              <p className="text-xs text-slate-500">{truncatedText}</p>
            </div>
          );
        })}
      </>
    );
  }

  function BoxEvent() {
    const truncatedData = allEvent?.dataEvent?.slice(0, 4);

    return (
      <>
        <div className="overflow-x-auto">
          <div className="flex w-full ">
            {truncatedData?.map((el) => {
              const lastDate = el.endDate;
              const firstDate = el.startDate;
              const lastDateObj = new Date(lastDate);
              const firstDateObj = new Date(firstDate);
              const lastday = lastDateObj.getDate().toString().padStart(2, "0");
              const firstday = firstDateObj
                .getDate()
                .toString()
                .padStart(2, "0");
              const monthNames = [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "Mei",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Okt",
                "Nov",
                "Des",
              ];
              const lastMonth = monthNames[lastDateObj.getMonth()];
              const firstMonth = monthNames[firstDateObj.getMonth()];

              const lastyear = lastDateObj.getFullYear();
              const firstyear = firstDateObj.getFullYear();

              const formattedLastDate = `${lastday}-${lastMonth}-${lastyear}`;

              const formattedFirstDate = `${firstday}-${firstMonth}-${firstyear}`;
              function hitungSelisihHari(firstDate, lastDate) {
                const start = new Date(firstDate);
                const end = new Date(lastDate);
                const selisihMs = end - start;
                const selisihHari = selisihMs / (1000 * 60 * 60 * 24);
                return selisihHari;
              }
              function formatSelisihHari(firstDate, lastDate) {
                const selisihHari = hitungSelisihHari(firstDate, lastDate);
                return `D-${Math.floor(selisihHari)}`;
              }
              const formattedSelisihHari = formatSelisihHari(
                firstDate,
                lastDate
              );

              return (
                <div className="" key={el.id}>
                  <div className="border sm:w-[60vw] w-[70vw] md:w-[20vw]">
                    <img src={el.thumbnail} className="w-fit" alt="Banner" />
                    <div className="pl-3 my-2">
                      <div>
                        <h1 className="text-slate-800">{el.title}</h1>
                        <p className="text-xs text-slate-700">{el.subtitle}</p>
                      </div>
                      <div className="flex text-xs my-3">
                        <div className="border rounded-full px-1 border-rose-600 mr-3">
                          <p className="text-rose-600">
                            {formattedSelisihHari}
                          </p>
                        </div>
                        <div>
                          <p className="text-slate-700">
                            {formattedFirstDate} ~ {formattedLastDate}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }

  function BoxFeed() {
    const feed = allFeed?.data;
    const truncatedData = feed?.slice(0, 4);
    return (
      <>
        {truncatedData?.map((el) => {
          return (
            <div key={el.idFeed} className="my-5 rounded-lg mx-3">
              <img src={el.thumbnail} className="w-full rounded-xl" />
            </div>
          );
        })}
      </>
    );
  }

  function ImageCarousel() {
    const truncatedData = product.dataProduct?.slice(0, 6);
    return (
      <>
        {truncatedData?.map((el) => {
          return (
            <>
              <div
                className="border rounded-lg shadow min-w-fit w-fit h-[20vh]"
                key={el.name}
              >
                <img src={el.images[0]} className="w-[100%] h-[100%]" />
              </div>
            </>
          );
        })}
      </>
    );
  }

  function ForYou() {
    if (dataUser) {
      return (
        <>
          <OwlCarousel
            className="owl-theme"
            center={true}
            loop={true}
            dots={false}
            items={3}
            margin={10}
            responsive={{ 600: { items: 3 } }}
          >
            <ImageCarousel />
          </OwlCarousel>
        </>
      );
    } else {
      return <></>;
    }
  }

  const [showModal, setShowModal] = useState(false);
  const user = useSelector((state) => state.ReducerUser.dataUser);
  const handleShowModal = () => {
    if (!user) {
      setShowModal(true);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  function ToSkinPage() {
    return (
      <>
        <div
          className="text-center p-1"
          style={{ textAlign: "-webkit-center" }}
          onClick={handleShowModal}
        >
          <Link to={user ? "/skinanalysis" : "/"}>
            <img src={Skin} className="w-10 h-10" alt="Skin Analysis" />
            <div>
              <p>Skin Analysis</p>
            </div>
          </Link>
        </div>
        {showModal && (
          <>
            <ModalLoginWarn handleCloseModal={handleCloseModal} />
          </>
        )}
      </>
    );
  }

  function Recycle() {
    return (
      <>
        <div
          className="text-center p-1"
          style={{ textAlign: "-webkit-center" }}
          onClick={handleShowModal}
        >
          <Link to={"/"}>
            <img src={RecycleImg} className="w-10 h-10" alt="Skin Analysis" />
            <div>
              <p>Recycle</p>
            </div>
          </Link>
        </div>
        {showModal && (
          <>
            <ModalLoginWarn handleCloseModal={handleCloseModal} />
          </>
        )}
      </>
    );
  }
  function Video() {
    return (
      <>
        <div
          className="text-center p-1"
          style={{ textAlign: "-webkit-center" }}
          onClick={handleShowModal}
        >
          <Link to={"/"}>
            <img src={VideoImg} className="w-10 h-10" alt="Skin Analysis" />
            <div>
              <p>Video</p>
            </div>
          </Link>
        </div>
        {showModal && (
          <>
            <ModalLoginWarn handleCloseModal={handleCloseModal} />
          </>
        )}
      </>
    );
  }

  function BeautyBoxStatus() {
    if (dataUser?.statusSub == "active") {
      return (
        <>
          <div className="flex justify-between text-sm mt-2 items-center">
            <p className="font-semibold text-xs">Layanan Berlangganan</p>
            <button className="rounded-full border pl-2 pr-2 pt-1 pb-1 text-slate-400 text-xs">
              History
            </button>
          </div>
          <div className="flex justify-between text-xs mt-2">
            <p>Periode Berlangganan</p>
            <div className="border"></div>
            <p>2022.01.03 - 2022.07.03</p>
          </div>
        </>
      );
    } else {
      return (
        <div className="text-center text-sm mt-2">
          <p>No service subscribed 😭</p>
          <button className="rounded-full bg-[#4ABFA1] pl-5 pr-5 pt-1 pb-1 text-white">
            Subscribe to a Service now
          </button>
        </div>
      );
    }
  }

  function Lock() {
    if (!dataUser) {
      return (
        <div className="px-4 pt-8 pb-8 rounded-xl shadow-xl bg-white absolute top-[148.5vh] lg:top-[137.5vh] sm:top-[150vh] md:top-[163vh]  inset-x-8 border z-10 opacity-90 shadow">
          <div className="text-sm font-semibold mb-2 justify-center text-center">
            <div className="justify-center items-center flex ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
                color="#4ABFA1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                />
              </svg>
            </div>
            <div className="text-md mt-2 mb-2 text-center ">
              <p>
                Setelah Anda login, kami akan merekomendasikan kosmetik yang
                cocok untuk anda
              </p>
            </div>
          </div>
          <div className="flex justify-evenly">
            <Link
              to={"/register"}
              className="rounded-full border pl-2 pr-2 pt-1 pb-1 bg-[#4ABFA1] text-white text-xs"
            >
              Sign up
            </Link>
            <Link
              to={"/login"}
              className="rounded-full border pl-2 pr-2 pt-1 pb-1 bg-[#4ABFA1] text-white text-xs"
            >
              Login
            </Link>
          </div>
        </div>
      );
    } else {
      return <></>;
    }
  }

  return (
    <>
      <div className="mt-2">
        <div
          className="h-[10vw]"
          style={{
            backgroundImage: `url(${Bg_top})`,
            backgroundSize: "cover", // or 'contain', depending on how you want it to fit
            backgroundPosition: "center",
          }}
        >
          <div className="flex justify-between pl-5 pr-5 pt-5">
            <div className="font-bold text-white flex gap-1">
              <h3>Hi, </h3>
              <h3>{dataUser ? `${dataUser.username}` : "Unnie"}</h3>
            </div>
            <div className="font-bold text-base text-white">
              <div className="flex items-center justify-center gap-1">
                <img src={coin} className="w-4 h-4 flex items-center"></img>
                <p className="text-bold">
                  {dataUser ? `${dataUser.point}` : "0"}
                </p>
                <div className="items-center pl-2">
                  <a href="#">
                    <img src={Polygon} className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <OwlCarousel
          className="absolute top-[8.5vw] px-3.5 "
          loop
          autoplay
          margin={10}
          items={1}
        >
          {allBanner.map((el) => (
            <div key={el.id}>
              <img
                src={el.thumbnail}
                className="w-full max-h-[12vw] rounded-lg"
                alt={el.title}
              />
            </div>
          ))}
        </OwlCarousel>

        <div className="mt-28 pt-2 flex overflow-x-auto ml-5">
          <div className="flex flex-col justify-center items-center">
            <div className="p-3 w-12 h-12 border rounded-lg flex justify-center">
              <svg
                className=" text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="py-1">
              Category
            </div>
          </div>
        </div>
        <div className="py-5">
          <OwlCarousel
            className="owl-theme"
            mergeFit={true}
            loop={true}
            margin={0}
            items={1}
            center={false}
            nav={false}
            dots={false}
            autoWidth={false}
            autoplay
          >
            <div>
              <img src={banner1} className="" />
            </div>
            <div>
              <img src={banner2} className="" />
            </div>
          </OwlCarousel>
        </div>
        <div className="flex justify-between px-5 font-bold">
          <div className="text-md text-[#343A40]">
            <h1>NEW</h1>
          </div>
          <Link to={"/newProduct"}>
            <div className="flex items-center">
              <p className="text-xs text-[#343A40]">more</p>
              <div className="items-center pl-1">
                <img src={Polygon1} className="w-2 h-2" />
              </div>
            </div>
          </Link>
        </div>
        <div className="grid grid-cols-3 mt-4 px-10 pt-6 pb-6 gap-y-6">
          <TopProduct />
        </div>
        <div className="py-5">
          <OwlCarousel
            items={1}
            nav={false}
            dots={true}
            autoplay
            loop={true}
            mouseDrag={true}
            className="owh-theme column"
          >
            <div>
              <img src={invitation} className="h-full w-30" alt="" />
            </div>
            <div>
              <img src={invitation} className="h-full w-30" alt="" />
            </div>
          </OwlCarousel>
        </div>
        <div className="flex justify-between px-5 font-bold">
          <div className="text-md text-[#343A40]">
            <h1>FOR YOU</h1>
          </div>
          <Link to={"/newProduct"} className="flex items-center">
            <p className="text-xs text-[#343A40]">more</p>
            <div className="items-center pl-1">
              <img src={Polygon1} className="w-2 h-2" />
            </div>
          </Link>
        </div>
        <div className="py-5">
          <OwlCarousel
            className="owl-theme"
            center={true}
            loop={true}
            dots={false}
            items={3}
            margin={10}
            responsive={{ 600: { items: 3 } }}
          >
            <ImageCarousel />
          </OwlCarousel>
          <Lock />
        </div>
        <div className="flex justify-between px-5 py-2 border bg-gray-100 mx-2 rounded-lg drop-shadow-lg mb-8">
          <h1>Skin Analysis Test</h1>
          <Link to={"/skinanalysis"} className="flex items-center">
            <h1 className="text-[#4ABFA1]">Analisis sekarang </h1>
            <div className="items-center pl-2">
              <img src={Polygon1} className="w-2 h-2" />
            </div>
          </Link>
        </div>
        <div className="mb-8">
          <div className="px-5 text-md text-[#343A40]">
            <h1 className="font-bold">CATEGORY</h1>
          </div>
          <div>
            <Outlet />
          </div>
        </div>
        <div className="flex justify-between px-5 font-bold">
          <div className="text-md text-[#343A40]">
            <h1>BEAUTY BOX REVIEW</h1>
          </div>
          <div className="flex items-center">
            <p className="text-xs text-[#343A40]">more</p>
            <div className="items-center pl-1">
              <img src={Polygon1} className="w-2 h-2" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 mt-2 px-5 pb-6 gap-2 justify-items-center">
          <BoxReview />
        </div>
        <div className="flex justify-between px-5 font-bold mb-2">
          <div className="text-md text-[#343A40]">
            <h1>EVENT</h1>
          </div>
          <div className="flex items-center">
            <p className="text-xs text-[#343A40]">more</p>
            <div className="items-center pl-1">
              <img src={Polygon1} className="w-2 h-2" />
            </div>
          </div>
        </div>
        <div className="mb-8 px-5">
          <BoxEvent />
        </div>
        <div className="flex justify-between px-5 font-bold">
          <div className="text-md text-[#343A40]">
            <h1>FEED</h1>
          </div>
          <div className="flex items-center">
            <p className="text-xs text-[#343A40]">more</p>
            <div className="items-center pl-1">
              <img src={Polygon1} className="w-2 h-2" />
            </div>
          </div>
        </div>
        <div>
          <BoxFeed />
        </div>
      </div>
    </>
  );
}

export default ContentNavbar;
