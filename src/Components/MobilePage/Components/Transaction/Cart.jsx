import { Link } from "react-router-dom";
import back from "../../../../assets/previous.svg";
import Box from "../../../../assets/box_transaction.png";

function Cart() {
  return (
    <>
      <div className="w-full h-full overflow-x-auto relative pb-20"> {/* Add padding-bottom here */}
        <div className="top-0 sticky lg:px-8 px-4 w-full z-20 bg-white pt-2 shadow-md">
          <div className="flex justify-center items-center py-3">
            <Link to={"/"} className="w-1/12 flex items-center justify-center">
              <img src={back} className="w-8 h-8" alt="Back" />
            </Link>
            <div className="w-11/12  text-xl font-semibold items-center lg:ps-8">
              Cart
            </div>
          </div>
          <div className="py-3 flex justify-center items-center">
            <div className="w-1/12 flex justify-start items-center">
              <svg
                className="w-6 h-6 text-[#43BFA1] dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                />
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                  d="M17.8 13.938h-.011a7 7 0 1 0-11.464.144h-.016l.14.171c.1.127.2.251.3.371L12 21l5.13-6.248c.194-.209.374-.429.54-.659l.13-.155Z"
                />
              </svg>
            </div>
            <div className="w-10/12">Shipped to ... </div>
            <div className="w-1/12 justify-end flex items-center">
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m9 5 7 7-7 7"
                />
              </svg>
            </div>
          </div>
          <div className="pt-3 pb-6 flex justify-center items-center">
            <div className="w-1/12 flex justify-start items-center">
              <input type="radio" className="w-4 h-4"></input>
            </div>
            <div className="w-11/12">Select All</div>
          </div>
        </div>
        <div className="h-[35vw] flex flex-col justify-center items-center lg:text-lg text-sm">
          <img src={Box} className="w-5/12 h-auto"></img>
          <p className="mb-3 mt-12 text-base ">You haven't choose product :)</p> 
          <Link to={"/newProduct"}>
            <button className="px-6 my-3 font-semibold text-white text-base border rounded-lg py-2 border-green-500 bg-[#43BFA1]">
              Let's view Product
            </button>
          </Link>
        </div>
     
        <div className="fixed bottom-0 px-5 lg:w-3/12 w-full flex justify-between items-center bg-white p-4 shadow-lg border-t"> {/* Change to fixed */}
          <div className="">
            <div className="">Total</div>
            <div className="font-bold">Rp0</div>
          </div>
          <div className="">
            <button className="text-white font-semibold text-base border rounded-lg py-2 px-6 border-green-500 bg-[#43BFA1] shadow">
              Pay
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
