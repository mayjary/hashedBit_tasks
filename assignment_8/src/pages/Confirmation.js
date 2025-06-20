import { useLocation } from 'react-router-dom';

export default function Confirmation() {
  const { state } = useLocation();
  const bookingId = Math.floor(100000 + Math.random() * 900000);

  return (
    <div className="confirmation">
      <h2>Seat Booked Successfully!</h2>
      <p><strong>Booking ID:</strong> {bookingId}</p>
      <p><strong>Name:</strong> {state.name}</p>
      <p><strong>Email:</strong> {state.email}</p>
      <p><strong>Mobile:</strong> {state.mobile}</p>
    </div>
  );
}
