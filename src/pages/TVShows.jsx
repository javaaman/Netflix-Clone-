import { useState } from "react"
import Navbar from "../components/Navbar"
import MovieRow from "../components/MovieRow"
import Modal from "../components/Modal"

const API_KEY = "a18c4189d9c1a5ff24df617cbcb3d4c4"
const BASE_URL = "https://api.themoviedb.org/3"

export default function TVShows({ handleAddToMyList }) {
  const [selectedMovie, setSelectedMovie] = useState(null)

  return (
    <>
      <Navbar />
      <div className="page-banner tv-banner">
        <h1 className="page-banner-title">TV Shows</h1>
      </div>
      <div className="movie-rows">
        <MovieRow
          title="Popular TV Shows"
          fetchUrl={`${BASE_URL}/tv/popular?api_key=${API_KEY}`}
          onMovieClick={setSelectedMovie}
        />
        <MovieRow
          title="Top Rated TV"
          fetchUrl={`${BASE_URL}/tv/top_rated?api_key=${API_KEY}`}
          onMovieClick={setSelectedMovie}
        />
        <MovieRow
          title="Drama"
          fetchUrl={`${BASE_URL}/discover/tv?api_key=${API_KEY}&with_genres=18`}
          onMovieClick={setSelectedMovie}
        />
        <MovieRow
          title="Comedy"
          fetchUrl={`${BASE_URL}/discover/tv?api_key=${API_KEY}&with_genres=35`}
          onMovieClick={setSelectedMovie}
        />
        <MovieRow
          title="Crime"
          fetchUrl={`${BASE_URL}/discover/tv?api_key=${API_KEY}&with_genres=80`}
          onMovieClick={setSelectedMovie}
        />
      </div>
      <Modal
        movie={selectedMovie}
        onClose={() => setSelectedMovie(null)}
        onAddToMyList={handleAddToMyList}
      />
    </>
  )
}