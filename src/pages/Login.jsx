import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const navigate = useNavigate()

  function handleLogin(e) {
    e.preventDefault()
    if (!email || !password) {
      setError("Please enter email and password")
      return
    }
    localStorage.setItem("isLoggedIn", "true")
    navigate("/home")
  }

  return (
    <div className="login-page">
      <div className="login-logo">NETFLIX</div>
      <div className="login-box">
        <h2 className="login-title">Sign In</h2>
        <form className="login-form" onSubmit={handleLogin}>
          <input
            className="login-input"
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="login-input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p className="login-error">{error}</p>}
          <button className="login-btn" type="submit">
            Sign In
          </button>
        </form>
        <p className="login-signup">
          New to Netflix? <span>Sign up now</span>
        </p>
      </div>
    </div>
  )
}