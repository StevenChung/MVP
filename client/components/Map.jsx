import React, { Component } from 'react';
import GoogleMap from 'google-map-react';
import { kewpie } from '../../__priv.js';
import { crimeData } from '../util/data.js';
import { pokeData } from '../util/pokemon.js';
import Marker from './Marker.jsx';
import PokemonMarker from './pokemonMarker.jsx';

export class SimpleMapPage extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
       <GoogleMap
        bootstrapURLKeys={{ key: kewpie }}
        center={[37.798307, -122.408013]}
        zoom={15}>
        {crimeData.map((data) => {
          return <Marker lat={data.lat} lng={data.lng} text={data.descript} />
        })}
        {pokeData.concat(this.props.workingStable).map((data) => {
          return <PokemonMarker lat={data.lat} lng={data.lng} url={data.url}/>
        })}
      </GoogleMap>
    );
  }
}

// http://bit.ly/29Luv8O
// {crimeData.map((data) => {
//   return <Marker lat={data.lat} lng={data.lng} text={data.descript}>
// })}
