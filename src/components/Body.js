// import restaurants from "../../config";
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { RES_LIST_URL } from "../../config";
import { Link } from "react-router-dom";
import { filteredRes } from "../utils/helper";
import useOnline from "../utils/useOnline";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";
import CTAButton from "./Button/filterButton"

//   https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1119261&lng=79.0878065&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING

const Body = () => {
  const [searchText, setsearchText] = useState("");
  const [allRestaurant, setAllRestaurant] = useState([]);
  const [filterRestaurant, setFilterRestaurant] = useState([]);

//  function submitSearch() {
//     const data = filteredRes(searchText, allRestaurant);
//     setFilterRestaurant(data);
//   }

  useEffect(() => {
    console.log("Use Effect called");
    getRestraurant();
  }, []);

  async function getRestraurant() {
    console.log("get res called")
    const data = await fetch(RES_LIST_URL);
    const json = await data.json();
    const resData= json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
    ?.restaurants;
   

    console.log("All restau", resData);
    setAllRestaurant(resData);

    setFilterRestaurant(resData);
    // console.log(i);
    console.log("Filter Res", filterRestaurant);
  }

  const Online = useOnline();
  // console.log("online",isOnline)

  if (!Online) return <h1>You are offline</h1>;

  if (!allRestaurant) return <h1>API Changes Refresh it</h1>;

  console.log("render from body.js");

  // Conditional Rendering
  return allRestaurant?.length === 0 ? (
    <Shimmer />
  ) : (
    // <h1>Loading</h1>
    <div className="w-full bg-white flex justify-around relative">
    {/* <div className="black-header w-full h-[500px] bg-black"></div> */}
    <div className=" w-[1200px] h-[500px]  flex  mt-[100px]">
      <div className="flex flex-col gap-4 ">
        <h1 className="font-bold text-xl">Restaurants With Online Food Delivery In Bangalore</h1>
        {/* buttons */}

        <div className="flex gap-4">
          <div className="w-fit">
            <CTAButton active={true} linkto={"/signup"}>
              <div className="flex items-center gap-3">
                Fast Delivery
              </div>
            </CTAButton>
          </div>
          <div className="w-fit">
            <CTAButton active={true} linkto={"/signup"}>
              <div className="flex items-center gap-3">
                Price
              </div>
            </CTAButton>
          </div>
          <div className="w-fit">
            <CTAButton active={true} linkto={"/signup"}>
              <div className="flex items-center gap-3">
                Rating
              </div>
            </CTAButton>
          </div>
          <div className="w-fit">
            <CTAButton active={true} linkto={"/signup"}>
              <div className="flex items-center gap-3">
                Rs.300-Rs.400
              </div>
            </CTAButton>
          </div>
          <div className="w-fit">
            <CTAButton active={true} linkto={"/signup"}>
              <div className="flex items-center gap-3">
                Less than Rs.300
              </div>
            </CTAButton>
          </div>
        </div>

        {/* Restaurant card */}
       
      </div>
    </div>
  </div>
    
  );
};

export default Body;










// <div className="mt-10 mr-[100px] ml-[100px]  flex flex-col  items-center  ">
//       <div className="flex bg-white p-4 border w-[450px] border-red-300 rounded-xl justify-center z-10 sticky top-[90]  gap-2">
//         <div className="bg-white pr-1 border-[2px] border-solid border-red-900 rounded-full text-black w-[130px]  flex items-center justify-center">
//           <div className="text-red-500 ">
//             <FaMapMarkerAlt />
//           </div>
//           <h1 className="font-bold">Patna,Bihar</h1>
//         </div>
//         <div className=" ">
//           <input
//             type="text"
//             className=" border-[2px] italic appearance-none  border-solid border-red-900 w-90 rounded-full px-3 "
//             placeholder="Let's Heist food..."
//             value={searchText}
//             onChange={(e) => {
//               setsearchText(e.target.value);
//               const data=filteredRes(searchText,allRestaurant);
//               setFilterRestaurant(data);
//               // onSubmit={submitSearch}
//             }}
//           ></input>
//         </div>
//         {/* search button */}
//         <div className="bg-red-500 rounded-full transition-all  hover:bg-red-700 text-white w-20  flex  items-center">
//           <div className="px-1  ">
//             {" "}
//             <AiOutlineSearch />
//           </div>
//           <button
//             className="mb-1 "
//             onClick={()=>
//              { const data=filteredRes(searchText,allRestaurant);
//               setFilterRestaurant(data);}
//             }
//           >
//             Search
//           </button>
//         </div>
//       </div>

//       <div className="flex flex-col   ">
//         <div className="flex  mt-10 -gap-[10px] justify-center  flex-wrap">
//           {filterRestaurant.map((restaurant) => {
//             return (
//               <Link
//                 to={"/restaurant/" + restaurant.info.id}
//                 key={restaurant.info.id}
//               >
//                 <RestaurantCard {...restaurant.info} />
//               </Link>
//             );
//           })}
//         </div>
//       </div>
//     </div>