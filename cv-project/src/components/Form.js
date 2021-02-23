import React, { Component } from 'react';
import PersonalInfo from './PersonalInfo';
import Objective from './Objective';
import Experience from './Experience';
import Education from './Education';

class Form extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <form id='form'>
        <PersonalInfo />
        <Objective />
        <Experience />
        <Education />
        <div id='submit-container'>
          <input type='submit' id='submit'></input>
        </div>
      </form>
    );
  }
}

export default Form;
