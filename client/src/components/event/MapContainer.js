import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

class MapContainer extends Component {
  constructor(props) {
    super(props);
  }

  state = {};

  render() {

    return (
      <Map google={this.props.google} style={styles} zoom={14}>
        <Marker onClick={this.onMarkerClick} name={'Current location'} />

        <InfoWindow onClose={this.onInfoWindowClose}>
          <div>
            <h1> HELLO </h1>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

const styles = {
  position: 'absolute',
  width: '25em',
  height: '25em'
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
})(MapContainer);
