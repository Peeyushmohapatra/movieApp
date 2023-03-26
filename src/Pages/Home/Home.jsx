import React, { useContext, useEffect, useState } from "react";
import "./home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { GlobalData } from "../../App";
import { Link } from "react-router-dom";
import MovieList from "../../Components/MovieList/MovieList";

const Home = () => {
  const context = useContext(GlobalData);
  // console.log(context);
  const [allMovies, setAllMovies] = useState([]);

  useEffect(() => {
    setAllMovies([
      ...context.popularMoviesFromApi,
      ...context.topRatedMoviesFromApi,
      ...context.upcomingMoviesFromApi,
    ]);
  }, [context]);

  // console.log(allMovies);
  return (
    <>
      <div className="home">
        <div className="poster">
          <Carousel
            autoPlay={true}
            infiniteLoop={true}
            transitionTime={3}
            showStatus={false}
            showThumbs={false}
          >
            {context.popularMoviesFromApi.map((ele) => {
              return (
                <>
                  <Link to={`/movie/${ele.id}`}>
                    <div className="posterImage">
                      <img
                        className="mainPosterImage"
                        src={`https://image.tmdb.org/t/p/original/${
                          ele && ele.backdrop_path
                        }`}
                        alt=""
                      />
                    </div>
                    <div className="posterImage_overlay">
                      <div className="posterImage_title">
                        {ele && ele.original_title}
                      </div>
                      <div className="posterImage_releasingDate_rating">
                        {ele && ele.release_date}
                        <span>{ele && ele.vote_average}</span>
                      </div>
                      <div className="posterImageDescription">
                        {ele && ele.overview}
                      </div>
                    </div>
                  </Link>
                </>
              );
            })}
          </Carousel>
          <MovieList />
        </div>
      </div>
    </>
  );
};

export default Home;
