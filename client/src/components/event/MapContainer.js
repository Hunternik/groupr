import React, { Component } from "react";
import {
  Container,
  Header,
  Button,
  Icon,
  Label,
  Divider,
  Visibility
} from "semantic-ui-react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
// import Map from './Map';

class MapContainer extends Component {
  constructor(props) {
    super(props);
  }

  state = {};

  render() {
    return (
      <Map google={this.props.google} zoom={14}>
        <Marker onClick={this.onMarkerClick} name={"Current location"} />

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
  apiKey: "AIzaSyAPTEz_0-P6WaldA6ERDb-CeMuTmMAPY-c"
})(MapContainer);
