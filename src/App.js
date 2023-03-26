import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import { useState, useEffect, createContext } from "react";
import { apiFetch } from "./functions/GetMovieList";
import MovieList from "./Components/MovieList/MovieList";
import Moviedetails from "./Pages/MovieDetails/Moviedetails";

// https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US

export const GlobalData = createContext();
function App() {
  const [popularMoviesFromApi, setPopularMoviesFromApi] = useState([]);
  const [upcomingMoviesFromApi, setUpcomingMoviesFromApi] = useState([]);
  const [topRatedMoviesFromApi, settopRatedMoviesFromApi] = useState([]);
  useEffect(() => {
    apiFetch(setPopularMoviesFromApi, "popular");
    apiFetch(settopRatedMoviesFromApi, "top_rated");
    apiFetch(setUpcomingMoviesFromApi, "upcoming");
  }, []);

  return (
    <GlobalData.Provider
      value={{
        popularMoviesFromApi: popularMoviesFromApi,
        upcomingMoviesFromApi: upcomingMoviesFromApi,
        topRatedMoviesFromApi: topRatedMoviesFromApi,
      }}
    >
      <div className="App">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="movie/:id" element={<Moviedetails />} />
            <Route path="movies/:category" element={<MovieList />} />

            <Route path="/*" element={<h1>Page Not Found</h1>} />
          </Routes>
        </Router>
      </div>
    </GlobalData.Provider>
  );
}

export default App;
