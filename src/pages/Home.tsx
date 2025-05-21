import MovieList from "../components/MovieList";
import { movies } from "../constants/movies";

export default function Home() {
  return(<MovieList movies={movies}/>)
}