// App.js
import React, { useState } from "react";
import MovieList from "./component/MovieList";
import Filter from "./component/Filter";
import MovieDetail from "./component/MovieDetail";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "The Wolf of Wall Street",
      description: "A mind-bending thriller",
      posterURL:
        "https://fr.web.img6.acsta.net/pictures/210/604/21060483_20131125114549726.jpg",
      rating: 4.5,
      trailerLink:
        "https://www.youtube.com/embed/Hgeu5rhoxxY?si=H5vkAhz2_j7b2SE8",
    },
    {
      id: 2,
      title: "Interstellar",
      description: "A space odyssey",
      posterURL:
        "https://toutelaculture.com/wp-content/uploads/2014/11/interstellar3-691x1024.jpeg",
      rating: 4.7,
      trailerLink:
        "https://www.youtube.com/embed/zSWdZVtXT7E?si=WT5xghDLGpNH7wj5",
    },
    {
      id: 3,
      title: "Creed",
      description: "A fighter",
      posterURL:
        "https://dx35vtwkllhj9.cloudfront.net/united-artists-releasing/creed-iii/images/regions/us/onesheet.jpg",
      rating: 5,
      trailerLink:
        "https://www.youtube.com/embed/AHmCH7iB_IM?si=-wuVsigxnL37jW0d",
    },
  ]);

  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    posterURL: "",
    rating: 0,
  });
  const [filterTitle, setFilterTitle] = useState("");
  const [filterRate, setFilterRate] = useState(0);

  const handleTitleChange = (e) => {
    setFilterTitle(e.target.value);
  };

  const handleRateChange = (e) => {
    setFilterRate(e.target.value);
  };

  const handleAddMovie = () => {
    setMovies([...movies, { ...newMovie, id: Date.now() }]);
    setNewMovie({ title: "", description: "", posterURL: "", rating: 0 });
  };

  const getFilteredMovies = () => {
    return movies.filter(
      (movie) =>
        movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
        movie.rating >= filterRate
    );
  };

  function Home() {
    return (
      <>
        <Filter
          title={filterTitle}
          rate={filterRate}
          onTitleChange={handleTitleChange}
          onRateChange={handleRateChange}
        />
        <MovieList movies={getFilteredMovies()} />
        <div className="add-movie">
          <h2>Add New Movie</h2>
          <input
            type="text"
            placeholder="Title"
            value={newMovie.title}
            onChange={(e) =>
              setNewMovie({ ...newMovie, title: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Description"
            value={newMovie.description}
            onChange={(e) =>
              setNewMovie({ ...newMovie, description: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Poster URL"
            value={newMovie.posterURL}
            onChange={(e) =>
              setNewMovie({ ...newMovie, posterURL: e.target.value })
            }
          />
          <input
            type="number"
            placeholder="Rating"
            value={newMovie.rating}
            onChange={(e) =>
              setNewMovie({ ...newMovie, rating: parseFloat(e.target.value) })
            }
          />
          <button onClick={handleAddMovie}>Add Movie</button>
        </div>
      </>
    );
  }

  return (
    <div className="app">
      <h1>Movie Library</h1>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/description/:id"
            element={<MovieDetail movies={movies} />}
          />
          <Route path="*" element={"error 404 page not found"} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
