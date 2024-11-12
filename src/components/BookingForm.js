import React, { useState } from 'react';
import { useParams } from 'react-router-dom';  // Import useParams hook to access the dynamic route params

const BookingForm = () => {
  const { place } = useParams();  // Get the place name from the URL params

  const [formData, setFormData] = useState({
    customerName: '',
    email: '',
    phone: '',
    noOfPeople: '',
    noOfDays: '',
    startDate: '',
    endDate: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert('Booking submitted successfully!');
  };

  return (
    <div className="booking-form-container">
      <h2>Book Your Trip to {place}</h2>  {/* Display the place name */}
      <form onSubmit={handleSubmit} className="booking-form">
        <label>
          Customer Name:
          <input
            type="text"
            name="customerName"
            value={formData.customerName}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Phone Number:
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Number of People:
          <input
            type="number"
            name="noOfPeople"
            value={formData.noOfPeople}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Number of Days:
          <input
            type="number"
            name="noOfDays"
            value={formData.noOfDays}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Starting Date:
          <input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Ending Date:
          <input
            type="date"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default BookingForm;
