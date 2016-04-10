br /import React from 'react';
// import { Link } from 'react-router';
require('assets/styles/reservation.scss');


export default React.createClass({
  render: function () {
    return (
      
      <form action="#" method="post" className="reservations">
        
        <label htmlFor="fullName">Full Name</label><br />
        <input type="text" name="fullName" id="fullName" /><br />
        
        <label htmlFor="howMany">Number of Guests</label><br />
        <input type="number" name="howMany" id="howMany" /><br />
        
        <label htmlFor="resDate">Date</label><br />
        <input type="date" name="resDate" id="resDate" /><br />
        
        <label htmlFor="specialNotes">Special Notes</label><br />
        <textarea name="specialNotes" id="specialNotes" cols="65" rows="7"></textarea><br />
      
        <label htmlFor="seatPref">Seating Preferences</label><br />
        <select name="location" id="seatPref">
          <option value="indoor">Indoor</option>
          <option value="outdoor">Outdoor</option>
          <option value="basement">Basement</option>
          <option value="car">Balcony</option>
        </select><br />
       
       <button type="submit">Reserve Table</button>
      
      </form>
      
    )
  }
});