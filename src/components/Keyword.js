import React, { Component } from 'react';
import KeywordInfo from './KeywordInfo';
import '../css/Keyword.scss';

class Keyword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDetails: false
    }
  }

  selectWord = () => {
    this.props.updateCurrentWord(this.props.keywordData)
    this.props.addToChalkboard(this.props.keywordData.value)
  }

  render() {
    let { word, isEditable } = this.props.keywordData;
    return (
      <div>
        <button onClick={this.selectWord}>
          {word}
        </button>
        {this.state.showDetails && 
          <KeywordInfo
            keyword={this.props.keyword}
            isEditable={isEditable}
          />
        }
      </div>
      

    );
  }
}

export default Keyword;
