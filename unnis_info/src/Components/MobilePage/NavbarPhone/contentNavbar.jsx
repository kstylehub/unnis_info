import Polygon from "../../../assets/Polygon5.svg";
import Polygon1 from "../../../assets/Polygon2.svg";
import Skin from "../../../assets/skin.svg";
import RecycleImg from "../../../assets/Recycle.svg";
import VideoImg from "../../../assets/video.svg";
import Bg_top from "../../../assets/Homepage/top_bg.png";
import coin from "../../../assets/Homepage/coin.png";
import invitation from "../../../assets/undangan.svg";
import Baby from "../../../assets/Homepage/Category Icon/baby.svg";
import Body from "../../../assets/Homepage/Category Icon/body.svg";
import Category from "../../../assets/Homepage/Category Icon/category.svg";
import Cleansing from "../../../assets/Homepage/Category Icon/cleansing.svg";
import Face from "../../../assets/Homepage/Category Icon/face.svg";
import Food from "../../../assets/Homepage/Category Icon/food.svg";
import Hair from "../../../assets/Homepage/Category Icon/hair.svg";
import Makeup from "../../../assets/Homepage/Category Icon/make_up.svg";
import Mask from "../../../assets/Homepage/Category Icon/mask.svg";
import Longbanner1 from "../../../assets/Homepage/Long Banner/Banner1.png";
import Longbanner2 from "../../../assets/Homepage/Long Banner/Banner2.png";
import Skinanalysis from "../../../assets/Homepage/Category Icon/skin_analysis.svg";
import Skincare from "../../../assets/Homepage/Category Icon/skincare.svg";
import Suncare from "../../../assets/Homepage/Category Icon/suncare.svg";
import Olive from "../../../assets/Homepage/Market Logo/olive-young.png";
import Shopee from "../../../assets/Homepage/Market Logo/shopee.jpg";
import Sociolla from "../../../assets/Homepage/Market Logo/sociolla.jpg";
import Tokopedia from "../../../assets/Homepage/Market Logo/tokopedia.png";
import Unnis from "../../../assets/Homepage/Market Logo/unnis.png";
import React, { useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel";
import { Link, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getActiveBanner,
  getAllFeed,
  getAllInfluencer,
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
  const allInfluencer = useSelector(
    (state) => state.ReducerAllInfluencer.influencer
  );
  const dataUser = getUser?.dataMember?.[0];

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTopProduct());
    dispatch(getAllReview());
    dispatch(getAllFeed());
    dispatch(getEvent());
    dispatch(getActiveBanner());
    dispatch(getAllInfluencer());
  }, []);

  const productList = Array.isArray(product?.dataProduct)
    ? product.dataProduct
    : [];
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

  // function ImageCarousel() {
  //   const truncatedData = product.dataProduct?.slice(0, 6);
  //   return (
  //     <>
  //       {truncatedData?.map((el) => {
  //         return (
  //           <>
  //             <div
  //               className="border rounded-lg shadow min-w-fit w-fit h-[20vh]"
  //               key={el.name}
  //             >
  //               <img src={el.images[0]} className="w-[100%] h-[100%]" />
  //             </div>
  //           </>
  //         );
  //       })}
  //     </>
  //   );
  // }

  // function ForYou() {
  //   if (dataUser) {
  //     return (
  //       <>
  //         <OwlCarousel
  //           className="owl-theme"
  //           center={true}
  //           loop={true}
  //           dots={false}
  //           items={3}
  //           margin={10}
  //           responsive={{ 600: { items: 3 } }}
  //         >
  //           <ImageCarousel />
  //         </OwlCarousel>
  //       </>
  //     );
  //   } else {
  //     return <></>;
  //   }
  // }

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
          {/* Hai UNNIS */}
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
        {/* Banner Event or Product */}
        <OwlCarousel
          className="absolute top-[8.5vw] px-3.5 "
          loop
          autoplay
          margin={10}
          items={1}
        >
          {allBanner
            .filter(
              (el) => el.category !== "influencer"
            )
            .map((el) => (
              <div key={el.id}>
                <img
                  src={el.thumbnail}
                  className="w-full max-h-[12vw] rounded-lg"
                  alt={el.title}
                />
              </div>
            ))}
        </OwlCarousel>
        {/* Category Icon */}
        <div className="mt-28 pt-2 flex overflow-x-auto ml-5 gap-3 text-sm scrollbar-hide">
          {[
            { src: Category, label: "Category" },
            { src: Skinanalysis, label: "Skin Analysis" },
            { src: Skincare, label: "Skincare" },
            { src: Cleansing, label: "Cleansing" },
            { src: Mask, label: "Mask" },
            { src: Suncare, label: "Suncare" },
            { src: Face, label: "Face" },
            { src: Makeup, label: "Lip & Eye" },
            { src: Body, label: "Body" },
            { src: Hair, label: "Hair" },
            { src: Baby, label: "Kids & Baby" },
            { src: Food, label: "Food" },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center"
            >
              <div className="p-2 w-12 h-12 border rounded-lg flex justify-center border-[#4abfa27c]">
                <img src={item.src} className="w-full h-full" />
              </div>
              <div
                className="py-1 truncate w-16 text-center"
                style={{ textOverflow: "ellipsis" }}
              >
                {item.label}
              </div>
            </div>
          ))}
        </div>
        {/* Long Banner */}
        <div className="pt-5 px-2.5">
          <OwlCarousel
            items={1}
            nav={false}
            dots={true}
            autoplay
            loop={true}
            mouseDrag={true}
            className="owl-theme"
          >
            <div className="px-1">
              <img
                src={Longbanner1}
                className="rounded-lg transform max-w-full max-h-full object-contain"
                style={{ maxWidth: "100%", maxHeight: "100%" }}
              />
            </div>
            <div className="px-1">
              <img
                src={Longbanner2}
                className="rounded-lg transform max-w-full max-h-full object-contain"
                style={{ maxWidth: "100%", maxHeight: "100%" }}
              />
            </div>
          </OwlCarousel>
        </div>
        {/* Category Icon */}
        <div className="flex overflow-x-auto ml-5 gap-5 text-sm scrollbar-hide py-2">
          {allInfluencer.map((item, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center"
            >
              <div className="w-16 h-16 rounded-full flex justify-center overflow-hidden">
                {item.thumbnail ? (
                  <img
                    src={item.thumbnail}
                    className="object-cover w-full h-full"
                    alt={item.label}
                  />
                ) : (
                  <div className="bg-[#4ABFA1] w-full h-full rounded-full">
                    <div className="flex justify-center items-center p-4 text-xl text-white font-bold">
                      {item.name ? item.name.charAt(0) : ""}
                    </div>
                  </div>
                )}
              </div>
              <div
                className="py-1 truncate w-16 text-center"
                style={{ textOverflow: "ellipsis" }}
              >
                {item.name ? item.name : "-"}
              </div>
            </div>
          ))}
        </div>
        {/* TopProduct */}
        <div className="flex flex-col px-4 py-4">
          <div className="flex justify-between pb-1">
            <div className="font-bold">Top Product</div>
            <div className="flex justify-center items-center h-8 w-8 rounded-full border border-gray-200">
              <svg
                className="w-5 h-5 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m9 5 7 7-7 7"
                />
              </svg>
            </div>
          </div>
          <div className="flex overflow-x-auto gap-2 scrollbar-hide py-2">
            {productList.map((item, index) => (
              <div key={index} className="border p-3 w-[8.5vw] flex-shrink-0">
                <div className="flex flex-col">
                  <div className="flex justify-center items-center p-1">
                    <div style={{ width: "100px", height: "100px" }}>
                      {item.images ? (
                        <img
                          src={item.images}
                          className="object-contain"
                          style={{ width: "100%", height: "100%" }}
                        />
                      ) : (
                        <div className="bg-gray-300 w-full h-full flex items-center justify-center">
                          Image Not Available
                        </div>
                      )}
                    </div>
                  </div>
                  <div
                    className="w-full pt-2 text-sm"
                    style={{
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                      lineHeight: "1.2",
                    }}
                  >
                    {item.name}
                  </div>

                  <div className="text-left font-bold">
                    Rp{" "}
                    {item.price
                      .toLocaleString("id-ID", {
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0,
                      })
                      .replace(",", ".")}
                  </div>
                  <div className="flex justify-between pt-1 text-sm">
                    <div className="truncate text-center w-full flex justify-left items-center">
                      <div className="pe-1">
                        <svg
                          className="w-3.5 h-3.5 text-yellow-400 dark:text-white"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                        </svg>
                      </div>
                      <div className="">{item.rating}</div>
                    </div>
                    <div className="flex justify-end">
                      {[
                        {
                          href: item.unnispickLink,
                          text: "Unnispick",
                          icon: Unnis,
                        },
                        { href: item.shopeeLink, text: "Shopee", icon: Shopee },
                        {
                          href: item.tokopediaLink,
                          text: "Tokopedia",
                          icon: Tokopedia,
                        },
                        { href: item.iStyleLink, text: "iStyle" },
                        {
                          href: item.sociollaLink,
                          text: "Sociolla",
                          icon: Sociolla,
                        },
                        { href: item.styleKoreanLink, text: "Style Korean" },
                        {
                          href: item.oliveYoungLink,
                          text: "Olive Young",
                          icon: Olive,
                        },
                        { href: item.kalCareLink, text: "Kal Care" },
                      ]
                        .filter((link) => link.href)
                        .slice(0, 3)
                        .map((link, idx) => (
                          <a
                            key={idx}
                            href={link.href}
                            className="rounded-full w-5 h-5 ml-1 flex items-center justify-center"
                          >
                            <img
                              src={link.icon}
                              alt={link.text}
                              className="bg-cover w-full h-full rounded-full"
                            />
                          </a>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Banner Influencer */}
        <OwlCarousel className="" loop autoplay margin={0} items={1}>
          {allBanner
            .filter((el) => el.category === "influencer")
            .map((el) => (
              <div key={el.id}>
                <img
                  src={el.thumbnail}
                  className="w-full max-h-[12vw]"
                  alt={el.title}
                />
              </div>
            ))}
        </OwlCarousel>
        {/* Recommended Video */}
        <div className="flex flex-col px-4 ">
          <div className="flex justify-between pb-1">
            <div className="font-bold">Recommended Video</div>
            <div className="flex justify-center items-center h-8 w-8 rounded-full border border-gray-200">
              <svg
                className="w-5 h-5 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m9 5 7 7-7 7"
                />
              </svg>
            </div>
          </div>
          <div className="">

          </div>
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
          {/* <TopProduct /> */}
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
