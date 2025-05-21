interface BookingData {
  name: string;
  phone: string;
  email: string;
  bookedSeats: number[];
  hallID: number;
}

export class BookingService {
  private static storageKey = 'bookingDataList';

  static loadAll(): BookingData[] {
    const raw = localStorage.getItem(this.storageKey);
    if (!raw) return [];

    try {
      const data = JSON.parse(raw) as BookingData[];
      if (Array.isArray(data)) return data;
      return [];
    } catch {
      return [];
    }
  }

  static save(booking: BookingData): void {
    const bookings = this.loadAll();
    bookings.push(booking);
    localStorage.setItem(this.storageKey, JSON.stringify(bookings));
  }

  static clearAll(): void {
    localStorage.removeItem(this.storageKey);
  }
}
