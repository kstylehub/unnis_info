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

function Homepage() {
  return (
    <>
      <div className="bg-white relative">
        <div className="pt-3 pb-1 sticky top-0 z-20 bg-white">
          <NavbarPhone />
          <div className="flex justify-evenly text-[#343A40] bg-white pt-3">
            <div>
              <Link to={"/newProduct"}>
                <h3>NEW</h3>
              </Link>
            </div>
            <div>
              <Link to={"/newProduct"}>
              <h3>CATEGORY</h3>
              </Link>
            </div>
            <div>
              <Link>
              <h3>REVIEW</h3>
              </Link>
            </div>
            <div>
              <Link>
              <h3>EVENT</h3>
              </Link>
            </div>
            <div>
              <a href="/feed">
                <h3>FEED</h3>
              </a>
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
