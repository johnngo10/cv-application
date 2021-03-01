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
    const check = e.target.checked;

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
            this.state.submitted
              ? true
              : this.state.checked
              ? true
              : submitted
              ? true
              : false
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
          <div>
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
            <button
              type='button'
              className='cancel'
              onClick={this.handleDelete}
            >
              Cancel
            </button>
          </div>
        ) : (
          <button type='button' className='delete' onClick={this.handleDelete}>
            Delete
          </button>
        )}
      </div>
    );
  }
}

export default Jobs;
