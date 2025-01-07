import { Link, useParams, useNavigate } from "react-router-dom";
import back from "../../../../assets/previous.svg";
import { getProductCommunity } from "../../../../Store/Actions/Actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

function CommunityProduct() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const product = useSelector(
    (state) => state.ReducerProductCommunity.communitypro
  );
  const [dataProduct1, setDataProduct1] = useState("");
  const [selectedProducts, setSelectedProducts] = useState([]); // State untuk produk yang dipilih

  useEffect(() => {
    const test = dataProduct1;
    dispatch(getProductCommunity(test));
  }, [dispatch, dataProduct1]); // Added dataProduct1 to dependency array to trigger effect properly

  // console.log(product);

  const dataToMap = Array.isArray(product?.dataProduct)
    ? product?.dataProduct
    : [product?.dataProduct];
  // console.log(dataToMap);

  // Track whether a product is selected
  const isProductSelected = (item) => {
    return selectedProducts.some((selected) => selected.id === item.id);
  };

  const handleProductSelection = (item) => {
    if (isProductSelected(item)) {
      // Remove the product if already selected
      setSelectedProducts(
        selectedProducts.filter((product) => product.id !== item.id)
      );
    } else if (selectedProducts.length < 3) {
      // Add the product if less than 3 are selected
      setSelectedProducts([...selectedProducts, item]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (dataProduct1) {
      const test = dataProduct1;
      console.log("ini data", test);
      dispatch(getProductCommunity(test));
      setDataProduct1("");
    }
  };

  const handleFinalizeSelection = () => {
    if (selectedProducts.length > 0) {
      console.log("Produk dipilih sebelum navigasi:", selectedProducts);
      // Passing selectedProducts to next page using navigate
      navigate(`/community/thread/${id}`, { state: { selectedProducts } });
    }
  };

  return (
    <div className="bg-white h-screen flex-col flex overflow-hidden">
      <div className="top-0 sticky w-full z-20 bg-white pt-2 shadow">
        <div className="flex justify-center items-center py-3 px-5">
          <Link
            to={`/community/thread/${id}`}
            className="w-4/12 flex items-center justify-start"
          >
            <img src={back} className="w-8 h-8" alt="Back" />
          </Link>
          <div className="w-6/12 text-lg font-semibold text-left">
            Choose Product
          </div>
          <div className="w-2/12"></div>
        </div>
      </div>
      <div className="top-0 sticky w-full z-20 bg-white shadow">
        <div className="py-3 px-5">
          <form onSubmit={handleSubmit} className="flex items-center">
            <input
              className="border rounded-md focus:outline-none border-gray-400 w-full p-2"
              placeholder="Search Product"
              value={dataProduct1}
              onChange={(e) => setDataProduct1(e.target.value)}
            ></input>
            <button className="absolute right-8" type="submit">
              <svg
                className="w-6 h-6 text-gray-400 dark:text-white"
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
                  strokeWidth="2"
                  d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>
      <div className="flex-grow overflow-y-auto pb-5 px-5">
        {dataToMap
          ?.filter((item) => item && item.images) // Filter hanya yang memiliki images
          .map((item) => (
            <div
              key={item.id}
              className="flex justify-center items-center w-full border-b py-2"
            >
              <div className="w-1/12">
                <input
                  type="checkbox"
                  checked={isProductSelected(item)}
                  onChange={() => handleProductSelection(item)}
                />
              </div>
              <div className="w-2/12">
                <img
                  src={item.images}
                  alt={item.name || "No Image"}
                  className="w-16 h-16"
                />
              </div>
              <div className="w-8/12 flex flex-col text-left text-xs">
                <div>{item.brand}</div>
                <div>{item.name}</div>
              </div>
            </div>
          ))}
      </div>

      <div className="bg-white sticky bottom-0 w-full border-t p-2 px-4">
        <div
          className={`flex justify-center w-full rounded-lg p-4 ${
            selectedProducts.length === 0
              ? "bg-gray-400"
              : "bg-blue-500 cursor-pointer"
          } text-white`}
          onClick={handleFinalizeSelection}
        >
          Pilih Produk ({selectedProducts.length}/3)
        </div>
      </div>
    </div>
  );
}

export default CommunityProduct;
