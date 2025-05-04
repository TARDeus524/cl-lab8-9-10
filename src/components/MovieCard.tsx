import { useMemo } from "react";
import { Movie } from "../types/Movie";

export default function MovieCard({title, description, genres, imageSrc, date}: Movie) {
  const formattedDate = useMemo(() => {
    const d = new Date(date); // Create a Date object from the date prop
    const year: number = d.getFullYear();
    let month: number | string = d.getMonth() + 1; // getMonth() is 0-indexed, so add 1
    let day: number | string = d.getDate();

    // Ensure two-digit month and day
    month = month < 10 ? '0' + month : month;
    day = day < 10 ? '0' + day : day;

    return `${year}.${month}.${day}`;
  }, [date]);

  return (
    <div className={`h-50 p-2
                     border-white border-1 rounded-md
                     flex flex-row
                     text-white
                     m-4
                     inset-shadow-[0_0_8px_rgba(255,255,255,0.5)]
                     shadow-[0_0_8px_rgba(255,255,255,0.5)]`}>
      <div className="h-full w-48 border-1 border-white mr-2">
        <img src={imageSrc} alt="" />
      </div>
      <div className="h-full flex flex-grow flex-col text-center">
        <h3 className="font-bold text-2xl mb-2">{title}</h3>
        <p>{description}</p>
        <ul className="mt-auto flex flex-row flex-wrap place-content-center">
          {genres.map((genre, key) => <li className="mx-1" key={key}>{genre}</li>)}
        </ul>
      </div>
      <div className={`h-8 w-32 ml-2 self-center
                      flex items-center justify-center
                      font-bold text-xl`}>{formattedDate}</div>
    </div>
  )
}