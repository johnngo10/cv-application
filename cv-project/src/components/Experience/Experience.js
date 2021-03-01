import React, { Component } from 'react';
import Jobs from './Jobs';
import uniqid from 'uniqid';

class Experience extends Component {
  constructor(props) {
    super(props);

    this.state = {
      jobInputs: this.props.experience,
      jobsObj: [],
      arr: [],
    };

    this.handleAddJobs = this.handleAddJobs.bind(this);
    this.handleConcatJobToArr = this.handleConcatJobToArr.bind(this);
    this.handleJobObjects = this.handleJobObjects.bind(this);
    this.handlePushArr = this.handlePushArr.bind(this);
    this.handleRemoveJob = this.handleRemoveJob.bind(this);
  }

  handleAddJobs(e) {
    let jobs = this.state.jobInputs;
    jobs.push(1);
    this.setState({
      jobInputs: jobs,
    });
  }

  handleRemoveJob(index) {
    let arr = this.state.jobInputs;
    arr.splice(index, 1);

    this.setState(
      {
        jobInputs: arr,
        jobsObj: arr,
      },
      () => {
        this.handlePushArr();
      }
    );
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
          return (
            <Jobs
              key={index}
              index={index}
              handleJobObjects={this.handleJobObjects}
              handleRemoveJob={this.handleRemoveJob}
              title={value.title}
              company={value.company}
              from={value.from}
              to={value.to}
              activities={value.activities}
              checked={value.checked}
              submitted={value.submitted}
            />
          );
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
