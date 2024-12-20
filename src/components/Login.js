import React, { useState, useRef } from "react";
import Header from "./Header";
import checkValidData from "../utils/validate";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword} from "firebase/auth";

const Login = () => {
  const [isSignIn, setisSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const email = useRef(null);
  const password = useRef(null);
  const fullName = useRef(null);

  const handleSignup = () => {
    setisSignIn(!isSignIn);
    setErrorMessage(" ");
  };
  const signInClicked = () => {
    if (!isSignIn && !fullName.current.value) {
      setErrorMessage("Name is required");
    } else if (isSignIn) {
      setErrorMessage(
        checkValidData(email.current.value, password.current.value)
      );
    }
    //if (errorMessage!==" ") return;
    if (!isSignIn) {
      //signup
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          //const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage)
        });
    } else {
      signInWithEmailAndPassword(auth,email.current.value,password.current.value)
      .then((userCredential) =>{
      })
      .catch((error)=>{
        setErrorMessage(error.errorCode+error.errorMessage)
        
      })
    }
  };

  return (
    <div className="">
      <Header />
      <div className="relative">
        <img
          className="absolute h-screen object-cover w-full"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/bfc0fc46-24f6-4d70-85b3-7799315c01dd/web/CA-en-20240923-TRIFECTA-perspective_203cfc5e-4e7e-44d2-9d3b-b5220419cbd6_large.jpg
"
          alt="background-img"
        />
        <form
          onSubmit={(e) => e.preventDefault()}
          className=" text-white w-full md:w-3/12 m-10 p-10 bg-black absolute z-10 my-36 mx-auto right-0 left-0 bg-opacity-50"
        >
          <h1 className="text-3xl font-bold py-4">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignIn && (
            <input
              ref={fullName}
              type="text"
              placeholder="Full Name"
              className="p-4 my-4 w-full rounded-lg bg-gray-200 text-black"
            />
          )}
          <input
            ref={email}
            type="text"
            placeholder="Email address or phone number"
            className="p-4 my-4 w-full rounded-lg bg-gray-200 text-black"
          />
          <input
            ref={password}
            type="password"
            placeholder="password"
            className="p-4 my-4 w-full rounded-lg bg-gray-200 text-black"
          />
          <p className="text-red-600">{errorMessage}</p>
          <button
            onClick={signInClicked}
            className="my-2 p-2 bg-red-700 w-full rounded-lg"
          >
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>
          <p className="py-4 underline cursor-pointer" onClick={handleSignup}>
            {" "}
            {isSignIn
              ? "New to Netflix? Sign Up Now"
              : "Already a user ? Sign In Now"}{" "}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
