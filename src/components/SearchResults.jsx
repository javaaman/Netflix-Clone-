function SearchCard({ movie }) {
  return (
    <div className="search-card">
      {movie.poster_path ? (
        <img
          src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
          alt={movie.title || movie.name}
        />
      ) : (
        <div className="search-card-no-img">No Image</div>
      )}
      <div className="search-card-info">
        <p className="search-card-title">{movie.title || movie.name}</p>
        <p className="search-card-date">
          {movie.release_date || movie.first_air_date}
        </p>
        <p className="search-card-overview">
          {movie.overview?.slice(0, 100)}...
        </p>
      </div>
    </div>
  )
}

export default function SearchResults({ results, searching }) {
  if (searching) {
    return <p className="search-empty">Searching...</p>
  }

  if (results.length === 0) {
    return <p className="search-empty">No results found</p>
  }

  return (
    <div className="search-results">
      {results.map((movie) => (
        <SearchCard key={movie.id} movie={movie} />
      ))}
    </div>
  )
}