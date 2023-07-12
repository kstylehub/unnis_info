import Package from "../../../assets/Package.svg";
import Gift from "../../../assets/Gift.svg";
import User from "../../../assets/User.svg";
import Home from "../../../assets/Home.svg";
function NavigationButtom() {
  return (
    <div>
      <div
        className="justify-between flex text-xs text-slate-500	"
        style={{ textAlign: "-webkit-center" }}
      >
        <div>
          <a href="/">  
            <div>
              <div className="m-1">
                <img src={Home} className="w-8 h-8" />
              </div>
            </div>
            <div>
              <h6>HOME</h6>
            </div>
          </a>
        </div>
        <div>
          <a href="/subscribe">
            <img src={Package} className="w-10 h-10" />
          <h6>SUBSCRIPTION</h6>
          </a>
        </div>
        <div>
          <img src={Gift} className="w-10 h-10" />

          <h6>EVENT</h6>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-8 h-8 text-[#868E96] m-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
            />
          </svg>

          <h6>TRANSACTION</h6>
        </div>
        <div>
          <img src={User} className="w-10 h-10" />
          <h6>MY PAGE</h6>
        </div>
      </div>
    </div>
  );
}

export default NavigationButtom;
