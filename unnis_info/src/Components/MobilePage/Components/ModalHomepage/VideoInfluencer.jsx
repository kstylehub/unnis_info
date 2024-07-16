import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { getVideoInfluencer } from "../../../../Store/Actions/Actions";
import back from "../../../../assets/previous.svg";
import LogoUnnis from "../../../../assets/unnis_logo.png";

function VideoInfluencer() {
  const location = useLocation();
  const { influencerData } = location.state;
  const name = influencerData;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVideoInfluencer(name));
  }, [dispatch, name]);

  const dataInfluencer = useSelector(
    (state) => state.ReducerVideoInfluencer.videoInfluencer
  );

  console.log("data influ", dataInfluencer);

  const getYouTubeVideoId = (url) => {
    if (typeof url !== "string") return null;
    const regex =
      /(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  const YouTubeThumbnail = (link) => {
    const videoId = getYouTubeVideoId(link);
    return videoId
      ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
      : "https://via.placeholder.com/150"; // Default placeholder image
  };

  return (
    <>
      <div className="bg-white relative">
        <div className="pt-3 pb-1 sticky top-0 z-20 bg-white shadow-md">
          <div className="flex justify-center py-1">
            <div className="absolute top-3 left-5">
              <Link to="/video">
                <img src={back} className="w-7" alt="Back" />
              </Link>
            </div>
            <img src={LogoUnnis} className="w-24" alt="Unnis Logo" />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-center items-center p-5 text-sm">
            <img
              className="rounded-full border-2 h-20 w-20 object-contain my-3"
              src={dataInfluencer.photo}
              alt={`${dataInfluencer.influencerName}'s profile`}
            />
            <div className="font-bold">{dataInfluencer.influencerName}</div>
            <div className="">
              {dataInfluencer.videoRecommendation?.length} Videos From YouTube.
            </div>
          </div>
        </div>
        <div className="p-0.5 bg-gray-200"></div>
        <div className="p-5">
          {dataInfluencer.videoRecommendation?.map((video, index) => (
            <div className="flex pb-4 gap-2 " key={index}>
              <div className="w-6/12 h-[6.5vw]">
                 <img
                className="h-full w-full object-cover rounded-md "
                src={YouTubeThumbnail(video.videoLink)}
                alt={`Thumbnail of ${video.title}`}
              />
              </div>
             
              <div className="w-6/12">
                <div className="font-bold text-sm">{video.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default VideoInfluencer;
