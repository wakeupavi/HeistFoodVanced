import React from "react";
import Burger from "../assets/Burger.png.png";
import Biryani from "../assets/Biryani.png.png";
import Thali from "../assets/Thali.png";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

const LandingPage = () => {
  return (
    <div className="bg-white min-h-screen  relative flex m-[50px] mt-[100px] justify-center">
      <div className="  flex fixed flex-col md:flex-row justify-between">
        {/* Left Part */}
        <div className="m-7 flex flex-col w-full md:w-1/2">
          <h1 className="sm:text-3xl md:text-5xl 2xl:text-7xl font-bold text-orange-600">
            Heist <span className="text-black">INN</span>
          </h1>
          <h1 className="sm:text-3xl md:text-5xl 2xl:text-7xl font-bold">
            <span className="text-black text-7xl font-bold">
              The <span className="text-orange-600">Art</span> Of Satisfying Cravings
            </span>
          </h1>
          <div className="text-2xl m-3 font-italic font-bold flex flex-col gap-3">
            <p>Discover a wide range of cuisines and restaurants in your area</p>
            <p>Ordering your favorite meals is just a few clicks away</p>
            <p>Enjoy fast and reliable delivery to your doorstep</p>
            <p>Ready to satisfy your cravings?</p>
          </div>
          <Link to="/home">
            <button className="bg-orange-600 w-72 h-16 p-2 font-bold text-white text-3xl mt-5">
              Let's Heist
            </button>
          </Link>
        </div>
        {/* Right part */}
        <div className="flex ">
          <div className="flex flex-col mt-1 items-center">
            <img className=" w-[300px] h-[300px] " src={Biryani} alt="Biryani" />
            <img className="mt-6 w-[300px] h-[300px] " src={Thali} alt="Thali" />
          </div>
          <img className= "sm:w-[100px] sm:h-[200px] xl:w-[300px] xl:h-[630px]" src={Burger} alt="Burger" />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;


// const LandingPage = () => {
//   return (
//     <div className="bg-white min-h-screen relative flex m-[50px] mt-3 justify-center">
//       <div className="m-7 md:shrink-0 flex fixed top-[50px] sm:max-w-[30vw] md:max-w-[50vw] lg:w-[80vw] justify-between">
//         {/*left Part  */}
//         <div  className=" flex flex-col">
//           <h1 className="sm:text-[30px] md:text-[50px] 2xl:text-[70px] font-bold text-orange-600"> Heist <span className="text-black">INN</span></h1>
//           <h1 className=" sm:text-[30px] md:text-[50px] 2xl:text-[70px] font-bold"><span className="text-black text-[70px] font-bold"> The <span className="text-orange-600">Art</span> Of Satisfying Cravings </span></h1>
//           <div className="text-[20px] font-italic font-bold flex flex-col gap-3">
//           <p>Descover a wide range of cuisines and restaurants in your are</p>
//           <p>Oredering your favourite meals is just a few clicks away</p>
//           <p>Enjoy fast and reliable delivery to your doorstep</p>
//           <p>Ready to satisfy your cravings?</p>
//           </div>
//           <Link to="/home">
//           <button className="bg-orange-600 flex w-[300px] h-[50px] p-2 font-bold text-white text-[30px] mt-5 justify-center items-center ">Let's Heist</button>
//           </Link>

//         </div>
//        {/* Right part */}

//         <div className=" flex ">
//           <div className="flex flex-col mt-10 items-center ">
//             <img classname="  " src={Biryani}></img>
//             <img className=" mt-6" src={Thali}></img>
//           </div>
//           <img className="w-[300px] h-[630px]" src={Burger}></img>
         
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LandingPage;








// <div className="w-[50%]  ">
// <div className="">
// <TypeAnimation className="flex flex-wrap max-h-[30px]"
//    sequence={["Welcome to HeistINN",1000,
   
//  ]}
//    wrapper="span"
//    speed={50}
//    style={{text:"bold", fontSize: "5rem",fontWeight:"bold",display:"flex",flexDirection:"column" ,flexWrap:'wrap',alignItems:'flex-start', color: "black", display: "inline-block" }}
//    repeat={100}
//    cursor={false}
//    omitDeletionAnimation={false}
   
//  />
// </div>
//  <h1 className="text-red-800 text-[30px] font-italic font-bold">Heist the food online</h1>
// </div>