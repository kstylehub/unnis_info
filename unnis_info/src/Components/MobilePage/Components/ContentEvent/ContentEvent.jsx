import Aloncepict from "../../../../assets/Alonce.jpg";
function ContentEvent() {
  return (
    <div className="max-w-screen overflow-x-auto">
      <div className="flex justify-center min-w-max w-full space-x-4">
        <button className="px-5 py-1/2  bg-transparant hover:bg-slate-300 text-grey-300 border border-black rounded-full">
          All
        </button>
        <button className="px-5 py-1/2  bg-transparant hover:bg-slate-300 text-grey-300 border border-black rounded-full">
          Unnis
        </button>
        <button className="px-5 py-1/2  bg-transparant hover:bg-slate-300 text-grey-300 border border-black rounded-full">
          Supporters
        </button>
        <button className="px-5 py-1/2  bg-transparant hover:bg-slate-300 text-grey-300 border border-black rounded-full">
          Event Lain
        </button>
      </div>
      <div className="overflow-y-auto">
      <a href="#" class="relative max-w rounded overflow-hidden shadow-lg hover:shadow-xl transition duration-300 border border-pink-800">
        <img class="w-max" src={Aloncepict} alt="Image"></img>
        <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">Card Title</div>
        <p class="text-gray-700 text-base">Card description goes here.</p>
  </div>
</a>
</div>
    </div>
  );
}
export default ContentEvent;
