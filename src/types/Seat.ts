export enum SeatStateEnum {
  Free,
  Selected,
}

export type seat = {
  id: number,
  state: SeatStateEnum
}