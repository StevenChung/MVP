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
