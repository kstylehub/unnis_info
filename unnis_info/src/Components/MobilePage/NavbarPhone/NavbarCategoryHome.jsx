import { useEffect, useState } from "react";
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
import { CircleLoader, GridLoader, RingLoader } from "react-spinners";

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

  const allProduct = listProduct.dataProduct;
  const [product, setProduct] = useState()
  const [colorText, setColorText] = useState()

  function handleCategory(el) {
    const sortCategory = allProduct.filter((el1) => el1.categories === el);
    setProduct(sortCategory);
    setColorText(el)
  }
  function Categories() {
    return (
      <>
        {keyCategories.map((el) => {
          const nameCategories = el.charAt(0).toUpperCase() + el.slice(1)
          return (
            <button onClick={()=>handleCategory(el)} key={el}>
              <h1 className={el === colorText ? "text-black" : "text-slate-500"}>{nameCategories}</h1>
            </button>
          );
        })}
      </>
    );
  }

  function BoxProduct() {
    let truncatedData
    if(product) {
      truncatedData = product?.slice(0, 3);
    }else {
      truncatedData = allProduct?.slice(0, 3)
    }
    if(truncatedData?.length === 0){
      return (
        <>
          <div className="text-center">
            <h1>Data Not Found</h1>
          </div>
        </>
      )
    }
    else {
      return (
        <>
          {truncatedData?.map((el, index) => {
            const text = el.name;
            const truncatedText =
              text.length > 30 ? `${text.slice(0, 30)}...` : text;
            return (
              <>
                <div key={el.description} className="flex justify-between items-center">
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
                    <div className="pt-2">
                      <p className="text-sm">{truncatedText}</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex gap-x-px">
                        <p className="text-xs ">{el.volume} /Rp {el.price}</p>
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
  }

  return (
    <>
      <div className="flex overflow-x-auto gap-5 px-8 pt-5 text-xs font-bold">
        <Categories />
      </div>
      <div className="border rounded-lg px-5 pt-5 mx-5 mt-5 shadow-lg">
        {loadingAllProduct ? (
          <div className="flex justify-center items-center">
            <RingLoader color="#0000ff" size={30} />{" "}
          </div>
        ) : (
          <BoxProduct />
        )}
        <div className="border mt-2"></div>
        <Link to={"/newProduct"} className="text-center m-3 text-sm">
          <h1>View All</h1>
        </Link>
      </div>
    </>
  );
}
