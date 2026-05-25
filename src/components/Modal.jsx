import { useState } from "react"
import TrailerModal from "./TrailerModal"

export default function Modal({ movie, onClose, onAddToMyList }) {
  const [showTrailer, setShowTrailer] = useState(false)

  if (!movie) return null

  function handleAddToMyList() {
    onAddToMyList(movie)
    onClose()
  }

  return (
    <>
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal" onClick={(e) => e.stopPropagation()}>

          <button className="modal-close" onClick={onClose}>✕</button>

          <div className="modal-top">
            <img
              className="modal-backdrop"
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              alt={movie.title || movie.name}
            />
            <div className="modal-gradient" />
            <h2 className="modal-title">{movie.title || movie.name}</h2>
          </div>

          <div className="modal-body">
            <div className="modal-stats">
              <span className="modal-rating">
                ⭐ {movie.vote_average?.toFixed(1)}
              </span>
              <span className="modal-date">
                {movie.release_date || movie.first_air_date}
              </span>
            </div>
            <p className="modal-overview">{movie.overview}</p>

            <div className="modal-action-btns">
              <button
                className="btn-play"
                onClick={() => setShowTrailer(true)}
              >
                ▶ Play Trailer
              </button>
              <button
                className="modal-add-btn"
                onClick={handleAddToMyList}
              >
                + Add to My List
              </button>
            </div>
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