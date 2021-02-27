import React, { Component } from 'react';

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
  }

  // Push job array up to Experience Component
  handlePushArr() {
    const { jobs } = this.state;
    const { handleJobObjects } = this.props;

    handleJobObjects(jobs);
  }

  handleAdd() {
    const { title, company, from, to, activities } = this.state;
    const job = {
      title: title,
      company: company,
      from: from,
      to: to,
      activities: activities,
    };
    let arr = [];
    arr.push(job);

    this.setState(
      {
        jobs: arr,
        submitted: true,
      },
      () => {
        this.handlePushArr();
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
        toDate: this.state.toDate,
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
    const { checked, submitted } = this.state;

    return (
      <div className='experience-form'>
        <input
          name='title'
          placeholder='Title'
          type='text'
          className='experience-fields'
          onChange={this.handleChange('title')}
          disabled={submitted}
          required
        ></input>
        <input
          name='company-name'
          placeholder='Company'
          type='text'
          className='experience-fields'
          onChange={this.handleChange('company')}
          disabled={submitted}
          required
        ></input>
        <input
          placeholder='From:'
          type='date'
          className='experience-fields from-date'
          onChange={this.handleChange('from')}
          disabled={submitted}
          required
        ></input>
        <input
          placeholder='To:'
          type='date'
          className='experience-fields to-date'
          onChange={this.handleChange('to')}
          disabled={checked}
          disabled={submitted}
          required
        ></input>
        <label className='switch'>
          <input
            type='checkbox'
            className='toggle-ongoing'
            onClick={this.handlePresentDate}
            disabled={submitted}
          ></input>
          <span className='slider round'>Present</span>
        </label>
        <textarea
          name='activities'
          placeholder='Activities & Responsiblities'
          onChange={this.handleChange('activities')}
          disabled={submitted}
          required
        ></textarea>
        {submitted === false ? (
          <button type='button' className='submit-job' onClick={this.handleAdd}>
            <span>
              <i className='fas fa-plus'></i>
            </span>
            Submit
          </button>
        ) : (
          <button type='button' className='delete'>
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
