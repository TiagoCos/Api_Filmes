import { useEffect, useState } from 'react'
import MovieCard from '../components/MovieCard';
import "./MoviesGrid.css"

const movies_url = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
  const [topMovies, setTopMovies] = useState([]);

  const getTopRatedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setTopMovies(data.results)
  }

  useEffect(() => {
    const topRatedUrl = `${movies_url}top_rated?${apiKey}`;
    getTopRatedMovies(topRatedUrl)

  }, [])// vetor de condição 
 

  return (
    <div className='container'>
      <h2 className="title">
        Melhores filmes:
      </h2>
      <div className="movies-container">
      {topMovies === 0 && <p>Carregando...</p>}
      {topMovies.length > 0  && 
      topMovies.map((movie) => <MovieCard key={movie.id} movie={movie}/>)}
      </div>
    </div>
  )
}

export default Home