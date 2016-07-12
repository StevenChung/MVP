import React, {Component} from 'react';

export default ({ url }) => {
  // var randInt = Math.floor(Math.random() * 151);
  return (
    <div className="pokemonMarker">
      <img src={url} />
    </div>
  );
};
