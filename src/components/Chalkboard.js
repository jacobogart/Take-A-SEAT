import React, { Component } from 'react';

class Chalkboard extends Component {
  render() {
    return (
      <section className="Chalkboard">
        <div className="phraseContainer">
          <p>{this.props.chalkboardPhrase}</p>
        </div>
      </section>
    );
  }
}

export default Chalkboard;
