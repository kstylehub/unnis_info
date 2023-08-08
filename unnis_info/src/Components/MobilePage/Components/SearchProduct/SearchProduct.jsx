import { useEffect, useState } from "react";
import ModalLoginWarn from "../ModalHomepage/ModalLoginWarn";
import back from "../../../../assets/previous.svg";
import { Link } from "react-router-dom";
import { CircleLoader } from "react-spinners";
import UnnisIcon from "../../../../assets/UnnisPickIcon.svg";
import Tokopedia from "../../../../assets/tokopedia.svg";
import Shopee from "../../../../assets/shopee.svg";
import Istyle from "../../../../assets/istyle.svg";
import OliveYoung from "../../../../assets/OliveYoung.svg";
import Sociolla from "../../../../assets/Sociolla.svg";
import Star from "../../../../assets/Star.svg";
import Arrow from "../../../../assets/Polygon3.svg";
import { useDispatch, useSelector } from "react-redux";
import { getListProduct } from "../../../../Store/Actions/Actions";

function SearchProduct() {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const loadingAllProduct = useSelector(
    (state) => state.ReducerListProduct.loading
  );
  const listProduct = useSelector(
    (state) => state.ReducerListProduct?.listProduct
  );
  const allProduct = listProduct.dataProduct || [];

  function handleModal() {
    setShowModal(true);
  }

  const handleCloseModal = () => {
    setShowModal(false);
  };
  console.log(filteredProducts);
  useEffect(() => {
    dispatch(getListProduct());
  }, []);
  useEffect(() => {
    const filtered = allProduct?.filter((el) =>
      el.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchTerm]);

  function DisplayProduct() {
    if (!filteredProducts || filteredProducts.length === 0) {
      return (
        <>
          <h1>Data Not Found</h1>
        </>
      );
    }
    return (
      <>
        {filteredProducts?.map((el, index) => {
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
              </Link>
              <div className="border mt-2"></div>
            </>
          );
        })}
      </>
    );
  }

  return (
    <>
      <div className="absolute top-0 w-full bg-white px-5 pt-3">
        <div className="text-[#343A40] bg-white pb-3 z-20 ">
          <div className="flex justify-between gap-x-2 justify-center items-center">
            <Link to={"/"}>
              <img src={back} className="w-full" />
            </Link>
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 ml-5 py-1"
            />
          </div>
        </div>
        <div className="text-xs my-5">
          <p>
            <strong className="text-rose-600 font-light">
              {filteredProducts ? filteredProducts?.length : allProduct?.length}
            </strong>{" "}
            Products
          </p>
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

export default SearchProduct;
