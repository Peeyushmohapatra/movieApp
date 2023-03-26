import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GlobalData } from "../../App";
import { findMovie } from "../../functions/GetMovieList";
import "./header.css";


// popularMoviesFromApi
// upcomingMoviesFromApi
// topRatedMoviesFromApi
const Header = () => {
  const context = useContext(GlobalData);

  // console.log(data);
  return (
    <div className="header">
      <div className="headerLogo">
        <Link className="link" to="/">
          <h3 className="logo">Movie App</h3>
        </Link>
        <div className="inputContainer">
          <input
            onChange={(e) => {
              findMovie(e,context.data,context.setData,context);
              console.log(context);
            }}
            placeholder="Search Here"
            type="text"
          />
          
        </div>
      </div>
      <div className="headerRight">
        <Link className="link" to="/movies/popular">
          Popular
        </Link>
        <Link className="link" to="/movies/top_rated">
          Top Rated
        </Link>
        <Link className="link" to="/movies/upcoming">
          Upcoming
        </Link>
      </div>
    </div>
  );
};

export default Header;
