import React, { useEffect, useState } from "react";
import {  onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { toggleGPTSearch } from "../utils/GptSlice";
import { removeGptSearchResults } from "../utils/movieSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [signedIn, setsignedIn] = useState(false);
  const showGPTSearch = useSelector(store=>store.gpt.showGPTSearch)

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const{ uid ,email, displayName}= user;
        dispatch(addUser({uid:uid,email:email, displayName:displayName}))  
        setsignedIn(true);
        navigate('/browse');
      } else {
        dispatch(removeUser());
        setsignedIn(false);
        navigate('/')
        // User is signed out
        // ...
      }

      return ()=>unsubscribe();    
    });
  },[])

 

  const handleSignOut = () =>{
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }

  const handleGPTSearch = () =>{
   dispatch(toggleGPTSearch());
   dispatch(removeGptSearchResults());
  }

  return (
    <div className="w-screen absolute px-8 py-4 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
      <img
        className="w-48"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="netflix-logo"
      />
      {signedIn && <div className="flex ml-0 justify-start">
        <button className="text-amber-50 rounded-md bg-purple-600 w-24 h-12 mt-4" onClick={handleGPTSearch}>{showGPTSearch? 'Go to Home' :'GPT Search'}</button>
        <img
          className="w-12 h-12 m-4"
          alt="user-icon"
          src="https://occ-0-1169-1723.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABV7uLegi1BOvEneuUG7DavpEkdlHLuUEXmby2jgEA7n8V5LgcFu1o-NlMgJFznEX3Qt8-q7_t8ejt22-fz9LP_lJM6OKNQRpOA.png?r=201
"
        />
        <button className="text-amber-50 rounded-md bg-red-600 w-24 h-12 mt-4" onClick={handleSignOut}>Sign Out</button>
{/* l        <div>
          <button data-dropdown-toggle="dropdown" className=""></button>
          <div id="dropdown" className="relative inline-block">
            <a href="#">Manage Profile</a>
            <a href="#">Acoount Settings</a>
            <a href="#">Sign Out</a>
          </div>
        </div> */}
      </div>}
    </div>
  );
};

export default Header;
