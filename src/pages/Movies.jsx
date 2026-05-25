import { useState } from "react"
import Navbar from "../components/Navbar"
import MovieRow from "../components/MovieRow"
import Modal from "../components/Modal"

const API_KEY = "a18c4189d9c1a5ff24df617cbcb3d4c4"
const BASE_URL = "https://api.themoviedb.org/3"

export default function Movies({ handleAddToMyList }) {
  const [selectedMovie, setSelectedMovie] = useState(null)

  return (
    <>
      <Navbar />
      <div className="page-banner movies-banner">
        <h1 className="page-banner-title">Movies</h1>
      </div>
      <div className="movie-rows">
        <MovieRow
          title="Popular Movies"
          fetchUrl={`${BASE_URL}/movie/popular?api_key=${API_KEY}`}
          onMovieClick={setSelectedMovie}
        />
        <MovieRow
          title="Top Rated Movies"
          fetchUrl={`${BASE_URL}/movie/top_rated?api_key=${API_KEY}`}
          onMovieClick={setSelectedMovie}
        />
        <MovieRow
          title="Action"
          fetchUrl={`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=28`}
          onMovieClick={setSelectedMovie}
        />
        <MovieRow
          title="Comedy"
          fetchUrl={`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=35`}
          onMovieClick={setSelectedMovie}
        />
        <MovieRow
          title="Horror"
          fetchUrl={`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=27`}
          onMovieClick={setSelectedMovie}
        />
        <MovieRow
          title="Romance"
          fetchUrl={`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=10749`}
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