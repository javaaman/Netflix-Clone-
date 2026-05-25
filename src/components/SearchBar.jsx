export default function SearchBar({searchTerm, onSearch}) {
  return (
    <div className="search-bar">
      <input 
      className="search-input"
        type="text" 
        placeholder="Search for movies or TV shows..." 
        value={searchTerm}
        onChange={(e) => onSearch(e.target.value)}
      />
      {searchTerm && <button className="search-clear" onClick={() => onSearch("")}>X</button>}

    </div>
  )
}