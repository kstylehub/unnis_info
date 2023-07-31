import back from "../../../../assets/previous.svg";
import logo from "../../../../assets/logo.png";
import Star from "../../../../assets/Star.svg";
import Arrow from "../../../../assets/Polygon3.svg";
import UnnisIcon from "../../../../assets/UnnisPickIcon.svg";
import Tokopedia from "../../../../assets/tokopedia.svg";
import Shopee from "../../../../assets/shopee.svg";
import { getListProduct } from "../../../../Store/Actions/Actions";
import { getDataProduct } from "../../../../Store/Actions/Actions";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import profile from "../../../../assets/MyPage/profile.png";

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

  // const product = useSelector((state) => state.ReducerDataProduct);
  // const dispatch = useDispatch();

  // console.log(product.data);
  // useEffect(() => {
  //   dispatch(getDataProduct());
  // }, [dispatch]);

  // const dataProduct = product?.dataProduct; // Correctly access the dataProduct property

  // console.log(dataProduct);

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
            <div className="pt-3 flex justify-start items-center">
              <p className="text-gray-400 uppercase mr-3 ">
                {dataProduct.brand}
              </p>
              <svg
                className="w-3 h-3 text-gray-400 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 8 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
                />
              </svg>
            </div>
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
            <p className="text-xs text-gray-400 pb-3">You can buy this at</p>
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
                <div className="flex justify-center items-center">
                  <div className="text-gray-400 mr-3">View All</div>
                  <svg
                    className="w-3 h-3 text-gray-400 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 8 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
                    />
                  </svg>
                </div>
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
                <div className="flex justify-center items-center">
                  <div className="text-gray-400 mr-3">View All</div>
                  <svg
                    className="w-3 h-3 text-gray-400 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 8 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
                    />
                  </svg>
                </div>
              </div>
              <p className="pt-2">Lorem ipsum</p>
            </div>
          </div>
        </div>
        <div className="lg:px-8 px-4 py-6 marker:border-b">
          <div className="flex w-full pb-5 ">
            <div className="font-bold flex">REVIEW</div>
            <p className="mx-2 text-red-500 font-bold">
              {dataProduct.reviewNum}
            </p>
          </div>
          <div className="flex justify-center w-full">
            <div className="w-5/12 flex flex-col justify-center items-center">
              <p className="text-center font-bold uppercase">Nilai</p>
              <p className="text-4xl text-center font-bold">
                {dataProduct.rating}
              </p>
              <div className="flex justify-evenly py-2">
                <img
                  className="w-5 h-5 mx-0.5"
                  src="https://img.icons8.com/material-rounded/24/star--v1.png"
                  alt="star--v1"
                />
                <img
                  className="w-5 h-5 mx-0.5"
                  src="https://img.icons8.com/material-rounded/24/star--v1.png"
                  alt="star--v1"
                />
                <img
                  className="w-5 h-5 mx-0.5"
                  src="https://img.icons8.com/material-rounded/24/star--v1.png"
                  alt="star--v1"
                />
                <img
                  className="w-5 h-5 mx-0.5"
                  src="https://img.icons8.com/material-rounded/24/star--v1.png"
                  alt="star--v1"
                />
                <img
                  className="w-5 h-5 mx-0.5"
                  src="https://img.icons8.com/material-rounded/24/star--v1.png"
                  alt="star--v1"
                />
              </div>
            </div>
            <div className="flex flex-col w-7/12 px-5">
              <div className="flex justify-evenly items-center">
                <img
                  className="w-4 h-4 mx-1"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABNUlEQVR4nOWSvUoDQRCAP0UfwEIJ+ARiLwq+Qgq7pBf8AbHVQhFBU1vZi9YW+ha5Wmw1MxdFTSdEUE8WduE0p+4kl0JcGFjYme9jZhb+1RE4FDgYFnxBIXPRgvlhCM6CQOC0VHgbphS6QaDwcg+V0gQCuzl46GKnFHgGYwryVaCQJjAeDbqFaYW6wobCvsKxwLlAUgAPXSQux+X6Gldbd6wegcL1dyA1hsBVj0CgUaKgUTgmhU2BtwHA7wp7P+5CYUnguQ9BV6AWu/A5gTsD/FFhMQqe20nVMJqqCe5HtW3oYKsfwaVBcGGCZzCi8GQQdDIYjRa0YbZgzg8Kyy78/dO7q4kWCKzm/7bASQqT4f0GJgSOBF5DXgtWLIJ1D2+6L/vLd2763LVogZtnCjMxc7Xk/s3zAWvuhhjTjKx9AAAAAElFTkSuQmCC"
                />
                <p className="mx-1 text-sm">5</p>
                <div className="mx-1 w-full h-2 bg-gray-200 rounded-full dark:bg-gray-700">
                  <div className="bg-red-600 h-2 rounded-full dark:bg-red-500 w-[45%]"></div>
                </div>
                <p className="mx-1 text-sm">27</p>
              </div>
              <div className="flex justify-evenly items-center">
                <img
                  className="w-4 h-4 mx-1"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABNUlEQVR4nOWSvUoDQRCAP0UfwEIJ+ARiLwq+Qgq7pBf8AbHVQhFBU1vZi9YW+ha5Wmw1MxdFTSdEUE8WduE0p+4kl0JcGFjYme9jZhb+1RE4FDgYFnxBIXPRgvlhCM6CQOC0VHgbphS6QaDwcg+V0gQCuzl46GKnFHgGYwryVaCQJjAeDbqFaYW6wobCvsKxwLlAUgAPXSQux+X6Gldbd6wegcL1dyA1hsBVj0CgUaKgUTgmhU2BtwHA7wp7P+5CYUnguQ9BV6AWu/A5gTsD/FFhMQqe20nVMJqqCe5HtW3oYKsfwaVBcGGCZzCi8GQQdDIYjRa0YbZgzg8Kyy78/dO7q4kWCKzm/7bASQqT4f0GJgSOBF5DXgtWLIJ1D2+6L/vLd2763LVogZtnCjMxc7Xk/s3zAWvuhhjTjKx9AAAAAElFTkSuQmCC"
                />
                <p className="mx-1 text-sm">4</p>
                <div className="mx-1 w-full h-2 bg-gray-200 rounded-full dark:bg-gray-700">
                  <div className="bg-red-600 h-2 rounded-full dark:bg-red-500 w-[45%]"></div>
                </div>
                <p className="mx-1 text-sm">27</p>
              </div>
              <div className="flex justify-evenly items-center">
                <img
                  className="w-4 h-4 mx-1"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABNUlEQVR4nOWSvUoDQRCAP0UfwEIJ+ARiLwq+Qgq7pBf8AbHVQhFBU1vZi9YW+ha5Wmw1MxdFTSdEUE8WduE0p+4kl0JcGFjYme9jZhb+1RE4FDgYFnxBIXPRgvlhCM6CQOC0VHgbphS6QaDwcg+V0gQCuzl46GKnFHgGYwryVaCQJjAeDbqFaYW6wobCvsKxwLlAUgAPXSQux+X6Gldbd6wegcL1dyA1hsBVj0CgUaKgUTgmhU2BtwHA7wp7P+5CYUnguQ9BV6AWu/A5gTsD/FFhMQqe20nVMJqqCe5HtW3oYKsfwaVBcGGCZzCi8GQQdDIYjRa0YbZgzg8Kyy78/dO7q4kWCKzm/7bASQqT4f0GJgSOBF5DXgtWLIJ1D2+6L/vLd2763LVogZtnCjMxc7Xk/s3zAWvuhhjTjKx9AAAAAElFTkSuQmCC"
                />
                <p className="mx-1 text-sm">3</p>
                <div className="mx-1 w-full h-2 bg-gray-200 rounded-full dark:bg-gray-700">
                  <div className="bg-red-600 h-2 rounded-full dark:bg-red-500 w-[45%]"></div>
                </div>
                <p className="mx-1 text-sm">27</p>
              </div>
              <div className="flex justify-evenly items-center">
                <img
                  className="w-4 h-4 mx-1"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABNUlEQVR4nOWSvUoDQRCAP0UfwEIJ+ARiLwq+Qgq7pBf8AbHVQhFBU1vZi9YW+ha5Wmw1MxdFTSdEUE8WduE0p+4kl0JcGFjYme9jZhb+1RE4FDgYFnxBIXPRgvlhCM6CQOC0VHgbphS6QaDwcg+V0gQCuzl46GKnFHgGYwryVaCQJjAeDbqFaYW6wobCvsKxwLlAUgAPXSQux+X6Gldbd6wegcL1dyA1hsBVj0CgUaKgUTgmhU2BtwHA7wp7P+5CYUnguQ9BV6AWu/A5gTsD/FFhMQqe20nVMJqqCe5HtW3oYKsfwaVBcGGCZzCi8GQQdDIYjRa0YbZgzg8Kyy78/dO7q4kWCKzm/7bASQqT4f0GJgSOBF5DXgtWLIJ1D2+6L/vLd2763LVogZtnCjMxc7Xk/s3zAWvuhhjTjKx9AAAAAElFTkSuQmCC"
                />
                <p className="mx-1 text-sm">2</p>
                <div className="mx-1 w-full h-2 bg-gray-200 rounded-full dark:bg-gray-700">
                  <div className="bg-red-600 h-2 rounded-full dark:bg-red-500 w-[45%]"></div>
                </div>
                <p className="mx-1 text-sm">27</p>
              </div>
              <div className="flex justify-evenly items-center">
                <img
                  className="w-4 h-4 mx-1"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABNUlEQVR4nOWSvUoDQRCAP0UfwEIJ+ARiLwq+Qgq7pBf8AbHVQhFBU1vZi9YW+ha5Wmw1MxdFTSdEUE8WduE0p+4kl0JcGFjYme9jZhb+1RE4FDgYFnxBIXPRgvlhCM6CQOC0VHgbphS6QaDwcg+V0gQCuzl46GKnFHgGYwryVaCQJjAeDbqFaYW6wobCvsKxwLlAUgAPXSQux+X6Gldbd6wegcL1dyA1hsBVj0CgUaKgUTgmhU2BtwHA7wp7P+5CYUnguQ9BV6AWu/A5gTsD/FFhMQqe20nVMJqqCe5HtW3oYKsfwaVBcGGCZzCi8GQQdDIYjRa0YbZgzg8Kyy78/dO7q4kWCKzm/7bASQqT4f0GJgSOBF5DXgtWLIJ1D2+6L/vLd2763LVogZtnCjMxc7Xk/s3zAWvuhhjTjKx9AAAAAElFTkSuQmCC"
                />
                <p className="mx-1 text-sm">1</p>
                <div className="mx-1 w-full h-2 bg-gray-200 rounded-full dark:bg-gray-700">
                  <div className="bg-red-600 h-2 rounded-full dark:bg-red-500 w-[45%]"></div>
                </div>
                <p className="mx-1 text-sm">27</p>
              </div>
            </div>
          </div>
        </div>

        {/* Review */}
        <div className="lg:px-8 px-4 pt-3">
          <div className="flex justify-between">
            <div className="flex justify-center items-center">
              <p className="text-sm">Disukai</p>
              <svg
                class="w-3 h-3 mx-3 text-gray-500 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 8"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"
                />
              </svg>
            </div>
            <svg
              class="w-5 h-5 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                d="M7.75 4H19M7.75 4a2.25 2.25 0 0 1-4.5 0m4.5 0a2.25 2.25 0 0 0-4.5 0M1 4h2.25m13.5 6H19m-2.25 0a2.25 2.25 0 0 1-4.5 0m4.5 0a2.25 2.25 0 0 0-4.5 0M1 10h11.25m-4.5 6H19M7.75 16a2.25 2.25 0 0 1-4.5 0m4.5 0a2.25 2.25 0 0 0-4.5 0M1 16h2.25"
              />
            </svg>
          </div>
          <div className="flex justify-between items-center py-3">
            <div className="w-2/12">
              <div className="rounded-full h-14 w-14 bg-gray-400"></div>
            </div>

            <div className="w-10/12 flex flex-col px-4">
              <p className="text-sm">Name</p>
              <p className="text-sm text-gray-500">20-an | Oily | Medium</p>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="flex justify-evenly  py-2">
                    <img
                      className="w-4 h-4 mr-0.5"
                      src="https://img.icons8.com/material-rounded/24/star--v1.png"
                      alt="star--v1"
                    />
                    <img
                      className="w-4 h-4 mr-0.5"
                      src="https://img.icons8.com/material-rounded/24/star--v1.png"
                      alt="star--v1"
                    />
                    <img
                      className="w-4 h-4 mr-0.5"
                      src="https://img.icons8.com/material-rounded/24/star--v1.png"
                      alt="star--v1"
                    />
                    <img
                      className="w-4 h-4 mr-0.5"
                      src="https://img.icons8.com/material-rounded/24/star--v1.png"
                      alt="star--v1"
                    />
                    <img
                      className="w-4 h-4 mr-0.5"
                      src="https://img.icons8.com/material-rounded/24/star--v1.png"
                      alt="star--v1"
                    />
                  </div>
                  <p className="text-sm mx-3 text-gray-500">26 July 2022</p>
                </div>

                <div className="flex items-center justify-end">
                  <img
                    className="w-4 h-4 mr-1"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABqUlEQVR4nO2Uu0qDQRCFPwUvIEjwgoKXwgtaqGhlb2FpJ6KlCbESC7FSawsLQaKCRTSIeRpLe8FG8+9ujPEBIgOz8EM2msQIFh5YWJiz58zM7g78o1GUYTCClIWMgzsHGQPpDxjynAIMO0g75QjXQlLOfilehAUHWQv5wLozsPIGK7IPcQxkX2GhZuZe3MBBASYr0OVgTCsSkXtdeQcpiQlHuA4OvEkZBqoMvIiIhxKwsBozWA1xvImF7ZCA9DH/ChO1WmhgTVateAkmtbrzkHtOglIyTeIJurULuZDBmZY32qyBgzE1OKsKGtjR8jaaNYhgUw3SVcESTKlB9hn6GhV/h34DN/II5C6CJAt72qbDCrTXKy5cC0d6drcm0UKvhUslJusUb5M/oWeuniDx5QEDsw5utV3r3xnInSn31sBMPUnJyJj3zzaCTckylLmBLT9GIliiEVhY9jNHWhC/E9nH2iKcZZrBC8zF5tP+I3Q+QId/DA5uCrDITxDBtIVrzfZYl+yvJUYrYGFE5ktsNF8UYZxW4g0SRTixcCqfit/AC/TI+hXxP4tP4mflMT6kErsAAAAASUVORK5CYII="
                  />
                  <p className="text-sm"> 2 likes</p>
                </div>
              </div>
            </div>
          </div>
          <div className="text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </div>
          <div className="py-3">Gambar</div>
          <div className="text-right text-xs text-red-400 underline pb-5">
            Laporkan Ulasan
          </div>
          <hr></hr>
        </div>

        {/* Edit Review  */}
        <div className="absolute bottom-20 right-4 rounded-full w-14 h-14 bg-[#4ABFA1] shadow-xl">
          <img
            className="w-full p-3"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABZElEQVR4nOXVzUtUYRTH8XECmSxsU9hO3IhIi0BaDENQoC1EGAwCcRFBq9CN1EZxMRYu3EjlVpTy5d/8yAMnuF7uPHPnupIOHC73uef8vud5Oc9ttf57wwSWsYV3aGcXBQ8whxcZn4nYNr7gGifx3B4KwSJ+R2DOf5XE+5G/Vnwvi8/gHEfojZjB84L4FV4XdH5gUAX4jDNMj1jCdkH8PXZxmSBYwgU+ViXu4WAM8X6MTRYgf/Ednark/eTjiP8zdGM8iU+1qiwHcFt8vfTtJf7gEI8qxXMA+cqXCsuSNv7r0D3MADZqiE/FEU9xi7UBUf1pap6ceIw1AsxFUnfUmjcFrEbSU8zjQ6Hyh6XYRoB+dOp5oWt3yuJ3AXSwmToTr/C4MrkpYByrA/iG4zsAegGYHRbwNgJWGog/iVv4Z+5fMBGdmCDHcfnt1fBBHIJ0Ey+MqiRB3gSoLmAXn/Bs3JnfD7sB89Qc+nnafpYAAAAASUVORK5CYII="
          />
        </div>

        {/* ButtomNavbar  */}
        <div className="bottom-0 left-0 sticky lg:px-8 px-4 w-full bg-white py-1 border-t border-gray-400">
          <div className="flex justify-between">
            <div className="flex flex-col justify-center items-center">
              <img
                className="w-7 h-7"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABqUlEQVR4nO2Uu0qDQRCFPwUvIEjwgoKXwgtaqGhlb2FpJ6KlCbESC7FSawsLQaKCRTSIeRpLe8FG8+9ujPEBIgOz8EM2msQIFh5YWJiz58zM7g78o1GUYTCClIWMgzsHGQPpDxjynAIMO0g75QjXQlLOfilehAUHWQv5wLozsPIGK7IPcQxkX2GhZuZe3MBBASYr0OVgTCsSkXtdeQcpiQlHuA4OvEkZBqoMvIiIhxKwsBozWA1xvImF7ZCA9DH/ChO1WmhgTVateAkmtbrzkHtOglIyTeIJurULuZDBmZY32qyBgzE1OKsKGtjR8jaaNYhgUw3SVcESTKlB9hn6GhV/h34DN/II5C6CJAt72qbDCrTXKy5cC0d6drcm0UKvhUslJusUb5M/oWeuniDx5QEDsw5utV3r3xnInSn31sBMPUnJyJj3zzaCTckylLmBLT9GIliiEVhY9jNHWhC/E9nH2iKcZZrBC8zF5tP+I3Q+QId/DA5uCrDITxDBtIVrzfZYl+yvJUYrYGFE5ktsNF8UYZxW4g0SRTixcCqfit/AC/TI+hXxP4tP4mflMT6kErsAAAAASUVORK5CYII="
              />
              <p className="uppercase text-[#4ABFA1]">LIKES</p>
            </div>
            <button className="w-5/12 bg-white border rounded-lg  border-[#4ABFA1] my-2 font-bold text-[#4ABFA1]">
              Cart
            </button>
            <button className="w-5/12 bg-[#4ABFA1] border rounded-lg  border-[#4ABFA1] my-2 font-bold text-white">
              Buy
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default detailProduct;
