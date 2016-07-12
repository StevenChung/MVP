import React, {Component} from 'react';
import GoogleMap from 'google-map-react';
import { kewpie } from '../../__priv.js';

export class SimpleMapPage extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
       <GoogleMap
        bootstrapURLKeys={{key: kewpie}}
        center={[37.798307, -122.408013]}
        zoom={15}>
      </GoogleMap>
    );
  }
}

// http://bit.ly/29Luv8O
