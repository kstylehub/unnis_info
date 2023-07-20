import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getListProduct,
  getProductCategory,
} from "../../../Store/Actions/Actions";
import UnnisIcon from "../../../assets/UnnisPickIcon.svg";
import Tokopedia from "../../../assets/tokopedia.svg";
import Shopee from "../../../assets/shopee.svg";
import Istyle from "../../../assets/istyle.svg";
import OliveYoung from "../../../assets/OliveYoung.svg";
import Sociolla from "../../../assets/Sociolla.svg";
import Star from "../../../assets/Star.svg";
import Arrow from "../../../assets/Polygon3.svg";
import { Link } from "react-router-dom";
import { CircleLoader } from "react-spinners";

export default function NavbarCategoryHome() {
  const productCategories = useSelector(
    (state) => state.ReducerProductCategory.productCategory
  );
  const listProduct = useSelector(
    (state) => state.ReducerListProduct?.listProduct
  );
  const loadingAllProduct = useSelector(
    (state) => state.ReducerListProduct.loading
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductCategory());
    dispatch(getListProduct());
  }, []);
  const keyCategories = productCategories.data
    ? Object.keys(productCategories.data)
    : [];
  const nameCategories = keyCategories.map(
    (str) => str.charAt(0).toUpperCase() + str.slice(1)
  );

  const allProduct = listProduct.dataProduct;

  function Categories() {
    return (
      <>
        {nameCategories.map((el) => {
          return (
            <div key={el}>
              <h1>{el}</h1>
            </div>
          );
        })}
      </>
    );
  }

  function BoxProduct() {
    const truncatedData = allProduct?.slice(0, 3);
    return (
      <>
        {truncatedData?.map((el, index) => {
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
            </>
          );
        })}
      </>
    );
  }

  return (
    <>
      <div className="flex overflow-x-auto gap-5 px-8 pt-5 text-xs font-bold">
        <Categories />
      </div>
      <div className="border rounded-lg px-5 pt-5 mx-5 mt-5 shadow-lg">
        {loadingAllProduct ? (
          <div className="flex justify-center items-center">
            <CircleLoader color="#0000ff" size={30} />{" "}
          </div>
        ) : (
          <BoxProduct />
        )}
        <div className="border mt-2"></div>
        <div className="text-center m-3 text-sm">
          <h1>View All</h1>
        </div>
      </div>
    </>
  );
}
