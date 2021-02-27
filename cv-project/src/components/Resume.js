import React, { Component } from 'react';
import uniqid from 'uniqid';

class Resume extends Component {
  constructor(props) {
    super(props);
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
    } = this.props;

    return (
      <div id='resume-container'>
        <header id='header'>
          <h1 id='name'>
            {firstName} {lastName}
          </h1>
          <div className='divider'></div>
          <div id='title'>{title}</div>
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
                {/* <div className='jobs'>
                  <h3>{experience[0].title}</h3>
                  <h4>
                    {experience[0].company} / {experience[0].from} -{' '}
                    {experience[0].to}
                  </h4>
                  <p>{experience[0].activities}</p>
                </div>
                <div className='jobs'>
                  <h3>IT Support</h3>
                  <h4>
                    TechHub, Westminster, CA / September 2014 - December 2015
                  </h4>
                  <ul>
                    <li>
                      Morbi enim nunc faucibus a pellentesque. Quis viverra nibh
                      cras pulvinar mattis.
                    </li>
                    <li>
                      Amet porttitor eget dolor morbi. Nunc congue nisi vitae
                      suscipit tellus mauris a diam maecenas.{' '}
                    </li>
                    <li>
                      Purus semper eget duis at tellus at urna condimentum.
                      Viverra suspendisse potenti nullam ac tortor vitae.{' '}
                    </li>
                  </ul>
                </div> */}
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
            <div id='skills-container'>
              <h2 className='category'>SKILLS</h2>
              <ul>
                <li>Web Development</li>
                <li>Problem Solving</li>
                <li>Time Management</li>
              </ul>
            </div>
            <div className='education-container'>
              <h2 className='category'>EDUCATION</h2>
              <div>
                <h3>University of California, Merced</h3>
                <p>Bachelor of Science in Management and Business Economics</p>
                <p>Aug 2015 - Nov 2018</p>
              </div>
            </div>
            <div id='certification-container'>
              <h2 className='category'>LICENSES & CERTIFICATES</h2>
              <div>
                <p>Google IT Certificate</p>
                <p>2015</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default Resume;
