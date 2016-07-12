import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { kewpie } from '../../__priv.js';
import SearchBar from './Search.jsx';
import { PocketMonster } from './PocketMonster.jsx';
import $ from 'jquery';
import GoogleMap from 'google-map-react';
import { SimpleMapPage } from './Map.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPokemon: null,
      workingStable: [],
      // should use Steven's hardcoded pokedata if not logged in
      failure: ''
    };
  }

  searchPokemon(val, lat, lng) {
    val = val.toLowerCase();
    $.ajax({
      url: `http://pokeapi.co/api/v2/pokemon/${val}`,
      dataType: 'json',
      TYPE: 'GET',
      success: (res) => {
        console.log(res);
        var newStable = this.state.workingStable.slice();
        newStable.push({
          url: `http://pokeapi.co/media/sprites/pokemon/${res.id}.png`,
          lat: lat,
          lng: lng
        });
        this.setState({
          currentPokemon: res,
          workingStable: newStable,
          failure: ''
        });
        console.log(this.state.workingStable);
      },
      failure: (err) => {
        this.setState({
          failure: 'invalid pocket monster!'
        });
      }
    });
    // http://api.jquery.com/jquery.ajax/
    // failure not called for cross-server?
  }


  render() {
    return (
      <div>
        <div id="map">
          <SimpleMapPage workingStable={this.state.workingStable}/>
        </div>
        <h2 className="pocketMonstersTitle">Crime and Pokémon</h2>
        <div id="search">
          <SearchBar searchValue={(val, lat, lng) => {
              this.searchPokemon(val, lat, lng);
            }}/>
        </div>
        <div className="failure">{this.state.failure}</div>
        <div className="pokedex">
          <PocketMonster currentPokemon={this.state.currentPokemon}/>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
// ReactDOM.render(<SimpleMapPage />, document.getElementById('map'));
