import back from "../../../../assets/previous.svg";
import Logo from "../../../../assets/LG_unnis_green.svg";
import search from "../../../../assets/search.svg";
import skincare from "../../../../assets/skincare.svg";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProductCategory } from "../../../../Store/Actions/Actions";
import {BarLoader} from 'react-spinners'

function NewPage() {
  const productCategory = useSelector(
    (state) => state.ReducerProductCategory.productCategory
  );
  const loading = useSelector((state)=> state.ReducerProductCategory.loading)

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductCategory());
  }, []);
  // const category = []
  // category.push(productCategory.data)
  // console.log(category, "<<<>>>");
  const modal = productCategory?.data ? Object.keys(productCategory?.data) : []
  console.log(modal, "<< ini modal");
  function CategoryProduct() {
    return (
      <>
      { modal.map((el)=> {
        console.log(el, "ini el <<");
        return (
        <div
          className="bg-[#DEE2E6] rounded-lg py-1 px-2 text-center justify-center items-center gap-4"
          style={{ textAlign: "-webkit-center" }}
        >
          <img src={skincare} className="w-8 h-8" />
          <div>
            <p>{el}</p>
          </div>
        </div>
        )
      })
      }
      </>
    );
  }
  return (
    <>
      <div className="absolute top-0 w-full bg-white px-5">
        <div className="text-[#343A40] bg-white pb-3 z-20 ">
          <div className="flex justify-between sticky ">
            <div className="self-center">
              <img src={back} className="w-full" />
            </div>
            <div className="self-center">
              <img src={Logo} className="w-full" />
            </div>
            <div className="self-center">
              <img src={search} className="w-full" />
            </div>
          </div>
          <div className="flex px-5 pt-3 gap-3 max-w-screen overflow-x-auto">
            { loading ? (<BarLoader color="#0000ff"/>) : (
              <CategoryProduct/>
            )
            }
          </div>
          <div></div>
        </div>
        <div></div>
      </div>
    </>
  );
}

export default NewPage;
