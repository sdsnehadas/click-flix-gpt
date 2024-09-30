import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn , setisSignIn] = useState(true);
  const handleSignup = () =>{
    setisSignIn(!isSignIn)
  }
  return (
    <div className="">
      <Header />
      <div className="relative">
        <img
          className="absolute"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/bfc0fc46-24f6-4d70-85b3-7799315c01dd/web/CA-en-20240923-TRIFECTA-perspective_203cfc5e-4e7e-44d2-9d3b-b5220419cbd6_large.jpg
"
          alt="background-img"
        />
          <form className=" text-white w-3/12 m-10 p-10 bg-black absolute z-10 my-36 mx-auto right-0 left-0 bg-opacity-80">
            <h1 className="text-3xl font-bold py-4">{isSignIn? "Sign In" : "Sign Up"}</h1>
            {!isSignIn && <input
              type="text"
              placeholder="Full Name"
              className="p-4 my-4 w-full rounded-lg bg-gray-200"
            />}
            <input
              type="text"
              placeholder="Email address or phone number"
              className="p-4 my-4 w-full rounded-lg bg-gray-200"
            />
            <input type="password" placeholder="password" className="p-4 my-4 w-full rounded-lg bg-gray-200" />
            <button className="my-2 p-2 bg-red-700 w-full rounded-lg">{isSignIn? "Sign In" : "Sign Up"}</button>
            <p className="py-4 underline cursor-pointer" onClick={handleSignup}> {isSignIn? "New to Netflix? Sign Up Now" : "Already a user ? Sign In Now"} </p>
          </form>
      </div>
    </div>
  );
};

export default Login;
