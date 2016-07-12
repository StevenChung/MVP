import React, { PropTypes, Component } from 'react';
import ReactDOM from 'react-dom';

export const PocketMonster = ({ currentPokemon }) => {
  return (!currentPokemon) ? <div className="failure">still waiting, boss...</div> :
  (
    <div className="pokedex-entry">
      <img src={currentPokemon.sprites.front_shiny} />
      <div>{currentPokemon.name}</div>
    </div>
  );
}
// can save this for pointer later
