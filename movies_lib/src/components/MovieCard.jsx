import { Link } from "react-router-dom"
import {FaStar} from "react-icons/fa"

const imageUrl = import.meta.env.VITE_IMG

const MovieCard = ({movie, ShowLink= true}) => {
  return (
    <div className="movie-card">
        <img src={imageUrl + movie.poster_path} alt={movie.title} />
        <p>
            <FaStar/> {movie.vote_avarage}
        </p>
        {ShowLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}
    </div>
  )
}

export default MovieCard