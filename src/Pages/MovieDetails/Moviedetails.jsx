import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiFetchById } from "../../functions/GetMovieList";
import "./moviedetails.css";

const Moviedetails = () => {
  const { id } = useParams();
  // console.log(id);
  const [movies, setMoviesFromApi] = useState(null);

  useEffect(() => {
    apiFetchById(id, setMoviesFromApi);
  }, [id]);

  return (
    <div className="movieDetailsContainer">
      {console.log(movies)}
      <div className="movieImageContainer">
        <img
          src={`https://image.tmdb.org/t/p/original/${
            movies && movies.backdrop_path
          }`}
        />
        <div className="lastImageContsiner"></div>
        
      </div>
      <div className="finalTrial">
          <div className="trial">
          <img
          src={`https://image.tmdb.org/t/p/original/${
            movies && movies.poster_path
          }`}
        />
          </div>

          <div className="movieFullDetails">
            <h2 className="movieTitle">{movies && movies.title}</h2>
            <p>
              Status: <span>{movies && movies.status}</span>
            </p>
            <p>
              Release Date: <span>{movies && movies.release_date}</span>{" "}
            </p>
            <p>
              RumTime: <span> {movies && movies.runtime} min</span>{" "}
            </p>

            <p className="languages">
              Languages:
              {movies &&
                movies.spoken_languages.map((ele) => {
                  return <>{<span>{`${ele.english_name} `}</span>}</>;
                })}
            </p>
            <p className="languages">
              Genres:
              {movies &&
                movies.genres.map((ele) => {
                  return <>{<span>{`${ele.name} `}</span>}</>;
                })}
            </p>

            <p>
              Rating: <span>{movies && movies.vote_average.toFixed(1)}</span>{" "}
            </p>
            <p>
              Description: <span>{movies && movies.overview}</span>
            </p>
          </div>
        </div>
    </div>
  );
};

export default Moviedetails;
