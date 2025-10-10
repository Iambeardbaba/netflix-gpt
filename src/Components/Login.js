import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidateData } from "../Utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../Utils/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState("");
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleButtonClick = () => {
    //console.log(email);
    //console.log(password);
    const message = checkValidateData(
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);
    // console.log(email.current.value);
    // console.log(password.current.value);
    //console.log(message);

    if (message) return;

    //sign in sign up logic
    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://avatars.githubusercontent.com/u/82806859?v=4",
          })
            .then(() => {
              // Manually dispatch updated user data to Redux
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(addUser({ 
                uid: uid, 
                email: email, 
                displayName: displayName, 
                photoURL: photoURL 
              }));
              navigate("/Browse");
            })
            .catch((error) => {
              setErrorMessage(errorMessage);
            });

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      //sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // Update profile with your photo even for existing users
          updateProfile(user, {
            photoURL: "https://avatars.githubusercontent.com/u/82806859?v=4",
          }).then(() => {
            // Manually dispatch updated user data to Redux
            const { uid, email, displayName, photoURL } = auth.currentUser;
            dispatch(addUser({ 
              uid: uid, 
              email: email, 
              displayName: displayName, 
              photoURL: photoURL 
            }));
            console.log(user);
            navigate("/Browse");
          }).catch((error) => {
            console.log(user);
            navigate("/Browse"); // Navigate even if profile update fails
          });
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10">
        <img
          className="w-44"
          src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-08-26/consent/87b6a5c0-0104-4e96-a291-092c11350111/0198e689-25fa-7d64-bb49-0f7e75f898d2/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="Netflix_Logo"
        />
      </div>
      <div className="absolute w-screen h-screen -z-10">
        <img
          className="w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/d482944d-eab4-4a64-89c9-a07a508a6e42/web/IN-en-20250929-TRIFECTA-perspective_4cf0c8a1-bd35-4d72-a49f-165021531dde_large.jpg"
          alt="Background Image"
        ></img>
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute p-12 bg-black top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white flex flex-col bg-opacity-80 max-h-screen overflow-y-auto"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-6 my-3 w-full bg-gray-400 bg-opacity-15 rounded border border-white font-bold text-lg font-sans"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email or Mobile Number"
          className="p-6 my-3 w-full bg-gray-400 bg-opacity-15 rounded border border-white font-bold text-lg font-sans"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-6 my-3 w-full bg-gray-400 bg-opacity-15 rounded border border-white font-bold text-lg font-sans"
        />
        {!isSignInForm && (
          <input
            type="password"
            placeholder="Confirm Password"
            className="p-6 my-3 w-full bg-gray-400 bg-opacity-15 rounded border border-white font-bold text-lg font-sans"
          />
        )}
        <p className="text-red-500 text-lg font-bold py-2">{errorMessage}</p>
        <button
          className="p-3 my-4 bg-red-600 w-full rounded-md text-xl font-bold"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        {isSignInForm && (
          <h1 className="text-xl text-gray-300 text-center">OR</h1>
        )}
        {isSignInForm && (
          <button className="p-3 my-4 bg-gray-600 w-full rounded-md text-xl font-bold bg-opacity-60">
            {isSignInForm ? "Use a sign-in code" : "Use a sign-in code"}
          </button>
        )}
        {isSignInForm && (
          <h1 className="text-xl text-white text-center underline">
            Forget password?
          </h1>
        )}
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign up now."
            : "Already registered? Sign In Now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
