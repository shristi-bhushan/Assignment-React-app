import React from 'react';

const BookingForm = ({ movieName }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Booking Form</h2>
      <div className="form-group">
        <label htmlFor="movieName">Movie Name:</label>
        <input type="text" id="movieName" style={{fontSize:"2rem"}} value={movieName} disabled />
      </div>
      <div className="form-group">
        <label htmlFor="name">Your Name:</label>
        <input type="text" id="name" required />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" required />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone Number:</label>
        <input type="tel" id="phone" required />
      </div>
      <div className="form-group">
        <label htmlFor="date">Date:</label>
        <input type="date" id="date" required />
      </div>
      <div className="form-group">
        <label htmlFor="quantity">Quantity:</label>
        <input type="number" id="quantity" min="1" required />
      </div>
      <button type="submit">Book Ticket</button>
    </form>
  );
};

export default BookingForm;
