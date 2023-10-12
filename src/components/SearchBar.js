import { Link } from "react-router-dom";
import {restaurants} from "../../config"

const SearchBar = () => {
  return (
    <div className="mt-[100px] flex  justify-center">
      <div className="flex flex-col  w-[1000px] ">
        <div className=" mx-auto relative justify-center">
          <input
            type="text"
            className=" border-[1px] italic appearance-none w-[1000px] border-solid border-gray-300 h-10 rounded-md px-3 "
            placeholder="Let's Heist food..."
            // value={}
            onChange={(e) => {
              // onSubmit={submitSearch}
            }}
          ></input>
          <span className=" absolute  -translate-x-[30px] mt-[6px]">
            {" "}
            <svg
              className="text-dec  mt-[3px]"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="17"
              fill="#8C8E98"
              height="17"
              viewBox="5 -1 12 25"
            >
              <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"></path>
            </svg>
          </span>
        </div>
        {/* after Search bar */}
        <div className="ml-6">
          <div className="mt-10 ">
            <h1 className="text-[#3D4152] font-bold">Recent Searches</h1>
            {/* show Recent searches by map */}
          </div>
          {/* Popular Cuisines */}
          <div className="mt-[100px] ">
            <h1 className="text-[#3D4152] font-bold">Popular Cuisines</h1>
            {/* list of poupular cusines */}
            <div className="flex flex-wrap">

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
