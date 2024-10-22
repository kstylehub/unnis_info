import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function DetailProductPostReview() {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    const body = {
      idMember: 5691,
      idProduct: +id,
    };
    // dispatch(getDetailProduct(body));
    // dispatch(getAllProductWithPagination());
  }, [id, dispatch]);
  const getUser = useSelector((state) => state.ReducerUser.dataUser);

  const dataToMap = Array.isArray(getUser?.dataMember)
    ? getUser?.dataMember
    : [getUser?.dataMember];
  const memberId = dataToMap.length > 0 ? dataToMap[0]?.id : null;
  return <>Create Review</>;
}

export default DetailProductPostReview;
