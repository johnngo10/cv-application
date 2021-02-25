import React, { Component } from 'react';
import PersonalInfo from './PersonalInfo';
import Objective from './Objective';
import Experience from './Experience/Experience';
import Education from './Education';

class Form extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form id='form'>
        <PersonalInfo
          handleFirstNameChange={this.props.handleFirstNameChange}
        />
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
