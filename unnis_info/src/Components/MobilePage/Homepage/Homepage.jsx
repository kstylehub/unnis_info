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
import React from "react";
import OwlCarousel from "react-owl-carousel";

function Homepage() {
  return (
    <>
      <div className="bg-white relative">
        <div className="flex justify-evenly text-[#343A40] bg-white pt-3 pb-3 sticky top-0 z-20">
          <div>
            <h3>NEW</h3>
          </div>
          <div>
            <h3>CATEGORY</h3>
          </div>
          <div>
            <h3>REVIEW</h3>
          </div>
          <div>
            <h3>EVENT</h3>
          </div>
          <div>
            <h3>FEED</h3>
          </div>
        </div>
        <div className="">
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
          <div className="px-4 pt-4 pb-8 m-5 rounded-xl shadow-xl bg-white absolute top-24 inset-x-8">
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
            <div
              className="text-center p-1"
              style={{ textAlign: "-webkit-center" }}
            >
              <img src={Skin} className="w-10 h-10" />
              <div>
                <p>Skin Analysis</p>
              </div>
            </div>
            <div
              className="text-center p-1"
              style={{ textAlign: "-webkit-center" }}
            >
              <img src={Package} className="w-10 h-10" />
              <div>
                <p>Subscription Packages</p>
              </div>
            </div>
            <div
              className="text-center p-1"
              style={{ textAlign: "-webkit-center" }}
            >
              <img src={Gift} className="w-10 h-10" />
              <div>
                <p>Event</p>
              </div>
            </div>
            <div
              className="text-center p-1"
              style={{ textAlign: "-webkit-center" }}
            >
              <img src={Recycle} className="w-10 h-10" />
              <div>
                <p>Recycle</p>
              </div>
            </div>
            <div
              className="text-center p-1"
              style={{ textAlign: "-webkit-center" }}
            >
              <img src={Reatured} className="w-10 h-10" />
              <div>
                <p>Reatured Products</p>
              </div>
            </div>
            <div
              className="text-center p-1"
              style={{ textAlign: "-webkit-center" }}
            >
              <img src={Vegan} className="w-10 h-10" />
              <div>
                <p>Vegan</p>
              </div>
            </div>
            <div
              className="text-center p-1"
              style={{ textAlign: "-webkit-center" }}
            >
              <img src={Video} className="w-10 h-10" />
              <div>
                <p>Video</p>
              </div>
            </div>
            <div
              className="text-center p-1"
              style={{ textAlign: "-webkit-center" }}
            >
              <img src={Feed} className="w-10 h-10" />
              <div>
                <p>Feed</p>
              </div>
            </div>
          </div>
          <div className="py-5">
            <OwlCarousel
              className="owl-theme"
              mergeFit={true}
              loop={false}
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
              {/* <div >
                <img  src={banner2} className=""/>
              </div> */}
            </OwlCarousel>
          </div>
          <div className="flex justify-between px-8 font-bold">
            <div className="text-md text-[#343A40]">
              <h1>NEW</h1>
            </div>
            <div className="flex items-center">
              <p className="text-xs text-[#343A40]">more</p>
              <div className="items-center pl-1">
                <img src={Polygon1} className="w-2 h-2" />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 mt-4 px-10 pt-6 pb-6 gap-y-6">
            <div className="">
              <div className="border rounded-full py-2 px-4 mx-5">
                <div className="">
                  <img src={shuadam} className="w-full" />
                </div>
              </div>
              <div className="text-center">
                <div className="text-xs text-slate-500">
                  <p>owndo</p>
                </div>
                <div className="text-sm">
                  <p>Hydro Calming</p>
                </div>
              </div>
            </div>
            <div className="">
              <div className="border rounded-full py-2 px-4 mx-5">
                <div className="">
                  <img src={shuadam} className="w-full" />
                </div>
              </div>
              <div className="text-center">
                <div className="text-xs text-slate-500">
                  <p>owndo</p>
                </div>
                <div className="text-sm">
                  <p>Hydro Calming</p>
                </div>
              </div>
            </div>
            <div className="">
              <div className="border rounded-full py-2 px-4 mx-5">
                <div className="">
                  <img src={shuadam} className="w-full" />
                </div>
              </div>
              <div className="text-center">
                <div className="text-xs text-slate-500">
                  <p>owndo</p>
                </div>
                <div className="text-sm">
                  <p>Hydro Calming</p>
                </div>
              </div>
            </div>
            <div className="">
              <div className="border rounded-full py-2 px-4 mx-5">
                <div className="">
                  <img src={shuadam} className="w-full" />
                </div>
              </div>
              <div className="text-center">
                <div className="text-xs text-slate-500">
                  <p>owndo</p>
                </div>
                <div className="text-sm">
                  <p>Hydro Calming</p>
                </div>
              </div>
            </div>
            <div className="">
              <div className="border rounded-full py-2 px-4 mx-5">
                <div className="">
                  <img src={shuadam} className="w-full" />
                </div>
              </div>
              <div className="text-center">
                <div className="text-xs text-slate-500">
                  <p>owndo</p>
                </div>
                <div className="text-sm">
                  <p>Hydro Calming</p>
                </div>
              </div>
            </div>
            <div className="">
              <div className="border rounded-full py-2 px-4 mx-5">
                <div className="">
                  <img src={shuadam} className="w-full" />
                </div>
              </div>
              <div className="text-center">
                <div className="text-xs text-slate-500">
                  <p>owndo</p>
                </div>
                <div className="text-sm">
                  <p>Hydro Calming</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
