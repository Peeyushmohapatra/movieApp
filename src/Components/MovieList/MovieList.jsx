import { useContext } from "react";
import { useParams } from "react-router-dom";
import { GlobalData } from "../../App";
import Moviecard from "../MovieCard/Moviecard";
import "./movielist.css";

const MovieList = () => {
  const context = useContext(GlobalData);
  // console.log(context);
  const { category } = useParams();
  // console.log(allMovies);
  // popular
  // top_rated
  // upcoming
  return (
    <div className="movielist">
      <h2 className="location">{category && category.toUpperCase()}</h2>
      <div className="movie_list">
        <Moviecard
          allMovies={
            category === "popular"
              ? context.popularMoviesFromApi
              : category === "top_rated"
              ? context.topRatedMoviesFromApi
              : category === "upcoming"
              ? context.upcomingMoviesFromApi
              : context.data.length !== 0
              ? [...context.data]
              : [
                  ...context.popularMoviesFromApi,
                  ...context.topRatedMoviesFromApi,
                  ...context.upcomingMoviesFromApi,
                ]
          }
        />
      </div>
    </div>
  );
};

export default MovieList;
