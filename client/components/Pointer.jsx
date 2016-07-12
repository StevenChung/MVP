import React, { PropTypes, Component } from 'react';
import ReactDOM from 'react-dom';

export const Map = ({ currentPokemon }) => {
  return (!currentPokemon) ? <div>still waiting, boss...</div> :
  (
    <div>
      <img src={currentPokemon.sprites.front_shiny} />
    </div>
  );
}
// can save this for pointer later

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
