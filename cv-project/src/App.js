import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PersonalInfo from './components/PersonalInfo';
import Objective from './components/Objective';
import Experience from './components/Experience/Experience';
import Education from './components/Education/Education';
import Certification from './components/Certification/Certification';
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
      education: [],
      certification: [],
      submitted: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleExperienceChange = this.handleExperienceChange.bind(this);
    this.handleEducationChange = this.handleEducationChange.bind(this);
    this.handleCertificationChange = this.handleCertificationChange.bind(this);
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

  handleExperienceChange(arr) {
    this.setState({
      experience: arr,
    });
  }

  handleEducationChange(arr) {
    this.setState({
      education: arr,
    });
  }

  handleCertificationChange(arr) {
    this.setState({
      certification: arr,
    });
  }

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
      experience,
      education,
      certification,
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
            experience={experience}
            education={education}
            certification={certification}
          />
        ) : (
          <form id='form' onSubmit={this.handleSubmit}>
            <PersonalInfo handleChange={this.handleChange} />
            <Objective handleChange={this.handleChange} />
            <Experience handleExperienceChange={this.handleExperienceChange} />
            <Education handleEducationChange={this.handleEducationChange} />
            <Certification
              handleCertificationChange={this.handleCertificationChange}
            />
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
