import Navbar from '../components/Navbar'

export default function MyNewList() {
  const myList = JSON.parse(localStorage.getItem("myList")) || []

  return (
    <>
      <Navbar />
      <div style={{ paddingTop: "80px", padding: "80px 2rem 2rem" }}>
        <h2 style={{ marginBottom: "1.5rem" }}>My List</h2>
        {myList.length === 0 ? (
          <p style={{ color: "#777" }}>Your list is empty. Start adding movies!</p>
        ) : (
          <div className="my-list">
            {myList.map((movie) => (
              <div key={movie.id} className="my-list-item">
                {movie.poster_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                    alt={movie.title || movie.name}
                  />
                ) : (
                  <div className="my-list-no-img">No Image</div>
                )}
                <p className="my-list-title">{movie.title || movie.name}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  )
}