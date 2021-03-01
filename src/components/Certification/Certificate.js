import React, { Component } from 'react';

class Certificate extends Component {
  constructor(props) {
    super(props);

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
    this.handleDelete = this.handleDelete.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handlePushArr() {
    const { certs } = this.state;
    const { handleCertsObjects } = this.props;
    handleCertsObjects(certs);
  }

  handleAdd() {
    const { name, date, submitted } = this.state;
    const cert = {
      name: name,
      date: date,
      submitted: submitted,
    };
    let arr = [];
    arr.push(cert);

    this.setState(
      {
        certs: arr,
      },
      () => {
        this.handlePushArr();
      }
    );
  }

  handleDelete() {
    const { handleRemoveCert, index } = this.props;
    handleRemoveCert(index);
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

  render() {
    const { name, date, submitted } = this.props;
    return (
      <div className='cert-form'>
        <input
          placeholder='name'
          type='text'
          value={name}
          disabled={submitted === undefined ? this.state.submitted : submitted}
          onChange={this.handleChange('name')}
        ></input>
        <input
          placeholder='Date of completion'
          type='date'
          value={date}
          disabled={submitted === undefined ? this.state.submitted : submitted}
          onChange={this.handleChange('date')}
        ></input>
        {this.state.submitted === false && submitted === undefined ? (
          <div>
            <button
              type='button'
              className='submit-cert'
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

export default Certificate;
