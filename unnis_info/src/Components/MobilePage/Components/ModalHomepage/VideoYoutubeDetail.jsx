import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { getVideoByIdMemberYoutube } from "../../../../Store/Actions/Actions";
import LogoUnnis from "../../../../assets/unnis_logo.png";
import Youtube from "../../../../assets/Homepage/yutub.svg";
import Bpom from "../../../../assets/Video Page/bpom.png";
import Halal from "../../../../assets/Video Page/halal.png";
import back from "../../../../assets/previous.svg";
import Flag from "react-world-flags";

function VideoYoutubeDetail() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getVideoByIdMemberYoutube());
  }, [dispatch]);

  const location = useLocation();
  const { videoData } = location.state;
  console.log(videoData);
  const VideoRecommendationYoutube = useSelector(
    (state) => state.ReducerVideoByIdMemberYoutube.idVideo || []
  );
  const getYouTubeVideoId = (url) => {
    const regex =
      /(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  const videoId = getYouTubeVideoId(videoData.link);
  const videoSrc = videoId
    ? `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`
    : null;

  const convertToViewLink = (downloadLink) => {
    const fileIdMatch = downloadLink.match(/(?:file\/d\/|id=)([^\/\&]+)/);
    const fileId = fileIdMatch ? fileIdMatch[1] : null;

    if (fileId) {
      const viewLink = `https://drive.google.com/thumbnail?id=${fileId}`;
      //   console.log("Converted View Link:", viewLink);  // Debugging log
      return viewLink;
    }
    // https://drive.google.com/thumbnail?id=1PjbVKFz0F6A1b-Y2wdekeCaFMdGJdE_4
    return downloadLink;
  };

  const countryCodes = {
    "Afghanistan": "AF",
    "Albania": "AL",
    "Algeria": "DZ",
    "American Samoa": "AS",
    "Andorra": "AD",
    "Angola": "AO",
    "Anguilla": "AI",
    "Antarctica": "AQ",
    "Antigua and Barbuda": "AG",
    "Argentina": "AR",
    "Armenia": "AM",
    "Aruba": "AW",
    "Australia": "AU",
    "Austria": "AT",
    "Azerbaijan": "AZ",
    "Bahamas": "BS",
    "Bahrain": "BH",
    "Bangladesh": "BD",
    "Barbados": "BB",
    "Belarus": "BY",
    "Belgium": "BE",
    "Belize": "BZ",
    "Benin": "BJ",
    "Bermuda": "BM",
    "Bhutan": "BT",
    "Bolivia": "BO",
    "Bonaire, Sint Eustatius and Saba": "BQ",
    "Bosnia and Herzegovina": "BA",
    "Botswana": "BW",
    "Bouvet Island": "BV",
    "Brazil": "BR",
    "British Indian Ocean Territory": "IO",
    "Brunei Darussalam": "BN",
    "Bulgaria": "BG",
    "Burkina Faso": "BF",
    "Burundi": "BI",
    "Cabo Verde": "CV",
    "Cambodia": "KH",
    "Cameroon": "CM",
    "Canada": "CA",
    "Cayman Islands": "KY",
    "Central African Republic": "CF",
    "Chad": "TD",
    "Chile": "CL",
    "China": "CN",
    "Christmas Island": "CX",
    "Cocos (Keeling) Islands": "CC",
    "Colombia": "CO",
    "Comoros": "KM",
    "Congo": "CG",
    "Congo, Democratic Republic of the": "CD",
    "Cook Islands": "CK",
    "Costa Rica": "CR",
    "Croatia": "HR",
    "Cuba": "CU",
    "Curaçao": "CW",
    "Cyprus": "CY",
    "Czechia": "CZ",
    "Côte d'Ivoire": "CI",
    "Denmark": "DK",
    "Djibouti": "DJ",
    "Dominica": "DM",
    "Dominican Republic": "DO",
    "Ecuador": "EC",
    "Egypt": "EG",
    "El Salvador": "SV",
    "Equatorial Guinea": "GQ",
    "Eritrea": "ER",
    "Estonia": "EE",
    "Eswatini": "SZ",
    "Ethiopia": "ET",
    "Falkland Islands (Malvinas)": "FK",
    "Faroe Islands": "FO",
    "Fiji": "FJ",
    "Finland": "FI",
    "France": "FR",
    "French Guiana": "GF",
    "French Polynesia": "PF",
    "French Southern Territories": "TF",
    "Gabon": "GA",
    "Gambia": "GM",
    "Georgia": "GE",
    "Germany": "DE",
    "Ghana": "GH",
    "Gibraltar": "GI",
    "Greece": "GR",
    "Greenland": "GL",
    "Grenada": "GD",
    "Guadeloupe": "GP",
    "Guam": "GU",
    "Guatemala": "GT",
    "Guernsey": "GG",
    "Guinea": "GN",
    "Guinea-Bissau": "GW",
    "Guyana": "GY",
    "Haiti": "HT",
    "Heard Island and McDonald Islands": "HM",
    "Holy See": "VA",
    "Honduras": "HN",
    "Hong Kong": "HK",
    "Hungary": "HU",
    "Iceland": "IS",
    "India": "IN",
    "Indonesia": "ID",
    "Iran": "IR",
    "Iraq": "IQ",
    "Ireland": "IE",
    "Isle of Man": "IM",
    "Israel": "IL",
    "Italy": "IT",
    "Jamaica": "JM",
    "Japan": "JP",
    "Jersey": "JE",
    "Jordan": "JO",
    "Kazakhstan": "KZ",
    "Kenya": "KE",
    "Kiribati": "KI",
    "Korea2": "KP",
    "Korea": "KR",
    "Kuwait": "KW",
    "Kyrgyzstan": "KG",
    "Lao People's Democratic Republic": "LA",
    "Latvia": "LV",
    "Lebanon": "LB",
    "Lesotho": "LS",
    "Liberia": "LR",
    "Libya": "LY",
    "Liechtenstein": "LI",
    "Lithuania": "LT",
    "Luxembourg": "LU",
    "Macao": "MO",
    "Madagascar": "MG",
    "Malawi": "MW",
    "Malaysia": "MY",
    "Maldives": "MV",
    "Mali": "ML",
    "Malta": "MT",
    "Marshall Islands": "MH",
    "Martinique": "MQ",
    "Mauritania": "MR",
    "Mauritius": "MU",
    "Mayotte": "YT",
    "Mexico": "MX",
    "Micronesia (Federated States of)": "FM",
    "Moldova": "MD",
    "Monaco": "MC",
    "Mongolia": "MN",
    "Montenegro": "ME",
    "Montserrat": "MS",
    "Morocco": "MA",
    "Mozambique": "MZ",
    "Myanmar": "MM",
    "Namibia": "NA",
    "Nauru": "NR",
    "Nepal": "NP",
    "Netherlands": "NL",
    "New Caledonia": "NC",
    "New Zealand": "NZ",
    "Nicaragua": "NI",
    "Niger": "NE",
    "Nigeria": "NG",
    "Niue": "NU",
    "Norfolk Island": "NF",
    "North Macedonia": "MK",
    "Northern Mariana Islands": "MP",
    "Norway": "NO",
    "Oman": "OM",
    "Pakistan": "PK",
    "Palau": "PW",
    "Palestine, State of": "PS",
    "Panama": "PA",
    "Papua New Guinea": "PG",
    "Paraguay": "PY",
    "Peru": "PE",
    "Philippines": "PH",
    "Pitcairn": "PN",
    "Poland": "PL",
    "Portugal": "PT",
    "Puerto Rico": "PR",
    "Qatar": "QA",
    "Romania": "RO",
    "Russia": "RU",
    "Rwanda": "RW",
    "Réunion": "RE",
    "Saint Barthélemy": "BL",
    "Saint Helena, Ascension and Tristan da Cunha": "SH",
    "Saint Kitts and Nevis": "KN",
    "Saint Lucia": "LC",
    "Saint Martin (French part)": "MF",
    "Saint Pierre and Miquelon": "PM",
    "Saint Vincent and the Grenadines": "VC",
    "Samoa": "WS",
    "San Marino": "SM",
    "Sao Tome and Principe": "ST",
    "Saudi Arabia": "SA",
    "Senegal": "SN",
    "Serbia": "RS",
    "Seychelles": "SC",
    "Sierra Leone": "SL",
    "Singapore": "SG",
    "Sint Maarten (Dutch part)": "SX",
    "Slovakia": "SK",
    "Slovenia": "SI",
    "Solomon Islands": "SB",
    "Somalia": "SO",
    "South Africa": "ZA",
    "South Georgia and the South Sandwich Islands": "GS",
    "South Sudan": "SS",
    "Spain": "ES",
    "Sri Lanka": "LK",
    "Sudan": "SD",
    "Suriname": "SR",
    "Svalbard and Jan Mayen": "SJ",
    "Sweden": "SE",
    "Switzerland": "CH",
    "Syrian Arab Republic": "SY",
    "Taiwan": "TW",
    "Tajikistan": "TJ",
    "Tanzania": "TZ",
    "Thailand": "TH",
    "Timor-Leste": "TL",
    "Togo": "TG",
    "Tokelau": "TK",
    "Tonga": "TO",
    "Trinidad and Tobago": "TT",
    "Tunisia": "TN",
    "Turkey": "TR",
    "Turkmenistan": "TM",
    "Turks and Caicos Islands": "TC",
    "Tuvalu": "TV",
    "Uganda": "UG",
    "Ukraine": "UA",
    "United Arab Emirates": "AE",
    "United Kingdom of Great Britain and Northern Ireland": "GB",
    "USA": "US",
    "Uruguay": "UY",
    "Uzbekistan": "UZ",
    "Vanuatu": "VU",
    "Venezuela": "VE",
    "Viet Nam": "VN",
    "Wallis and Futuna": "WF",
    "Western Sahara": "EH",
    "Yemen": "YE",
    "Zambia": "ZM",
    "Zimbabwe": "ZW"
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
          <div className="w-full h-30">
            {videoSrc ? (
              <iframe
                src={videoSrc}
                title={videoData.title}
                className="w-full h-[15vw]"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <p>Invalid video link</p>
            )}
          </div>
          <div className="flex p-3 ">
            <div className="w-2/12 ps-2 flex items-start pt-3">
              {videoData.dataOwner.photoProfile ? (
                <img
                  src={videoData.dataOwner.photoProfile}
                  className="h-12 w-12 rounded-full object-cover flex justify-center items-center"
                  alt="Owner Profile"
                />
              ) : (
                <div className="h-12 w-12 rounded-full bg-green-400 "></div>
              )}
            </div>

            <div className=" w-9/12 flex-col flex pe-2 items-start text-sm">
              <div
                className="w-full h-full pt-2 font-bold"
                style={{
                  display: "-webkit-box",

                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                  lineHeight: "1.3",
                }}
              >
                <div className="flex items-start">{videoData.title}</div>
                
              </div>
              <div className="text-sm">
                {videoData.dataOwner.influencerName}
              </div>
            </div>
            <div className="justify-center items-start flex w-1/12 pt-1">
              <img src={Youtube} className="w-16" alt="Unnis Logo" />
            </div>
          </div>
          {/* Produk Yang digunakan */}
          <div className="px-5 py-3 font-semibold text-sm bg-gray-200">
            Produk yang digunakan di video
          </div>
          <div className=" text-sm pb-2 justify-start items-center gap-3">
            {videoData.dataProduct.map((product, index) => (
              <div
                key={index}
                className="flex-col w-full items-center justify-center"
              >
                <div className=" flex items-center px-5 py-2 ">
                  <div className="w-2/12 h-full">
                    <img
                      src={convertToViewLink(product.link_image)}
                      alt=""
                      className="w-14 h-14 flex items-center object-contain"
                    />
                  </div>

                  <div className="w-8/12 items-center flex bg-white text-black py-2">
                    <div className="px-2">
                      {/* <div className="">{product.brand_name}</div>
                      <div className="font-bold">{product.product_name}</div> */}
                      {product.brand_name} - {product.product_name}
                    </div>
                  </div>
                  <div className="flex w-3/12 gap-2 justify-end items-center">
                  {product.country !== "-" &&(
                      <div className="items-center flex text-white rounded-full">
                        <Flag
                          className="border-2 rounded-full w-6 h-6 object-cover"
                          code={countryCodes[product.country]}
                        />
                      </div>
                    )}
                    
                    {product.mui && product.bpom_number !== "-" && (
                      <div className=" items-center flex text-white  w-4 h-4">
                        <img src={Halal} className="object-contain" />
                      </div>
                    )}
                    {product.bpom_number && product.bpom_number !== "-" && (
                      <div className="items-center flex text-white  w-6 h-6">
                        <img src={Bpom} className="object-contain" />
                      </div>
                    )}
                    
                     
                  </div>
                </div>
                <hr></hr>
              </div>
            ))}
          </div>

          {/* Recommendation Video */}
          <div className="Video You Tube">
            <div className="flex gap-3 justify-start py-3 px-4">
              <div className="">
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-white"
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
                    d="m17 21-5-4-5 4V3.889a.92.92 0 0 1 .244-.629.808.808 0 0 1 .59-.26h8.333a.81.81 0 0 1 .589.26.92.92 0 0 1 .244.63V21Z"
                  />
                </svg>
              </div>
              <div className="font-semibold">Recommended Video</div>
            </div>
            <div className="flex overflow-x-auto ml-5 gap-5 text-sm scrollbar-hide py-2">
              {VideoRecommendationYoutube.map((recvideo) => (
                <Link
                  to={`/video/videoyoutube/${recvideo.id}`}
                  state={{ videoData: recvideo }}
                  key={recvideo.id}
                  className="relative"
                >
                  {recvideo.source.platform === "youtube" ? (
                    <div className="absolute flex left-0 top-[8.6vw] w-10 h-10 bg-white p-1 rounded-full border-2 border-[#4ABFA1]">
                      <img className="" src={Youtube} alt="YouTube" />
                    </div>
                  ) : (
                    <div className=""></div>
                  )}
                  <div className="w-[20vw] h-[10vw]">
                    {recvideo.link ? (
                      <img
                        src={`https://img.youtube.com/vi/${getYouTubeVideoId(
                          recvideo.link
                        )}/hqdefault.jpg`}
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
                    {recvideo.dataOwner.photoProfile ? (
                      <img
                        src={recvideo.dataOwner.photoProfile}
                        className="h-12 w-12 rounded-full object-cover flex justify-center items-center"
                        alt="Owner Profile"
                      />
                    ) : (
                      <div className="h-12 w-12 rounded-full bg-green-400 "></div>
                    )}
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
        </div>
      </div>
    </>
  );
}

export default VideoYoutubeDetail;
