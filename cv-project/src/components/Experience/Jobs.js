import React, { Component } from 'react';
import uniqid from 'uniqid';

class Jobs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      company: '',
      from: '',
      to: '',
      toDate: '',
      activities: '',
      jobs: [],
      jobArr: [],
      checked: false,
      submitted: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handlePresentDate = this.handlePresentDate.bind(this);
    this.handlePushArr = this.handlePushArr.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Push job array up to Experience Component
  handlePushArr() {
    const { jobs } = this.state;
    const { handleJobObjects } = this.props;

    handleJobObjects(jobs);
  }

  handleAdd() {
    const {
      id,
      title,
      company,
      from,
      to,
      activities,
      checked,
      submitted,
    } = this.state;
    const job = {
      title: title,
      company: company,
      from: from,
      to: to,
      activities: activities,
      checked: checked,
      submitted: submitted,
    };
    let arr = [];
    arr.push(job);

    this.setState(
      {
        jobs: arr,
      },
      () => {
        this.handlePushArr();
      }
    );
  }

  handleDelete() {
    const { handleRemoveJob, index } = this.props;
    handleRemoveJob(index);
  }

  handleSubmit() {
    this.setState(
      {
        submitted: true,
      },
      () => {
        this.handleAdd();
      }
    );
  }

  handleChange = input => e => {
    this.setState({
      [input]: e.target.value,
    });
  };

  handlePresentDate(e) {
    const target = e.target;
    const date = new Date();
    const check = e.target.checked;
    const toDate = target;
    if (check) {
      this.setState({
        toDate: this.state.to,
        to: 'Present',
        checked: true,
      });
    } else {
      this.setState({
        to: this.state.toDate,
        checked: false,
      });
    }
  }

  render() {
    // const { checked, submitted, toDate } = this.state;
    const {
      title,
      company,
      from,
      to,
      activities,
      checked,
      submitted,
    } = this.props;

    return (
      <div className='experience-form'>
        <input
          name='title'
          placeholder='Title'
          type='text'
          className='experience-fields'
          value={title}
          onChange={this.handleChange('title')}
          disabled={submitted === undefined ? this.state.submitted : submitted}
          required
        ></input>
        <input
          name='company-name'
          placeholder='Company'
          type='text'
          className='experience-fields'
          value={company}
          onChange={this.handleChange('company')}
          disabled={submitted === undefined ? this.state.submitted : submitted}
          required
        ></input>
        <input
          placeholder='From:'
          type='date'
          className='experience-fields from-date'
          value={from}
          onChange={this.handleChange('from')}
          disabled={submitted === undefined ? this.state.submitted : submitted}
          required
        ></input>
        <input
          placeholder='To:'
          type='date'
          className='experience-fields to-date'
          value={to === 'Present' ? '' : to}
          onChange={this.handleChange('to')}
          disabled={
            this.state.submitted ? true : this.state.checked ? true : false
          }
          required
        ></input>
        <label className='switch'>
          <input
            type='checkbox'
            className='toggle-ongoing'
            onChange={this.handlePresentDate}
            disabled={
              submitted === undefined ? this.state.submitted : submitted
            }
            checked={checked === undefined ? this.state.checked : checked}
          ></input>
          <span className='slider round'>Present</span>
        </label>
        <textarea
          name='activities'
          placeholder='Activities & Responsiblities'
          value={activities}
          onChange={this.handleChange('activities')}
          disabled={submitted === undefined ? this.state.submitted : submitted}
          required
        ></textarea>
        {this.state.submitted === false && submitted === undefined ? (
          <button
            type='button'
            className='submit-job'
            onClick={this.handleSubmit}
          >
            <span>
              <i className='fas fa-plus'></i>
            </span>
            Submit
          </button>
        ) : (
          <button type='button' className='delete' onClick={this.handleDelete}>
            Delete
          </button>
        )}
        {/* <input
          name='activities'
          placeholder='Activities & Responsiblities'
          type='text'
          className='experience-fields'
        ></input>
        <input
          name='activities'
          placeholder='Activities & Responsiblities'
          type='text'
          className='experience-fields'
        ></input>
        <input
          name='activities'
          placeholder='Activities & Responsiblities'
          type='text'
          className='experience-fields'
        ></input> */}
        {/* <div id='add-activities-container' onClick={this.handleAdd}>
          <p id='add-activities'>
            <span>
              <i className='fas fa-plus'></i>
            </span>
            Add
          </p>
        </div> */}
      </div>
    );
  }
}

export default Jobs;
