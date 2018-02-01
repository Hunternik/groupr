// AIzaSyAPTEz_0-P6WaldA6ERDb-CeMuTmMAPY-c

import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Container,
  Header,
  Button,
  Icon,
  Label,
  Divider,
  Visibility
} from 'semantic-ui-react';

class Map extends Component {
  constructor(props) {
    super(props);
  }
  
  state = {
    
  }

  render() {
    return (
      
    )
  }
}

// Application State
const mapStateToProps = ({ event }) => ({
  event
});

// Connect component to application state: (1) mapStateTo Props, (2) Arguments -> Component
export default withRouter(connect(mapStateToProps,  null)(MapContainer));
