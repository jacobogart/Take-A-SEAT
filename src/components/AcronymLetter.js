import React, { Component } from 'react';
import AcronymInfo from './AcronymInfo';

class AcronymLetter extends Component {
  constructor() {
    super() 
    this.state = {
      showDetails: false
    }
  }

  toggleShowDetails = () => {
    this.setState({ 
      showDetails: !this.state.showDetails 
    })
  }

  render() {
    let { letter, name, description, starterWords } = this.props.stage;
    return (
      <div
        className="letter"
        onMouseOver={this.toggleShowDetails}
        onMouseLeave={this.toggleShowDetails}
        onClick={() => this.props.findNextWords(starterWords)}
      >
        <h2>{letter}</h2>
        {this.state.showDetails && (
          <AcronymInfo stageName={name} stageDescription={description} />
        )}
      </div>
    );
  }
}

export default AcronymLetter;
