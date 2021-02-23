import React, { Component } from 'react';

class Education extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div id='education-container'>
        <h2>Education</h2>
        <div className='education-form'>
          <input
            name='school'
            placeholder='Name of school or organization'
            type='text'
            className='education-input'
          ></input>
          <input
            name='degree'
            placeholder='Degree title'
            type='text'
            className='education-input'
          ></input>
          <input
            name='from-date'
            placeholder='From:'
            type='date'
            className='education-input from-date'
          ></input>
          <input
            name='to-date'
            placeholder='To:'
            type='date'
            className='to-date'
          ></input>
          <label className='switch'>
            <input type='checkbox' className='toggle-ongoing'></input>
            <span className='slider round'>Present</span>
          </label>
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

export default Education;
