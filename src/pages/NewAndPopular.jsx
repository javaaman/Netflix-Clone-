import { useState } from "react"
import Navbar from "../components/Navbar"
import MovieRow from "../components/MovieRow"
import Modal from "../components/Modal"

const API_KEY = "a18c4189d9c1a5ff24df617cbcb3d4c4"
const BASE_URL = "https://api.themoviedb.org/3"

export default function NewAndPopular({ handleAddToMyList }) {
  const [selectedMovie, setSelectedMovie] = useState(null)

  return (
    <>
      <Navbar />
      <div className="page-banner new-banner">
        <h1 className="page-banner-title">New & Popular</h1>
      </div>
      <div className="movie-rows">
        <MovieRow
          title="Trending Today"
          fetchUrl={`${BASE_URL}/trending/all/day?api_key=${API_KEY}`}
          onMovieClick={setSelectedMovie}
        />
        <MovieRow
          title="Trending This Week"
          fetchUrl={`${BASE_URL}/trending/all/week?api_key=${API_KEY}`}
          onMovieClick={setSelectedMovie}
        />
        <MovieRow
          title="Now Playing in Cinemas"
          fetchUrl={`${BASE_URL}/movie/now_playing?api_key=${API_KEY}`}
          onMovieClick={setSelectedMovie}
        />
        <MovieRow
          title="Upcoming Movies"
          fetchUrl={`${BASE_URL}/movie/upcoming?api_key=${API_KEY}`}
          onMovieClick={setSelectedMovie}
        />
        <MovieRow
          title="On Air TV Shows"
          fetchUrl={`${BASE_URL}/tv/on_the_air?api_key=${API_KEY}`}
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