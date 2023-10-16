import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";


const SignUp = () => {


  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.info("Account Created", {
      position: toast.POSITION.TOP_CENTER
  })
    const { firstName, lastName, email, password, confirmPassword } = formData;
    
    
    console.log(formData);
    navigate("/login")
   
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96 max-h-screen overflow-hidden">
        <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <div className="mb-4">
            <label htmlFor="firstName" className="block text-gray-700 font-medium">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="lastName" className="block text-gray-700 font-medium">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block text-gray-700 font-medium">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
          >
            Sign Up
          </button>
          <h1 className='flex justify-center '>Already have an account   <button onClick={()=>navigate("/login")} className='text-blue-600'>Log In</button></h1>
        </form>
      </div>
    </div>
  );
};

export default SignUp;




























// import React from "react";
// import { useState } from "react";

// const SignUp = () => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });

//   function changeHandler(event) {
//     setFormData((prevData) => ({
//       ...prevData,
//       [event.target.name]: event.target.value,
//     }));
//   }

//   const submitHandler = (e) => {
//     e.preventDefault();

//     const { firstName, lastName, email, password, confirmPassword } = formData;

//     console.log("Submitted Data:", {
//       firstName,
//       lastName,
//       email,
//       password,
//       confirmPassword,
//     });

//     dispatch(setUser(firstName));
//     console.log("loggedIn User", User);
//   };

//   return (
//     <div>
//       {" "}
//       <form onSubmit={submitHandler}>
//         {/* Common form fields for both Sign Up and Login */}
//         {/* First Name */}

//         {
//           <div className="mb-4">
//             <label className="block mb-2" htmlFor="firstName">
//               First Name
//             </label>
//             <input
//               required
//               type="firstName"
//               name="firstName"
//               value={formData.firstName}
//               onChange={changeHandler}
//               id="firstName"
//               className="w-full p-2 border rounded"
//               placeholder="First Name"
//             />
//           </div>
//         }
//         {/* Last Name */}
//         {
//           <div className="mb-4">
//             <label className="block mb-2" htmlFor="lastName">
//               Last Name
//             </label>
//             <input
//               // required
//               type="lastName"
//               name="lastName"
//               value={formData.lastName}
//               onChange={changeHandler}
//               id="lastName"
//               className="w-full p-2 border rounded"
//               placeholder="Last Name"
//             />
//           </div>
//         }

//         {/* Email */}
//         <div className="mb-4">
//           <label className="block mb-2" htmlFor="email">
//             Email
//           </label>
//           <input
//             // required
//             value={formData.email}
//             name="email"
//             onChange={changeHandler}
//             type="email"
//             id="email"
//             className="w-full p-2 border rounded"
//             placeholder="Email"
//           />
//         </div>

//         {/* Password */}
//         <div className="mb-4">
//           <label className="block mb-2" htmlFor="password">
//             Password
//           </label>
//           <input
//             // required
//             value={formData.password}
//             name="password"
//             onChange={changeHandler}
//             type="password"
//             id="password"
//             className="w-full p-2 border rounded"
//             placeholder="Password"
//           />
//         </div>
//         {/* Confirm Password */}

//         <div className="mb-4">
//           <label className="block mb-2" htmlFor="confirm-password">
//             Confirm Password
//           </label>
//           <input
//             // required
//             value={formData.confirmPassword}
//             name="confirmPassword"
//             onChange={changeHandler}
//             type="password"
//             id="confirm-password"
//             className="w-full p-2 border rounded"
//             placeholder="Confirm Password"
//           />
//         </div>

//         <button>SignUp</button>
//       </form>
//     </div>
//   );
// };

// export default SignUp;
