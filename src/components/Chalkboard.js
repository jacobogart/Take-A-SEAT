import React, { Component } from 'react';

class Chalkboard extends Component {
  render() {
    return (
      <section>
        <div>
          <p>{this.props.chalkboardPhrase}</p>
        </div>
      </section>
    );
  }
}

export default Chalkboard;
