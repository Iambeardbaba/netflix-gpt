import React from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = React.useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute w-screen h-screen -z-10">
        <img
          className="w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/d482944d-eab4-4a64-89c9-a07a508a6e42/web/IN-en-20250929-TRIFECTA-perspective_4cf0c8a1-bd35-4d72-a49f-165021531dde_large.jpg"
          alt="Background Image"
        ></img>
      </div>
      <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white flex flex-col bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-6 my-4 w-full bg-gray-400 bg-opacity-15 rounded border border-white font-bold"
          />
        )}
        <input
          type="text"
          placeholder="Email or Mobile Number"
          className="p-6 my-4 w-full bg-gray-400 bg-opacity-15 rounded border border-white font-bold"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-6 my-4 w-full bg-gray-400 bg-opacity-15 rounded border border-white font-bold"
        />

        <button className="p-6 my-6 bg-red-600 w-full rounded text-xl font-bold">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
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
