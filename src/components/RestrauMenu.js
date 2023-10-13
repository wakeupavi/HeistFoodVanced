import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../../config";
import Shimmer from "./Shimmer";
import { useRestaurant } from "../utils/useRestaurant";
import { useState } from "react";
import ItemMenu from "./ItemMenu";
import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";
import { GrStar } from "react-icons/gr";
import { HiClock, HiOutlineCurrencyRupee } from "react-icons/hi";

const RestrauMenu = () => {
  const { resId } = useParams();
  const [show, setShow] = useState(false);

  const { restaurant, category } = useRestaurant(resId);

  //   console.log(params);
  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="flex flex-col mt-[80px] w-[800px] mx-auto mb-[100px]">
      <div className="flex w-[800px] justify-between ">
        <div className="flex flex-col">
          <h1 className="text-[#282C3F]  text-[20px] font-sans font-[600]">
            {restaurant?.name}
          </h1>
          <h4 className="text-[13px] font-[300px] text-[#7e808c] ">
            {restaurant?.cuisines.join(" , ")}
          </h4>
          <div className="text-[13px] font-[300px] text-[#7e808c]">
            {restaurant?.areaName}
            {" , "}
            {restaurant?.sla?.lastMileTravelString}
          </div>
          <h1 className="text-[13px] font-[300px] text-[#7e808c] mt-4">
            Far({restaurant?.sla?.lastMileTravelString}){" |  "}Additional
            delivery fee will apply
          </h1>
        </div>
        <div className="flex flex-col w-[80px] p-[6px]  h-[70px] justify-between items-center border-2 border-gray-300 shadow-[#f9f9f9] text-center rounded-[6px]">
          <div
            className="flex font-[400] translate-y-[-4px] translate-x-[-2px] text-green-700 items-center
             "
          >
            <div className="mt-2"><GrStar /></div>
            <h1 className="font-bold mt-2">{restaurant?.avgRating}</h1>
          </div>
          <h1 className="w-full h-[1px] bg-slate-800"></h1>
          <h1 className="text-[8px] font-sans font-semibold">
            {restaurant?.totalRatingsString}
          </h1>
        </div>
      </div>
      {/* Dotted Line */}
      <div className="w-[800px] mt-6  border-dotted border[1.5px] h-[1px] bg-[#7e808c]"></div>
      <div className="w-full flex gap-4 h-[40px]">
        <h1 className=" w-[100px] flex h-[20x] gap-2 items-center text-[15px] font-[700] text-[#3e4152]  ">
          <div className="text-[25px]">
            <HiClock />
          </div>
          {"33 MINS"}
        </h1>
        <h1 className="flex items-center text-[15px] font-[700] gap-2 text-[#3e4152] ">
          <div className=" text-[25px]">
            <HiOutlineCurrencyRupee />
          </div>
          <h1>{restaurant?.costForTwoMessage}</h1>
        </h1>
      </div>

      {/* line */}
      <div className="w-[800px] mt-6  border-dotted border[1.5px] h-[1px] bg-[#7e808c]"></div>

      <div className="flex mt-[50px] ">
        <div className="">
          <ul>
            {category?.map((cate, index) => {
              return (
                <div className=" max-w-[800px] ">
                  <div
                    className="m-6 flex -mb-[2px]  max-w-[800px] relative "
                    key={index}
                  >
                    <button
                      onClick={() => {
                        show ? setShow(false) : setShow(true);
                      }}
                      className=" text-[18px] font-[800] font-sans text-[#3e4152]  flex    h-[40px]  w-[800px]  "
                    >
                      {cate?.card?.card?.title} {"("}
                      {cate?.card?.card?.title?.length}
                      {")"}
                    </button>
                    <button  onClick={() => {
                        show ? setShow(false) : setShow(true);
                      }} className="absolute rounded-md p-[2px] text-gray-700  -translate-x-[20px] ml-[760px] mt-1 flex justify-center items-center">
                      {!show ? <BiSolidDownArrow /> : <BiSolidUpArrow />}
                    </button>
                  </div>
                  <div className="w-[800px]    h-[15px] bg-[#F1F1F6]"></div>


                  {show && <ItemMenu itemCard={cate?.card?.card?.itemCards} />}
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RestrauMenu;

// within return
// <li key={index}>
// <h1 className=" text-3xl font-bold">{cate?.card?.card?.title}</h1>
// {cate?.card?.card?.itemCards.map((item, index) => {
//   return (
//     <div key={index}>
//       <span>
//         <h2 className="font-bold">{item?.card?.info?.name}</h2>
//       </span>
//       <span>
//         {" "}
//         - ₹
//         {item?.card?.info?.price
//           ? item?.card?.info?.price / 100
//           : item?.card?.info?.defaultPrice / 100}
//       </span>
//       <p>{`${item?.card?.info?.description}`}</p>
//     </div>
//   );
// })}
// </li>
