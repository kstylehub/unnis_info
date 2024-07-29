function CartButtom() {
  return (
    <>
      <div className=" flex justify-between items-center bg-white w-full gap-3 text-center px-4 border-t py-3">
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
    </>
  );
}

export default CartButtom;
