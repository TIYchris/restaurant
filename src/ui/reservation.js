import React from 'react';
import { postReservation } from 'api/data'
import { browserHistory } from 'react-router';

require('assets/styles/reservation.scss');


export default React.createClass({
  getInitialState: function () {
    return {
      name: '',
      guests: 0,
      date: "",
      notes: "",
      location: ""

    }
  },
  handleChange: function (e) {
    this.setState({
      name: document.getElementById('fullName').value,
      guests: document.getElementById('howMany').value,
      date: document.getElementById('resDate').value,
      notes: document.getElementById('specialNotes').value,
      location: document.getElementById('seatPref').value
    })
  },
  handleSubmit: function(e){
    e.preventDefault();
    postReservation(this.state).then(function(resp){
      browserHistory.push('/');
    }.bind(this))
  },
  render: function () {
    return (
      
      <form action="#" onSubmit={this.handleSubmit} method="post" className="reservations">
        
        <label htmlFor="fullName">Full Name</label><br />
        <input type="text" onChange={this.handleChange} value={this.state.name} name="fullName" ref="name" id="fullName" /><br />
        
        <label htmlFor="howMany">Number of Guests</label><br />
        <input type="number" onChange={this.handleChange} value={this.state.guests} name="howMany" ref="guests" id="howMany" /><br />
        
        <label htmlFor="resDate">Date</label><br />
        <input type="date" onChange={this.handleChange} value={this.state.date} name="resDate" ref="date" id="resDate" /><br />
        
        <label htmlFor="specialNotes">Special Notes</label><br />
        <textarea name="specialNotes" onChange={this.handleChange} value={this.state.notes} ref="notes" id="specialNotes" cols="65" rows="7"></textarea><br />
      
        <label htmlFor="seatPref">Seating Preferences</label><br />
        <select name="location" onChange={this.handleChange} value={this.state.location} ref="location" id="seatPref">
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