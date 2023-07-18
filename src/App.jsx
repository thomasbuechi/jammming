import { useState, useCallback } from 'react'
import './App.css'
import Header from "./components/Header/Header.jsx"
import SearchBar from './components/SearchBar/SearchBar.jsx'
import SpotifyApiCall from "./helpers/SpotifyApiCall.jsx"

function App() {
  const [count, setCount] = useState(0)
  const [searchResult, setSearchResult] = useState([])
  const [playlistSongs, setPlaylistSongs] = useState([])
  const [playlistName, setPlaylistName] = useState("")

  const search = useCallback((term) => {
    //setSearchResult(term);
    setSearchResult(SpotifyApiCall(term))

  });



  return (
    <>
      <Header />
      <SearchBar onSearch={search}/>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <h2>h2=: {searchResult}</h2>
      </div>
    </>
  )
}

export default App
