import { useMemo } from "react"
import { type seat } from "../types/Seat";

export default ({selectedSeats}:{selectedSeats: seat[]}) => {
  const selectedSeatsStr = useMemo(() => {
    if (selectedSeats.length === 0) return 'Обрані місця:';
  
    const seatIds = selectedSeats.map(seat => seat.id);
    return `Обрані місця: ${seatIds.join(', ')}`;
  }, [selectedSeats])  

  return (
    <div className={`w-full h-16
    flex justify-center items-center 
    text-3xl font-bold
    border-white border-1 rounded-md
    inset-shadow-[0_0_8px_rgba(255,255,255,0.5)]
    shadow-[0_0_8px_rgba(255,255,255,0.5)]`}>
    {selectedSeatsStr}
    </div>
  )
}