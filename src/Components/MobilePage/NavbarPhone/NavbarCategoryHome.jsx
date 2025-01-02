import { useEffect, useRef, useState } from "react";
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

  const allProduct = listProduct.data;
// console.log(allProduct, "ini all product");
  // Set default category to "skincare"
  const defaultCategory = "skincare";
  const [colorText, setColorText] = useState(defaultCategory);
  const [product, setProduct] = useState([]);
  const productContainerRef = useRef(null);

  useEffect(() => {
    if (allProduct) {
      const defaultProducts = allProduct[defaultCategory] || []; // Ambil data langsung dari array defaultCategory
      setProduct(defaultProducts);
    }
  }, [allProduct]);
  

  function handleCategory(el) {
    if (!allProduct || Object.keys(allProduct).length === 0) {
      console.log("allProduct belum terisi");
      return;
    }
  
    const normalizedCategory = el.toLowerCase(); // Nama array sesuai kategori
    const categoryProducts = allProduct[normalizedCategory] || []; // Ambil data langsung
  
    // console.log(categoryProducts, "Produk untuk kategori", el);
    setProduct(categoryProducts); // Set produk langsung dari array kategori
    setColorText(el);
  
    if (productContainerRef.current) {
      productContainerRef.current.scrollLeft = 0;
    }
  }
  
  
  

  function Categories() {
    return (
      <>
        {keyCategories.map((el) => {
          const nameCategories = el.charAt(0).toUpperCase() + el.slice(1);
          return (
            <button
              className="font-normal"
              onClick={() => handleCategory(el)}
              key={el}
            >
              <h1
                className={
                  el === colorText
                    ? "text-[#4ABFA1] font-bold py-1 px-4 border rounded-3xl border-[#4ABFA1]"
                    : "text-gray-400 border-gray-400 py-1 px-4 border rounded-3xl"
                }
              >
                {nameCategories}
              </h1>
            </button>
          );
        })}
      </>
    );
  }

  function BoxProduct() {
    if (!product || product.length === 0) {
      return (
        <div className="text-center">
          <h1>Data Not Found</h1>
        </div>
      );
    } else {
      return (
        <>
          {product.map((item,index) => (
             <Link
             to={`/newProduct/detailproduct/${item.id}`}
             key={index}
             className="relative border p-2 w-[40%] flex-shrink-0 mb-2 bg-white"
           >
             {/* {item.statusRecommend && (
               <div className="absolute top-0 left-3  text-white py-3 w-[48%]">
                 <img
                   src={Recomended}
                   className="object-contain"
                   style={{ width: "100%", height: "100%" }}
                 />
               </div>
             )} */}
             {/^normal$/i.test(item.priceType) === false && (
               <div className="absolute top-0 left-0 font-semibold  text-white py-3 w-[30%]">
                 <div className="bg-[#4ABFA1]  px-2 text-md ">
                   <p className="">{item.discountRate}%</p>
                 </div>
               </div>
             )}
             {item.bpom && (
               <div className="absolute top-0 right-1.5  text-white py-3 w-[15%]">
                 <img
                   src={item.bpom}
                   className="object-contain"
                   style={{ width: "80%", height: "100%" }}
                 />
               </div>
             )}
             {item.mui && (
               <div className="absolute top-0 right-6  text-white py-3 w-[15%]">
                 <img
                   src={item.mui}
                   className="object-contain"
                   style={{ width: "40%", height: "100%" }}
                 />
               </div>
             )}
             <div className="flex flex-col pt-4">
               <div className="flex justify-center items-center p-1">
                 <div style={{ width: "100px", height: "100px" }}>
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
                 className="w-full pt-2 text-sm"
                 style={{
                   display: "-webkit-box",
                   WebkitLineClamp: 2,
                   WebkitBoxOrient: "vertical",
                   overflow: "hidden",
                   lineHeight: "1.2",
                 }}
               >
                 {item.brand.toUpperCase()} - {item.name}
               </div>
               <div className="flex items-center">
                 <div className="text-left font-bold text-sm">
                   Rp{""}
                   {item.price
                     .toLocaleString("id-ID", {
                       minimumFractionDigits: 0,
                       maximumFractionDigits: 0,
                     })
                     .replace(",", ".")}
                 </div>
                 {item.originalPrice !== item.price && item.originalPrice !== 0 && (
                 <div className="text-left text-xs pl-1 line-through text-gray-400"
                 style={{
                   display: "-webkit-box",
                   WebkitLineClamp: 1,
                   WebkitBoxOrient: "vertical",
                   overflow: "hidden",
                 }}
                 >
                   Rp
                   {item.originalPrice
                     .toLocaleString("id-ID", {
                       minimumFractionDigits: 0,
                       maximumFractionDigits: 0,
                     })
                     .replace(",", ".")}
                 </div>
               )}
               </div>

               <div className="flex justify-between  items-center">
                 <div className="truncate text-center w-full flex justify-left items-center">
                   <div className="pe-1">
                     <svg
                       className="w-3 h-3 text-yellow-400 dark:text-white"
                       aria-hidden="true"
                       xmlns="http://www.w3.org/2000/svg"
                       fill="currentColor"
                       viewBox="0 0 24 24"
                     >
                       <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                     </svg>
                   </div>
                   <div className="text-xs">{item.rating}</div>
                   <div className="pl-1 text-gray-400 text-xs ">
                     ({item.stock})
                   </div>
                 </div>
                 <div className="flex justify-end ">
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
                         className="rounded-full w-3.5 h-3.5 ml-1 flex items-center justify-center"
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
        </>
      );
    }
  }
  

  return (
    <>
      <div className="flex overflow-x-auto gap-2 px-2 text-xs font-bold scrollbar-hide">
        <Categories />
      </div>
      <div className="flex gap-2 overflow-x-auto mx-2 mt-5 scrollbar-hide"   ref={productContainerRef}>
        {loadingAllProduct ? (
          <div className="flex flex-col justify-center w-full items-center py-4">
            <RingLoader color="#0000ff" size={30} />{" "}
            <div className="text-xs text-gray-500 pt-3">loading products..</div>
          </div>
        ) : (
          <BoxProduct />
        )}
      </div>
    </>
  );
}
