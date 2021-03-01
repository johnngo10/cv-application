import React, { Component } from 'react';

class Objective extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { handleChange, objective } = this.props;
    return (
      <div id='resume-obj-container'>
        <h2>Resume objective</h2>
        <div>
          <textarea
            name='objective'
            placeholder='Summarize your career goals'
            onChange={handleChange('objective')}
            value={objective}
            required
          ></textarea>
        </div>
      </div>
    );
  }
}

export default Objective;
