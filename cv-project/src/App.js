import React, { Component } from 'react';
import PersonalInfo from './components/PersonalInfo';
import Objective from './components/Objective';
import Experience from './components/Experience';
import Education from './components/Education';

class App extends Component {
  constructor() {
    super();

    this.state = {
      personalInfo: [],
      objective: '',
      experience: [],
      education: [],
      certificates: [],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState();
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(e);
  }

  render() {
    return (
      <div className='App'>
        <form id='form' onSubmit={this.handleSubmit}>
          <PersonalInfo />
          <Objective />
          <Experience />
          <Education />
          <div id='submit-container'>
            <input type='submit' id='submit'></input>
          </div>
        </form>
      </div>
    );
  }
}

export default App;
