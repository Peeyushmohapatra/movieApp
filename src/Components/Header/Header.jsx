import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="headerLogo">
        <Link className="link" to="/">
          <h3 className="logo">Movie App</h3>
        </Link>
        <div className="inputContainer">
            <input placeholder="Search Here" type="text" />
            <button>Search</button>
        </div>
      </div>
      <div className="headerRight">
        <Link className="link" to="/movies/popular">Popular</Link>
        <Link className="link" to="/movies/top_rated">Top Rated</Link>
        <Link className="link" to="/movies/upcoming">Upcoming</Link>
      </div>
    </div>
    
  );
};

export default Header;
