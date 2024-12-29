import { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./components/search-bar";
import styles from "./styles.module.css";
function App({ value }) {
  const api_key = "cb91092d";
  const [movieList, setMovieList] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);

  async function movieResult(query) {
    try {
      const apiResponse = await fetch(
        `https://www.omdbapi.com/?apikey=${api_key}&s=${query}`
      );
      const result = await apiResponse.json();
      const movieResult = result.Search;
      if (movieResult && movieResult.length > 0) {
        setLoading(true);
        setMovieList(movieResult);
      } else {
        setLoading(true);
        setMovieList([]);
      }
    } catch (e) {
      console.log(e);
    }
  }

  const handleSearch = () => {
    if (searchQuery) {
      movieResult(searchQuery);
    }
  };

  useEffect(() => {
    movieResult("");
  }, []);
  return (
    <div>
      <SearchBar setSearchQuery={setSearchQuery} />
      <button className={styles.searchButton} onClick={handleSearch}>
        Search
      </button>
      <div>
        {movieList.length > 0 ? (
          <ul>
            {movieList.map((movie) => (
              <li key={movie.imdbID}>
                <img src={movie.Poster} alt={movie.Title} />
                <h3>{movie.Title}</h3>
                <p>{movie.Year}</p>
                <p>{movie.Type}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No movies found</p>
        )}
      </div>
    </div>
  );
}

export default App;
