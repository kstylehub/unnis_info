import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getVideoByIdMemberInstagram } from "../../../../Store/Actions/Actions";

function VideoShort() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [videos, setVideos] = useState([]);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false); // Initially set to false
  const [isLoadingVideos, setIsLoadingVideos] = useState(true);
  const [dataFetched, setDataFetched] = useState(false);
  const [showProductInfo, setShowProductInfo] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (!dataFetched) {
      dispatch(getVideoByIdMemberInstagram());
      setDataFetched(true);
      setIsLoadingVideos(true);
    }
  }, [dispatch, dataFetched]);

  const VideoRecommendationInstagram = useSelector(
    (state) => state.ReducerVideoByIdMemberInstagram.videoInstagram || []
  );

  useEffect(() => {
    setVideos(VideoRecommendationInstagram);
  }, [VideoRecommendationInstagram]);

  useEffect(() => {
    if (videos.length > 0) {
      setCurrentVideoIndex((prevIndex) => {
        const index = videos.findIndex((vid) => String(vid.id) === String(id));
        return index !== -1 ? index : 0;
      });
      setIsLoadingVideos(false);
    }
  }, [videos, id]);

  const video = videos[currentVideoIndex];

  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.play().catch((error) => {
          console.error("Failed to play video:", error);
        });
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlaying, video]);

  const handleUserInteraction = () => {
    setIsPlaying(true);
  };

  const getInfluencerName = (name) => {
    return name.startsWith("@") ? name.slice(1) : name;
  };

  const getFirstLetter = (name) => {
    return name ? name.charAt(1).toUpperCase() : "";
  };

  const toggleProductInfo = () => {
    setShowProductInfo(!showProductInfo);
  };

  const moveToNextVideo = () => {
    setIsPlaying(false);
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
    setShowProductInfo(false);
    setIsPlaying(true);
  };

  const convertToViewLink = (downloadLink) => {
    const fileIdMatch = downloadLink.match(/(?:file\/d\/|id=)([^\/\&]+)/);
    const fileId = fileIdMatch ? fileIdMatch[1] : null;

    if (fileId) {
      const viewLink = `https://drive.google.com/uc?export=view&id=${fileId}`;
      console.log("Converted View Link:", viewLink);  // Debugging log
      return viewLink;
    }

    return downloadLink;
  };

  const handleImageError = (index) => {
    console.error(`Failed to load image for product index ${index}`);
  };

  return (
    <div
      className="flex items-center justify-center h-screen bg-black"
      onClick={handleUserInteraction} // Handle user interaction to enable autoplay
    >
      {!isLoadingVideos && video ? (
        <>
          <video
            ref={videoRef}
            src={video.link}
            autoPlay={isPlaying}
            loop
            className="w-full h-full object-contain"
          >
            Your browser does not support the video tag.
          </video>
          <div className="absolute top-0 right-0 left-0 bg-gradient-to-b from-[#00000094] to-transparent text-white">
            <div className="flex px-4 py-6 justify-center items-center gap-3">
              <div className="w-1/12">
                {video.dataOwner.videoProfile ? (
                  <img
                    src={convertToViewLink(video.dataOwner.videoProfile)}
                    alt="video"
                    className="w-11 h-11 rounded-full"
                    onError={() => handleImageError('profile')}
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-[#4ABFA1] flex items-center justify-center">
                    <span className="text-white font-bold">
                      {getFirstLetter(video.dataOwner.influencerName)}
                    </span>
                  </div>
                )}
              </div>
              <div className="flex-col w-10/12 ps-3 leading-normal">
                <div className="font-semibold">{video.title}</div>
                <div className="">
                  {getInfluencerName(video.dataOwner.influencerName)}
                </div>
              </div>
              <div className="w-1/12">
                <Link to="/video" className="text-white text-2xl">
                  <svg
                    className="w-7 h-7 text-white dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18 17.94 6M18 18 6.06 6"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          <div
            onClick={moveToNextVideo}
            className="absolute right-0 p-3 text-white cursor-pointer"
          >
            <div className="rounded-full bg-[#1e1e1e73]">
              <svg
                className="w-12 h-12 text-white dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                  d="m10 16 4-4-4-4"
                />
              </svg>
            </div>
          </div>
          {video.dataProduct ? (
            <div className="absolute bottom-0 right-0 left-0 bg-gradient-to-b from-[#00000094] to-transparent">
              <div className="flex justify-between ">
                <div className="px-5 py-4 text-white">Rekomendasi Produk</div>
                <div
                  className="text-white flex justify-center items-center"
                  onClick={toggleProductInfo}
                >
                  <svg
                    className="w-10 h-10 text-white dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1"
                      d="m8 10 4 4 4-4"
                    />
                  </svg>
                </div>
              </div>
              {showProductInfo ? (
                <div className="flex-col px-4 pb-3 justify-start items-center gap-3">
                  {video.dataProduct.map((product, index) => (
                    <div
                      key={index}
                      className="w-full flex bg-white mb-2 text-black p-3"
                    >
                      {/* <img
                        src={convertToViewLink(product.link_image)}
                        alt=""
                        className="w-12 h-12 object-cover"
                        onError={() => handleImageError(index)}
                      /> */}
                      <div className="pl-2">
                        <div className="font-bold">{product.product_name}</div>
                        <div className="">{product.brand_name}</div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
          ) : null}
        </>
      ) : (
        <div className="text-white">Loading...</div>
      )}
    </div>
  );
}

export default VideoShort;
