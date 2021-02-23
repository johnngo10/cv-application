import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PersonalInfo from './components/PersonalInfo';
import Objective from './components/Objective';
import Experience from './components/Experience';
import Education from './components/Education';
import Form from './components/Form';
import Resume from './components/Resume';

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
      <BrowserRouter>
        <div className='App'>
          <Switch>
            <Route path='/' render={() => <Form />} exact />
            <Route path='/resume' render={() => <Resume />} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
