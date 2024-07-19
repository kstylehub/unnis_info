import Polygon from "../../../assets/Polygon5.svg";
import Bg_top from "../../../assets/Homepage/top_bg.png";
import coin from "../../../assets/Homepage/coin.png";
import Calendar from "../../../assets/Homepage/calendar.svg";
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
import Skinbanner from "../../../assets/Homepage/check_skin_problem.svg";
import Skincare from "../../../assets/Homepage/Category Icon/skincare.svg";
import Suncare from "../../../assets/Homepage/Category Icon/suncare.svg";
import Recomended from "../../../assets/Homepage/recomended.svg";
import Youtube from "../../../assets/Homepage/yutub.svg";
import React, { useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel";
import { Link, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getActiveBanner,
  getAllFeed,
  getAllInfluencer,
  getAllProductWithPagination,
  getAllReview,
  getEvent,
  getTopProduct,
  getVideoByIdMemberYoutube,
} from "../../../Store/Actions/Actions";
import ModalLoginWarn from "../Components/ModalHomepage/ModalLoginWarn";

function ContentNavbar() {
  const product = useSelector((state) => state.ReducerTopProduct?.topProduct);
  const allReview = useSelector((state) => state.ReducerReview?.dataReview);
  const allFeed = useSelector((state) => state.ReducerFeed?.dataFeed);
  const allEvent = useSelector((state) => state.ReducerEventData?.event);
  const getUser = useSelector((state) => state.ReducerUser?.dataUser);
  const allBanner = useSelector((state) => state.ReducerActiveBanner?.banner);
  const allProduct = useSelector(
    (state) => state.ReducerProductWithPagination.dataProductWithPagination
  );
  const VideoRecommendation = useSelector(
    (state) => state.ReducerVideoByIdMemberYoutube?.idVideo || []
  );
  const allInfluencer = useSelector(
    (state) => state.ReducerAllInfluencer?.influencer
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
    dispatch(getVideoByIdMemberYoutube());
    dispatch(getAllProductWithPagination());
  }, []);

  // console.log("data top >>>>",allProductWithPagination);
  const productList = Array.isArray(product?.data) ? product.data : [];
  const allProductWithPagination = Array.isArray(allProduct?.dataProduct)
    ? allProduct?.dataProduct
    : [];

  function BoxReview() {
    const dataReview = allReview?.dataReview;
    const truncatedData = dataReview?.slice(0, 4);

    if (!truncatedData || truncatedData?.length === 0) {
      return <div className="text-gray-300 text-sm">No box review</div>;
    }

    return (
      <>
        {truncatedData?.map((el) => {
          const desc = el.descReviewer;
          const truncatedText =
            desc.length > 50 ? `${desc.slice(0, 50)}...` : desc;
          return (
            <div className="flex-none" key={el.id}>
              <div className="gap-1 flex flex-col mb-5 w-[12vw]">
                <img src={el.imageReview} className="h-32 object-cover" />
                <h1 className="text-sm ">{el.nameReviewer}</h1>
                <p className="text-xs text-slate-500">{truncatedText}</p>
              </div>
            </div>
          );
        })}
      </>
    );
  }

  function BoxEvent() {
    const visibleEvents = allEvent?.dataEvent?.filter((event) => event.visible);
    const currentDate = new Date();
    const ongoingOrUpcomingEvents = visibleEvents?.filter((event) => {
      const lastDateObj = new Date(event.endDate);
      return lastDateObj >= currentDate;
    });
    const truncatedData = ongoingOrUpcomingEvents?.slice(0, 5);

    if (!truncatedData || truncatedData.length === 0) {
      return <div className="text-gray-300 text-sm">No recently event</div>;
    }

    return (
      <>
        <div className="overflow-x-auto scrollbar-hide flex">
          <div className="flex w-full gap-3">
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

              // Calculate remaining days until event ends
              function calculateRemainingDays(currentDate, endDate) {
                const end = new Date(endDate);
                const diffTime = end - currentDate;
                const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                return diffDays;
              }

              const remainingDays = calculateRemainingDays(
                currentDate,
                lastDate
              );
              const formattedRemainingDays =
                remainingDays >= 0
                  ? `Event will end in ${remainingDays} days`
                  : "Event no longer available";

              return (
                <div className="" key={el.id}>
                  <div className="border sm:w-[50vw] w-[70vw] md:w-[20vw] h-full">
                    <img src={el.thumbnail} className="w-fit" alt="Banner" />
                    <div className=" p-4">
                      <div>
                        <h1
                          style={{
                            display: "-webkit-box",
                            WebkitLineClamp: 1,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                            lineHeight: "1.4",
                          }}
                          className="text-slate-800 uppercase font-bold font-sans"
                        >
                          {el.title}
                        </h1>
                        <div
                          className="w-full h-full text-sm text-slate-700"
                          style={{
                            display: "-webkit-box",
                            WebkitLineClamp: 1,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                            lineHeight: "1.4",
                          }}
                        >
                          {el.subtitle}
                        </div>
                      </div>
                      <div className="flex justify-between text-xs my-2 ">
                        <div>
                          <p className="text-slate-700">
                            {formattedFirstDate} ~ {formattedLastDate}
                          </p>
                        </div>
                        <div className="border rounded-full px-2 border-rose-600">
                          <p className="text-rose-600">
                            {formattedRemainingDays}
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
    if (!feed || feed.length === 0) {
      return <div className="text-gray-300 text-sm">No recently feed</div>;
    }
    // const truncatedData = feed?.slice(0, 4);
    return (
      <>
        {feed?.map((el) => {
          return (
            <div
              key={el.idFeed}
              className="gap-1 flex-none mb-5 h-[10vw] w-[20vw]"
            >
              <img src={el.thumbnail} className="w-full h-full rounded-lg" />
            </div>
          );
        })}
      </>
    );
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

  const YouTubeThumbnail = ({ videoUrl }) => {
    const getYouTubeVideoId = (url) => {
      const regex =
        /(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
      const match = url.match(regex);
      return match ? match[1] : null;
    };

    const videoId = getYouTubeVideoId(videoUrl);
    if (!videoId) return null;
    return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
  };

  const options = {
    loop: true,
    autoplay: true,
    margin: 1,
    items: 2,
    center: true, // Center the active item
    dots: false,
    nav: false,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
    },
  };

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
        {/* Main Banner Event or Product */}
        <OwlCarousel
          className="absolute top-[9.5vw] px-3.5 "
          loop
          autoplay
          margin={10}
          items={1}
        >
          {allBanner?.filter((el) => el?.category !== "influencer")
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
        <div className="mt-28 pt-1 flex overflow-x-auto ml-5 gap-3 text-sm scrollbar-hide">
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
          ]?.map((item, index) => (
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
            // dots={true}
            autoplay
            loop={true}
            mouseDrag={true}
            // className="owl-theme"
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
        {/* Icon Influencer */}
        <div className="flex overflow-x-auto ml-5 gap-5 text-sm scrollbar-hide py-1">
          {allInfluencer?.map((item, index) => (
            <Link
              to={`/video/videoinfluencer`}
              state={{ influencerData: item.influencerName }}
              key={index}
              className="flex flex-col justify-center items-center "
            >
              <div className="w-16 h-16 rounded-full flex justify-center overflow-hidden">
                {item.photo ? (
                  <img
                    src={item.photo}
                    className="object-cover w-full h-full"
                    alt={item.label}
                  />
                ) : (
                  <div className="bg-[#4ABFA1] w-full h-full rounded-full">
                    <div className="flex justify-center items-center p-4 text-xl text-white font-bold">
                      {item.influencerName ? item.influencerName.charAt(0) : ""}
                    </div>
                  </div>
                )}
              </div>
              <div
                className="py-1 truncate w-16 text-center"
                style={{ textOverflow: "ellipsis" }}
              >
                {item.influencerName ? item.influencerName : "-"}
              </div>
            </Link>
          ))}
        </div>
        {/* New Product */}
        <div className="flex flex-col px-4 py-3">
          <div className="flex justify-between pb-1">
            <div className="font-bold">New Product</div>
            <div className="flex justify-center items-center h-7 w-7 rounded-full border border-gray-200">
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
            {productList?.map((item, index) => (
              <Link to={`/newProduct/detailproduct/${item.id}`}
                key={index}
                className="relative border p-3 w-[8.5vw] flex-shrink-0"
              >
                {item.bpom && (
                  <div className="absolute top-0 right-3  text-white py-3 w-[10%]">
                    <img
                      src={item.bpom}
                      className="object-contain"
                      style={{ width: "100%", height: "100%" }}
                    />
                  </div>
                )}
                {item.mui && (
                  <div className="absolute top-0 right-6  text-white py-3 w-[10%]">
                    <img
                      src={item.mui}
                      className="object-contain"
                      style={{ width: "100%", height: "100%" }}
                    />
                  </div>
                )}
                <div className="flex flex-col">
                  <div className="flex justify-center items-center p-1">
                    <div style={{ width: "120px", height: "120px" }}>
                      {item.images !== null ? (
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
                    {item.brand} - {item.name}
                  </div>

                  <div className="text-left font-bold">
                    Rp{" "}
                    {item?.price
                      .toLocaleString("id-ID", {
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0,
                      })
                      .replace(",", ".")}
                  </div>
                  <div className="flex justify-between pt-1 text-xs">
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
                      {parseFloat(item.rating).toFixed(1)}
                      <div className="pl-1 text-gray-400 text-xs">
                        ({item.stock})
                      </div>
                    </div>
                    <div className="flex justify-end">
                      {[
                        {
                          href: item.unnispickLink,
                          text: "Unnispick",
                          icon: "https://s3.ap-northeast-2.amazonaws.com/admin.unnispick.com/link_1.png",
                        },
                        {
                          href: item.shopeeLink,
                          text: "Shopee",
                          icon: "https://s3.ap-northeast-2.amazonaws.com/admin.unnispick.com/link_2.png",
                        },
                        {
                          href: item.tokopediaLink,
                          text: "Tokopedia",
                          icon: "https://s3.ap-northeast-2.amazonaws.com/admin.unnispick.com/link_3.png",
                        },
                        {
                          href: item.iStyleLink,
                          text: "iStyle",
                          icon: "https://s3.ap-northeast-2.amazonaws.com/admin.unnispick.com/link_4.png",
                        },
                        {
                          href: item.sociollaLink,
                          text: "Sociolla",
                          icon: "https://s3.ap-northeast-2.amazonaws.com/admin.unnispick.com/link_6.png",
                        },
                        {
                          href: item.styleKoreanLink,
                          text: "Style Korean",
                          icon: "https://s3.ap-northeast-2.amazonaws.com/admin.unnispick.com/link_7.png",
                        },
                        {
                          href: item.oliveYoungLink,
                          text: "Olive Young",
                          icon: "https://s3.ap-northeast-2.amazonaws.com/admin.unnispick.com/link_5.png",
                        },
                        {
                          href: item.kalCareLink,
                          text: "Kal Care",
                          icon: "https://s3.ap-northeast-2.amazonaws.com/admin.unnispick.com/link_8.png",
                        },
                      ]
                        .filter((link) => link.href)
                        .slice(0, 3)
                        .map((link, idx) => (
                          <a
                            key={idx}
                            href={link.href}
                            className="rounded-full w-5 h-5 ml-0.5 flex items-center justify-center"
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
              </Link>
            ))}
          </div>
        </div>
        {/* Banner Influencer */}
        <OwlCarousel className="" loop autoplay margin={0} items={1}>
          {allBanner?.filter((el) => el.category === "influencer")
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
        <div className="Video">
          <div className="flex justify-between pb-1 px-4">
            <div className="font-bold">Recommended Video</div>
            <div className="flex justify-center items-center h-7 w-7 rounded-full border border-gray-200">
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
          <div className="flex overflow-x-auto ml-5 gap-5 text-sm scrollbar-hide py-2">
            {VideoRecommendation.map((el) => (
              <Link
                to={`/video/videoyoutube/${el.id}`}
                state={{ videoData: el }}
                key={el.id}
                className="relative"
              >
                {" "}
                {el.source.platform == "youtube" ? (
                  <div className="absolute flex left-0 top-[8.6vw] w-10 h-10 bg-white p-1 rounded-full border-2 border-[#4ABFA1]">
                    <img className="" src={Youtube} />
                  </div>
                ) : (
                  <div className=""></div>
                )}
                <div className="w-[20vw] h-[10vw]">
                  {el.link ? (
                    <img
                      src={YouTubeThumbnail({ videoUrl: el.link })}
                      className="w-full h-full object-cover rounded-lg"
                      alt="YouTube Thumbnail"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center rounded-lg">
                      <span>Thumbnail Not Available</span>
                    </div>
                  )}
                </div>
                <div className="flex justify-left items-center py-3">
                  <img
                    src={el.dataOwner.photoProfile}
                    className="h-12 w-12 rounded-full object-cover flex justify-center items-center"
                    alt="Owner Profile"
                  />
                  <div className="flex flex-col items-start justify-left ml-3">
                    <div
                      className="w-full h-full pt-2 font-bold"
                      style={{
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        lineHeight: "1.3",
                      }}
                    >
                      {el.title}
                    </div>
                    <div>{el.dataOwner.influencerName}</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        {/* Check Skin Problem Banner */}
        <div className="w-full px-4 py-3">
          <img src={Skinbanner} className="rounded-lg w-full" />
        </div>
        {/* For You */}
        <div className="Foryou">
          <div className="flex justify-between pb-1 pt-2 px-4">
            <div className="font-bold">For You</div>
            {/* <div className="flex justify-center items-center h-8 w-8 rounded-full border border-gray-200">
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
            </div> */}
          </div>
          <div className="pb-5 pt-2 ps-4 pe-2">
            <OwlCarousel className="owl-theme" {...options}>
              {productList?.map((item, index) => (
                <Link to={`/newProduct/detailproduct/${item.id}`}
                  key={index}
                  className="flex justify-center border w-[7.7vw] h-[11vw] shadow-lg hover:scale-110"
                >
                  <div className="flex flex-col py-2">
                    <div className="flex justify-center items-center ">
                      <div style={{ width: "120px", height: "120px" }}>
                        {item.images !== null ? (
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
                    <div className="w-full text-xs text-center px-2 pt-2 font-bold">
                      {item.brand}
                    </div>
                    <div
                      className="w-full text-sm text-center px-2 pt-1"
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
                  </div>
                </Link>
              ))}
            </OwlCarousel>
          </div>
        </div>
        {/* Category */}
        <div className="Category">
          <div className="flex justify-between pb-1 px-4">
            <div className="font-bold">Category</div>
            <div className="flex justify-center items-center h-7 w-7 rounded-full border border-gray-200">
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
          <div className="pb-5 pt-2 px-2.5">
            <Outlet />
          </div>
        </div>
        {/* Review Box */}
        {/* <div className="ReviewBox">
          <div className="flex justify-between pb-1 px-4">
            <div className="font-bold">Beauty Box Review</div>
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
          <div className="flex px-4 gap-3 overflow-x-auto scrollbar-hide py-3">
            <BoxReview />
          </div>
        </div> */}
        {/* Event */}
        <div className="Event">
          <div className="flex justify-between pb-1 px-4">
            <div className="font-bold">Event</div>
            <div className="flex justify-center items-center h-7 w-7 rounded-full border border-gray-200">
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
          <div className="flex px-4 gap-3 overflow-x-auto scrollbar-hidfe py-3">
            <BoxEvent />
          </div>
        </div>
        {/* Feed */}
        <div className="Feed ">
          <div className="flex justify-between py-1 px-4">
            <div className="font-bold">Feed</div>
            <div className="flex justify-center items-center h-7 w-7 rounded-full border border-gray-200">
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
          <div className="flex px-4 gap-3 overflow-x-auto scrollbar-hide pt-3">
            <BoxFeed />
          </div>
        </div>
        {/* All Product */}
        <div className="bg-gray-100 flex justify-center text-sm text-center py-2 text-[#787878] pb-3">
          ----------------------- Kamu Pasti Suka Ini ----------------------
        </div>
        <div className="flex flex-wrap justify-between py-1 px-4 bg-gray-100">
          {allProductWithPagination.map((item, index) => (
            <Link to={`/newProduct/detailproduct/${item.id}`}
              key={index}
              className="relative border p-3 w-[49%] flex-shrink-0 mb-2 bg-white"
            >
              {item.statusRecommend && (
                <div className="absolute top-0 left-3  text-white py-3 w-[48%]">
                  <img
                    src={Recomended}
                    className="object-contain"
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
              )}
              {item.bpom && (
                <div className="absolute top-0 right-3  text-white py-3 w-[15%]">
                  <img
                    src={item.bpom}
                    className="object-contain"
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
              )}
              {item.mui && (
                <div className="absolute top-0 right-6  text-white py-3 w-[15%]">
                  <img
                    src={item.mui}
                    className="object-contain"
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
              )}
              <div className="flex flex-col pt-4">
                <div className="flex justify-center items-center p-1">
                  <div style={{ width: "150px", height: "150px" }}>
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
                  className="w-full pt-2"
                  style={{
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    lineHeight: "1.2",
                  }}
                >
                  {item.brand} - {item.name}
                </div>
                <div className="text-left font-bold text-lg">
                  Rp{" "}
                  {item.price
                    .toLocaleString("id-ID", {
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0,
                    })
                    .replace(",", ".")}
                </div>
                <div className="flex justify-between pt-1">
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
                    <div className="pl-1 text-gray-400 text-sm pt-1">
                      ({item.stock})
                    </div>
                  </div>
                  <div className="flex justify-end">
                    {[
                      {
                        href: item?.unnispickLink,
                        text: "Unnispick",
                        icon: "https://s3.ap-northeast-2.amazonaws.com/admin.unnispick.com/link_1.png",
                      },
                      {
                        href: item?.shopeeLink,
                        text: "Shopee",
                        icon: "https://s3.ap-northeast-2.amazonaws.com/admin.unnispick.com/link_2.png",
                      },
                      {
                        href: item?.tokopediaLink,
                        text: "Tokopedia",
                        icon: "https://s3.ap-northeast-2.amazonaws.com/admin.unnispick.com/link_3.png",
                      },
                      {
                        href: item?.iStyleLink,
                        text: "iStyle",
                        icon: "https://s3.ap-northeast-2.amazonaws.com/admin.unnispick.com/link_4.png",
                      },
                      {
                        href: item?.sociollaLink,
                        text: "Sociolla",
                        icon: "https://s3.ap-northeast-2.amazonaws.com/admin.unnispick.com/link_6.png",
                      },
                      {
                        href: item?.styleKoreanLink,
                        text: "Style Korean",
                        icon: "https://s3.ap-northeast-2.amazonaws.com/admin.unnispick.com/link_7.png",
                      },
                      {
                        href: item?.oliveYoungLink,
                        text: "Olive Young",
                        icon: "https://s3.ap-northeast-2.amazonaws.com/admin.unnispick.com/link_5.png",
                      },
                      {
                        href: item?.kalCareLink,
                        text: "Kal Care",
                        icon: "https://s3.ap-northeast-2.amazonaws.com/admin.unnispick.com/link_8.png",
                      },
                    ]
                      .filter((link) => link.href)
                      .slice(0, 3)
                      .map((link, idx) => (
                        <a
                          key={idx}
                          href={link.href}
                          className="rounded-full w-6 h-6 ml-1 flex items-center justify-center"
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
            </Link>
          ))}
        </div>
        <div className="bg-[#4ABFA1] w-12 h-12 sticky left-[87%] bottom-20 z-30 rounded-full shadow-lg">
          <div className="flex justify-center items-center w-full h-full">
            <img src={Calendar} className="w-8 h-8 " alt="calendar" />
          </div>
        </div>
      </div>
    </>
  );
}

export default ContentNavbar;
