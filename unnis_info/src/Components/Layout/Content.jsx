import unnis from "../../assets/unnisBox.png";
import NavbarPhone from "../MobilePage/NavbarPhone/NavbarPhone";
import NavigationButtom from "../MobilePage/NavigatonBottom/NavigationBottom";
import Homepage from "../MobilePage/Homepage/Homepage"
import Subscribe from "../MobilePage/Subscribe";
import { useParams } from "react-router-dom";

function Content(props) {

  function ContentPage() {
  const params  = useParams();
    
    if(params.subscribe == 'subscribe') {
      return (
        <Subscribe/>
      )
    }
    if(params.home == undefined){
      return (
        <Homepage/>
      )
    }
  }
  return (
    <div className="content flex flex-col relative min-h-screen lg:w-6/12 md:right-10 lg:w-6/12 w-[100vw] shadow-lg shadow-indigo-500/50 bg-white">
      <div className="flex flex-col h-screen justify-between">
        <div>
          <NavbarPhone />
        </div>
        <div className="h-screen overflow-y-auto">
          <ContentPage/>
        </div>
        <div className="bg-slate-50 pt-2.5 pb-1 px-1.5">
          <NavigationButtom />
        </div>
      </div>
    </div>
  );
}

export default Content;
