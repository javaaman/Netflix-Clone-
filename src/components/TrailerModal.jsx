import { useState, useEffect } from "react"

const API_KEY = "a18c4189d9c1a5ff24df617cbcb3d4c4"

export default function TrailerModal({ movie, onClose }) {
  const [trailerKey, setTrailerKey] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!movie) return

    const type = movie.title ? "movie" : "tv"

    fetch(`https://api.themoviedb.org/3/${type}/${movie.id}/videos?api_key=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        const trailer = data.results?.find(
          (v) => v.type === "Trailer" && v.site === "YouTube"
        )
        if (trailer) {
          setTrailerKey(trailer.key)
        }
        setLoading(false)
      })
  }, [movie])

  if (!movie) return null

  return (
    <div className="trailer-overlay" onClick={onClose}>
      <div className="trailer-modal" onClick={(e) => e.stopPropagation()}>

        <button className="trailer-close" onClick={onClose}>✕</button>

        <h3 className="trailer-title">{movie.title || movie.name}</h3>

        <div className="trailer-player">
          {loading ? (
            <div className="trailer-loading">Loading trailer...</div>
          ) : trailerKey ? (
            <iframe
              src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1`}
              title="Trailer"
              allowFullScreen
              allow="autoplay"
            />
          ) : (
            <div className="trailer-loading">No trailer available</div>
          )}
        </div>

      </div>
    </div>
  )
}