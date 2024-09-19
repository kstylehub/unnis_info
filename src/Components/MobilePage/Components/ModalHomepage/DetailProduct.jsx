import back from "../../../../assets/previous.svg";
import logo from "../../../../assets/logo.png";
import Share from "../../../../assets/Share1.png";
import UnnisIcon from "../../../../assets/UnnisPickIcon.svg";
import Tokopedia from "../../../../assets/tokopedia.svg";
import Shopee from "../../../../assets/shopee.svg";
import Istyle from "../../../../assets/istyle.svg";
import OliveYoung from "../../../../assets/OliveYoung.svg";
import Sociolla from "../../../../assets/Sociolla.svg";
import { Link, useParams } from "react-router-dom";
import React, { useState } from "react";
import { useEffect } from "react";
import { CircleLoader } from "react-spinners";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllProductWithPagination,
  getDetailProduct,
} from "../../../../Store/Actions/Actions";
import { Helmet } from "react-helmet";

function DetailProduct() {
  const { id } = useParams();
  const [showModal, setShowModal] = useState(false);
  const [showModalDesc, setShowModalDesc] = useState(false);

  const detailProduct = useSelector(
    (state) => state.ReducerDetailProduct.dataDetailProduct
  );
  const loading = useSelector((state) => state.ReducerDetailProduct.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    const body = {
      idMember: 5691,
      idProduct: +id,
    };
    dispatch(getDetailProduct(body));
    dispatch(getAllProductWithPagination());
  }, [id, dispatch]);

  const dataProduct = detailProduct?.dataProduct?.[0];
  const formattedPrice = dataProduct?.price?.toLocaleString("id-ID");
  const allProduct = useSelector(
    (state) => state.ReducerProductWithPagination.dataProductWithPagination
  );
  const allProductWithPagination = Array.isArray(allProduct?.dataProduct)
    ? allProduct?.dataProduct
    : [];
  const handleIngredients = () => {
    setShowModal(true);
  };

  const handleDescription = () => {
    setShowModalDesc(true);
  };

  const closeModalIngredients = () => {
    setShowModal(false);
  };
  const closeModalDescription = () => {
    setShowModalDesc(false);
  };

  const dataContainerStyle = {
    whiteSpace: "pre-wrap",
  };

  const metaData = {
    title: dataProduct?.name || "Product Name",
    description: dataProduct?.description || "Product Description",
    price: formattedPrice || "Product Price",
    brand: dataProduct?.brand || "Product Brand",
    image: dataProduct?.images || "https://yourwebsite.com/default-image.jpg",
    url: `https://mobile.unnispick.com/newProduct/detailproduct/${
      dataProduct?.id || 1
    }`,
  };

  // Fungsi untuk membagikan ke WhatsApp
  const handleShareToWhatsApp = () => {
    const urlWithCacheBypass = `${metaData.url}?v=${new Date().getTime()}`;
    const message = `Temukan ${metaData.brand} - ${metaData.title} dengan harga Rp ${metaData.price}. Dapatkan sekarang juga di UNNIS! ${urlWithCacheBypass}`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank");
  };
  function AllReview() {
    const data = detailProduct?.dataProduct[0]?.listReview;

    function Birt(birthYear) {
      if (birthYear == 0) {
        return "-";
      } else if (birthYear < 1970) {
        return "60-an";
      } else if (birthYear < 1980) {
        return "50-an";
      } else if (birthYear < 1990) {
        return "40-an";
      } else if (birthYear < 2000) {
        return "30-an";
      } else if (birthYear < 2010) {
        return "20-an";
      } else if (birthYear < 2020) {
        return "10-an";
      } else {
        return birthYear;
      }
    }

    function formatDate(dateString) {
      const date = new Date(dateString);
      const day = date.getDate();
      const monthIndex = date.getMonth();
      const year = date.getFullYear();

      const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];

      return `${day} ${months[monthIndex]} ${year}`;
    }

    function StarReview({ rating }) {
      const maxRating = 5;
      const ratingInRange = Math.max(0, Math.min(rating, maxRating)); // Ensure rating is between 0 and 5
      const filledStars = Math.floor(ratingInRange);
      const remainingStars = maxRating - filledStars;

      return (
        <>
          <div className="flex justify-evenly py-2">
            {[...Array(filledStars)].map((_, index) => (
              <svg
                key={index}
                className="w-4 h-4 text-yellow-400 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M13.849 4.22c-.584-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
              </svg>
            ))}
            {[...Array(remainingStars)].map((_, index) => (
              <svg
                key={index}
                className="w-4 h-4 text-gray-200 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M13.849 4.22c-.584-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
              </svg>
            ))}
          </div>
        </>
      );
    }

    return (
      <>
        {data.slice(-2)?.map((review) => (
          <React.Fragment key={review.id}>
            <div className="flex justify-between items-center py-3">
              <div className="w-2/12">
                <div className="rounded-full h-14 w-14 bg-gray-800">
                  {review.imgReviewer !== undefined &&
                    review.imgReviewer !== "" && (
                      <img
                        className="rounded-full object-cover w-full h-full"
                        src={review.imgReviewer}
                      ></img>
                    )}
                </div>
              </div>

              <div className="w-10/12 flex flex-col px-4">
                <p className="text-sm">{review.nameReviewer}</p>
                <p className="text-sm text-gray-500">
                  {Birt(review.birthYear)} | {review.skinType || "-"} |{" "}
                  {review.skinColor || "-"}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <StarReview rating={review.valueReview} />
                    <p className="text-sm mx-3 text-gray-500">
                      {formatDate(review.dateReview)}
                    </p>
                  </div>

                  <div className="flex items-center justify-end">
                    <img
                      className="w-4 h-4 mr-1"
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABqUlEQVR4nO2Uu0qDQRCFPwUvIEjwgoKXwgtaqGhlb2FpJ6KlCbESC7FSawsLQaKCRTSIeRpLe8FG8+9ujPEBIgOz8EM2msQIFh5YWJiz58zM7g78o1GUYTCClIWMgzsHGQPpDxjynAIMO0g75QjXQlLOfilehAUHWQv5wLozsPIGK7IPcQxkX2GhZuZe3MBBASYr0OVgTCsSkXtdeQcpiQlHuA4OvEkZBqoMvIiIhxKwsBozWA1xvImF7ZCA9DH/ChO1WmhgTVateAkmtbrzkHtOglIyTeIJurULuZDBmZY32qyBgzE1OKsKGtjR8jaaNYhgUw3SVcESTKlB9hn6GhV/h34DN/II5C6CJAt72qbDCrTXKy5cC0d6drcm0UKvhUslJusUb5M/oWeuniDx5QEDsw5utV3r3xnInSn31sBMPUnJyJj3zzaCTckylLmBLT9GIliiEVhY9jNHWhC/E9nH2iKcZZrBC8zF5tP+I3Q+QId/DA5uCrDITxDBtIVrzfZYl+yvJUYrYGFE5ktsNF8UYZxW4g0SRTixcCqfit/AC/TI+hXxP4tP4mflMT6kErsAAAAASUVORK5CYII="
                    />
                    <p className="text-sm"> {review.countLike} likes</p>
                  </div>
                </div>
              </div>
            </div>
            <div style={dataContainerStyle} className="text-sm">
              {review.descReviewer}
            </div>
            <div className="py-3 flex justify-start gap-1">
              {review.listImage[0] && (
                <div className="rounded-lg h-[8em] w-[8em]">
                  <img
                    className="rounded-lg object-cover h-full w-full"
                    src={review.listImage[0]}
                  />
                </div>
              )}
              {review.listImage[1] && (
                <div className="rounded-lg h-[8em] w-[8em]">
                  <img
                    className="rounded-lg object-cover h-full w-full"
                    src={review.listImage[1]}
                  />
                </div>
              )}
              {review.listImage[2] && (
                <div className="rounded-lg h-[8em] w-[8em]">
                  <img
                    className="rounded-lg object-cover h-full w-full"
                    src={review.listImage[2]}
                  />
                </div>
              )}
            </div>
            <div className="text-right text-xs text-red-400 underline pb-5">
              Laporkan Ulasan
            </div>
            <hr></hr>
          </React.Fragment>
        ))}
      </>
    );
  }

  function StarAll() {
    const rating = detailProduct.dataProduct[0]?.rating;
    const maxRating = 5;
    const filledStars = Math.floor(rating);
    const remainingStars = maxRating - filledStars;
    return (
      <>
        <div className="flex gap-1  items-center">
          <div className="flex justify-evenly py-2">
            {[...Array(filledStars)].map((_, index) => (
              <svg
                key={index}
                className="w-5 h-5 text-yellow-400 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M13.849 4.22c-.584-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
              </svg>
            ))}
            {[...Array(remainingStars)].map((_, index) => (
              <svg
                key={index}
                className="w-5 h-5 text-gray-200 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M13.849 4.22c-.584-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
              </svg>
            ))}
          </div>
          <p className="text-lg text-center font-bold">
            {parseFloat(dataProduct?.rating).toFixed(1)}
          </p>
          <p className="text-sm text-center text-gray-500">
            ({dataProduct?.reviewNum})
          </p>
        </div>
      </>
    );
  }

  function Display() {
    return (
      <>
        <Helmet>
          <title>{metaData.title}</title>
          <meta property="og:title" content={metaData.title} />
          <meta property="og:description" content={metaData.description} />
          <meta property="og:price" content={metaData.price} />
          <meta property="og:brand" content={metaData.brand} />
          <meta property="og:image" content={metaData.image} />
          <meta property="og:url" content={metaData.url} />
          <meta property="og:type" content="website" />
        </Helmet>
        <div className="w-full h-full overflow-y-auto">
          <div className="top-0 absolute z-10 lg:px-8 px-4 w-full bg-white pt-2 border-b border-gray-400">
            <div className="flex ">
              <div className="self-center w-4/12">
                <Link to={"/newProduct"}>
                  <img src={back} className="w-[25%]" />
                </Link>
              </div>
              <div className="self-center flex justify-center w-4/12">
                <img src={logo} className="w-[80%]" />
              </div>
              <div className="self-center flex gap-3 justify-end items-center w-4/12">
                <div onClick={handleShareToWhatsApp} className="w-[20%]">
                  <img src={Share} className="w-full" />
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.0"
                  stroke="currentColor"
                  className="w-[25%] h-[25%]"
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
          <div className="lg:px-6 px-4 border-b-4 border-gray-200 pb-3 pt-[20%]">
            <div className="h-full flex justify-center items-start">
              <div className="mt-[5%] flex flex-col gap-4">
                {dataProduct?.bpom ? (
                  <img className="w-10 h-10 " src={dataProduct?.bpom}></img>
                ) : (
                  ""
                )}
                {dataProduct?.mui ? (
                  <img className="w-10 h-10 " src={dataProduct?.mui}></img>
                ) : (
                  ""
                )}
                {dataProduct?.dataCountry?.flag ? (
                  <img
                    className="w-10 h-10 "
                    src={dataProduct?.dataCountry?.flag}
                  ></img>
                ) : (
                  ""
                )}
              </div>

              <img src={dataProduct?.images} className="w-8/12 py-5" />
              <div className="text-center flex flex-col justify-start pt-[5%]">
                <h5 className="font-bold text-[#4ABFA1]">Disukai</h5>
                <h6 className="">{dataProduct?.likeNum}</h6>
              </div>
            </div>
            <div className="py-2">
              <h1 className="font-bold text-2xl">Rp. {formattedPrice}</h1>
              <div className="pt-3 flex justify-start items-center">
                <p className="text-gray-400 uppercase mr-3 ">
                  {dataProduct?.brand}
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
              <p className="font-bold ">{dataProduct?.name}</p>
              <p className="text-red-500 text-sm">
                {dataProduct?.stock === 0
                  ? "Produk tidak tersedia. Stock habis"
                  : ""}
              </p>
              {dataProduct?.stock !== 0 && (
                <p className=" text-sm text-gray-400">
                  Stock: {dataProduct?.stock}
                </p>
              )}

              <div className="flex justify-start py-2 gap-2">
                {dataProduct?.keyword[0] !== undefined &&
                  dataProduct?.keyword[0] !== "" &&
                  dataProduct?.keyword[0] !== "" && (
                    <p className="pt-0.5 pb-1 px-2 border border-gray-400 text-gray-400 rounded-full text-xs">
                      {"#" + dataProduct?.keyword[0]}
                    </p>
                  )}
                {dataProduct?.keyword[1] !== undefined &&
                  dataProduct?.keyword[1] !== "" && (
                    <p className="pt-0.5 pb-1 px-2 border border-gray-400 text-gray-400 rounded-full text-xs">
                      {"#" + dataProduct?.keyword[1]}
                    </p>
                  )}
                {dataProduct?.keyword[2] !== undefined &&
                  dataProduct?.keyword[2] !== "" && (
                    <p className="pt-0.5 pb-1 px-2 border border-gray-400 text-gray-400 rounded-full text-xs">
                      {"#" + dataProduct?.keyword[2]}
                    </p>
                  )}
              </div>
              <p className="text-xs text-gray-400 pb-2 pt-1">
                You can buy this at
              </p>
              <div className="flex">
                <Link to={dataProduct?.unnispickLink} target="_Blank">
                  <img
                    src={UnnisIcon}
                    className={
                      dataProduct?.unnispickLink === ""
                        ? "hidden"
                        : "w-7 h-7 rounded-full mr-2"
                    }
                  />
                </Link>

                <Link to={dataProduct?.shopeeLink} target="_Blank">
                  <img
                    src={Shopee}
                    className={
                      dataProduct?.shopeeLink === ""
                        ? "hidden"
                        : "w-7 h-7 rounded-full mr-2"
                    }
                  />
                </Link>
                <Link to={dataProduct?.tokopediaLink} target="_Blank">
                  <img
                    src={Tokopedia}
                    className={
                      dataProduct?.tokopediaLink === ""
                        ? "hidden"
                        : "w-7 h-7 rounded-full mr-2"
                    }
                  />
                </Link>
                <Link to={dataProduct?.oliveYoungLink} target="_Blank">
                  <img
                    src={OliveYoung}
                    className={
                      dataProduct?.oliveYoungLink === ""
                        ? "hidden"
                        : "w-7 h-7 rounded-full mr-2"
                    }
                  />
                </Link>
                <Link to={dataProduct?.sociollaLink} target="_Blank">
                  <img
                    src={Sociolla}
                    className={
                      dataProduct?.sociollaLink === ""
                        ? "hidden"
                        : "w-7 h-7 rounded-full mr-2"
                    }
                  />
                </Link>
                <Link to={dataProduct?.styleKoreanLink} target="_Blank">
                  <img
                    src={Istyle}
                    className={
                      dataProduct?.styleKoreanLink === ""
                        ? "hidden"
                        : "w-7 h-7 rounded-full mr-2"
                    }
                  />
                </Link>
              </div>
            </div>
          </div>
          {/* BPOM dan MUI */}
          {dataProduct?.certificate?.map((cert) =>
            cert.name === "BPOM" || cert.name === "MUI" ? (
              <div
                key={cert.id}
                className="lg:px-6 px-4 py-4 border-b-4 border-gray-200"
              >
                <div className="flex">
                  <div className="w-1/12 pt-0.5">
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
                        strokeWidth="1"
                        d="M9.5 11.5 11 13l4-3.5M12 20a16.405 16.405 0 0 1-5.092-5.804A16.694 16.694 0 0 1 5 6.666L12 4l7 2.667a16.695 16.695 0 0 1-1.908 7.529A16.406 16.406 0 0 1 12 20Z"
                      />
                    </svg>
                  </div>
                  <div className="w-10/12 flex flex-col">
                    <div className="font-bold text-sm">
                      {cert.name === "BPOM"
                        ? "SUDAH TERSERTIFIKASI BPOM"
                        : "SUDAH TERSERTIFIKASI HALAL MUI"}
                    </div>
                    <div className="text-xs text-gray-500">
                      No. certificate: {cert.number}
                    </div>
                  </div>
                  <div className="w-1/12 flex items-center justify-end">
                    <svg
                      className="w-6 h-6 text-[#4ABFA1] dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )
          )}
          {/* Analisis Ingredients*/}
          <div
            className={
              dataProduct?.ingredientAnalyst?.length !== 0
                ? "border-b-4 border-gray-200 pb-3"
                : "hidden"
            }
          >
            <div className="uppercase font-bold text-sm lg:px-6 px-4 pt-4 pb-1">
              PRODUCT ANALYSIS RESULT
            </div>
            {dataProduct?.ingredientAnalyst?.map((ingredients) => (
              <div
                key={ingredients.id}
                className={
                  ingredients.status === true
                    ? "lg:px-6 px-4 py-2"
                    : "lg:px-6 px-4 py-2 bg-red-200"
                }
              >
                <div className="flex">
                  <div className="w-1/12 pt-0.5">
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
                        strokeWidth="1"
                        d="M9.5 11.5 11 13l4-3.5M12 20a16.405 16.405 0 0 1-5.092-5.804A16.694 16.694 0 0 1 5 6.666L12 4l7 2.667a16.695 16.695 0 0 1-1.908 7.529A16.406 16.406 0 0 1 12 20Z"
                      />
                    </svg>
                  </div>
                  <div className="w-10/12 flex flex-col">
                    <div className="font-bold text-sm uppercase">
                      {ingredients.title}
                    </div>
                    <div className="text-xs text-gray-500">
                      {ingredients.desc}
                    </div>
                  </div>
                  <div className="w-1/12 flex items-center justify-end">
                    {ingredients.status === true ? (
                      <svg
                        className="w-6 h-6 text-[#4ABFA1] dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="w-6 h-6 text-red-500 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm7.707-3.707a1 1 0 0 0-1.414 1.414L10.586 12l-2.293 2.293a1 1 0 1 0 1.414 1.414L12 13.414l2.293 2.293a1 1 0 0 0 1.414-1.414L13.414 12l2.293-2.293a1 1 0 0 0-1.414-1.414L12 10.586 9.707 8.293Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Ingredients */}
          <div className="lg:px-6 px-4 ">
            <div className="flex w-full py-4 ">
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
                  {dataProduct?.ingredients !== "" && (
                    <div
                      className="flex justify-center items-center"
                      onClick={handleIngredients}
                    >
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
                  )}
                </div>
                <p className="pt-2 max-h-[5em] overflow-hidden text-ellipsis">
                  {dataProduct?.ingredients
                    ? dataProduct?.ingredients
                    : "No ingredients"}
                </p>
              </div>
            </div>
          </div>
          <hr></hr>
          {/* Description */}
          <div className="lg:px-6 px-4 border-b-4 border-gray-200">
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
                  {dataProduct?.description !== "" && (
                    <div
                      className="flex justify-center items-center"
                      onClick={handleDescription}
                    >
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
                  )}
                </div>
                <p className="pt-2 max-h-[5em] overflow-hidden text-ellipsis">
                  {dataProduct?.description
                    ? dataProduct?.description
                    : "No description"}
                </p>
              </div>
            </div>
          </div>

          {/* Count Review */}
          <div className="lg:px-8 px-4 py-4 border-b">
            <div className="flex justify-between w-full  ">
              <div className="flex">
                <div className="font-bold flex">Review</div>
              </div>
              <div className="flex text-sm justify-center items-center">
                <Link
                  to={`/newProduct/detailproduct/allreview/${id}`}
                  className="text-gray-400 mr-3"
                >
                  View All
                </Link>
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

            <div className="flex justify-left w-full item-center ">
              <StarAll />
            </div>
          </div>

          {/* Review */}
          <div className="lg:px-8 px-4 pt-4">
            {/* <div className="flex justify-between">
              <div className="flex justify-center items-center">
                <p className="text-sm">Disukai</p>
                <svg
                  className="w-3 h-3 mx-3 text-gray-500 dark:text-white"
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
                className="w-5 h-5 text-gray-800 dark:text-white"
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
            </div> */}
            <AllReview />
          </div>

          {/* Edit Review  */}
          <div className="absolute bottom-20 z-20 right-4 rounded-full w-14 h-14 bg-[#4ABFA1] shadow-xl">
            <img
              className="w-full p-3"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABZElEQVR4nOXVzUtUYRTH8XECmSxsU9hO3IhIi0BaDENQoC1EGAwCcRFBq9CN1EZxMRYu3EjlVpTy5d/8yAMnuF7uPHPnupIOHC73uef8vud5Oc9ttf57wwSWsYV3aGcXBQ8whxcZn4nYNr7gGifx3B4KwSJ+R2DOf5XE+5G/Vnwvi8/gHEfojZjB84L4FV4XdH5gUAX4jDNMj1jCdkH8PXZxmSBYwgU+ViXu4WAM8X6MTRYgf/Ednark/eTjiP8zdGM8iU+1qiwHcFt8vfTtJf7gEI8qxXMA+cqXCsuSNv7r0D3MADZqiE/FEU9xi7UBUf1pap6ceIw1AsxFUnfUmjcFrEbSU8zjQ6Hyh6XYRoB+dOp5oWt3yuJ3AXSwmToTr/C4MrkpYByrA/iG4zsAegGYHRbwNgJWGog/iVv4Z+5fMBGdmCDHcfnt1fBBHIJ0Ey+MqiRB3gSoLmAXn/Bs3JnfD7sB89Qc+nnafpYAAAAASUVORK5CYII="
            />
          </div>
          {/* Relevan Product  */}
          <div className="lg:px-8 px-4 pt-4">
            <div className="">
              <div className="font-bold  pb-4">Relevant Product</div>
              <div className="flex flex-wrap justify-between bg-white">
                {allProductWithPagination.map((item, index) => (
                  <Link
                    to={`/newProduct/detailproduct/${item.id}`}
                    key={index}
                    className="relative border p-3 w-[49%] flex-shrink-0 mb-2 bg-white"
                  >
                    {item.statusRecommend && (
                      <div className="absolute top-0 left-3  text-white py-3 w-[48%]">
                        <img
                          src={Recomended}
                          className="object-contain"
                          style={{ width: "100%", height: "100%" }}
                        />
                      </div>
                    )}
                    {item.bpom && (
                      <div className="absolute top-0 right-3  text-white py-3 w-[15%]">
                        <img
                          src={item.bpom}
                          className="object-contain"
                          style={{ width: "100%", height: "100%" }}
                        />
                      </div>
                    )}
                    {item.mui && (
                      <div className="absolute top-0 right-6  text-white py-3 w-[15%]">
                        <img
                          src={item.mui}
                          className="object-contain"
                          style={{ width: "100%", height: "100%" }}
                        />
                      </div>
                    )}
                    <div className="flex flex-col pt-4">
                      <div className="flex justify-center items-center p-1">
                        <div style={{ width: "150px", height: "150px" }}>
                          {item.images ? (
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
                        className="w-full pt-2"
                        style={{
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                          lineHeight: "1.2",
                        }}
                      >
                        {item.brand} - {item.name}
                      </div>
                      <div className="text-left font-bold text-lg">
                        Rp{" "}
                        {item.price
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
                          <div className="">{item.rating}</div>
                          <div className="pl-1 text-gray-400 text-sm pt-1">
                            ({item.stock})
                          </div>
                        </div>
                        <div className="flex justify-end">
                          {[
                            {
                              href: item?.unnispickLink,
                              text: "Unnispick",
                              icon: "https://s3.ap-northeast-2.amazonaws.com/admin.unnispick.com/link_1.png",
                            },
                            {
                              href: item?.shopeeLink,
                              text: "Shopee",
                              icon: "https://s3.ap-northeast-2.amazonaws.com/admin.unnispick.com/link_2.png",
                            },
                            {
                              href: item?.tokopediaLink,
                              text: "Tokopedia",
                              icon: "https://s3.ap-northeast-2.amazonaws.com/admin.unnispick.com/link_3.png",
                            },
                            {
                              href: item?.iStyleLink,
                              text: "iStyle",
                              icon: "https://s3.ap-northeast-2.amazonaws.com/admin.unnispick.com/link_4.png",
                            },
                            {
                              href: item?.sociollaLink,
                              text: "Sociolla",
                              icon: "https://s3.ap-northeast-2.amazonaws.com/admin.unnispick.com/link_6.png",
                            },
                            {
                              href: item?.styleKoreanLink,
                              text: "Style Korean",
                              icon: "https://s3.ap-northeast-2.amazonaws.com/admin.unnispick.com/link_7.png",
                            },
                            {
                              href: item?.oliveYoungLink,
                              text: "Olive Young",
                              icon: "https://s3.ap-northeast-2.amazonaws.com/admin.unnispick.com/link_5.png",
                            },
                            {
                              href: item?.kalCareLink,
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
                ))}
              </div>
            </div>
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
  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <CircleLoader color="#0000ff" size={30} />{" "}
        </div>
      ) : (
        <Display />
      )}

      {/* Modal Ingredients*/}
      {showModal && (
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-opacity-70 bg-black flex flex-col justify-end">
          <div className="rounded-t-xl bg-white text-center lg:px-6 px-4">
            <div className="sticky inset-0 flex justify-between py-5">
              <div className="font-bold flex">INGREDIENTS</div>

              <svg
                onClick={closeModalIngredients}
                className="h-5 w-5"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <hr></hr>
            <h5
              style={dataContainerStyle}
              className="lg:mb-2 text-sm text-left py-4"
            >
              {dataProduct.ingredients
                ? dataProduct.ingredients
                : "Ingredients not available"}
            </h5>
          </div>
        </div>
      )}

      {/* Modal Description*/}
      {showModalDesc && (
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-opacity-70 bg-black flex flex-col justify-end">
          <div className="rounded-t-xl bg-white text-center overflow-auto max-h-[30em]">
            <div className="sticky inset-0 flex justify-between py-5 lg:px-6 px-4 bg-white">
              <div className="font-bold flex">DESCRIPTION</div>

              <svg
                onClick={closeModalDescription}
                className="h-5 w-5"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <hr></hr>
            <h5
              style={dataContainerStyle}
              className="lg:px-6 px-4 lg:mb-2 text-sm text-left py-4"
            >
              {dataProduct?.description
                ? dataProduct.description
                : "Description not available"}
            </h5>
            <hr></hr>
            <div className="lg:px-6 px-4 py-4">
              <h1 className="font-bold font-base text-left">VOLUME / HARGA</h1>
              <h5 style={dataContainerStyle} className="text-sm text-left pt-1">
                {dataProduct?.volume} / Rp. {formattedPrice}
              </h5>
            </div>
            <hr></hr>
            <div className="lg:px-6 px-4 py-4">
              <h1 className="font-bold font-base text-left">
                COUNTRY OF MANUFACTURE
              </h1>
              <img
                className="w-8 h-8 mt-2"
                src={dataProduct?.dataCountry.flag}
              ></img>
            </div>
            <hr></hr>
            <div className="lg:px-6 px-4 py-4">
              <h1 className="font-bold font-base text-left">HOW TO USE</h1>
              <h5 style={dataContainerStyle} className="text-sm text-left pt-1">
                {dataProduct?.howuse}
              </h5>
            </div>
            <hr></hr>
            <div className="lg:px-6 px-4 py-4">
              <h1 className="font-bold font-base text-left">RECOMMEND FOR</h1>
              <h5 style={dataContainerStyle} className="text-sm text-left pt-1">
                {dataProduct?.recommend}
              </h5>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default DetailProduct;
