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
      currentPhrase: "",
      stages: stages,
      nextWords: null,
      chalkboardPhrases: [],
    };
  }

  findNextWords = words => {
    let newNextWords = words.map(nextWord =>
      this.state.keywords.find(keyword => keyword.word === nextWord)
    );
    this.setState({
      nextWords: newNextWords,
      showKeywords: true
    });
  };

  chalkboardChecker = keywordValue => {
    if(keywordValue === "New Line") {
      this.newChalkboardLine();
    } else {
      this.addToChalkboard(keywordValue);
    }
  }

  newChalkboardLine = () => {
    let newPhrase = this.state.chalkboardPhrases;
    newPhrase.push(this.state.currentPhrase);
    this.setState({
      chalkboardPhrases: newPhrase,
      currentPhrase: ''
    })
  }

  addToChalkboard = keywordValue => {
    let newPhrase = this.state.currentPhrase
      ? this.state.currentPhrase.concat("", keywordValue)
      : keywordValue;
    this.setState({
      currentPhrase: newPhrase
    });
  };

  render() {
    return (
      <main className="App">
        <AcronymContainer
          stages={this.state.stages}
          findNextWords={this.findNextWords}
        />
        {this.state.showKeywords && (
          <KeywordContainer
            keywords={this.state.keywords}
            chalkboardChecker={this.chalkboardChecker}
            nextWords={this.state.nextWords}
            findNextWords={this.findNextWords}
          />
        )}
        {this.state.showKeywords && (
          <Chalkboard 
            currentPhrase={this.state.currentPhrase}
            chalkboardPhrases={this.state.chalkboardPhrases}
          />
        )}
      </main>
    );
  }
}

export default App;
