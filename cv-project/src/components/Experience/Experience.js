import React, { Component } from 'react';
import Jobs from './Jobs';

class Experience extends Component {
  constructor() {
    super();

    this.state = {
      jobsArr: [1],
    };

    this.handleAddJobs = this.handleAddJobs.bind(this);
  }

  handleAddJobs(e) {
    const jobs = this.state.jobsArr;
    jobs.push(1);
    this.setState({
      jobsArr: jobs,
    });
  }

  render() {
    const { jobsArr } = this.state;

    return (
      <div id='experience-container'>
        <h2>Experience</h2>
        {jobsArr.map((value, index) => {
          return <Jobs key={index} />;
        })}
        <button
          type='button'
          id='add-experience-button'
          onClick={this.handleAddJobs}
        >
          <span>
            <i className='fas fa-plus'></i>
          </span>
          Add
        </button>
      </div>
    );
  }
}

export default Experience;
