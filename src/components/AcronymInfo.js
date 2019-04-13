import React, { Component } from 'react';

class AcronymInfo extends Component {
  render() {
    return (
      <div className="letterHolder">
        <div>
          {this.props.stageName
            .split("")
            .map((letter, index) => 
              <h3 
                className="restOfWord"
                key={index}
              >
                {letter}
              </h3>)
            .slice(1)}
        </div>
        <p className="stageDescription">{this.props.stageDescription}</p>
      </div>
    );
  }
}

export default AcronymInfo;
