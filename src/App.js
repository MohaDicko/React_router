// App.js
import React, { useState } from "react";
import MovieDetail from "./component/MovieDetail";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { MovieData } from "./MoviesData";
import Home from "./component/Home";

const App = () => {
  return (
    <div className="app">
      <h1>Movie Library</h1>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/description/:id"
            element={<MovieDetail movies={MovieData} />}
          />
          <Route path="*" element={"error 404 page not found"} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
