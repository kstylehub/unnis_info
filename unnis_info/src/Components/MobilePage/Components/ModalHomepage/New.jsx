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
  getListProduct,
  getProductCategory,
} from "../../../../Store/Actions/Actions";
import {
  BarLoader,
  CircleLoader,
  DotLoader,
  PacmanLoader,
  PuffLoader,
  RingLoader,
} from "react-spinners";
import { Link } from "react-router-dom";
import ModalCategory from "../ModalCategory/ModalCategory";
import ModalSort from "../ModalCategory/ModalSort";
import Close from "../../../../assets/Close.svg";

function NewPage() {
  const productCategory = useSelector(
    (state) => state.ReducerProductCategory.productCategory
  );
  const listProduct = useSelector(
    (state) => state.ReducerListProduct?.listProduct
  );

  const loading = useSelector((state) => state.ReducerProductCategory.loading);
  const loadingAllProduct = useSelector(
    (state) => state.ReducerListProduct.loading
  );

  const keyCategories = productCategory.data
    ? Object.keys(productCategory.data)
    : [];
  const nameCategories = keyCategories.map(
    (str) => str.charAt(0).toUpperCase() + str.slice(1)
  );
  const [valCategory, setValCategory] = useState("");
  const [likeCategory, setLikeCategory] = useState("");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductCategory());
    dispatch(getListProduct());
  }, []);

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
      name: nameCategories[5],
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

  const allProduct = listProduct.dataProduct;

  const [byCategory, setByCategory] = useState("");
  const [clikCategory, setClickCategory] = useState("");
  useEffect(() => {
    tesSort(allProduct);
  }, [clikCategory]);

  function tesSort(product) {
    const byCategory = product.filter((el) => {
      return el.categories == clikCategory;
    });
    setByCategory(byCategory)
  }

  function sortByCategory(val) {
    setValCategory(val);
  }

  function sortByLike(val) {
    setLikeCategory(val);
  }

  function handleCategory(el) {
    if (!el) return "";
    const firstLetter = el.charAt(0).toLowerCase();
    const restOfEl = el.slice(1);
    const capitalizedEl = firstLetter + restOfEl;
    setClickCategory(capitalizedEl);
  }
  // console.log(byCategory, "<<<");
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
              className="bg-[#DEE2E6] rounded-lg py-1 px-2 text-center justify-center items-center gap-4 w-[100%]"
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
    setByCategory(allProduct); // Setel byCategory kembali ke semua produk
    setValCategory("All"); // Setel valCategory ke "All"
    setLikeCategory("Sort By"); // Setel likeCategory ke "Sort By"
  }

  console.log(loadingAllProduct);
  function DisplayProduct() {
    const dataCategory = allProduct ? allProduct : byCategory
    console.log(dataCategory," <<<data category");
    console.log(byCategory, "????");
    return (
      <>
        {dataCategory?.map((el, index) => {
          const text = el.name;
          const truncatedText =
            text.length > 30 ? `${text.slice(0, 30)}...` : text;
          return (
            <>
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
            </>
          );
        })}
      </>
    );
  }

  
  return (
    <>
      <div className="absolute top-0 w-full bg-white px-5">
        <div className="text-[#343A40] bg-white pb-3 z-20 ">
          <div className="flex justify-between sticky ">
            <div className="self-center">
              <Link to={"/"}>
                <img src={back} className="w-full" />
              </Link>
            </div>
            <div className="self-center">
              <img src={Logo} className="w-full" />
            </div>
            <div className="self-center">
              <img src={search} className="w-full" />
            </div>
          </div>
          <div className="flex justify-center">
            {loading ? (
              <RingLoader color="#0000ff" size={30} />
            ) : (
              <div className="flex px-2 shadow overflow-x-auto py-3 gap-3 max-w-screen">
                <CategoryProduct />
              </div>
            )}
          </div>
          <div className="flex justify-between pt-5 px-2">
            <div className="flex">
              {valCategory !== "All" || likeCategory !== "Sort By" ? (
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
              <ModalCategory sortByCategory={sortByCategory} />
            </div>
            <ModalSort sortByLike={sortByLike} />
          </div>
        </div>
        <div className="overflow-y-auto max-h-[calc(100vh-100px)]">
          {loadingAllProduct ? (
            <div className="flex justify-center items-center h-screen">
              <CircleLoader color="#0000ff" size={30} />{" "}
            </div>
          ) : (
            <DisplayProduct />
          )}
        </div>
      </div>
    </>
  );
}

export default NewPage;
