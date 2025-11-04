import { useState } from "react";

export function App() {
  const [movies, setMovies] = useState([]);
  const [movieName, setMovieName] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);

  function addMovie() {
    if (!movieName.trim()) return;
    const newMovie = {
      id: Date.now(),
      name: movieName,
      comment: comment,
      rating: rating,
    };
    setMovies([...movies, newMovie]);
    setMovieName("");
    setComment("");
    setRating(0);
  }

  function removeMovie(id) {
    setMovies(movies.filter((movie) => movie.id !== id));
  }

  function getStars(num) {
    return "⭐".repeat(num);
  }

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>Movie Watch List</h1>

      <input
        type="text"
        placeholder="Movie name"
        value={movieName}
        onChange={(e) => setMovieName(e.target.value)}
      />
      <br /><br />

      <textarea
        placeholder="Add your comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <br /><br />

      <label>Rating: </label>
      <select value={rating} onChange={(e) => setRating(Number(e.target.value))}>
        <option value="0">Select</option>
        <option value="1">⭐</option>
        <option value="2">⭐⭐</option>
        <option value="3">⭐⭐⭐</option>
        <option value="4">⭐⭐⭐⭐</option>
        <option value="5">⭐⭐⭐⭐⭐</option>
      </select>
      <br /><br />

      <button onClick={addMovie}>Add Movie</button>

      <hr />

      <h2>Your Watchlist</h2>
      {movies.length === 0 ? (
        <p>No movies added yet.</p>
      ) : (
        movies.map((movie) => (
          <div
            key={movie.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              margin: "10px auto",
              padding: "10px",
              width: "300px",
            }}
          >
            <h3>{movie.name}</h3>
            <p>{movie.comment}</p>
            <p>{getStars(movie.rating)}</p>
            <button onClick={() => removeMovie(movie.id)}>Remove</button>
          </div>
        ))
      )}
    </div>
  );
}