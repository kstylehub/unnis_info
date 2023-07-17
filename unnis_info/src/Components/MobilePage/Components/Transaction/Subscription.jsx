import Box from "../../../../assets/Box_transaction.png";

function TransSubs () {
    return (
        <div className="lg:mt-36 mt-32 flex flex-col justify-center items-center lg:text-lg text-sm">
            <img
                src={Box}
                className="w-5/12 h-auto"
            ></img>
            <p className="my-3 mt-12">Anda belum pernah berlangganan :)</p>
            <p className="font-bold">Ayo langganan sekarang.</p>
            <p className="font-bold text-center">Dapatkan produk rutin dan benefit menarik lainnya.</p>
            <button className="px-6 my-6 text-white border rounded-lg py-2 border-green-800 bg-[#43BFA1]">
                Daftar Sekarang
            </button>
        </div>
    )
}

export default TransSubs