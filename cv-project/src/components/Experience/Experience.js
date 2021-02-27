import React, { Component } from 'react';
import Jobs from './Jobs';

class Experience extends Component {
  constructor(props) {
    super(props);

    this.state = {
      jobInputs: [],
      jobsObj: [],
      arr: [],
    };

    this.handleAddJobs = this.handleAddJobs.bind(this);
    this.handleConcatJobToArr = this.handleConcatJobToArr.bind(this);
    this.handleJobObjects = this.handleJobObjects.bind(this);
    this.handlePushArr = this.handlePushArr.bind(this);
  }

  handleAddJobs(e) {
    let jobs = this.state.jobInputs;
    jobs.push(1);
    this.setState({
      jobInputs: jobs,
    });
  }

  // Push job array up to App Component
  handlePushArr() {
    const { jobsObj } = this.state;
    const { handleExperienceChange } = this.props;

    handleExperienceChange(jobsObj);
  }

  handleConcatJobToArr() {
    const { jobsObj, arr } = this.state;
    this.setState(
      {
        jobsObj: jobsObj.concat(arr),
      },
      () => {
        this.handlePushArr();
      }
    );
  }

  handleJobObjects(arr) {
    this.setState(
      {
        arr: arr,
      },
      () => {
        this.handleConcatJobToArr();
      }
    );
  }

  render() {
    const { jobInputs } = this.state;

    return (
      <div id='experience-container'>
        <h2>Experience</h2>
        {jobInputs.map((value, index) => {
          return <Jobs key={index} handleJobObjects={this.handleJobObjects} />;
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
