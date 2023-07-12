import beautyBox from "../../assets/BeautyBox.jpeg";
import subPict from "../../assets/Subs.jpg";
function Subscribe() {
  return (
    <>
      <div className="overflow-y-auto">
        <div class="relative">
          <img src={beautyBox} alt="Backgrond Image" className="w-full h-auto"></img>
          <button class="absolute bottom-1 left-1/2 transform -translate-x-1/2 -translate-y-3/4 px-2 py-1 bg-blue-500 hover:bg-blue-700 text-white rounded-full shadow" >
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
// <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
