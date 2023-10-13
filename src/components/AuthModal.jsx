import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { useSelector, useDispatch } from "react-redux";
import { setModal } from "../utils/Slices/ShowModal";
const AuthModal = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const showModal = useSelector((store) => store.modal.showModal);
  const dispatch = useDispatch();

  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);

  const toggleAuthType = () => {
    setIsSignUp(!isSignUp);
  };

  return createPortal(
   <div className="container">
     <div className="fixed opacity-5  inset-0 flex items-center justify-center ">
      <div className="bg-white p-6 rounded shadow-lg w-80">
        <h2 className="text-2xl mb-4">{isSignUp ? "Sign Up" : "Login"}</h2>

        <form>
          <button onClick={() => dispatch(setModal(false))}>Close</button>
          {/* Common form fields for both Sign Up and Login */}
          <div className="mb-4">
            <label className="block mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border rounded"
              placeholder="Email"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-2 border rounded"
              placeholder="Password"
            />
          </div>

          {isSignUp && (
            <div className="mb-4">
              <label className="block mb-2" htmlFor="confirm-password">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirm-password"
                className="w-full p-2 border rounded"
                placeholder="Confirm Password"
              />
            </div>
          )}

          {/* Action buttons */}
          {/* <div className="mb-4">
            <button className="bg-blue-500 text-black p-2 w-full rounded">
              {isSignUp ? "Sign Up" : "Login"}
            </button>
          </div> */}

          <div>
            <div>{isSignUp ? <h1>Sign Up</h1> : <h1>login</h1>}</div>
          </div>
          {/* Toggle between Sign Up and Login */}
          <p className="text-center">
            {isSignUp ? "Already have an account? " : "Don't have an account? "}
            <span
              className="text-blue-500 cursor-pointer"
              onClick={toggleAuthType}
            >
              {isSignUp ? "Log in" : "Sign up"}
            </span>
          </p>
        </form>
      </div>
    </div>
   </div>,
    document.querySelector(".modalDiv")
  );
};

export default AuthModal;
