import { useState, useEffect } from "react"
import { useNavigate, useLocation } from "react-router-dom"

const links = ["Home", "TV Shows", "Movies", "New & Popular", "My List"]

function NavLink({ label, onClick, isActive }) {
  return (
    <span
      className={`nav-link ${isActive ? "nav-link-active" : ""}`}
      onClick={onClick}
    >
      {label}
    </span>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

 function handleNavClick(link) {
  if (link === "Home") navigate("/home")
  if (link === "TV Shows") navigate("/tvshows")
  if (link === "Movies") navigate("/movies")
  if (link === "New & Popular") navigate("/new-popular")
  if (link === "My List") navigate("/my-list")
}

  function handleLogout() {
    localStorage.removeItem("isLoggedIn")
    navigate("/login")
  }

  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div
        className="logo"
        onClick={() => navigate("/home")}
        style={{ cursor: "pointer" }}
      >
        NETFLIX
      </div>
      <div className="nav-links">
        {links.map((link) => (
          <NavLink
          style={{ cursor: "pointer" }}
            key={link}
            label={link}
            onClick={() => handleNavClick(link)}
            isActive={
  (link === "Home" && location.pathname === "/home") ||
  (link === "TV Shows" && location.pathname === "/tvshows") ||
  (link === "Movies" && location.pathname === "/movies") ||
  (link === "New & Popular" && location.pathname === "/new-popular") ||
  (link === "My List" && location.pathname === "/my-list")
}
          />
        ))}
      </div>
      <div className="nav-right">
        <span
          className="nav-avatar"
          onClick={handleLogout}
          title="Click to logout"
          style={{ cursor: "pointer" }}
        >
          U
        </span>
      </div>
    </nav>
  )
}