import React, { Component } from 'react';
import AcronymContainer from './AcronymContainer';
import KeywordContainer from './KeywordContainer';
import Chalkboard from './Chalkboard';
import { keywords } from '../data-set';
import { stages } from "../data-set";

class App extends Component {
  constructor() {
    super();
    this.state = {
      showKeywords: false,
      keywords: keywords,
      chalkboardPhrase: '',
      stages: stages,
      nextWords: null,
    };
  }

  findNextWords = (words) => {
    let newNextWords = words.map(nextWord =>
      this.state.keywords.find(keyword => keyword.word === nextWord)
    );
    this.setState({
      nextWords: newNextWords,
      showKeywords: true
    });
  };

  addToChalkboard = keywordValue => {
    let newPhrase = this.state.chalkboardPhrase
    ? this.state.chalkboardPhrase.concat("", keywordValue)
    : keywordValue;
    this.setState({
      chalkboardPhrase: newPhrase
    });
  };

  render() {
    return (
      <main>
        <AcronymContainer
          stages={this.state.stages}
          findNextWords={this.findNextWords}
        />
        {this.state.showKeywords && (
          <KeywordContainer
            keywords={this.state.keywords}
            addToChalkboard={this.addToChalkboard}
            nextWords={this.state.nextWords}
            findNextWords={this.findNextWords}
          />
        )}
        {this.state.showKeywords && (
          <Chalkboard chalkboardPhrase={this.state.chalkboardPhrase} />
        )}
      </main>
    );
  }
}

export default App;
