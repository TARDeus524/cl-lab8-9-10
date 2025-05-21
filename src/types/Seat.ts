export enum SeatStateEnum {
  Free,
  Selected,
  Booked,
}

export type seat = {
  id: number,
  state: SeatStateEnum
}