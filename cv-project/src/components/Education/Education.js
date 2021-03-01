import React, { Component } from 'react';
import School from './School';

class Education extends Component {
  constructor(props) {
    super(props);

    this.state = {
      schoolInputs: this.props.education,
      schoolObj: [],
      arr: [],
    };

    this.handleAddSchools = this.handleAddSchools.bind(this);
    this.handleConcatSchoolToArr = this.handleConcatSchoolToArr.bind(this);
    this.handleSchoolObjects = this.handleSchoolObjects.bind(this);
    this.handlePushArr = this.handlePushArr.bind(this);
    this.handleRemoveSchool = this.handleRemoveSchool.bind(this);
  }

  handleAddSchools(e) {
    let schools = this.state.schoolInputs;
    schools.push(1);
    this.setState({
      schoolInputs: schools,
    });
  }

  handleRemoveSchool(index) {
    let arr = this.state.schoolInputs;
    arr.splice(index, 1);

    this.setState(
      {
        schoolInputs: arr,
        schoolObj: arr,
      },
      () => {
        this.handlePushArr();
      }
    );
  }

  // Push education array up to App Component
  handlePushArr() {
    const { schoolObj } = this.state;
    const { handleEducationChange } = this.props;

    handleEducationChange(schoolObj);
  }

  handleConcatSchoolToArr() {
    const { schoolObj, arr } = this.state;
    this.setState(
      {
        schoolObj: schoolObj.concat(arr),
      },
      () => {
        this.handlePushArr();
      }
    );
  }

  handleSchoolObjects(arr) {
    this.setState(
      {
        arr: arr,
      },
      () => {
        this.handleConcatSchoolToArr();
      }
    );
  }

  render() {
    const { schoolInputs } = this.state;
    return (
      <div id='education-container'>
        <h2>Education</h2>
        {schoolInputs.map((value, index) => {
          return (
            <School
              key={index}
              index={index}
              handleRemoveSchool={this.handleRemoveSchool}
              handleSchoolObjects={this.handleSchoolObjects}
              schoolName={value.schoolName}
              degree={value.degree}
              from={value.from}
              to={value.to}
              checked={value.checked}
              submitted={value.submitted}
            />
          );
        })}
        <button
          type='button'
          id='add-education-button'
          onClick={this.handleAddSchools}
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

export default Education;
