import { useMemo } from "react";
import { Movie } from "../types/Movie";
import { useNavigate } from "react-router";

export default function MovieCard({id, title, description, genres, imageSrc, date}: Movie) {
  const formattedDate = useMemo(() => {
    const d = new Date(date);
    const year: number = d.getFullYear();
    let month: number | string = d.getMonth() + 1; 
    let day: number | string = d.getDate();

    month = month < 10 ? '0' + month : month;
    day = day < 10 ? '0' + day : day;

    return `${year}.${month}.${day}`;
  }, [date])

  const navigate = useNavigate()

  const handleReserveClick = () => {
    navigate(`/booking/${id}`)
  }

  return (
    <div className={`min-h-50 p-2 mb-4
                     border-white border-1 rounded-md
                     inset-shadow-[0_0_8px_rgba(255,255,255,0.5)]
                     shadow-[0_0_8px_rgba(255,255,255,0.5)]
                     hover:scale-101
                     hover:inset-shadow-[0_0_8px_rgba(255,255,255,0.7)]
                     hover:shadow-[0_0_8px_rgba(255,255,255,0.7)]
                     flex flex-col items-center md:flex-row md:justify-center`}>
      <div className={`h-full w-48 mr-2 border-1 rounded-md border-black mb-2 md:mb-0 md:ml-2 shadow-[0_0_8px_rgba(255,255,255,0.5)]`}>
        <img src={imageSrc} alt="" />
      </div>
      <div className="h-full flex flex-grow flex-col text-center mb-2 md:mb-0">
        <h3 className="font-bold text-2xl mb-2">{title}</h3>
        <p className="mb-2 md:mb-0">{description}</p>
        <ul className="mt-auto flex flex-row flex-wrap place-content-center">
          {genres.map((genre, key) => <li className="mx-1" key={key}>{genre}</li>)}
        </ul>
      </div>
      <div className={`min-h-8 min-w-32 md:mr-4 self-center
                      flex flex-col items-center justify-center
                      font-bold text-xl`}>
        {formattedDate}
        <button onClick={handleReserveClick} className={`p-1 md:mt-1 
                hover:cursor-pointer hover:bg-gray-700 rounded-md`}>
          Забронювати
        </button>
      </div>
    </div>
  )
}