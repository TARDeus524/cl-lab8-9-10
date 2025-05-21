import { MovieGenre } from "../types/Genre";
import { Movie } from "../types/Movie";
import API_KEY from '../config'

export const movies: Movie[] = [
  {
    id: 0,
    title: 'Початок',
    description: 'Вправний крадій проникає у сни людей, щоб викрасти їхні секрети.',
    genres: [MovieGenre.Action, MovieGenre.SciFi, MovieGenre.Thriller],
    imageSrc: `http://img.omdbapi.com/?i=tt1375666&apikey=${API_KEY}`,
    date: new Date('2010-07-16'),
  },
  {
    id: 1,
    title: 'Готель "Гранд Будапешт"',
    description: 'Комедійна драма про пригоди консьєржа та його помічника.',
    genres: [MovieGenre.Comedy, MovieGenre.Drama],
    imageSrc: `http://img.omdbapi.com/?i=tt2278388&apikey=${API_KEY}`,
    date: new Date('2014-03-28'),
  },
  {
    id: 2,
    title: 'Віднесені привидами',
    description: 'Анімаційна фантазія про дівчинку, яка потрапляє у світ духів.',
    genres: [MovieGenre.Animation, MovieGenre.Fantasy],
    imageSrc: `http://img.omdbapi.com/?i=tt0245429&apikey=${API_KEY}`,
    date: new Date('2001-07-20'),
  },
];
