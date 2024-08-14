import { Link } from "react-router-dom";
import back from "../../../../assets/previous.svg";
import Box from "../../../../assets/box_transaction.png";
import CartButtom from "../BottomBar/CartBottom";

function FavoriteTypeSkincare() {

    const typeSkincare = [
        {
            name: "Skin/Toner"
        },
        {
            name: "Lotion/Emulsion"
        },
        {
            name: "Essence/Serum"
        },
        {
            name: "Ampoule"
        },
        {
            name: "Cream"
        },
        {
            name: "Mist"
        },
        {
            name: "Sheetmask"
        },
        {
            name: "Pads"
        },
        {
            name: "Maskpack"
        }
    ]
  return (
    <>
      <div className="flex flex-col min-h-screen bg-white relative">
        <div className="top-0 sticky lg:px-8 px-4 w-full z-20 bg-white pt-2 shadow-md">
          <div className="flex justify-center items-center py-3">
            <Link
              to={"/subcription-menu"}
              className="w-1/12 flex items-center justify-center"
            >
              <img src={back} className="w-8 h-8" alt="Back" />
            </Link>
            <div className="w-11/12 text-xl font-semibold items-center lg:ps-8">
              Favorite Skincare
            </div>
          </div>
        </div>
        <div className="text-center font-black mt-8">
          <h3>
            Pilih jenis skincare yang kamu inginkan
          </h3>
          <h3>
            {"("}min.3{")"}
          </h3>
        </div>
        <div className="text-center mt-5">
            <p>
                {"("}Jenis produk ini nantinya akan dijadikan acuan saat pengiriman beauty box{")"}
            </p>
        </div>
        <div className="grid grid-cols-3 gap-2 mx-4 mt-8 text-center text-gray-500">
            {typeSkincare.map((el)=> {
                return (
                    <>
                        <div className="border border-gray-500 rounded-lg p-3">
                            <button>
                                {el.name}
                            </button>
                        </div>
                    </>
                )
            })}
        </div>
        <div className="pt-5 flex flex-col justify-center items-center lg:text-lg text-sm">
          <div className="flex gap-5">
            <button className="px-16 my-3 font-semibold text-white text-base border rounded-lg py-2 border-green-500 bg-red-500">
              Batal
            </button>
            <button className="px-16 my-3 font-semibold text-white text-base border rounded-lg py-2 border-green-500 bg-[#43BFA1]">
              Simpan
            </button>
          </div>
        </div>
        <div className="bg-white pt-2.5 pb-1 px-1.5 sticky bottom-0 z-20">
          {/* <CartButtom /> */}
        </div>
      </div>
    </>
  );
}

export default FavoriteTypeSkincare;
