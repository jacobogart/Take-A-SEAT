import React, { Component } from 'react';
import Keyword from './Keyword'
import '../css/KeywordContainer.scss';

class KeywordContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentWord: null
    };
  }

  updateCurrentWord = newWord => {
    console.log(newWord);
    this.setState({
      currentWord: newWord
    });
    this.props.findNextWords(newWord.nextWords);
  };

  render() {
    return (
      <section className="KeywordContainer">
        {this.props.nextWords.map(nextWord => (
          <Keyword
            key={nextWord.id}
            keywordData={nextWord}
            updateCurrentWord={this.updateCurrentWord}
            addToChalkboard={this.props.addToChalkboard}
          />
        ))}
      </section>
    );
  }
}

export default KeywordContainer;
