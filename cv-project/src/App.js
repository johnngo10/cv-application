import React, { Component } from 'react';

function App() {
  return (
    <div className='App'>
      <div id='pesonal-info-form-container'>
        <h2>Personal Information</h2>
        <form>
          <input name='first-name' placeholder='First Name' type='text'></input>
          <input name='last-name' placeholder='Last Name' type='text'></input>
          <input name='email' placeholder='Email' type='text'></input>
          <input
            name='phone'
            placeholder='Phone Number'
            type='tel'
            pattern='[0-9]{3}-[0-9]{2}-[0-9]{3}'
          ></input>
        </form>
        <form>
          <input name='address' placeholder='Address' type='text'></input>
          <input name='city' placeholder='City' type='text'></input>
          <input name='state' placeholder='State' type='text'></input>
          <input name='zip' placeholder='Zip' type='text'></input>
        </form>
      </div>
      <div id='resume-obj-container'>
        <h2>Resume objective</h2>
        <form>
          <textarea
            name='objective'
            placeholder='Summarize your career goals'
          ></textarea>
        </form>
      </div>
      <div id='experience-container'>
        <h2>EXPERIENCE</h2>
        <form>
          <input
            name='title'
            placeholder='Title'
            type='text'
            class='experience-fields'
          ></input>
          <input
            name='company-name'
            placeholder='Company'
            type='text'
            class='experience-fields'
          ></input>
          <input
            placeholder='From'
            type='date'
            class='experience-fields'
          ></input>
          <input placeholder='To' type='date' class='experience-fields'></input>
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
          ></input>
          <input name='degree' placeholder='Degree title' type='text'></input>
          <input name='from-date' placeholder='From' type='date'></input>
          <input name='to-date' placeholder='To' type='date'></input>
        </form>
        <button id='add-education-button'>
          <span>
            <i class='fas fa-plus'></i>
          </span>
          Add
        </button>
      </div>
      <div>
        <h2>Licenses & Certificates</h2>
        <form>
          <input placeholder='name' type='text'></input>
          <input placeholder='Date of completion' type='date'></input>
        </form>
      </div>
    </div>
  );
}

export default App;
