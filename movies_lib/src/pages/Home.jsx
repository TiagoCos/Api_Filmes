import { useEffect, useState } from 'react'

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
    <div>
      {topMovies && topMovies.map((movie) => <p>{ movie.title }</p>)}
    </div>
  )
}

export default Home