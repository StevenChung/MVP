import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { kewpie } from '../../__priv.js';
import SearchBar from './Search.jsx';
import { PocketMonster } from './PocketMonster.jsx';
import $ from 'jquery';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPokemon: null,
      workingStable: [],
      // for saving state...
      failure: '',
    };
  }

  searchPokemon(val) {
    $.ajax({
      url: `http://pokeapi.co/api/v2/pokemon/${val}`,
      dataType: 'json',
      TYPE: 'GET',
      success: (res) => {
        console.log(res);
        var newStable = this.state.workingStable.slice();
        newStable.push(res.id);
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
        <h2 className="pocketMonstersTitle">Crime and Pokémon</h2>
        <div id="search">
          <SearchBar searchValue={(val) => {
              this.searchPokemon(val);
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
