import React, { Component } from 'react';
import '../css/KeywordInfo.scss';

class KeywordInfo extends Component {
  render() {
    let { details } = this.props.keyword;
    return (
      <div>
        <p>{details}</p>
        {this.props.isEditable && 
          <input type="text" />
        }
      </div>

    );
  }
}

export default KeywordInfo;
