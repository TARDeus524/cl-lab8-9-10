import { useState } from "react";
import { toast } from "react-toastify";

function BookingModal({
  visible,
  onClose,
  onSubmit,
  selectedSeatsCount,
}: {
  visible: boolean;
  onClose: () => void;
  onSubmit: (data: { name: string; phone: string; email: string }) => void;
  selectedSeatsCount: number;
}) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  if (!visible) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !email.trim()) {
      toast.error("Будь ласка, заповніть усі поля");
      return;
    }
    onSubmit({ name, phone, email });
    setName("");
    setPhone("");
    setEmail("");
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-black rounded p-6 w-80 text-white"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-lg font-semibold mb-4">
          Бронювання {selectedSeatsCount} місць
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Ім'я"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-white bg-transparent p-2 rounded text-white placeholder:text-gray-400"
          />
          <input
            type="tel"
            placeholder="Телефон"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="border border-white bg-transparent p-2 rounded text-white placeholder:text-gray-400"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-white bg-transparent p-2 rounded text-white placeholder:text-gray-400"
          />
          <div className="flex justify-end gap-2 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-white rounded text-white hover:bg-white hover:text-black transition"
            >
              Відмінити
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-black text-white border border-white rounded hover:bg-blue-700 transition"
            >
              Підтвердити
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BookingModal;
