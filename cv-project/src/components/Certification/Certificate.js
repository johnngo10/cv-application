import React, { Component } from 'react';

class Certificate extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      date: '',
      certs: [],
      checked: false,
      submitted: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handlePushArr = this.handlePushArr.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  handlePushArr() {
    const { certs } = this.state;
    const { handleCertsObjects } = this.props;

    handleCertsObjects(certs);
  }

  handleAdd() {
    const { name, date } = this.state;
    const cert = {
      name: name,
      date: date,
    };
    let arr = [];
    arr.push(cert);

    this.setState(
      {
        certs: arr,
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

  render() {
    const { submitted } = this.state;
    return (
      <div className='cert-form'>
        <input
          placeholder='name'
          type='text'
          onChange={this.handleChange}
        ></input>
        <input
          placeholder='Date of completion'
          type='date'
          onChange={this.handleChange}
        ></input>
        {submitted === false ? (
          <button
            type='button'
            className='submit-cert'
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

export default Certificate;
