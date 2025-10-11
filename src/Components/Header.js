import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../Utils/userSlice";
import { useEffect } from "react";
import { LOGO } from "../Utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/Browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    //unsubscribe the listener on unmount
    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between" style={{ top: '48px' }}>
      <img className="w-44" src={LOGO} alt="Netflix GPT Demo Logo"></img>
      {user && (
        <div className="flex p-2">
          <img
            className="w-12 h-12 mx-4 rounded"
            alt="usericon"
            src={
              user.photoURL ||
              "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg"
            }
          />
          <button
            onClick={handleSignOut}
            className="font-bold text-white mx-2 border border-slate-400 w-20 h-11 rounded-lg bg-slate-300"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
