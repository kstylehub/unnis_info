import unnis from "../../assets/unnisBox.png";
import NavbarPhone from "../MobilePage/NavbarPhone/NavbarPhone";
import NavigationButtom from "../MobilePage/NavigatonBottom/NavigationBottom";

function Content() {
  return (
    <div className="content flex flex-col relative min-h-screen lg:w-6/12 md:right-10 lg:w-6/12 w-[100vw] shadow-lg shadow-indigo-500/50 bg-white">
      <div className="">
        <div>
          <NavbarPhone />
        </div>
        <div>
          <h1>Content</h1>
        </div>
        <div>
          <NavigationButtom />
        </div>
      </div>
    </div>
  );
}

export default Content;
