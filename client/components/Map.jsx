import React, {Component} from 'react';
import GoogleMap from 'google-map-react';

export class SimpleMapPage extends Component {
  getDefaultProps: function() {
    return {
      center: [37.773972, -122.431297],
      zoom: 15,
      greatPlaceCoords: { lat:37.773972, lng: -122.431297 }
    };
  }
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
       <GoogleMap
        apiKey={AIzaSyBsXKnadeCgcPspu6ud2EQ6Ae9-cxBx6cw} // set if you need stats etc ...
        center={this.props.center}
        zoom={this.props.zoom}>
      </GoogleMap>
    );
  }
}
