import Polygon from "../../../assets/Polygon5.svg";
import Polygon1 from "../../../assets/Polygon2.svg";
import Skin from "../../../assets/skin.svg";
import Package from "../../../assets/PackageGreen.svg";
import Gift from "../../../assets/GiftMenu.svg";
import Recycle from "../../../assets/Recycle.svg";
import Reatured from "../../../assets/ReaturedProduct.svg";
import Vegan from "../../../assets/VEGAN.svg";
import Video from "../../../assets/video.svg";
import Feed from "../../../assets/feed.svg";
import banner1 from "../../../assets/banner1.svg";
import banner2 from "../../../assets/banner2.svg";
import shuadam from "../../../assets/shuadam.svg";
import invitation from "../../../assets/undangan.svg";
import React, { useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel";
import { Link, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllFeed,
  getAllReview,
  getEvent,
  getTopProduct,
} from "../../../Store/Actions/Actions";

function ContentNavbar() {
  const product = useSelector((state) => state.ReducerTopProduct.topProduct);
  const allReview = useSelector((state) => state.ReducerReview.dataReview);
  const allFeed = useSelector((state) => state.ReducerFeed.dataFeed);
  const allEvent = useSelector((state) => state.ReducerEventData.event);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTopProduct());
    dispatch(getAllReview());
    dispatch(getAllFeed());
    dispatch(getEvent());
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
          <div className="flex w-screen">
            {truncatedData?.map((el) => {
              return (
                <div
                  className="border mr-4 md:w-1/3 sm:w-1/10 lg:w-1/3 min-w-fit"
                  key={el.id}
                >
                  <img src={banner1} className="w-full" alt="Banner" />
                  <div className="pl-3 my-2">
                    <div>
                      <h1 className="text-slate-800">
                        K-LIFESTYLE SHOWCASE CHAPT.2
                      </h1>
                      <p className="text-xs text-slate-700">
                        Showcase produk korea terbaik hadir kembali
                      </p>
                    </div>
                    <div className="flex text-xs my-3">
                      <div className="border rounded-full px-1 border-rose-600 mr-3">
                        <p className="text-rose-600">D-36</p>
                      </div>
                      <div>
                        <p className="text-slate-700">
                          25 Aug 2023 ~ 26 Aug 2023
                        </p>
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
          <div className="absolute max-h-[100vh] top-0 left-0 right-0 bottom-0 bg-opacity-70 bg-black flex justify-center items-center z-50 overflow-hidden	 ">
            <div className="rounded-lg bg-white text-center lg:mx-20 mx-16">
              <div className="py-8 lg:px-6 px-4">
                <h5 className="lg:mb-2 text-sm font-semibold leading-tight">
                  Anda Belum Login
                </h5>
                <p>Silahkan login untuk akses menu ini</p>
              </div>
              <hr></hr>
              <button
                className="lg:py-4 py-3 inline-block rounded px-6 text-sm text-green-600"
                onClick={handleCloseModal}
                type="button"
              >
                Ok
              </button>
            </div>
          </div>
        )}
      </>
    );
  }
  return (
    <>
      <div className="mt-2">
        <div className="h-1/5 bg-[#4ABFA1] pb-10 rounded-t-lg">
          <div className="flex justify-between pl-5 pr-5 pt-5">
            <div className="font-semibold text-white">
              <h3>Hi👋</h3>
              <h3>Unni</h3>
            </div>
            <div className="font-light text-sm text-white">
              <p>My coin</p>
              <div className="flex items-center">
                <p className="text-semibold">0</p>
                <div className="items-center pl-2">
                  <a href="#">
                    <img src={Polygon} className="w-2 h-2" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-4 pt-4 pb-8 m-5 rounded-xl shadow-xl bg-white absolute top-[150px] inset-x-8">
          <div className="text-sm font-semibold mb-2">
            <h3>Beauty Bob Status</h3>
            <div className="text-md font-light">
              <p>Your subscription plan status : Not Active</p>
            </div>
          </div>
          <div className="border"></div>
          <div className="text-center text-sm mt-2">
            <p>No service subscribed 😭</p>
            <button className="rounded-full bg-[#4ABFA1] pl-5 pr-5 pt-1 pb-1 text-white">
              Subscribe to a Service now
            </button>
          </div>
        </div>
        <div className="grid grid-cols-4 mt-36 px-8 text-xs">
          <ToSkinPage />
          <Link to={"/subscribe"}>
            <div
              className="text-center p-1"
              style={{ textAlign: "-webkit-center" }}
            >
              <img src={Package} className="w-10 h-10" />
              <div>
                <p>Subscription Packages</p>
              </div>
            </div>
          </Link>
          <Link to={"/event"}>
            <div
              className="text-center p-1"
              style={{ textAlign: "-webkit-center" }}
            >
              <img src={Gift} className="w-10 h-10" />
              <div>
                <p>Event</p>
              </div>
            </div>
          </Link>
          <Link>
            <div
              className="text-center p-1"
              style={{ textAlign: "-webkit-center" }}
            >
              <img src={Recycle} className="w-10 h-10" />
              <div>
                <p>Recycle</p>
              </div>
            </div>
          </Link>
          <Link to={"/newProduct"}>
            <div
              className="text-center p-1"
              style={{ textAlign: "-webkit-center" }}
            >
              <img src={Reatured} className="w-10 h-10" />
              <div>
                <p>Featured Products</p>
              </div>
            </div>
          </Link>
          <Link to={"/newProduct"}>
            <div
              className="text-center p-1"
              style={{ textAlign: "-webkit-center" }}
            >
              <img src={Vegan} className="w-10 h-10" />
              <div>
                <p>Vegan</p>
              </div>
            </div>
          </Link>
          <Link>
            <div
              className="text-center p-1"
              style={{ textAlign: "-webkit-center" }}
            >
              <img src={Video} className="w-10 h-10" />
              <div>
                <p>Video</p>
              </div>
            </div>
          </Link>
          <Link to={"/feed"}>
            <div
              className="text-center p-1"
              style={{ textAlign: "-webkit-center" }}
            >
              <img src={Feed} className="w-10 h-10" />
              <div>
                <p>Feed</p>
              </div>
            </div>
          </Link>
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
