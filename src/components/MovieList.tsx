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
      <div className="w-full mb-4 flex justify-around flex-col md:flex-row">
      <input
        ref={inputRef}
        type="search"
        id="movie-search"
        name="ms"
        placeholder="Пошук за назвою фільму"
        className={`border-white border-1 rounded-sm
          w-full h-12 text-center font-bold text-xl
          mb-4
          inset-shadow-[0_0_8px_rgba(150,150,150,0.5)]
          shadow-[0_0_8px_rgba(150,150,150,0.5)]
          focus:inset-shadow-[0_0_12px_rgba(255,255,255,0.5)]
          focus:shadow-[0_0_12px_rgba(255,255,255,0.5)]
          focus:outline-none active:outline-none
          active:shadow-[0_0_12px_rgba(255,255,255,0.5)]
          active:inset-shadow-[0_0_12px_rgba(255,255,255,0.5)]
          md:w-4/6 md:pb-0`}
      />

        <button className={`w-full border-white border-1 rounded-sm font-bold text-3xl
          inset-shadow-[0_0_8px_rgba(150,150,150,0.5)]
          shadow-[0_0_8px_rgba(150,150,150,0.5)]
          hover:cursor-pointer
          hover:inset-shadow-[0_0_8px_rgba(255,255,255,0.7)]
          hover:shadow-[0_0_8px_rgba(255,255,255,0.7)]
          md:w-1/6`} onClick={handleSearch}>Пошук</button>
      </div>
      <ul className="w-full px-8">
        {movies
          .filter((movie) => movie.title.includes(searchText))
          .map((movie, key) => <MovieCard key={key} {...movie}/>)}
      </ul>
    </div>
  )
}