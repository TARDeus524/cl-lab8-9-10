import { SeatStateEnum } from "../types/Seat"

interface SeatProps {
  id: number,
  state: SeatStateEnum,
  handleSelect(id:number): void,
}

function colorsByState(state: SeatStateEnum){
  switch (state) {
    case SeatStateEnum.Selected:
      return {bg: '#1E90FF', text: 'black'}

    case SeatStateEnum.Booked:
      return {bg: 'red', text: 'black'}
      
    default:
      return {bg: '#00C853', text: 'black'}
  }
}

export default ({id, state, handleSelect}: SeatProps) => {
  const {bg, text} = colorsByState(state)
  return (
    <div style={{background: bg, color: text}}className={`size-16 
    flex justify-center items-center 
    text-3xl font-bold
    border-white border-1 rounded-md
    inset-shadow-[0_0_8px_rgba(255,255,255,0.5)]
    shadow-[0_0_8px_rgba(255,255,255,0.5)]
    hover:scale-101
    hover:cursor-pointer
    hover:inset-shadow-[0_0_8px_rgba(255,255,255,0.7)]
    hover:shadow-[0_0_8px_rgba(255,255,255,0.7)]`} onClick={() => {handleSelect(id)}}>
      {id}
    </div>
  )
}