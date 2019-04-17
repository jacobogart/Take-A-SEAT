import React, { Component } from 'react';
import AcronymContainer from './AcronymContainer';
import KeywordContainer from './KeywordContainer';
import Chalkboard from './Chalkboard';
import newLineChecks from '../newLineChecks';

class App extends Component {
  constructor() {
    super();
    this.state = {
      showKeywords: false,
      keywords: null,
      currentPhrase: "",
      stages: null,
      nextWords: null,
      chalkboardPhrases: [],
      chalkboardLines: 0
    };
  };

  componentDidMount() {
    const url = 'https://fe-apps.herokuapp.com/api/v1/memoize/1901/jacobogart/'
    const endPoints = ['stages', 'keywords']
    endPoints.forEach(endPoint => {
      fetch(`${url}${endPoint}`)
        .then(response => response.json())
        .then(data => this.setState({ [endPoint]: data[endPoint] }))
        .catch(err => console.log(err));
    })
  }


  findNextWords = keywordData => {
    let shallowNextWords = keywordData.nextWords || keywordData.starterWords;
    if (keywordData.word === "New Line") {
      shallowNextWords = this.newLineTestRunner(shallowNextWords, newLineChecks);
    }
    let newNextWords = shallowNextWords.map(nextWord =>
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
  };

  newChalkboardLine = () => {
    let newPhrase = this.state.chalkboardPhrases;
    newPhrase.push(this.state.currentPhrase);
    this.setState({
      chalkboardPhrases: newPhrase,
      currentPhrase: "",
      chalkboardLines: this.state.chalkboardLines + 1
    });
  };

  newLineTestRunner = (nextWords, newLineChecks) => {
    let workingNextWords = nextWords;
    newLineChecks.forEach(check => {
      let {find, ifFound, remove } = check;
      workingNextWords = this.newLineTest(workingNextWords, find, ifFound, remove); 
    });              
    return workingNextWords;
  };

  newLineTest = (workingNextWords, targetPhrase, boolean, removePhrase) => {
    let localNextwords = workingNextWords;
    if (this.newLineSome(targetPhrase) === boolean) {
      var index = localNextwords.indexOf(removePhrase);
      index >= 0 && localNextwords.splice(index, 1);
    } 
    return localNextwords;
  }

  newLineSome = (targetPhrase) => {
    return this.state.chalkboardPhrases.some(
      chalkPhrase =>
        chalkPhrase.includes(targetPhrase)) ||
      this.state.currentPhrase.includes(targetPhrase);
  };

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
        {!this.state.showKeywords && 
          <h2 className="welcome-message">Take a</h2>
        }
        <AcronymContainer
          stages={this.state.stages}
          findNextWords={this.findNextWords}
          showKeywords={this.state.showKeywords}
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
