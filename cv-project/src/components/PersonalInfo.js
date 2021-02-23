import React, { Component } from 'react';

class PersonalInfo extends Component {
  constructor() {
    super();

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      number: '',
      address: '',
      city: '',
      state: '',
      zip: '',
    };
  }

  handleFirstNameChange() {}

  render() {
    return (
      <div id='pesonal-info-form-container'>
        <h2>Personal Information</h2>
        <div className='pesonal-info-form'>
          <input
            name='first-name'
            placeholder='First Name'
            type='text'
            required
          ></input>
          <input
            name='last-name'
            placeholder='Last Name'
            type='text'
            required
          ></input>
          <input name='email' placeholder='Email' type='text'></input>
          <input
            name='phone'
            placeholder='Phone Number'
            type='tel'
            pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
            required
          ></input>
        </div>
        <div className='pesonal-info-form'>
          <input
            name='address'
            placeholder='Address'
            type='text'
            required
          ></input>
          <input name='city' placeholder='City' type='text' required></input>
          <input name='state' placeholder='State' type='text' required></input>
          <input name='zip' placeholder='Zip' type='text' required></input>
        </div>
      </div>
    );
  }
}

export default PersonalInfo;
