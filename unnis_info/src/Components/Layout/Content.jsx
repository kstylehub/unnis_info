import unnis from "../../assets/unnisBox.png";
import NavbarPhone from "../MobilePage/NavbarPhone/NavbarPhone";
import NavigationButtom from "../MobilePage/NavigatonBottom/NavigationBottom";
import Homepage from "../MobilePage/Homepage/Homepage"
import Subscribe from "../MobilePage/ScreenNavBot/Subscribe";
import { Outlet, useLocation, useParams } from "react-router-dom";
import Event from "../MobilePage/ScreenNavBot/Event";
import MyPage from "../MobilePage/ScreenNavBot/MyPage";
import Transaction from "../MobilePage/ScreenNavBot/Transaction"
import NewPage from "../MobilePage/Components/ModalHomepage/New";

function Content(props) {

  const navigation = useLocation()
  return (
    <div className="content flex flex-col relative min-h-screen lg:w-[30%]  lg:w-6/12 w-[100vw] shadow-lg shadow-indigo-500/50 bg-white">
      <div className="flex flex-col h-screen justify-between">
        {/* <div>
          <NavbarPhone />
        </div> */}
        <div className="h-screen overflow-y-auto">
          <Outlet/>
        </div>
        {/* <div className="bg-slate-50 pt-2.5 pb-1 px-1.5">
          <NavigationButtom />
        </div> */}
      </div>
    </div>
  );
}

export default Content;
