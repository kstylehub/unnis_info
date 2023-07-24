import { useDispatch, useSelector } from "react-redux";
import { getEvent } from "../../../../Store/Actions/Actions";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
function DetailEvent() {
  const { id } = useParams();

  const event = useSelector((state) => state.ReducerEventData.event);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEvent());
  }, []);
  const data = event?.dataEvent;

  const dataDetail = data?.filter((el) => {
    // console.log(el.id === parseInt(id))
    return el.id == id;
  });
  console.log(dataDetail, "ini data");
  function Display() {
    return (
      <>
        {dataDetail?.map((el) => {
          return (
            <div className="px-6 py-1 flex-justify space-y-1">
              <div className="font-sans text-lg mb-1">
                <h1>{dataDetail[0]?.title}</h1>
              </div>
              <div className="text-gray-700 text-m border-b-2 border-gray-500 w-auto">
                <h1>{dataDetail[0]?.subtitle}</h1>
              </div>
              <div className=" flex-col-2">
             <div className="font-sans text-sm mb-1">Periode Event</div>
             </div>
            </div>
          );
        })}
      </>
    );
  }
  return <Display />;
}

export default DetailEvent;
