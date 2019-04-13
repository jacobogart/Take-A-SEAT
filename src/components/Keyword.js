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

  selectWord = (value) => {
    if (this.state.showDetails) {
      this.props.updateCurrentWord(this.props.keywordData)
      this.props.addToChalkboard(value)
    }
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
          onClick={() => this.selectWord(this.props.keywordData.value)}
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
