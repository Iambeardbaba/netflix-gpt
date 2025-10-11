import Header from "./Header";
import { API_OPTIONS } from "../Utils/constants";
import { useEffect } from "react";

const Browse = () => {
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?&page=1",
      API_OPTIONS
    );

    const json = await data.json();
    console.log(json.results);
  };
  useEffect(() => {
    getNowPlayingMovies();
  }, []);

  return (
    <div>
      <Header />
      {/* Educational Disclaimer Banner */}
      <div className="fixed top-0 w-full bg-yellow-500 text-black text-center py-2 z-30 font-bold">
        🎓 EDUCATIONAL DEMO PROJECT - NOT AFFILIATED WITH NETFLIX
      </div>
      {/* Main content area with proper spacing */}
      <div className="pt-24">
        {/* Future movie content will go here */}
      </div>
    </div>
  );
};

export default Browse;
