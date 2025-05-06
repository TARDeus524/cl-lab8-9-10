import MovieList from "./components/MovieList"
import {movies} from './constants/movies'
function App() {

  return (
    <div className="text-white">
      <MovieList movies={movies}/>
    </div>
  )
}

export default App
