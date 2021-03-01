import React, { Component } from 'react';
import Certificate from './Certificate';

class Certification extends Component {
  constructor(props) {
    super(props);

    this.state = {
      certInputs: this.props.certification,
      certObj: [],
      arr: [],
    };

    this.handleAddCerts = this.handleAddCerts.bind(this);
    this.handleConcatCertsToArr = this.handleConcatCertsToArr.bind(this);
    this.handleCertsObjects = this.handleCertsObjects.bind(this);
    this.handlePushArr = this.handlePushArr.bind(this);
    this.handleRemoveCert = this.handleRemoveCert.bind(this);
  }

  handleAddCerts(e) {
    let certs = this.state.certInputs;
    certs.push(1);
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

  handleRemoveCert(index) {
    let arr = this.state.certInputs;
    arr.splice(index, 1);

    this.setState(
      {
        certInputs: arr,
        certObj: arr,
      },
      () => {
        this.handlePushArr();
      }
    );
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
              index={index}
              handleCertsObjects={this.handleCertsObjects}
              handleRemoveCert={this.handleRemoveCert}
              name={value.name}
              date={value.date}
              submitted={value.submitted}
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
