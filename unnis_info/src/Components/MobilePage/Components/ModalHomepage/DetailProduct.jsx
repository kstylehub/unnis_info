import back from "../../../../assets/previous.svg";
import logo from "../../../../assets/logo.png";
import Star from "../../../../assets/Star.svg";
import Arrow from "../../../../assets/Polygon3.svg";
import UnnisIcon from "../../../../assets/UnnisPickIcon.svg";
import Tokopedia from "../../../../assets/tokopedia.svg";
import Shopee from "../../../../assets/shopee.svg";
import { getListProduct } from "../../../../Store/Actions/Actions";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

function detailProduct() {
  const listProduct = useSelector(
    (state) => state.ReducerListProduct?.listProduct
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getListProduct());
  }, []);

  const dataProduct = listProduct?.dataProduct[0];
  console.log(dataProduct);

  return (
    <>
      <div className="w-full h-full overflow-y-auto">
        <div className="top-0 sticky lg:px-8 px-4 w-full bg-white pt-2 border-b border-gray-400">
          <div className="flex justify-between">
            <div className="self-center">
              <Link to={"/newProduct"}>
                <img src={back} className="w-full" />
              </Link>
            </div>
            <div className="self-center flex justify-center">
              <img src={logo} className="w-4/12" />
            </div>
            <div className="self-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="lg:px-8 px-4 border-b-4 border-gray-200 pb-3">
          <div className="h-full flex justify-center items-start">
            <img
              className="w-10 h-10 mt-[20%]"
              src={dataProduct.dataCountry.flag}
            ></img>
            <img src={dataProduct.images} className="w-8/12" />
            <div className="text-center flex flex-col justify-start pt-[5%]">
              <h5 className="font-bold text-[#4ABFA1]">Disukai</h5>
              <h6 className="">{dataProduct.likeNum}</h6>
            </div>
          </div>
          <div className="py-2">
            <h1 className="font-bold text-2xl">Rp {dataProduct.price}</h1>
            <p className="text-gray-400 uppercase pt-3">{dataProduct.brand}</p>
            <p className="font-bold">{dataProduct.name}</p>
            <p className="text-red-500 text-sm">
              {dataProduct.stock === 0
                ? "Produk tidak tersedia. Stock habis"
                : ` `}
            </p>
            <div className="flex justify-start py-4 gap-4">
              <p className="pt-0.5 pb-1 px-2  border border-gray-400 text-gray-400 rounded-full text-sm">
                #{dataProduct.keyword[0]}
              </p>
              <p className="pt-0.5 pb-1 px-2  border border-gray-400 text-gray-400 rounded-full text-sm">
                #{dataProduct.keyword[1]}
              </p>
              <p className="pt-0.5 pb-1 px-2  border border-gray-400 text-gray-400 rounded-full text-sm">
                #{dataProduct.keyword[2]}
              </p>
            </div>
            <p className="text-xs text-gray-400 pb-2">You can buy this at</p>
            <div className="flex gap-2">
              <Link to={dataProduct.unnispickLink} target="_Blank">
                <img
                  src={UnnisIcon}
                  className={
                    dataProduct.unnispickLink === ""
                      ? "hidden"
                      : "w-8 h-8 rounded-full"
                  }
                />
              </Link>

              <Link to={dataProduct.shopeeLink} target="_Blank">
                <img
                  src={Shopee}
                  className={
                    dataProduct.shopeeLink === ""
                      ? "hidden"
                      : "w-8 h-8 rounded-full"
                  }
                />
              </Link>
              <Link to={dataProduct.tokopediaLink} target="_Blank">
                <img
                  src={Tokopedia}
                  className={
                    dataProduct.tokopediaLink === ""
                      ? "hidden"
                      : "w-8 h-8 rounded-full"
                  }
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="lg:px-8 px-4 border-b">
          <div className="flex w-full py-5 ">
            <div className="w-1/12 ">
              <img
                className="h-5 w-5"
                src="https://img.icons8.com/windows/32/water.png"
                alt="water"
              />
            </div>
            <div className="w-11/12 text-sm flex flex-col justify-between">
              <div className="flex justify-between">
                <div className="font-bold flex">INGREDIENTS</div>
                <div className="text-gray-400">View All</div>
              </div>
              <p className="pt-2">Lorem ipsum</p>
            </div>
          </div>
        </div>
        <div className="lg:px-8 px-4 border-b-4 border-gray-200">
          <div className="flex w-full py-5 ">
            <div className="w-1/12 ">
              <img
              className="h-5 w-5"
                src="https://img.icons8.com/windows/32/new-document.png"
                alt="new-document"
              />
            </div>
            <div className="w-11/12 text-sm flex flex-col justify-between">
              <div className="flex justify-between">
                <div className="font-bold flex">DESCRIPTION</div>
                <div className="text-gray-400">View All</div>
              </div>
              <p className="pt-2">Lorem ipsum</p>
            </div>
          </div>
        </div>
        <div className="lg:px-8 px-4 border-b">
          <div className="flex w-full py-5 ">
            <div className="font-bold flex">REVIEW</div>
            <p className="mx-2 text-red-500 font-bold">{dataProduct.reviewNum}</p>
          </div>
          <div className="flex justify-center">

          </div>
        </div>
      </div>
    </>
  );
}

export default detailProduct;
