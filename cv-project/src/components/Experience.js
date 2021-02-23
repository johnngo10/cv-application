import React, { Component } from 'react';

class Experience extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div id='experience-container'>
        <h2>Experience</h2>
        <div className='experience-form'>
          <input
            name='title'
            placeholder='Title'
            type='text'
            className='experience-fields'
            required
          ></input>
          <input
            name='company-name'
            placeholder='Company'
            type='text'
            className='experience-fields'
            required
          ></input>
          <input
            placeholder='From:'
            type='date'
            className='experience-fields from-date'
            required
          ></input>
          <input
            placeholder='To:'
            type='date'
            className='experience-fields to-date'
          ></input>
          <label className='switch'>
            <input type='checkbox' className='toggle-ongoing'></input>
            <span className='slider round'>Present</span>
          </label>
          <input
            name='title'
            placeholder='Activities & Responsiblities'
            type='text'
            className='experience-fields'
          ></input>
          <input
            name='title'
            placeholder='Activities & Responsiblities'
            type='text'
            className='experience-fields'
          ></input>
          <input
            name='title'
            placeholder='Activities & Responsiblities'
            type='text'
            className='experience-fields'
          ></input>
          <div id='add-activities-container'>
            <p id='add-activities'>
              <span>
                <i className='fas fa-plus'></i>
              </span>
              Add
            </p>
          </div>
        </div>
        <button id='add-experience-button'>
          <span>
            <i className='fas fa-plus'></i>
          </span>
          Add
        </button>
      </div>
    );
  }
}

export default Experience;
