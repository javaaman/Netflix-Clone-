import { useState, useEffect } from "react"

function MovieCard({ movie , onMovieClick}) {
  return (
    <div className="movie-card" onClick={()=> onMovieClick(movie)}>
      <img
        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
        alt={movie.title || movie.name}
      />
      <p className="movie-title">{movie.title || movie.name}</p>
    </div>
  )
}

function MovieRow({ title, fetchUrl , onMovieClick  }) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(fetchUrl)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results)
        setLoading(false)
      })
  }, [fetchUrl])

  return (
    <div className="movie-row">
      <h2 className="row-title">{title}</h2>
      {loading ? (
        <p className="row-loading">Loading...</p>
      ) : (
        <div className="row-movies">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} onMovieClick={onMovieClick} />
          ))}
        </div>
      )}
    </div>
  )
}

export default MovieRow