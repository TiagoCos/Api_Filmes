import { useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import MovieCard from "../components/MovieCard"

import "./MoviesGrid.css"
const apiKey = import.meta.env.VITE_API_KEY
const searchURL = import.meta.env.VITE_SEARCH

const Search = () => {

  const [searchParams] = useSearchParams();
  const [ movies, setMovies] = useState([]);
  const query = searchParams.get("q")

  //invocando a chamada á api novamente para obter a lista
  const getSearchedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setMovies(data.results)
  }
  //montando nova url
  useEffect(() => {
    const searchWithQueryURL = `${searchURL}?${apiKey}&query=${query}`;
    getSearchedMovies(searchWithQueryURL)

  }, [query])// vetor de condição 
 

  return (
    <div className='container'>
      <h2 className="title">Resultados para <span className="query-text">{query}</span></h2>
      <div className="movies-container">
      {movies === 0 && <p>Carregando...</p>}
      {movies.length > 0  && 
      movies.map((movie) => <MovieCard key={movie.id} movie={movie}/>)}
      </div>
    </div>
  )
}

export default Search