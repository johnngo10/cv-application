import React, { Component } from 'react';
import uniqid from 'uniqid';

class Resume extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { handleEdit } = this.props;
    handleEdit();
  }

  render() {
    const {
      firstName,
      lastName,
      email,
      number,
      address,
      city,
      state,
      zip,
      objective,
      title,
      experience,
      education,
      certification,
    } = this.props;

    return (
      <div id='resume-container'>
        <header id='header'>
          <h1 id='name'>
            {firstName} {lastName}
          </h1>
          <div className='divider'></div>
          <div id='title'>{title}</div>
          <button type='button' className='edit' onClick={this.handleClick}>
            <i className='fas fa-edit'></i>
          </button>
        </header>
        <main id='main'>
          <div id='col-1'>
            <div id='objective'>
              <div>
                <h2 className='category'>Resume Objective</h2>
                <p>{objective}</p>
              </div>
            </div>
            <div>
              <h2 className='category'>EXPERIENCE</h2>
              <div>
                {experience.map(job => {
                  return (
                    <div className='jobs' key={uniqid()}>
                      <h3>{job.title}</h3>
                      <h4>
                        {job.company} / {job.from} - {job.to}
                      </h4>
                      <p>{job.activities}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div id='col-2'>
            <div id='info-container'>
              <div className='info'>
                <i className='fas fa-envelope info-icon'></i>
                <p>{email}</p>
              </div>
              <div className='info'>
                <i className='fas fa-phone info-icon'></i>
                <p>{number}</p>
              </div>
              <div className='info'>
                <i className='fas fa-map-marker-alt info-icon'></i>
                <p>
                  {address}, {city} {state} {zip}
                </p>
              </div>
            </div>
            {/* <div id='skills-container'>
              <h2 className='category'>SKILLS</h2>
              <ul>
                <li>Web Development</li>
                <li>Problem Solving</li>
                <li>Time Management</li>
              </ul>
            </div> */}
            <div className='education-container'>
              <h2 className='category'>EDUCATION</h2>
              {education.map(school => {
                return (
                  <div key={uniqid()}>
                    <h3>{school.schoolName}</h3>
                    <p>{school.degree}</p>
                    <p>
                      {school.from} - {school.to}
                    </p>
                  </div>
                );
              })}
            </div>
            <div id='certification-container'>
              <h2 className='category'>LICENSES & CERTIFICATES</h2>
              {certification.map(cert => {
                return (
                  <div key={uniqid()}>
                    <p>{cert.name}</p>
                    <p>{cert.date}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default Resume;
