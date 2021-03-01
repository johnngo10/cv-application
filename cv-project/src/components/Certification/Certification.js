import React, { Component } from 'react';
import Certificate from './Certificate';
import uniqid from 'uniqid';

class Certification extends Component {
  constructor() {
    super();

    this.state = {
      certInputs: [],
      certObj: [],
      arr: [],
    };

    this.handleAddCerts = this.handleAddCerts.bind(this);
    this.handleConcatCertsToArr = this.handleConcatCertsToArr.bind(this);
    this.handleCertsObjects = this.handleCertsObjects.bind(this);
    this.handlePushArr = this.handlePushArr.bind(this);
    this.handleRemoveInput = this.handleRemoveInput.bind(this);
  }

  handleAddCerts(e) {
    let certs = this.state.certInputs;
    certs.push(uniqid());
    this.setState({
      certInputs: certs,
    });
  }

  // Push education array up to App Component
  handlePushArr() {
    const { certObj } = this.state;
    const { handleCertificationChange } = this.props;

    handleCertificationChange(certObj);
  }

  handleConcatCertsToArr() {
    const { certObj, arr } = this.state;
    this.setState(
      {
        certObj: certObj.concat(arr),
      },
      () => {
        this.handlePushArr();
      }
    );
  }

  handleCertsObjects(arr) {
    this.setState(
      {
        arr: arr,
      },
      () => {
        this.handleConcatCertsToArr();
      }
    );
  }

  handleRemoveInput(id) {
    let arr = this.state.certInputs;
    let index = arr.indexOf(id);
    if (index > -1) {
      arr.splice(index, 1);
    }

    this.setState({
      certInputs: arr,
    });
  }

  render() {
    const { certInputs } = this.state;
    return (
      <div id='cert-container'>
        <h2>Licenses & Certificates</h2>

        {certInputs.map((value, index) => {
          return (
            <Certificate
              key={index}
              id={value}
              handleCertsObjects={this.handleCertsObjects}
              handleRemoveInput={this.handleRemoveInput}
            />
          );
        })}
        <button
          type='button'
          id='add-education-button'
          onClick={this.handleAddCerts}
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

export default Certification;
