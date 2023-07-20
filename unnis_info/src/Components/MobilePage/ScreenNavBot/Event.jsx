import NavigationButtom from "../NavigatonBottom/NavigationBottom"
import NavbarPhone from "../NavbarPhone/NavbarPhone"
import { Outlet } from "react-router-dom"

function Event () {
    return (
        <>
         <div className="bg-white relative">
        <div className="pt-3 pb-1 sticky top-0 z-20 bg-white">
          <NavbarPhone />
          <div className="flex justify-evenly text-[#343A40] bg-white pt-3">
            <div>
              <a href="/newProduct">
                <h3>NEW</h3>
              </a>
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
        </div>
        <Outlet />
        <div className="bg-slate-50 pt-2.5 pb-1 px-1.5 sticky bottom-0 z-20">
          <NavigationButtom />
        </div>
      </div>
        </>
    )
}

export default Event