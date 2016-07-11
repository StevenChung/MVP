import { kewpie } from '../../__priv.js';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export var map = null;
export const endpoint = `https://maps.googleapis.com/maps/api/js?key=${kewpie}&callback=initMap`;
export const initMap = () => {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: { lat: -25.363, lng: 131.044 }
  });
};

const MapScript = () => {
  return (
    <div>
      <script async defer src={endpoint}></script>
    </div>
  );
};

ReactDOM.render(<MapScript />, document.getElementById('map'));

//https://www.fullstackreact.com/articles/how-to-write-a-google-maps-react-component/
