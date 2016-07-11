import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { map, endpoint, initMap } from '../lib/googlemaps.js';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPokemon: null
    };
  }

  // componentDidMount() {
  //   $.ajax({
  //     url: endpoint,
  //     jsonp: 'initMap',
  //     xhrFields: {
  //       'Access-Control-Allow-Origin': '*'
  //     },
  //     success: (res) => {
  //       console.log(res);
  //     },
  //     error: (err) => {
  //       console.log(err);
  //     }
  //   });
  // }

  // appendPokemon() {
  //   $.ajax({
  //     url: 'http://pokeapi.co/api/v2/pokemon/1',
  //     dataType: 'json',
  //     TYPE: 'GET',
  //     success: (res) => {
  //       this.setState({
  //         currentPokemon: res
  //       });
  //     }
  //   });
  // }

  render() {
    return (
      <div>
        <h2 className="pocketMonstersTitle">pocket monsters go tracker</h2>
        <div className="app"></div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
