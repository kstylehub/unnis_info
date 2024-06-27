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
import { Link, Outlet } from "react-router-dom";
import NavigationButtom from "../NavigatonBottom/NavigationBottom";
import NavbarPhone from "../NavbarPhone/NavbarPhone";
import Calendar from "../../../assets/Homepage/calendar.svg";

function Homepage() {
  return (
    <>
      <div className="bg-white relative">
        <div className="pt-3 pb-1 sticky top-0 z-10 bg-white">
          <NavbarPhone />
          <div className="flex justify-between px-6 text-[#8e9093] bg-white pt-3 text-sm">
            <div>
              <Link to={"/event"}>
                <h3>Event</h3>
              </Link>
            </div>
            <div>
              <Link to={"/feed"}>
              <h3>Feed</h3>
              </Link>
            </div>
            <div>
              <Link to={"/subscribe"}>
              <h3>Subscription</h3>
              </Link>
            </div>
            <div>
              <Link to={"/recycle"}>
              <h3>Recycle</h3>
              </Link>
            </div>
          </div>
        </div>
        <Outlet />

        <div className="bg-slate-50 pt-2.5 pb-1 px-1.5 sticky bottom-0 z-20">
          <NavigationButtom />
        </div>
       
      </div>
    </>
  );
}

export default Homepage;
