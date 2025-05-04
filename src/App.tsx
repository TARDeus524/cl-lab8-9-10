import MovieCard from "./components/MovieCard"
import {movies} from './constants/TestMovieData'
function App() {

  return (
    <div className="">
      <MovieCard {...movies[0]}/>
    </div>
  )
}

export default App
