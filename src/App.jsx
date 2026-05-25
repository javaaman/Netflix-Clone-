import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Login from "./pages/Login"
import Home from "./pages/Home"
import TVShows from "./pages/TVShows"
import Movies from "./pages/Movies"
import NewAndPopular from "./pages/NewAndPopular"
import MyNewList from "./pages/MyNewList"
import ProtectedRoute from "./components/ProtectedRoute"

function App() {
  function handleAddToMyList(movie) {
    const existing = JSON.parse(localStorage.getItem("myList")) || []
    const alreadyAdded = existing.find((m) => m.id === movie.id)
    if (alreadyAdded) return
    const updated = [...existing, movie]
    localStorage.setItem("myList", JSON.stringify(updated))
  }

  function handleRemoveFromMyList(movieId) {
    const existing = JSON.parse(localStorage.getItem("myList")) || []
    const updated = existing.filter((movie) => movie.id !== movieId)
    localStorage.setItem("myList", JSON.stringify(updated))
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={
          <ProtectedRoute><Home handleAddToMyList={handleAddToMyList} /></ProtectedRoute>
        } />
        <Route path="/tvshows" element={
          <ProtectedRoute><TVShows handleAddToMyList={handleAddToMyList} /></ProtectedRoute>
        } />
        <Route path="/movies" element={
          <ProtectedRoute><Movies handleAddToMyList={handleAddToMyList} /></ProtectedRoute>
        } />
        <Route path="/new-popular" element={
          <ProtectedRoute><NewAndPopular handleAddToMyList={handleAddToMyList} /></ProtectedRoute>
        } />
        <Route path="/my-list" element={
          <ProtectedRoute><MyNewList /></ProtectedRoute>
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default App