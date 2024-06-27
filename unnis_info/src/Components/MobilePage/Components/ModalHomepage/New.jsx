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
  const [combinedData, setCombinedData] = useState([]);
  const [totalLoadedItems, setTotalLoadedItems] = useState(0);
  const [isDataEnd, setIsDataEnd] = useState(false);
  const productCategory = useSelector(
    (state) => state.ReducerProductCategory.productCategory
  );

  const loading = useSelector((state) => state.ReducerProductCategory.loading);
  const loadingAllProduct = useSelector(
    (state) => state.ReducerListProduct.loading
  );
  const allProductPage = useSelector(
    (state) => state.ReducerProductWithPagination.dataProductWithPagination
  );
  // console.log("data product page >>> ", allProductPage);

  const keyCategories = productCategory.data
    ? Object.keys(productCategory.data)
    : [];
  const nameCategories = keyCategories.map(
    (str) => str.charAt(0).toUpperCase() + str.slice(1)
  );

  const category = [
    {
      name: nameCategories[0],
      icon: SkinCare,
    },
    {
      name: nameCategories[1],
      icon: Cleansing,
    },
    {
      name: nameCategories[2],
      icon: Mask,
    },
    {
      name: nameCategories[3],
      icon: Suncare,
    },
    {
      name: nameCategories[4],
      icon: Face,
    },
    {
      name: nameCategories[5].replace("eye", "&eye"),
      icon: Lip,
    },
    {
      name: nameCategories[6],
      icon: Body,
    },
    {
      name: nameCategories[7],
      icon: Hair,
    },
  ];

  async function countPage() {
    const newNextPage = nextPage + 1;
    setReload(true);

    const response = await dispatch(
      getAllProduct({ ...requestBody, page: newNextPage })
    );
    if (response) {
      const newPageData = response.dataProduct;
      if (newPageData.length === 0 || newNextPage == null) {
        setIsDataEnd(true);
      } else {
        setCombinedData((prevCombinedData) => [
          ...prevCombinedData,
          ...newPageData,
        ]);
        setTotalLoadedItems((prevTotal) => prevTotal + newPageData.length);
        setNextPage(newNextPage);
      }
    }

    setReload(false);
  }

  useEffect(() => {
    if (allProductPage) {
      setTotalLoadedItems(allProductPage.length);
      setCombinedData(allProductPage);
    }
  }, []);

  const requestBody = {
    idMember: 0,
    limit: 30,
    page: nextPage,
    category: selectedOption == "All" ? "" : clikCategory,
  };

  useEffect(() => {
    dispatch(getProductCategory());
    dispatch(getListProduct());
  }, []);

  useEffect(() => {
    dispatch(getAllProductWithPagination(requestBody));
    setTimeout(() => {
      setReload(false);
    }, 3000);
  }, [selectedOption, clikCategory, nextPage]);

  function sortByLike(val) {
    setLikeCategory(val);
  }

  async function handleCategory(el) {
    if (!el) return "";
    const firstLetter = el.charAt(0).toLowerCase();
    const restOfEl = el.slice(1);
    const lowerLizedEl = firstLetter + restOfEl;
    setClickCategory(lowerLizedEl);
    setNextPage(1);
    setBtnActive(el);
    setSelectedOption(el);
    const response = await dispatch(
      getAllProduct({ ...requestBody, category: lowerLizedEl })
    );
    if (response) {
      const newPageData = response.dataProduct;
      if (newPageData.length === 0 || newPageData == null) {
        setIsDataEnd(true);
      } else {
        setCombinedData(newPageData);
      }
    }
  }
  const modal = productCategory?.data ? Object.keys(productCategory?.data) : [];
  function CategoryProduct() {
    return (
      <>
        {category.map((el) => {
          return (
            <Link
              to={"#"}
              onClick={() => handleCategory(el.name)}
              key={el.name}
              className={
                btnActive == el.name
                  ? "bg-teal-100 rounded-lg py-1 px-2 text-center justify-center items-center gap-4 w-[100%]"
                  : "bg-[#DEE2E6] rounded-lg py-1 px-2 text-center justify-center items-center gap-4 w-[100%] "
              }
              style={{ textAlign: "-webkit-center" }}
            >
              <img src={el.icon} className="w-8 h-8" />
              <div className="text-center ">
                <p>{el.name}</p>
              </div>
            </Link>
          );
        })}
      </>
    );
  }

  function handleShowAll() {
    setSelectedOption("All");
    setBtnActive("");
  }
  const thedata = Array.isArray(combinedData?.dataProduct)
    ? combinedData.dataProduct
    : [];

  function DisplayProduct() {
    return (
      <>
        {thedata?.map((el, index) => {
          const text = el.name;
          const truncatedText =
            text.length > 30 ? `${text.slice(0, 30)}...` : text;
          return (
            <>
              <Link to={`/newProduct/detailproduct/${el.id}`}>
                <div key={el.id} className="flex justify-between items-center">
                  <div className="text-center items-center justify-center w-[10%]">
                    <h1>{index + 1}</h1>
                  </div>
                  <div className="w-[30%]">
                    <img src={el.images[0]} className="w-15 h-15" />
                  </div>
                  <div className="justify-between w-[80%]">
                    <div className="flex items-center text-[#ADB5BD]">
                      <h1 className="text-xs">{el.brand} </h1>
                      <div className="items-center pl-2">
                        <a href="#">
                          <img src={Arrow} className="w-2 h-2" />
                        </a>
                      </div>
                    </div>
                    <div className="py-2">
                      <p className="text-sm">{truncatedText}</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex gap-x-px">
                        <Link to={el.tokopediaLink} target="_Blank">
                          <img
                            src={Tokopedia}
                            className={
                              el.tokopediaLink === ""
                                ? "hidden"
                                : "w-5 h-5 rounded-full"
                            }
                          />
                        </Link>
                        <Link to={el.shopeeLink} target="_Blank">
                          <img
                            src={Shopee}
                            className={
                              el.shopeeLink === ""
                                ? "hidden"
                                : "w-5 h-5 rounded-full"
                            }
                          />
                        </Link>
                        <Link to={el.unnispickLink} target="_Blank">
                          <img
                            src={UnnisIcon}
                            className={
                              el.unnispickLink === ""
                                ? "hidden"
                                : "w-5 h-5 rounded-full"
                            }
                          />
                        </Link>
                        <Link to={el.sociollaLink} target="_Blank">
                          <img
                            src={Sociolla}
                            className={
                              el.sociollaLink === ""
                                ? "hidden"
                                : "w-5 h-5 rounded-full"
                            }
                          />
                        </Link>
                        <Link to={el.iStyleLink} target="_Blank">
                          <img
                            src={Istyle}
                            className={
                              el.iStyleLink === ""
                                ? "hidden"
                                : "w-5 h-5 rounded-full"
                            }
                          />
                        </Link>
                        <Link to={el.oliveYoungLink} target="_Blank">
                          <img
                            src={OliveYoung}
                            className={
                              el.oliveYoungLink === ""
                                ? "hidden"
                                : "w-5 h-5 rounded-full"
                            }
                          />
                        </Link>
                      </div>
                      <div className="flex items-center pl-5">
                        <img src={Star} className="w-5 h-5 rounded-full" />
                        <div className="pl-0.5 flex gap-x-0.5">
                          <h1 className="text-xs">{el.rating} </h1>
                          <p className="text-xs text-gray-500">{`(${el.reviewNum})`}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border mt-2"></div>
              </Link>
            </>
          );
        })}

        {combinedData.length < 30 ||
        combinedData == null ||
        isDataEnd == true ? (
          <></>
        ) : reload ? (
          <div className="flex justify-center items-center">
            <CircleLoader color="#0000ff" size={30} />
          </div>
        ) : (
          <div
            className="justify-center items-center text-center"
            onClick={countPage}
          >
            <button>Load More</button>
          </div>
        )}
        <div className="pb-36"></div>
      </>
    );
  }

  const handleOptionChange = async (event) => {
    const el = event.target.value;
    if (!el) return "";
    const firstLetter = el.charAt(0).toLowerCase();
    const restOfEl = el.slice(1);
    const lowerLizedEl = firstLetter + restOfEl;
    setClickCategory(lowerLizedEl);
    setSelectedOption(el);
    setShowModal(false);
    setBtnActive(el);
    setNextPage(1);
    const response = await dispatch(
      getAllProduct({ ...requestBody, category: lowerLizedEl })
    );
    if (response) {
      const newPageData = response.dataProduct;
      if (newPageData.length === 0 || newPageData == null) {
        setIsDataEnd(true);
      } else {
        setCombinedData(newPageData);
      }
    }
  };

  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  function Category() {
    return (
      <>
        {category.map((el) => {
          return (
            <div className="mb-5" key={el.name}>
              <label>
                <input
                  type="radio"
                  value={el.name}
                  checked={selectedOption === el.name}
                  onChange={handleOptionChange}
                  className="mr-4"
                />
                {el.name}
              </label>
            </div>
          );
        })}
      </>
    );
  }

  function ModalCategory() {
    return (
      <>
        <button
          className="border rounded-lg p-1 flex text-center items-center gap-x-1"
          onClick={handleModalOpen}
        >
          <h1>{selectedOption}</h1>
          <img src={ArrowBot} className="h-3 w-3" />
        </button>

        {showModal && (
          <div className="fixed lg:left-[55%] inset-0 flex items-center justify-center bg-black opacity-90 lg:w-[30%] w-[100vw] shadow-lg shadow-indigo-500/50">
            <div className="z-100 bg-white rounded-lg p-3 w-screen top-[45%] lg:w-[100%]  relative">
              <div className="z-100 bg-white max-h-[50%] h-[60vh]">
                <div className="flex justify-between items-center mb-2 bg-white">
                  <h2 className="text-xl font-bold pl-3">Category Product</h2>
                  <button
                    onClick={handleModalClose}
                    className="text-gray-600 hover:text-gray-800 pr-3"
                  >
                    <img src={Close} className="w-4 h-4" />
                  </button>
                </div>
                <div className="border mb-4"></div>
                <div className="modal-content flex overflow-y-auto max-h-[inherit]">
                  <div className="pl-3 h-full">
                    <Category />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }

  return (
    <>
      <div className="relative scrollbar-hide">
        <div className="sticky top-0 w-full bg-white px-5 z-0">
          <div className="text-[rgb(52,58,64)] bg-white pb-3 z-20 ">
            <div className="flex justify-between sticky ">
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
              {loading ? (
                <RingLoader color="#0000ff" size={30} />
              ) : (
                <div className="flex px-2 shadow overflow-x-auto py-3 gap-3 max-w-screen scrollbar-hide">
                  <CategoryProduct />
                </div>
              )}
            </div>
            <div className="flex justify-between pt-5 px-2">
              <div className="flex">
                {selectedOption !== "All" ? (
                  <button
                    type="button"
                    className="border rounded-lg p-1 flex text-center items-center gap-x-1 mr-1"
                    onClick={handleShowAll}
                  >
                    <img src={Close} className="w-4 h-4" />
                  </button>
                ) : (
                  ""
                )}
                <ModalCategory />
              </div>
              <ModalSort sortByLike={sortByLike} />
            </div>
          </div>
          <div className="overflow-y-auto max-h-[calc(100vh-100px)] scrollbar-hide">
            {loadingAllProduct ? (
              <div className="flex justify-center items-center h-screen">
                <CircleLoader color="#0000ff" size={30} />{" "}
              </div>
            ) : (
              <>
                <DisplayProduct />
              </>
            )}
          </div>
        </div>{" "}
        <div className="bg-slate-50 pt-2.5 pb-1 px-1.5 sticky bottom-0 z-20">
          <NavigationButtom />
        </div>
      </div>
    </>
  );
}

export default NewPage;
