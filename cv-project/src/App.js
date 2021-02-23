import React, { Component } from 'react';

function App() {
  return (
    <div className='App'>
      <div id='pesonal-info-form-container'>
        <h2>Personal Information</h2>
        <form>
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
            pattern='[0-9]{3}-[0-9]{2}-[0-9]{3}'
            required
          ></input>
        </form>
        <form>
          <input
            name='address'
            placeholder='Address'
            type='text'
            required
          ></input>
          <input name='city' placeholder='City' type='text' required></input>
          <input name='state' placeholder='State' type='text' required></input>
          <input name='zip' placeholder='Zip' type='text' required></input>
        </form>
      </div>
      <div id='resume-obj-container'>
        <h2>Resume objective</h2>
        <form>
          <textarea
            name='objective'
            placeholder='Summarize your career goals'
            required
          ></textarea>
        </form>
      </div>
      <div id='experience-container'>
        <h2>Experience</h2>
        <form>
          <input
            name='title'
            placeholder='Title'
            type='text'
            class='experience-fields'
            required
          ></input>
          <input
            name='company-name'
            placeholder='Company'
            type='text'
            class='experience-fields'
            required
          ></input>
          <input
            placeholder='From:'
            type='date'
            class='experience-fields from-date'
            required
          ></input>
          <input
            placeholder='To:'
            type='date'
            class='experience-fields to-date'
          ></input>
          <label class='switch'>
            <input type='checkbox' class='toggle-ongoing'></input>
            <span class='slider round'>Present</span>
          </label>
          <input
            name='title'
            placeholder='Activities & Responsiblities'
            type='text'
            class='experience-fields'
          ></input>
          <input
            name='title'
            placeholder='Activities & Responsiblities'
            type='text'
            class='experience-fields'
          ></input>
          <input
            name='title'
            placeholder='Activities & Responsiblities'
            type='text'
            class='experience-fields'
          ></input>
          <div id='add-activities-container'>
            <p id='add-activities'>
              <span>
                <i class='fas fa-plus'></i>
              </span>
              Add
            </p>
          </div>
        </form>
        <button id='add-experience-button'>
          <span>
            <i class='fas fa-plus'></i>
          </span>
          Add
        </button>
      </div>
      <div id='education-container'>
        <h2>Education</h2>
        <form>
          <input
            name='school'
            placeholder='Name of school or organization'
            type='text'
            class='education-input'
          ></input>
          <input
            name='degree'
            placeholder='Degree title'
            type='text'
            class='education-input'
          ></input>
          <input
            name='from-date'
            placeholder='From:'
            type='date'
            class='education-input from-date'
          ></input>
          <input
            name='to-date'
            placeholder='To:'
            type='date'
            class='to-date'
          ></input>
          <label class='switch'>
            <input type='checkbox' class='toggle-ongoing'></input>
            <span class='slider round'>Present</span>
          </label>
        </form>
        <button id='add-education-button'>
          <span>
            <i class='fas fa-plus'></i>
          </span>
          Add
        </button>
      </div>
      <div id='cert-container'>
        <h2>Licenses & Certificates</h2>
        <form>
          <input placeholder='name' type='text'></input>
          <input placeholder='Date of completion' type='date'></input>
        </form>
        <button id='add-education-button'>
          <span>
            <i class='fas fa-plus'></i>
          </span>
          Add
        </button>
      </div>
    </div>
  );
}

export default App;
