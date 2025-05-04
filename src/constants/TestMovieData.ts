import { MovieGenre } from "../types/Genre";
import { Movie } from "../types/Movie";


export const movies: Movie[] = [
  {
    title: 'Inception',
    description: 'A skilled thief leads a team into people\'s dreams to steal secrets.',
    genres: [MovieGenre.Action, MovieGenre.SciFi, MovieGenre.Thriller],
    imageSrc: 'https://http.cat/images/200.jpg',
    date: new Date('2010-07-16'),
  },
  {
    title: 'The Grand Budapest Hotel',
    description: 'A comedy-drama about the adventures of a concierge and his lobby boy.',
    genres: [MovieGenre.Comedy, MovieGenre.Drama],
    imageSrc: 'https://example.com/grand-budapest.jpg',
    date: new Date('2014-03-28'),
  },
  {
    title: 'Spirited Away',
    description: 'An animated fantasy film about a girl in a world of spirits.',
    genres: [MovieGenre.Animation, MovieGenre.Fantasy],
    imageSrc: 'https://example.com/spirited-away.jpg',
    date: new Date('2001-07-20'),
  },
];