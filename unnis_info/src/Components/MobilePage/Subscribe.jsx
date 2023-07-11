import beautyBox from "../../assets/BeautyBox.jpeg";
import subPict from "../../assets/Subs.jpg";
function Subscribe() {
  return (
    <>
      <div className="overflow-y-auto">
        <div>
          <img bg-cover src={beautyBox} className="w-full h-auto"></img>
          <button type="button"
                class="w-full md:w-40 h-14 rounded bg-sky-400 text-xs
                font-medium uppercase leading-normal
                text-white shadow-[0_4px_9px_-4px_#3b71ca] w-50">
            Daftar Sekarang
          </button>
        </div>
        <div>
          <img src={subPict} className="w-full h-auto"></img>
        </div>
      </div>
    </>
  );
}

export default Subscribe;
