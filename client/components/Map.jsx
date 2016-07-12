import React, { Component } from 'react';
import ReactGoogleMaps from 'react-googlemaps';
var GoogleMapsAPI = window.google.maps;

var Map = ReactGoogleMaps.Map;
var Marker = ReactGoogleMaps.Marker;
var OverlayView = ReactGoogleMaps.OverlayView;

function handleClick(e) {
  console.log('Clicked at position', e.latLng);
}

export const TestMap = () => {
  <Map
    initialZoom={10}
    initialCenter={new GoogleMapsAPI.LatLng(-41.2864, 174.7762)}>

    <Marker
      onClick={handleClick}
      position={new GoogleMapsAPI.LatLng(-41.2864, 174.7762)} />

    <OverlayView
      style={{backgroundColor: '#fff'}}
      position={new GoogleMapsAPI.LatLng(-41.2864, 174.7762)}>
      <p>Some content</p>
    </OverlayView>
  </Map>
};
