// import NavigationButtom from "../NavigatonBottom/NavigationBottom";
// import NavbarPhone from "../NavbarPhone/NavbarPhone";
import back from "../../../assets/previous.svg";
import logo from "../../../assets/logo.png";
import camera_pink from "../../../assets/SkinAnalysis/camera_pink.png";
import { Link, Outlet } from "react-router-dom";

function Event() {
  return (
    <>
      <div className="bg-white relative">
        <div className="pt-2 pb-2 sticky top-0 z-20 bg-white px-4">
          <div className="flex justify-between px-4">
            <div className="self-center">
              <Link to={"/"}>
                <img src={back} className="w-full" />
              </Link>
            </div>
            <div className="self-center flex justify-center">
              <img src={logo} className="w-4/12" />
            </div>
            <div className="self-center">
              <img src={camera_pink} className="w-5/12" />
            </div>
          </div>
          <div className="flex space-x-16 justify-center text-[#8e9093] bg-white pt-2 text-sm">
            <div className="flex">
              <Link to={"/event"}>
                <h3>Event</h3>
              </Link>
            </div>
            <div className="flex">
              <Link to={"/feed"}>
                <h3>Feed</h3>
              </Link>
            </div>
            <div className="flex">
              <Link to={"/subscribe"}>
                <h3>Subscription</h3>
              </Link>
            </div>
            <div className="flex">
              <Link to={"/recycle"}>
                <h3>Recycle</h3>
              </Link>
            </div>
          </div>
        </div>
        <hr className="pb-2"></hr>

        <Outlet />
        {/* <div className="bg-white pt-2.5 pb-1 px-1.5 sticky bottom-0 z-20">
          <NavigationButtom />
        </div> */}
      </div>
    </>
  );
}

export default Event;
