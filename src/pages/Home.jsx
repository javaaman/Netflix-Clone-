import { useState, useEffect } from "react"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import MovieRow from "../components/MovieRow"
import Modal from "../components/Modal"
import SearchBar from "../components/SearchBar"
import SearchResults from "../components/SearchResults"

const API_KEY = "a18c4189d9c1a5ff24df617cbcb3d4c4"
const BASE_URL = "https://api.themoviedb.org/3"

export default function Home({ handleAddToMyList, handleRemoveFromMyList }) {
  const [selectedMovie, setSelectedMovie] = useState(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [searchResults, setSearchResults] = useState([])
const [searching, setSearching] = useState(false) 
  useEffect(() => {
    if (searchTerm.length < 2) {
      setSearchResults([])
      setSearching(false)
      return
    }

    setSearching(true)
    const timer = setTimeout(() => {
      fetch(`${BASE_URL}/search/multi?api_key=${API_KEY}&query=${searchTerm}`)
        .then((res) => res.json())
        .then((data) => {
          setSearchResults(data.results)
          setSearching(false)
        })
    }, 500)

    return () => clearTimeout(timer)
  }, [searchTerm])

  return (
    <>
      <Navbar />
      <Hero />
      <div className="movie-rows">
        <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} />

        {searchTerm.length >= 2 ? (
          <SearchResults results={searchResults} searching={searching} />
        ) : (
          <>
            <MovieRow
              title="Trending Now"
              fetchUrl={`${BASE_URL}/trending/all/week?api_key=${API_KEY}`}
              onMovieClick={setSelectedMovie}
            />
            <MovieRow
              title="TV Shows"
              fetchUrl={`${BASE_URL}/discover/tv?api_key=${API_KEY}&with_genres=18`}
              onMovieClick={setSelectedMovie}
            />
            <MovieRow
              title="Action & Adventure"
              fetchUrl={`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=28`}
              onMovieClick={setSelectedMovie}
            />
          </>
        )}
      </div>

      <Modal
        movie={selectedMovie}
        onClose={() => setSelectedMovie(null)}
        onAddToMyList={handleAddToMyList}
      />
    </>
  )
}