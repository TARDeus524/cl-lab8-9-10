import { SeatStateEnum, type seat } from "../types/Seat";
import { useCallback, useEffect, useState } from "react";
import Sit from "./Seat";
import SeatsList from "./SeatsList";
import BookingModal from "./BookingModal";
import { BookingService } from "../services/BookingService"; 
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface CinemaHallProps {
  rows: number;
  columns: number;
  sits: number;
}

function generateSeats(count: number) {
  let seats: seat[] = [];
  for (let i = 1; i <= count; i++) {
    seats.push({ id: i, state: SeatStateEnum.Free });
  }
  return seats;
}

export default function CinemaHall({ rows, columns, sits }: CinemaHallProps) {
  const [seats, setSeats] = useState<seat[]>(generateSeats(sits));
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const allBookings = BookingService.loadAll();

    const bookedSeatIds = allBookings
      .filter((b) => b.hallID === 1)
      .flatMap((b) => b.bookedSeats);

    setSeats((currentSeats) =>
      currentSeats.map((seat) =>
        bookedSeatIds.includes(seat.id)
          ? { ...seat, state: SeatStateEnum.Booked }
          : seat
      )
    );
  }, []);

  const handleSelect = useCallback(
    (id: number) => {
      setSeats((currentSeats) =>
        currentSeats.map((seat) => {
          if (seat.id !== id) return seat;
          if (seat.state === SeatStateEnum.Free)
            return { ...seat, state: SeatStateEnum.Selected };
          if (seat.state === SeatStateEnum.Selected)
            return { ...seat, state: SeatStateEnum.Free };
          return seat;
        })
      );
    },
    [setSeats]
  );

  const openBookingModal = () => {
    const selectedSeats = seats.filter((seat) => seat.state === SeatStateEnum.Selected);
    if (selectedSeats.length === 0) {
      toast.warning("Будь ласка, виберіть місця для бронювання");
      return;
    }
    setModalVisible(true);
  };

  const handleConfirmBooking = (data: { name: string; phone: string; email: string }) => {
    const selectedSeats = seats
      .filter((seat) => seat.state === SeatStateEnum.Selected)
      .map((seat) => seat.id);

    const newBooking = {
      ...data,
      bookedSeats: selectedSeats,
      hallID: 1,
    };

    BookingService.save(newBooking);

    setSeats((currentSeats) =>
      currentSeats.map((seat) =>
        selectedSeats.includes(seat.id)
          ? { ...seat, state: SeatStateEnum.Booked }
          : seat
      )
    );

    setModalVisible(false);

    toast.success(`Успішно заброньовано місця: ${selectedSeats.join(", ")}`);
  };

  return (
    <div className="flex flex-col items-center px-4 pt-4">
      <SeatsList selectedSeats={seats.filter((seat) => seat.state === SeatStateEnum.Selected)} />
      <div
        style={{
          gridTemplateRows: `repeat(${rows}, 1fr)`,
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
        }}
        className={`w-fit grid gap-4 mt-16`}
      >
        {seats.map((seat, index) => (
          <Sit key={index} {...seat} handleSelect={handleSelect} />
        ))}
      </div>
      <button
        onClick={openBookingModal}
        className="mt-6 px-4 py-2 bg-blackborder border border-white text-white rounded hover:cursor-pointer"
      >
        Забронювати вибрані місця
      </button>

      <BookingModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSubmit={handleConfirmBooking}
        selectedSeatsCount={seats.filter((seat) => seat.state === SeatStateEnum.Selected).length}
      />

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}