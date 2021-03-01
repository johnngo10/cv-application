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
    this.handleDelete = this.handleDelete.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Push school array up to Experience Component
  handlePushArr() {
    const { schools } = this.state;
    const { handleSchoolObjects } = this.props;

    handleSchoolObjects(schools);
  }

  handleAdd() {
    const { schoolName, degree, from, to, checked, submitted } = this.state;
    const school = {
      schoolName: schoolName,
      degree: degree,
      from: from,
      to: to,
      checked: checked,
      submitted: submitted,
    };
    let arr = [];
    arr.push(school);

    this.setState(
      {
        schools: arr,
      },
      () => {
        this.handlePushArr();
      }
    );
  }

  handleDelete() {
    const { handleRemoveSchool, index } = this.props;
    handleRemoveSchool(index);
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
    const { schoolName, degree, from, to, checked, submitted } = this.props;
    return (
      <div className='education-form'>
        <div className='education-form'>
          <input
            name='school'
            placeholder='Name of school or organization'
            type='text'
            className='education-input'
            value={schoolName}
            onChange={this.handleChange('schoolName')}
            disabled={
              submitted === undefined ? this.state.submitted : submitted
            }
          ></input>
          <input
            name='degree'
            placeholder='Degree title'
            type='text'
            className='education-input'
            value={degree}
            onChange={this.handleChange('degree')}
            disabled={
              submitted === undefined ? this.state.submitted : submitted
            }
          ></input>
          <input
            name='from-date'
            placeholder='From:'
            type='date'
            className='education-input from-date'
            value={from}
            onChange={this.handleChange('from')}
            disabled={
              submitted === undefined ? this.state.submitted : submitted
            }
          ></input>
          <input
            name='to-date'
            placeholder='To:'
            type='date'
            className='to-date'
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
        </div>
        {this.state.submitted === false && submitted === undefined ? (
          <div>
            <button
              type='button'
              className='submit-school'
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

export default School;
