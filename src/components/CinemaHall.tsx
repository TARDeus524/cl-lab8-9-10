import { SeatStateEnum, type seat} from "../types/Seat"
import { useCallback, useState } from "react"
import Sit from "./Seat"
import SeatsList from "./SeatsList"

interface CinemaHallProps {
  rows: number,
  columns: number,
  sits: number,
}

function generateSeats(count: number){
  let seats: seat[] = []
  for(let i = 1; i < count + 1; i++){
    seats.push({id: i, state: SeatStateEnum.Free})
  }
  return seats
}

export default function CinemaHall({rows, columns, sits}: CinemaHallProps) {
  const [seats, setSeats] = useState(generateSeats(sits))
  
  const handleSelect = useCallback((id: number) => {
    let newSeats = [...seats]
    newSeats[id-1].state = newSeats[id-1].state == SeatStateEnum.Free ?
    SeatStateEnum.Selected : SeatStateEnum.Free 

    setSeats(newSeats)
  }, [seats, setSeats])

  return (
    <div className="flex flex-col items-center px-4 pt-4">
      <SeatsList selectedSeats={seats.filter((seat) => seat.state === SeatStateEnum.Selected)}/>
      <div style={{gridTemplateRows: `repeat(${rows}, 1fr)`,
      gridTemplateColumns: `repeat(${columns}, 1fr)`}} 
      className={`w-fit grid gap-4 mt-16`}>
        {
          seats.map((seat, index) => <Sit key={index} {...seat} handleSelect={handleSelect}/>)
        }
      </div>
    </div>
  )
}