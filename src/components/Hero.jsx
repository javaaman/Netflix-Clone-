import { useState, useEffect } from "react"
import TrailerModal from "./TrailerModal"

const API_KEY = "a18c4189d9c1a5ff24df617cbcb3d4c4"

export default function Hero() {
  const [isMyList, setIsMyList] = useState(false)
  const [movie, setMovie] = useState(null)
  const [showTrailer, setShowTrailer] = useState(false)

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/tv/66732?api_key=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => setMovie(data))
  }, [])

  if (!movie) return <div className="hero"></div>

  return (
    <>
      <div
        className="hero"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.8) 40%, transparent), linear-gradient(to top, #141414 5%, transparent), url('https://image.tmdb.org/t/p/original${movie.backdrop_path}')`
        }}
      >
        <div className="hero-content">
          <h1 className="hero-title">{movie.name}</h1>
          <p className="hero-desc">{movie.overview}</p>
          <div className="hero-buttons">
            <button
              className="btn-play"
              onClick={() => setShowTrailer(true)}
            >
              ▶ Play
            </button>
            <button
              className="btn-mylist"
              onClick={() => setIsMyList(!isMyList)}
            >
              {isMyList ? "✓ Added" : "+ My List"}
            </button>
          </div>
        </div>
      </div>

      <TrailerModal
        movie={showTrailer ? movie : null}
        onClose={() => setShowTrailer(false)}
      />
    </>
  )
}