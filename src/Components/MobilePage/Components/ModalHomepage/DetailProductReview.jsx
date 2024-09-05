import { Link, useParams } from "react-router-dom";
import back from "../../../../assets/previous.svg";
import logo from "../../../../assets/logo.png";
import { useSelector } from "react-redux";
import React, { useState } from "react";

function DetailProductReview() {
  const { id } = useParams();
  const detailProduct = useSelector(
    (state) => state.ReducerDetailProduct.dataDetailProduct
  );
  const dataProduct = detailProduct?.dataProduct?.[0];
  const dataContainerStyle = {
    whiteSpace: "pre-wrap",
  };
  const [sortCriteria, setSortCriteria] = useState("newest"); // default to newest
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };
  const sortReviews = (reviews, criteria) => {
    if (!reviews) return [];

    return [...reviews].sort((a, b) => {
      if (criteria === "liked") {
        return b.countLike - a.countLike; // descending by likes
      } else {
        return new Date(b.dateReview) - new Date(a.dateReview); // descending by date
      }
    });
  };

  function StarAll() {
    const rating = detailProduct.dataProduct[0]?.rating;
    const maxRating = 5;
    const filledStars = Math.floor(rating);
    const remainingStars = maxRating - filledStars;
    return (
      <>
        <div className="w-5/12 flex flex-col justify-center items-center">
          <p className="text-center font-bold uppercase">Nilai</p>
          <p className="text-4xl text-center font-bold">
            {parseFloat(dataProduct?.rating).toFixed(1)}
          </p>
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
        </div>
      </>
    );
  }

  function AllReview1() {
    const data = detailProduct?.dataProduct[0]?.listReview;
    const valueReviewDistribution = data?.reduce((acc, review) => {
      const value = review.valueReview || 0;
      acc[value] = (acc[value] || 0) + 1;
      return acc;
    }, {});
    const maxCount = Math.max(...Object.values(valueReviewDistribution));

    return (
      <div className="flex flex-col w-7/12 px-5">
        {[5, 4, 3, 2, 1].map((value) => (
          <div className="flex justify-evenly items-center" key={value}>
            <div className="flex w-2/12">
              <svg
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
              <p className="mx-1 text-sm">{value}</p>
            </div>
            <div className="mx-1 w-9/12 h-2 bg-gray-200 rounded-full ">
              {valueReviewDistribution[value] > 0 && (
                <div
                  className="bg-yellow-400 h-2 rounded-full dark:bg-yellow-400"
                  style={{
                    width: `${
                      (valueReviewDistribution[value] / maxCount) * 100
                    }%`,
                  }}
                ></div>
              )}
            </div>
            <div className="w-1/12 mx-1 text-sm">
              {valueReviewDistribution[value] || 0}
            </div>
          </div>
        ))}
      </div>
    );
  }

  function AllReview() {
    const data = detailProduct?.dataProduct[0]?.listReview;
    const sortedReviews = sortReviews(data, sortCriteria);
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
        {sortedReviews?.map((review) => (
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

  return (
    <>
      <div className="w-full h-full overflow-y-auto">
        <div className="top-0 absolute z-10 lg:px-8 px-4 w-full bg-white py-5 border-b border-gray-400">
          <div className="flex justify-between">
            <div className="self-center">
              <Link to={`/newProduct/detailproduct/${id}`}>
                <img src={back} className="w-full" />
              </Link>
            </div>
            <div className="font-bold flex justify-left">
              <div className="text-lg">Penilaian Product</div>
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
        <div className="pt-[15%]">
          {/* Count Review */}
          <div className="lg:px-8 px-4 py-6 border-b">
            <div className="flex justify-between w-full pb-5 ">
              <div className="flex">
                <div className="font-bold flex">Review</div>
                <p className="mx-2 text-red-500 font-bold">
                  {dataProduct?.reviewNum}
                </p>
              </div>
            </div>
            <div className=""></div>
            <div className="flex justify-center w-full py-1">
              <StarAll />
              <AllReview1 />
            </div>
          </div>

          {/* Review */}
          <div className="lg:px-8 px-4 pt-3">
            <div className="flex justify-between items-center pb-2">
              {/* <div className="flex justify-center items-center">
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
              </div> */}
              <div className="relative inline-block text-left">
                <button
                  type="button"
                  className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none  "
                  onClick={toggleDropdown}
                >
                  {sortCriteria === "liked" ? "Disukai" : "Terbaru"}
                  <svg
                    className="-mr-1 ml-2 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 10.939l3.71-3.71a.75.75 0 111.06 1.06l-4 4a.75.75 0 01-1.06 0l-4-4a.75.75 0 01.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                {dropdownVisible && (
                  <div
                    className=" absolute  mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                    tabIndex="-1"
                  >
                    <div className="py-1" role="none">
                      <button
                        className={`w-full text-left px-4 py-2 text-sm text-gray-700 ${
                          sortCriteria === "liked" ? "font-bold" : ""
                        }`}
                        onClick={() => {
                          setSortCriteria("liked");
                          setDropdownVisible(false);
                        }}
                      >
                        Disukai
                      </button>
                      <button
                        className={`w-full text-left px-4 py-2 text-sm text-gray-700 ${
                          sortCriteria === "newest" ? "font-bold" : ""
                        }`}
                        onClick={() => {
                          setSortCriteria("newest");
                          setDropdownVisible(false);
                        }}
                      >
                        Terbaru
                      </button>
                    </div>
                  </div>
                )}
              </div>

              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
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
            <AllReview />
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailProductReview;
