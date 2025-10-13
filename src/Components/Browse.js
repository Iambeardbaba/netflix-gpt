import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
      {/* Educational Disclaimer Banner */}
      <div className="fixed top-0 w-full bg-yellow-100 text-red-500 text-center py-2 z-30 font-bold">
        🎓 EDUCATIONAL DEMO PROJECT - NOT AFFILIATED WITH NETFLIX
      </div>
      {/* Main content area with proper spacing */}
      <div className="pt-24">{/* Future movie content will go here */}</div>
    </div>
  );
};

export default Browse;
