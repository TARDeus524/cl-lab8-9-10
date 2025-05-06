import { useCallback, useRef, useState } from "react";
import { Movie } from "../types/Movie";
import MovieCard from "./MovieCard";

interface MovieProps {
  movies: Movie[]
}
export default function MovieList({movies}: MovieProps) {
  const [searchText, setSearchText] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const handleSearch = useCallback(() => {
    if(inputRef.current)
    setSearchText(inputRef.current.value)
  }, [inputRef.current])
  return (
    <div className="w-full h-full flex flex-col justify-center items-center p-4">
      <div className="w-full mb-4 flex justify-around">
      <input
        ref={inputRef}
        type="search"
        id="movie-search"
        name="ms"
        placeholder="Пошук за назвою фільму"
        className={`border-white border-1 rounded-sm
          w-4/6 h-12 text-center font-bold text-xl
          inset-shadow-[0_0_8px_rgba(150,150,150,0.5)]
          shadow-[0_0_8px_rgba(150,150,150,0.5)]
          focus:inset-shadow-[0_0_12px_rgba(255,255,255,0.5)]
          focus:shadow-[0_0_12px_rgba(255,255,255,0.5)]
          focus:outline-none active:outline-none
          active:shadow-[0_0_12px_rgba(255,255,255,0.5)]
          active:inset-shadow-[0_0_12px_rgba(255,255,255,0.5)]`}
      />

        <button className={`w-1/6 border-white border-1 rounded-sm font-bold text-3xl`} onClick={handleSearch}>Пошук</button>
      </div>
      <ul className="w-full">
        {movies
          .filter((movie) => movie.title.includes(searchText))
          .map((movie, key) => <MovieCard key={key} {...movie}/>)}
      </ul>
    </div>
  )
}