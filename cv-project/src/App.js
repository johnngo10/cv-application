import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PersonalInfo from './components/PersonalInfo';
import Objective from './components/Objective';
import Experience from './components/Experience/Experience';
import Education from './components/Education';
import Certification from './components/Certification';
import Form from './components/Form';
import Resume from './components/Resume';

class App extends Component {
  constructor() {
    super();

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      number: '',
      address: '',
      city: '',
      state: '',
      zip: '',
      title: '',
      objective: '',
      experience: [],
      submitted: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleExperienceChange = this.handleExperienceChange.bind(this);
  }

  handleChange = input => e => {
    this.setState({
      [input]: e.target.value,
    });
  };

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      submitted: true,
    });
  }

  handleExperienceChange() {}

  render() {
    const {
      firstName,
      lastName,
      email,
      number,
      address,
      city,
      state,
      zip,
      title,
      objective,
      submitted,
    } = this.state;

    return (
      <div className='App'>
        {submitted ? (
          <Resume
            firstName={firstName}
            lastName={lastName}
            email={email}
            number={number}
            address={address}
            city={city}
            state={state}
            zip={zip}
            objective={objective}
            title={title}
          />
        ) : (
          <form id='form' onSubmit={this.handleSubmit}>
            <PersonalInfo handleChange={this.handleChange} />
            <Objective handleChange={this.handleChange} />
            <Experience />
            <Education />
            <Certification />
            <div id='submit-container'>
              <input type='submit' id='submit'></input>
            </div>
          </form>
        )}
      </div>
    );
  }
}

export default App;

// Create a state with an array of job objects
// Pass experience state array as prop to resume component
// Resume will map prop and render the jobs
