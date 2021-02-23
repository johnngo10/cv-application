import React, { Component } from 'react';

class Objective extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div id='resume-obj-container'>
        <h2>Resume objective</h2>
        <div>
          <textarea
            name='objective'
            placeholder='Summarize your career goals'
            required
          ></textarea>
        </div>
      </div>
    );
  }
}

export default Objective;
