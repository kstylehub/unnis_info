import LogoUnnis from "../../../../assets/unnis_logo.png";

function UnnisOnly() {
  return (
    <>
      <div className="pt-3 pb-1 sticky top-0 z-5 bg-white">
        <div className="flex justify-center py-1">
          <img src={LogoUnnis} className="w-24" />
        </div>
      </div>
    </>
  );
}

export default UnnisOnly;
