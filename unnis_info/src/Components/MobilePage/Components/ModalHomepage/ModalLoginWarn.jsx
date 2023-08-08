function ModalLoginWarn({ handleCloseModal }) {
  return (
    <>
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-opacity-70 bg-black flex justify-center items-center z-50 overflow-hidden	 "></div>
      <div className="fixed rounded-lg bg-white text-center max-w-[80%] xl:mx-20 lg:mx-5 md:mx-60 sm:mx-40 xs:mx-5 mx-20 overflow-y-auto z-50">
        <div className="py-8 lg:px-6 px-4">
          <h5 className="lg:mb-2 text-sm font-semibold leading-tight">
            Anda Belum Login
          </h5>
          <p>Silahkan login untuk akses menu ini</p>
        </div>
        <hr></hr>
        <button
          className="lg:py-4 py-3 inline-block rounded px-6 text-sm text-green-600"
          onClick={handleCloseModal}
          type="button"
        >
          Ok
        </button>
      </div>
    </>
  );
}

export default ModalLoginWarn;
