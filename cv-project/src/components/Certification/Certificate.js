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
      id: this.props.id,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handlePushArr = this.handlePushArr.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
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

  handleCancel() {
    const { id } = this.state;
    const { handleRemoveInput } = this.props;
    console.log(id);
    handleRemoveInput(id);
  }

  handleChange = input => e => {
    this.setState({
      [input]: e.target.value,
    });
  };

  render() {
    const { submitted, id } = this.state;
    return (
      <div className='cert-form'>
        <input
          placeholder='name'
          type='text'
          onChange={this.handleChange('name')}
        ></input>
        <input
          placeholder='Date of completion'
          type='date'
          onChange={this.handleChange('date')}
        ></input>
        {submitted === false ? (
          <div>
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
            <button
              type='button'
              className='cancel'
              onClick={this.handleCancel}
            >
              Cancel
            </button>
          </div>
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
