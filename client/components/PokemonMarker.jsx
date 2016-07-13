import React, {Component} from 'react';

export default ({ url }) => {
  return (
    <div className="pokemonMarker">
      <img src={url} />
    </div>
  );
};
