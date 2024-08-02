import back from "../../../../assets/previous.svg";
import Logo from "../../../../assets/LG_unnis_green.svg";
import search from "../../../../assets/search.svg";
import SkinCare from "../../../../assets/Skincare.png";
import Suncare from "../../../../assets/Suncare.png";
import Body from "../../../../assets/Body.png";
import Cleansing from "../../../../assets/Cleansing.png";
import Face from "../../../../assets/Face.png";
import Hair from "../../../../assets/Hair.png";
import Lip from "../../../../assets/Lip&Eye.png";
import Mask from "../../../../assets/Mask.png";
import UnnisIcon from "../../../../assets/UnnisPickIcon.svg";
import Tokopedia from "../../../../assets/tokopedia.svg";
import Shopee from "../../../../assets/shopee.svg";
import Istyle from "../../../../assets/istyle.svg";
import OliveYoung from "../../../../assets/OliveYoung.svg";
import Sociolla from "../../../../assets/Sociolla.svg";
import Star from "../../../../assets/Star.svg";
import Arrow from "../../../../assets/Polygon3.svg";
import ArrowBot from "../../../../assets/Polygon10.svg";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  getAllProduct,
  getListProduct,
  getProductCategory,
  getAllProductWithPagination,
} from "../../../../Store/Actions/Actions";
import { CircleLoader, RingLoader } from "react-spinners";
import { Link } from "react-router-dom";
// import ModalCategory from "../ModalCategory/ModalCategory";
import ModalSort from "../ModalCategory/ModalSort";
import Close from "../../../../assets/Close.svg";
import NavbarPhone from "../../NavbarPhone/NavbarPhone";
import NavigationButtom from "../../NavigatonBottom/NavigationBottom";
import Recomended from "../../../../assets/Homepage/recomended.svg";
import imgClose from "../../../../assets/Close.svg";

function NewPage() {
  const dispatch = useDispatch();
  const [nextPage, setNextPage] = useState(1);
  const [valCategory, setValCategory] = useState("");
  const [likeCategory, setLikeCategory] = useState("");
  const [btnActive, setBtnActive] = useState("");
  const [clikCategory, setClickCategory] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedOption, setSelectedOption] = useState("All");
  const [reload, setReload] = useState(false);
  const [totalLoadedItems, setTotalLoadedItems] = useState(0);
  const [isDataEnd, setIsDataEnd] = useState(false);
  const [clickedButton, setClickedButton] = useState("all");
  const  [hiddenButton, setHiddenButton] = useState(false)
  const [filter, setFilter] = useState({
    idMember: 0,
    limit: 10,
    page: 1,
    filter: "",
    category: "",
  })

  const loading = useSelector((state) => state.ReducerProductCategory.loading);
  const allProductPage = useSelector((state) => state.ReducerProductWithPagination.dataProductWithPagination);
  const loadingProduct = useSelector((state) => state.ReducerProductWithPagination.loading);

  const [dataProduct, setDataProduct] = useState(allProductPage.dataProduct || [])
  const [combinedData, setCombinedData] = useState([]);

  
  const getButtonStyle = (button) => {
    if (clickedButton === button) {
      return {
        color: "black",
        border: "1px solid black",
      };
    } else {
      return {
        color: "gray",
      };
    }
  };

  useEffect(() => {
    dispatch(getAllProductWithPagination(filter));
  }, [dispatch, filter]);

  // useEffect(() => {
  //   if (allProductPage) {
  //     // setTotalLoadedItems(allProductxPage.length);
  //     setCombinedData(allProductPage);
  //   }
  // }, []);

  useEffect(() => {
    if (allProductPage?.dataProduct?.length > 0) {
      setCombinedData((prevCombinedData) => [
        ...prevCombinedData,
        ...allProductPage.dataProduct,
      ]);
      setNextPage(filter.page + 1);
    } else {
      setIsDataEnd(true);
    }
  }, [allProductPage]);

  

  const category = [
    {
      name: "Skincare",
      icon: SkinCare,
    },
    {
      name: "Cleansing",
      icon: Cleansing,
    },
    {
      name: "Mask",
      icon: Mask,
    },
    {
      name: "Suncare",
      icon: Suncare,
    },
    {
      name: "Face",
      icon: Face,
    },
    {
      name: "Lip&Eye",
      icon: Lip,
    },
    {
      name: "Body",
      icon: Body,
    },
    {
      name: "Hair",
      icon: Hair,
    },
  ];

  async function loadMoreData() {
    if (isDataEnd || loadingProduct) return;
    setFilter((prevState) => ({
      ...prevState,
      page: nextPage,
    }));
  }

  async function handleCategory(el) {
    if (!el) return "";
    setClickCategory(el);
    setHiddenButton(true);
    setBtnActive(el);
    setNextPage(1);
    setIsDataEnd(false);
    setFilter((prevState) => ({
      ...prevState,
      category: el,
      page: 1,
    }));
    setCombinedData([]);
  }


  const handleClick = (button) => {
    setClickedButton(button);
    setHiddenButton(true);
    setFilter((prevState) => ({
      ...prevState,
      filter: button,
      page: 1,
    }));
    setCombinedData([]);
  };

  
  async function closeFilter() {
    setHiddenButton(false);
    setClickedButton("all");
    setBtnActive("");
    setFilter((prevState) => ({
      ...prevState,
      category: "",
      filter: "",
      page: 1,
    }));
    setCombinedData([]);
  }

  function CategoryProduct() {
    return (
      <>
        {category.map((el, index) => {
          return (
            <button
              onClick={() => handleCategory(el.name)}
              key={index}
              className={
                btnActive == el.name
                  ? "bg-teal-100 min-w-[5.5vw] rounded-lg py-1 px-2 text-center justify-center items-center gap-4 w-[100%]"
                  : "bg-[#DEE2E6] min-w-[5.5vw] rounded-lg py-1 px-2 text-center justify-center items-center gap-4 w-[100%] "
              }
              style={{ textAlign: "-webkit-center" }}
            >
              <img src={el.icon} className="w-8 h-8" />
              <div className="text-center ">
                <p>{el.name}</p>
              </div>
            </button>
          );
        })}
      </>
    );
  }

  function handleShowAll() {
    setSelectedOption("All");
    setBtnActive("");
  }

  function DisplayProduct() {
    return (
      <>
        <div className="flex flex-wrap">
          {combinedData?.map((el, index) => {
            const text = el.name;
            const truncatedText =
              text.length > 30 ? `${text.slice(0, 30)}...` : text;
            return (
              <div key={index} className=" w-1/2 flex justify-center ">
                <div className="relative border w-[95%] min-h-[15vw] p-3 flex-shrink-0 mb-2 bg-white">
                  <Link to={`/newProduct/detailproduct/${el.id}`}>
                    {el.statusRecommend && (
                      <div className="absolute top-0 left-3 text-white py-3 w-[45%]">
                        <img
                          src={Recomended}
                          className="object-contain"
                          style={{ width: "100%", height: "100%" }}
                        />
                      </div>
                    )}
                    {el.bpom && (
                      <div className="absolute top-0 right-3 text-white py-3 w-[15%]">
                        <img
                          src={el.bpom}
                          className="object-contain"
                          style={{ width: "100%", height: "100%" }}
                        />
                      </div>
                    )}
                    {el.mui && (
                      <div className="absolute top-0 right-6 text-white py-3 w-[15%]">
                        <img
                          src={el.mui}
                          className="object-contain"
                          style={{ width: "100%", height: "100%" }}
                        />
                      </div>
                    )}
                    <div className="flex flex-col pt-4">
                      <div className="flex justify-center items-center p-1">
                        <div style={{ width: "150px", height: "150px" }}>
                          {el.images ? (
                            <img
                              src={el.images}
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
                      <div className=""></div>
                      <div
                        className="w-full pt-2"
                        style={{
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                          lineHeight: "1.2",
                        }}
                      >
                        {el.brand} - {el.name}
                      </div>
                      <div className="text-left font-bold text-lg">
                        Rp
                        {el.price
                          .toLocaleString("id-ID", {
                            minimumFractionDigits: 0,
                            maximumFractionDigits: 0,
                          })
                          .replace(",", ".")}
                      </div>
                      <div className="flex justify-between pt-1">
                        <div className="truncate text-center w-full flex justify-left items-center">
                          <div className="pe-1">
                            <svg
                              className="w-3.5 h-3.5 text-yellow-400 dark:text-white"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                            </svg>
                          </div>
                          <div className="">{el.rating}</div>
                          <div className="pl-1 text-gray-400 text-sm pt-1">
                            ({el.stock})
                          </div>
                        </div>
                        <div className="flex justify-end">
                          {[
                            {
                              href: el.unnispickLink,
                              text: "Unnispick",
                              icon: "https://s3.ap-northeast-2.amazonaws.com/admin.unnispick.com/link_1.png",
                            },
                            {
                              href: el.shopeeLink,
                              text: "Shopee",
                              icon: "https://s3.ap-northeast-2.amazonaws.com/admin.unnispick.com/link_2.png",
                            },
                            {
                              href: el.tokopediaLink,
                              text: "Tokopedia",
                              icon: "https://s3.ap-northeast-2.amazonaws.com/admin.unnispick.com/link_3.png",
                            },
                            {
                              href: el.iStyleLink,
                              text: "iStyle",
                              icon: "https://s3.ap-northeast-2.amazonaws.com/admin.unnispick.com/link_4.png",
                            },
                            {
                              href: el.sociollaLink,
                              text: "Sociolla",
                              icon: "https://s3.ap-northeast-2.amazonaws.com/admin.unnispick.com/link_6.png",
                            },
                            {
                              href: el.styleKoreanLink,
                              text: "Style Korean",
                              icon: "https://s3.ap-northeast-2.amazonaws.com/admin.unnispick.com/link_7.png",
                            },
                            {
                              href: el.oliveYoungLink,
                              text: "Olive Young",
                              icon: "https://s3.ap-northeast-2.amazonaws.com/admin.unnispick.com/link_5.png",
                            },
                            {
                              href: el.kalCareLink,
                              text: "Kal Care",
                              icon: "https://s3.ap-northeast-2.amazonaws.com/admin.unnispick.com/link_8.png",
                            },
                          ]
                            .filter((link) => link.href)
                            .slice(0, 3)
                            .map((link, idx) => (
                              <a
                                key={idx}
                                href={link.href}
                                className="rounded-full w-6 h-6 ml-1 flex items-center justify-center"
                              >
                                <img
                                  src={link.icon}
                                  alt={link.text}
                                  className="bg-cover w-full h-full rounded-full"
                                />
                              </a>
                            ))}
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {!isDataEnd && (
        <div className="justify-center items-center text-center" onClick={loadMoreData}>
          {loadingProduct ? (
            <div className="flex justify-center items-center">
              <CircleLoader color="#0000ff" size={30} />
            </div>
          ) : (
            <button>Load More</button>
          )}
        </div>
      )}
      <div className="pb-36"></div>
      </>
    );
  }
  

  return (
    <>
      <div className="relative scrollbar-hide">
        <div className="sticky top-0 w-full bg-white px-5 z-0">
          <div className="text-[rgb(52,58,64)] bg-white pb-3 z-20 sticky top-0">
            <div className="flex justify-between">
              <div className="self-center">
                <Link to={"/"}>
                  <img src={back} className="w-full" />
                </Link>
              </div>
              <div className="self-center">
                <img src={Logo} className="w-full" />
              </div>
              <Link to={"/search"} className="self-center">
                <img src={search} className="w-full" />
              </Link>
            </div>
            <div className="flex justify-center">
                <div className="flex px-2 overflow-x-auto py-3 gap-3 max-w-screen scrollbar-hide">
                  <CategoryProduct />
                </div>
            </div>
            <div className="border border flex my-2"></div>
            <div className="flex justify-between pt-5 px-2">
            <div className="flex overflow-x-auto ml-5 gap-3 text-sm scrollbar-hide py-2 text-center">
              <button
                onClick={closeFilter}
                className={`${hiddenButton == false ?  "hidden" : "min-w-[2vw] items-center border-gray-400 border rounded-full"}`} style={{textAlign: "-webkit-center"}}
                type="button"
              >
                <img src={imgClose} className="w-4 h-4" />
              </button>
              <button
                className=" min-w-[4vw] items-center border-gray-400 border py-1 px-2 rounded-full"
                onClick={() => handleClick("Newest")}
                style={getButtonStyle("Newest")}
              >
                 Newest
              </button>
              <button
                className="min-w-[5vw] items-center border-gray-400 border py-1 px-2 rounded-full"
                onClick={() => handleClick("Top Likes")}
                style={getButtonStyle("Top Likes")}
              >
                Top Likes
              </button>
              <button
                className=" min-w-[6vw] items-center border-gray-400 border py-1 px-2 rounded-full"
                onClick={() => handleClick("Top Review")}
                style={getButtonStyle("Top Review")}
              >
                Top Review
              </button>
              <button
                className="min-w-[5vw] items-center border-gray-400 border py-1 px-2 rounded-full"
                onClick={() => handleClick("Stock")}
                style={getButtonStyle("Stock")}
              >
                Stock
              </button>
            </div>
            </div>
          </div>
          <div className="overflow-y-auto max-h-[calc(100vh-100px)] mb-[50px]">
            {loadingProduct ? (
              <div className="flex justify-center items-center h-screen">
                <CircleLoader color="#0000ff" size={30} />
              </div>
            ) : (
              <>
                <DisplayProduct />
              </>
            )}
          </div>
        </div>
        <div className="bg-white pt-2.5 pb-1 px-1.5 sticky bottom-0 z-20">
          <NavigationButtom />
        </div>
      </div>
    </>
  );
}

export default NewPage;
