import React, { Component } from 'react';

class Certification extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div id='cert-container'>
        <h2>Licenses & Certificates</h2>
        <div className='cert-form'>
          <input placeholder='name' type='text'></input>
          <input placeholder='Date of completion' type='date'></input>
        </div>
        <button id='add-education-button'>
          <span>
            <i className='fas fa-plus'></i>
          </span>
          Add
        </button>
      </div>
    );
  }
}

export default Certification;
