import Logo from "../assets/HeistINN.png";
import { BsBag } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    //  top level div
    <div className="w-full sticky top-0 flex z-10 ">
      <div className="header w-full sticky top-0 flex  justify-center ">
        <div className="w-[1200px] flex justify-between items-center">
          <div className="flex  ">
            <img className="" alt="logo" src={Logo} width={100} height={50} />
          </div>
          <div className="flex text-dec ">
            <ul className="flex gap-14">
              <Link to="/search">
                <li>
                  <a className=" flex -translate-x-[8px] ">
                    <span className=" -translate-x-[4px]">
                      {" "}
                      <svg
                        className="text-dec  mt-[3px]"
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="17"
                        fill="#686b7"
                        height="17"
                        viewBox="5 -1 12 25"
                      >
                        <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"></path>
                      </svg>
                    </span>
                    <span>Search</span>
                  </a>
                </li>
              </Link>
              <li>About Us</li>
              <li>Contact Us</li>
              <li className="">
                <a className=" flex gap-1">
                  {" "}
                  <div className=" text-2xl font-light">
                    {" "}
                    <CgProfile />{" "}
                  </div>{" "}
                  <span className="">Sign In</span>{" "}
                </a>
              </li>
              <li>
                <a className="flex gap-1">
                  <div className="text-xl">
                    <BsBag />
                  </div>
                  <span className="">Cart</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* <div className="black-header w-full h-[500px] bg-black"></div> */}
      </div>
      {/* <div className="black-header w-full h-[500px]  bg-black"></div> */}
    </div>
  );
};

export default Header;
