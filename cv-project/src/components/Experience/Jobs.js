import React, { Component } from 'react';

class Jobs extends Component {
  constructor() {
    super();

    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd(e) {
    const target = e.currentTarget;
    target.insertAdjacentHTML(
      'beforebegin',
      `
    <input
      name='title'
      placeholder='Activities & Responsiblities'
      type='text'
      class='experience-fields'
    ></input>
    `
    );
  }

  render() {
    return (
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
        <div id='add-activities-container' onClick={this.handleAdd}>
          <p id='add-activities'>
            <span>
              <i className='fas fa-plus'></i>
            </span>
            Add
          </p>
        </div>
      </div>
    );
  }
}

export default Jobs;
