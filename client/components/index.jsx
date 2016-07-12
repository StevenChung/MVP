import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { kewpie } from '../../__priv.js';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2 className="pocketMonstersTitle">real shit</h2>
        <div id="app"></div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
