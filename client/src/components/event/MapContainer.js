import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import {
  Container,
  Header,
  Button,
  Icon,
  Label,
  Divider,
  Visibility
} from 'semantic-ui-react';
import { GoogleApiWrapper } from 'google-maps-react';
import { Map } from './Map';

class MapContainer extends Component {
  constructor(props) {
    super(props);
  }
  
  state = {
    
  }

  render() {
    return (
      <Map/ >
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAPTEz_0-P6WaldA6ERDb-CeMuTmMAPY-c!',
  libraries: ['visualization']
})(EarthquakesContainer);
