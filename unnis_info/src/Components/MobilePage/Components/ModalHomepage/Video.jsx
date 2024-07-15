import { Link, Outlet } from "react-router-dom";
import NavbarPhone from "../../NavbarPhone/NavbarPhone";
import NavigationButtom from "../../NavigatonBottom/NavigationBottom";
import LogoUnnis from "../../../../assets/unnis_logo.png";
import {
  getAllInfluencer,
  getProductVideo,
  getRecommendationProductVideo,
  getVideoByIdMemberInstagram,
  getVideoByIdMemberUnnis,
  getVideoByIdMemberYoutube,
} from "../../../../Store/Actions/Actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Youtube from "../../../../assets/Homepage/yutub.svg";
import VideoBanner from "../../../../assets/Video Page/banner_ai_video.svg";
function Video() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllInfluencer());
    dispatch(getVideoByIdMemberYoutube());
    dispatch(getVideoByIdMemberInstagram());
    dispatch(getVideoByIdMemberUnnis());
    dispatch(getProductVideo());
    // dispatch(getRecommendationProductVideo());
  }, []);
  
  const VideoRecommendationUnnis = useSelector(
    (state) => state.ReducerVideoByIdMemberUnnis.videoUnnis
  );
  const allInfluencer = useSelector(
    (state) => state.ReducerAllInfluencer.influencer || []
  );
  const VideoRecommendationYoutube = useSelector(
    (state) => state.ReducerVideoByIdMemberYoutube.idVideo || []
  );
  const VideoRecommendationInstagram = useSelector(
    (state) => state.ReducerVideoByIdMemberInstagram.videoInstagram || []
  );

  const productVideo = useSelector(
    (state) => state.ReducerProductVideo.productVideo || []
  );

  const YouTubeThumbnail = ({ videoUrl }) => {
    const getYouTubeVideoId = (url) => {
      const regex =
        /(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
      const match = url.match(regex);
      return match ? match[1] : null;
    };

    const videoId = getYouTubeVideoId(videoUrl);
    if (!videoId) return null;
    return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
  };

  return (
    <>
      <div className="bg-white relative">
        <div className="pt-3 pb-1 sticky top-0 z-20 bg-white shadow-md">
          <div className="flex justify-center py-1">
            <img src={LogoUnnis} className="w-24" />
          </div>
        </div>
        <div className="h-screen">
          {/* Influencer Profile */}
          <div className="flex overflow-x-auto ml-5 gap-5 text-sm scrollbar-hide pt-5 pb-4">
            {allInfluencer.map((influencer, index) => (
              <div
                key={index}
                className="flex flex-col justify-center items-center "
              >
                <div className="w-16 h-16 rounded-full flex justify-center overflow-hidden ">
                  {influencer.thumbnail ? (
                    <img
                      src={influencer.thumbnail}
                      className="object-cover w-full h-full"
                      alt={influencer.label}
                    />
                  ) : (
                    <div className="bg-[#4ABFA1] w-full h-full rounded-full">
                      <div className="flex justify-center items-center space-x-4 text-xl text-white font-bold uppercase p-4">
                        {influencer.name ? influencer.name.charAt(0) : ""}
                      </div>
                    </div>
                  )}
                </div>
                <div
                  className="py-1 truncate w-16 text-center"
                  style={{ textOverflow: "ellipsis" }}
                >
                  {influencer.name ? influencer.name : "-"}
                </div>
              </div>
            ))}
          </div>
          <div className="py-0.5 bg-gray-200"></div>
          {/* Short Video Instagram*/}
          <div className="Video You Tube">
            <div className="flex justify-start py-3 px-4">
              <div className="font-bold">Short Video</div>
            </div>
            <div className="flex overflow-x-auto ml-5 gap-5 text-sm scrollbar-hide py-2">
              {VideoRecommendationInstagram.map((ig) => (
                <Link to={`/video/videoshort/${ig.id}`} key={ig.id} className="relative">
                  <div className="w-[10vw] h-[15vw]">
                    {ig.link ? (
                      <img
                        src={ig.thumbnail}
                        className="w-full h-full object-cover rounded-lg"
                        alt="YouTube Thumbnail"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-200 flex items-center justify-center rounded-lg">
                        <span>Thumbnail Not Available</span>
                      </div>
                    )}
                  </div>
                  <div className="absolute z-10 top-[45%] left-[45%] ">
                    <div className="h-10 w-10 bg-[#0000007f] rounded-full flex justify-center items-center">
                      <svg
                        className="w-9 h-9 text-white dark:text-white "
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8.6 5.2A1 1 0 0 0 7 6v12a1 1 0 0 0 1.6.8l8-6a1 1 0 0 0 0-1.6l-8-6Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          {/* Ai Video Recommendation Banner */}
          <div className="w-full px-4 py-3">
            <img src={VideoBanner} className="rounded-lg w-full" />
          </div>
          {/* Recommended Product */}
          <div className="flex flex-col px-4 py-3">
            <div className="flex justify-between pb-1">
              <div className="font-bold">Recommended Product</div>
              <div className="flex justify-center items-center h-8 w-8 rounded-full border border-gray-200">
                <svg
                  className="w-5 h-5 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m9 5 7 7-7 7"
                  />
                </svg>
              </div>
            </div>
            <div className="flex overflow-x-auto gap-2 scrollbar-hide py-2">
              {productVideo?.map((recproduct, index) => (
                <div
                  key={index}
                  className="relative border p-3 w-[8.5vw] flex-shrink-0"
                >
                  {recproduct.bpom && (
                    <div className="absolute top-0 right-3  text-white py-3 w-[10%]">
                      <img
                        src={recproduct.bpom}
                        className="object-contain"
                        style={{ width: "100%", height: "100%" }}
                      />
                    </div>
                  )}
                  {recproduct.mui && (
                    <div className="absolute top-0 right-6  text-white py-3 w-[10%]">
                      <img
                        src={recproduct.mui}
                        className="object-contain"
                        style={{ width: "100%", height: "100%" }}
                      />
                    </div>
                  )}
                  <div className="flex flex-col">
                    <div className="flex justify-center items-center p-1">
                      <div style={{ width: "120px", height: "120px" }}>
                        {recproduct.images !== null ? (
                          <img
                            src={recproduct.images}
                            className="object-contain"
                            style={{ width: "100%", height: "100%" }}
                          />
                        ) : (
                          <div className="bg-gray-300 w-full h-full flex items-center justify-center">
                            Image Not Available
                          </div>
                        )}
                      </div>
                    </div>
                    <div
                      className="w-full pt-2 text-sm"
                      style={{
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        lineHeight: "1.2",
                      }}
                    >
                      {recproduct.nameBrand} - {recproduct.nameProduct}
                    </div>

                    {typeof recproduct.price === "number" && (
                      <div className="text-left font-bold">
                        Rp{" "}
                        {recproduct.price
                          .toLocaleString("id-ID", {
                            minimumFractionDigits: 0,
                            maximumFractionDigits: 0,
                          })
                          .replace(",", ".")}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Recommendation Video */}
          <div className="Video You Tube">
            <div className="flex justify-start py-3 px-4">
              <div className="font-bold">Recommendation Video</div>
            </div>
            <div className="flex overflow-x-auto ml-5 gap-5 text-sm scrollbar-hide py-2">
              {VideoRecommendationYoutube.map((recvideo) => (
                <Link
                  to={`/video/videoyoutube/${recvideo.id}`}
                  state={{ videoData: recvideo }}
                  key={recvideo.id}
                  className="relative"
                >                  {recvideo.source.platform == "youtube" ? (
                    <div className="absolute flex left-0 top-[8.6vw] w-10 h-10 bg-white p-1 rounded-full border-2 border-[#4ABFA1]">
                      <img className="" src={Youtube} />
                    </div>
                  ) : (
                    <div className=""></div>
                  )}
                  <div className="w-[20vw] h-[10vw]">
                    {recvideo.link ? (
                      <img
                        src={YouTubeThumbnail({ videoUrl: recvideo.link })}
                        className="w-full h-full object-cover rounded-lg"
                        alt="YouTube Thumbnail"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-200 flex items-center justify-center rounded-lg">
                        <span>Thumbnail Not Available</span>
                      </div>
                    )}
                  </div>
                  <div className="flex justify-left items-center py-3">
                    <img
                      src={recvideo.dataOwner.photoProfile}
                      className="h-12 w-12 rounded-full object-cover flex justify-center items-center"
                      alt="Owner Profile"
                    />
                    <div className="flex flex-col items-start justify-left ml-3">
                      <div
                        className="w-full h-full pt-2 font-bold"
                        style={{
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                          lineHeight: "1.3",
                        }}
                      >
                        {recvideo.title}
                      </div>
                      <div>{recvideo.dataOwner.influencerName}</div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div className="py-0.5 bg-gray-200"></div>
          {/* Short Unnis Supporters*/}
          <div className="Short Unnis Supporters">
            <div className="flex justify-start py-3 px-4">
              <div className="font-bold">Unnis Supporters</div>
            </div>
            <div className="flex overflow-x-auto ml-5 gap-5 text-sm scrollbar-hide py-2">
              {VideoRecommendationUnnis?.map((unisupport) => (
                <div key={`unisupport-${unisupport.id}`} className="relative">
                  <div className="w-[10vw] h-[15vw]">
                    {unisupport.thumbnail ? (
                      <img
                        src={unisupport.thumbnail}
                        className="w-full h-full object-cover rounded-lg"
                        alt="Supporter Thumbnail"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-200 flex items-center justify-center rounded-lg">
                        <span>Thumbnail Not Available</span>
                      </div>
                    )}
                  </div>
                  <div className="absolute z-10 top-[45%] left-[45%] ">
                    <div className="h-10 w-10 bg-[#0000007f] rounded-full flex justify-center items-center">
                      <svg
                        className="w-9 h-9 text-white dark:text-white "
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8.6 5.2A1 1 0 0 0 7 6v12a1 1 0 0 0 1.6.8l8-6a1 1 0 0 0 0-1.6l-8-6Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Related Product */}
          <div className="flex flex-col px-4 py-3">
            <div className="flex justify-between pb-1">
              <div className="font-bold">Related Product</div>
              <div className="flex justify-center items-center h-8 w-8 rounded-full border border-gray-200">
                <svg
                  className="w-5 h-5 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m9 5 7 7-7 7"
                  />
                </svg>
              </div>
            </div>
            <div className="flex overflow-x-auto gap-2 scrollbar-hide py-2">
              {productVideo.map((item, index) => (
                <div
                  key={index}
                  className="relative border p-3 w-[8.5vw] flex-shrink-0"
                >
                  {item.bpom && (
                    <div className="absolute top-0 right-3  text-white py-3 w-[10%]">
                      <img
                        src={item.bpom}
                        className="object-contain"
                        style={{ width: "100%", height: "100%" }}
                      />
                    </div>
                  )}
                  {item.mui && (
                    <div className="absolute top-0 right-6  text-white py-3 w-[10%]">
                      <img
                        src={item.mui}
                        className="object-contain"
                        style={{ width: "100%", height: "100%" }}
                      />
                    </div>
                  )}
                  <div className="flex flex-col">
                    <div className="flex justify-center items-center p-1">
                      <div style={{ width: "120px", height: "120px" }}>
                        {item.images !== null ? (
                          <img
                            src={item.images}
                            className="object-contain"
                            style={{ width: "100%", height: "100%" }}
                          />
                        ) : (
                          <div className="bg-gray-300 w-full h-full flex items-center justify-center">
                            Image Not Available
                          </div>
                        )}
                      </div>
                    </div>
                    <div
                      className="w-full pt-2 text-sm"
                      style={{
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        lineHeight: "1.2",
                      }}
                    >
                      {item.nameBrand} - {item.nameProduct}
                    </div>

                    {typeof item.price === "number" && (
                      <div className="text-left font-bold">
                        Rp{" "}
                        {item.price
                          .toLocaleString("id-ID", {
                            minimumFractionDigits: 0,
                            maximumFractionDigits: 0,
                          })
                          .replace(",", ".")}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="py-0.5 bg-gray-200 mt-3"></div>
          {/* More Related Videos */}
          <div className="More Related Videos">
            <div className="flex justify-start py-3 px-4">
              <div className="font-bold">More Related Video</div>
            </div>
            <div className="  gap-5 text-sm scrollbar-hide py-2">
              {VideoRecommendationYoutube.map((relatedvide) => (
                 <Link
                 to={`/video/videoyoutube/${relatedvide.id}`}
                 state={{ videoData: relatedvide }}
                 key={relatedvide.id}
                 className="relative"
               >
                  {relatedvide.source.platform == "youtube" ? (
                    <div className="absolute flex left-5 top-[11.5vw] w-10 h-10 rounded-full bg-white p-1 border-2 border-[#4ABFA1]">
                      <img className="" src={Youtube} />
                    </div>
                  ) : (
                    <div className=""></div>
                  )}
                  <div className="">
                    {relatedvide.link ? (
                      <img
                        src={YouTubeThumbnail({ videoUrl: relatedvide.link })}
                        className="w-full h-[13vw] object-cover"
                        alt="YouTube Thumbnail"
                      />
                    ) : (
                      <div className="w-full h-[13vw] bg-gray-200 flex items-center justify-center">
                        <span>Thumbnail Not Available</span>
                      </div>
                    )}
                  </div>
                  <div className="flex justify-left items-center pt-3 px-4 pb-5">
                    <img
                      src={relatedvide.dataOwner.photoProfile}
                      className="h-12 w-12 rounded-full object-cover flex justify-center items-center"
                      alt="Owner Profile"
                    />
                    <div className="flex flex-col items-start justify-left ml-3">
                      <div
                        className="w-full h-full pt-2 font-bold"
                        style={{
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                          lineHeight: "1.3",
                        }}
                      >
                        {relatedvide.title}
                      </div>
                      <div>{relatedvide.dataOwner.influencerName}</div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div className="bg-slate-50 pt-2.5 pb-1 px-1.5 sticky bottom-0 z-20">
            <NavigationButtom />
          </div>
        </div>
      </div>
    </>
  );
}

export default Video;
