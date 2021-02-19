import React, { Component } from 'react';

function App() {
  return (
    <div className='App'>
      <div>
        <h2>Personal Information</h2>
        <form>
          <input name='first-name' placeholder='First Name' type='text'></input>
          <input name='last-name' placeholder='Last Name' type='text'></input>
          <input name='email' placeholder='Email' type='text'></input>
          <input name='phone' placeholder='Phone Number' type='tel'></input>
        </form>
        <form>
          <input name='address' placeholder='Address' type='text'></input>
          <input name='city' placeholder='City' type='text'></input>
          <input name='state' placeholder='State' type='text'></input>
          <input name='zip' placeholder='Zip' type='text'></input>
        </form>
      </div>
      <div>
        <h2>Resume objective</h2>
        <form>
          <textarea
            name='objective'
            placeholder='Summarize your career goals'
          ></textarea>
        </form>
      </div>
      <div>
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
        <button>
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
