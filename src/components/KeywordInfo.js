import React, { Component } from 'react';

class KeywordInfo extends Component {
  
  submitValue = e => {
    e.preventDefault();
    this.props.selectWord(e.target.querySelector("input").value);
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
