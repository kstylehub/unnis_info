import { Link } from "react-router-dom";
import Box from "../../../../assets/box_transaction.png";

function TransProduct () {
    return (
        <div className="mt-24 flex flex-col justify-center items-center lg:text-lg text-sm">
            <img
                src={Box}
                className="w-5/12 h-auto"
            ></img>
            <p className="my-3 mt-12 text-base ">Anda belum pernah membeli produk :)</p>
            <Link to={"/newProduct"}>
                <button className="px-6 my-6 text-white text-base border rounded-lg py-2 border-green-800 bg-[#43BFA1]">
                    Ayo lihat produk
                </button>
            </Link>
        </div>
    )
}
export default TransProduct