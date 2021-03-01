import React, { Component } from 'react';

class PersonalInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      handleChange,
      firstName,
      lastName,
      email,
      number,
      address,
      city,
      state,
      zip,
      title,
    } = this.props;

    return (
      <div id='pesonal-info-form-container'>
        <h2>Personal Information</h2>
        <div className='pesonal-info-form'>
          <input
            className='persona-info-input'
            name='first-name'
            placeholder='First Name'
            type='text'
            onChange={handleChange('firstName')}
            value={firstName}
            required
          ></input>
          <input
            className='persona-info-input'
            name='last-name'
            placeholder='Last Name'
            type='text'
            onChange={handleChange('lastName')}
            value={lastName}
            required
          ></input>
          <input
            className='persona-info-input'
            name='email'
            placeholder='Email'
            type='text'
            onChange={handleChange('email')}
            value={email}
          ></input>
          <input
            className='persona-info-input'
            name='phone'
            placeholder='Phone Number'
            type='tel'
            pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
            onChange={handleChange('number')}
            value={number}
            required
          ></input>
        </div>
        <div className='pesonal-info-form'>
          <input
            className='persona-info-input'
            name='address'
            placeholder='Address'
            type='text'
            onChange={handleChange('address')}
            value={address}
            required
          ></input>
          <input
            className='persona-info-input'
            name='city'
            placeholder='City'
            type='text'
            onChange={handleChange('city')}
            value={city}
            required
          ></input>
          <input
            className='persona-info-input'
            name='state'
            placeholder='State'
            type='text'
            onChange={handleChange('state')}
            value={state}
            required
          ></input>
          <input
            className='persona-info-input'
            name='zip'
            placeholder='Zip'
            type='text'
            onChange={handleChange('zip')}
            value={zip}
            required
          ></input>
          <input
            name='title'
            placeholder='Title'
            type='text'
            id='persona-info-title'
            onChange={handleChange('title')}
            value={title}
            required
          ></input>
        </div>
      </div>
    );
  }
}

export default PersonalInfo;
