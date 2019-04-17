import React, { Component } from 'react';
import Keyword from './Keyword'

class KeywordContainer extends Component {

  render() {
    return (
      <section className="KeywordContainer">
        <p>Click once for details, click again to select.</p>
        <div className="button-holder">
          {this.props.nextWords.map(nextWord => (
            <Keyword
              key={nextWord.id}
              keywordData={nextWord}
              findNextWords={this.props.findNextWords}
              chalkboardChecker={this.props.chalkboardChecker}
            />
          ))}
        </div> 
      </section>
    );
  }
}

export default KeywordContainer;
