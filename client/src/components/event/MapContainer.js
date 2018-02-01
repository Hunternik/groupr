import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

class MapContainer extends Component {
  constructor(props) {
    super(props);
  }

  state = {};

  render() {
    console.log(process.env.REACT_APP_GOOGLE_MAPS_API_KEY);
    console.log(process.env.REACT_APP_STRIPE_KEY);
    return (
      <Map google={this.props.google} zoom={14}>
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

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
})(MapContainer);
