import React, { Component } from 'react';
import KeywordInfo from './KeywordInfo';

class Keyword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDetails: false
    }
  }

  selectWord = (value, keywordData) => {
    if (this.state.showDetails) {
      this.props.findNextWords(keywordData);
      this.props.chalkboardChecker(value);
    }
    this.toggleShowDetails();
  }

  toggleShowDetails = () => {
    this.setState({
      showDetails: !this.state.showDetails
    });
  }

  render() {
    let { word } = this.props.keywordData;
    return (
      <div>
        <button
          className="keywordButton"
          onClick={() =>
            this.selectWord(this.props.keywordData.value, this.props.keywordData)
          }
        >
          {word}
        </button>
        {this.state.showDetails && (
          <KeywordInfo
            keywordData={this.props.keywordData}
            selectWord={this.selectWord}
          />
        )}
      </div>
    );
  }
}

export default Keyword;
