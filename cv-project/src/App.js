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
      </div>
    </div>
  );
}

export default App;
