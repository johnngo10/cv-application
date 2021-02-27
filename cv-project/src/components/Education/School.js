import React, { Component } from 'react';

class School extends Component {
  constructor(props) {
    super(props);

    this.state = {
      schoolName: '',
      degree: '',
      from: '',
      to: '',
      toDate: '',
      schools: [],
      schoolArr: [],
      checked: false,
      submitted: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handlePresentDate = this.handlePresentDate.bind(this);
    this.handlePushArr = this.handlePushArr.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  // Push school array up to Experience Component
  handlePushArr() {
    const { schools } = this.state;
    const { handleSchoolObjects } = this.props;

    handleSchoolObjects(schools);
  }

  handleAdd() {
    const { schoolName, degree, from, to } = this.state;
    const school = {
      schoolName: schoolName,
      degree: degree,
      from: from,
      to: to,
    };
    let arr = [];
    arr.push(school);

    this.setState(
      {
        schools: arr,
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
    const { submitted } = this.state;
    return (
      <div className='education-form'>
        <div className='education-form'>
          <input
            name='school'
            placeholder='Name of school or organization'
            type='text'
            className='education-input'
            onChange={this.handleChange('schoolName')}
            disabled={submitted}
          ></input>
          <input
            name='degree'
            placeholder='Degree title'
            type='text'
            className='education-input'
            onChange={this.handleChange('degree')}
            disabled={submitted}
          ></input>
          <input
            name='from-date'
            placeholder='From:'
            type='date'
            className='education-input from-date'
            onChange={this.handleChange('from')}
            disabled={submitted}
          ></input>
          <input
            name='to-date'
            placeholder='To:'
            type='date'
            className='to-date'
            onChange={this.handleChange('to')}
            disabled={submitted}
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
        </div>
        {submitted === false ? (
          <button
            type='button'
            className='submit-school'
            onClick={this.handleAdd}
          >
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
      </div>
    );
  }
}

export default School;
