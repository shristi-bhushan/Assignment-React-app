import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BookingForm from './TicketBookingForm';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';

const DetailsPage = () => {
  const [show, setShow] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
      const data = await response.json();
      setShow(data);
      console.log(data);
    }
    fetchData();
  }, [id]);

  if (!show) {
    return <div>Loading...</div>;
  }

  const { name, summary, url } = show;

  const handleBookTicket = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <h2>{name}</h2>
      <p dangerouslySetInnerHTML={{ __html: summary }} />
      <a href={url}>Visit Official Website</a>
      <br />
      <button style={{marginTop:"2rem", marginRight:"2rem"}} onClick={handleBookTicket}>Book Ticket</button>
      <button style={{marginTop:"2rem"}}><Link to={`/`}>Go back</Link></button>

      <Modal isOpen={showModal} onRequestClose={handleCloseModal} style={{height: "5rem", backgroundColor:"black"}}>
        <h2>Booking Form</h2>
        <BookingForm movieName={name} />
        <button style={{marginTop:"2rem"}} onClick={handleCloseModal}>Close</button>
      </Modal>
    </div>
  );
};

export default DetailsPage;