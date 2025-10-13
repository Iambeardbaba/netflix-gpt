import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../Utils/constants";
import { addNowPlayingMovies } from "../Utils/movieSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?&page=1",
      API_OPTIONS
    );

    const json = await data.json();
    console.log(json.results);
    dispatch(addNowPlayingMovies(json.results));
  };
  
  useEffect(() => {
    getNowPlayingMovies();
  }, []);

  // Custom hooks typically return data or functions
  return null; // or return { movies, loading, error } if you want to return state
};

export default useNowPlayingMovies;
