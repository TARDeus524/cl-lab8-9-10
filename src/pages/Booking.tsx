import { useParams } from "react-router";
import CinemaHall from "../components/CinemaHall";
import { halls } from "../constants/Halls";

export default function Booking() {
  const { id } = useParams<Record<string, string | undefined>>()

  const hallIndex = Number(id)

  if (isNaN(hallIndex) || hallIndex < 0 || hallIndex >= halls.length) {
    return <p>Зал не знайдено</p>;
  }

  return (
    <CinemaHall {...halls[hallIndex]}/>
  )
}