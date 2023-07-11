import Polygon from "../../../assets/Polygon5.svg";

function Homepage() {
  return (
    <>
      <div className="bg-white h-full">
        <div className="flex justify-evenly text-[#343A40] bg-white pt-3 pb-3">
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
        <div>
          <div className="h-1/5 bg-[#4ABFA1] pb-10">
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
          <div className="p-5 m-5 rounded-xl shadow-xl bg-white">
            <div className="text-sm font-semibold">
                <h3>Beauty Bob Status</h3>
                <div className="text-md font-light">
                    <p>Your subscription plan status : Not Active</p>
                </div>
            </div>
            <div className="text-center text-sm">
                <p>No service subscribed 😭</p>
                <button className="rounded-full bg-[#4ABFA1] pl-5 pr-5 pt-1 pb-1 text-white">Subscribe to a Service now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
