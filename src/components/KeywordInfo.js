import React, { Component } from 'react';

class KeywordInfo extends Component {
  
  submitValue = e => {
    e.preventDefault();
    let value = e.target.querySelector("input").value;
    this.props.selectWord(value, this.props.keywordData);
  }

  render() {
    let { details, isEditable, value } = this.props.keywordData;
    return (
      <div className="KeywordInfo">
        <p>{details}</p>
        {isEditable && 
          <form 
            id="keywordForm"
            onSubmit={this.submitValue}
          >
            <input type="text" defaultValue={value}/>
            <button type="submit">Submit</button>
          </form>
          
        }
      </div>

    );
  }
}

export default KeywordInfo;
