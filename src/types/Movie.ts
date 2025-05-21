import { MovieGenre } from "./Genre";

export interface Movie {
  id: number,
  title: string,
  description: string,
  genres: MovieGenre[],
  imageSrc: string,
  date: Date,
}