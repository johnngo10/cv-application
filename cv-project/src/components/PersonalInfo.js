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

    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleNumberChange = this.handleNumberChange.bind(this);
    this.handleAddressChange = this.handleAddressChange.bind(this);
    this.handleCityChange = this.handleCityChange.bind(this);
    this.handleStateChange = this.handleStateChange.bind(this);
    this.handleZipChange = this.handleZipChange.bind(this);
  }

  handleFirstNameChange(e) {
    this.setState({
      firstName: e.target.value,
    });
    console.log(this.state.firstName);
  }

  handleLastNameChange(e) {
    this.setState({
      lastName: e.target.value,
    });
  }

  handleEmailChange(e) {
    this.setState({
      email: e.target.value,
    });
  }

  handleNumberChange(e) {
    this.setState({
      number: e.target.value,
    });
  }

  handleAddressChange(e) {
    this.setState({
      address: e.target.value,
    });
  }

  handleCityChange(e) {
    this.setState({
      city: e.target.value,
    });
  }

  handleStateChange(e) {
    this.setState({
      state: e.target.value,
    });
  }

  handleZipChange(e) {
    this.setState({
      state: e.target.value,
    });
  }

  render() {
    const {
      firstName,
      lastName,
      email,
      number,
      address,
      city,
      state,
      zip,
    } = this.state;

    return (
      <div id='pesonal-info-form-container'>
        <h2>Personal Information</h2>
        <div className='pesonal-info-form'>
          <input
            name='first-name'
            placeholder='First Name'
            type='text'
            onChange={this.handleFirstNameChange}
            value={firstName}
            required
          ></input>
          <input
            name='last-name'
            placeholder='Last Name'
            type='text'
            onChange={this.handleLastNameChange}
            value={lastName}
            required
          ></input>
          <input
            name='email'
            placeholder='Email'
            type='text'
            onChange={this.handleEmailChange}
            value={email}
          ></input>
          <input
            name='phone'
            placeholder='Phone Number'
            type='tel'
            pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
            onChange={this.handleNumberChange}
            value={number}
            required
          ></input>
        </div>
        <div className='pesonal-info-form'>
          <input
            name='address'
            placeholder='Address'
            type='text'
            onChange={this.handleAddressChange}
            value={address}
            required
          ></input>
          <input
            name='city'
            placeholder='City'
            type='text'
            onChange={this.handleCityChange}
            value={city}
            required
          ></input>
          <input
            name='state'
            placeholder='State'
            type='text'
            onChange={this.handleStateChange}
            value={state}
            required
          ></input>
          <input
            name='zip'
            placeholder='Zip'
            type='text'
            onChange={this.handleZipChange}
            value={zip}
            required
          ></input>
        </div>
      </div>
    );
  }
}

export default PersonalInfo;
