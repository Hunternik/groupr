// AIzaSyAPTEz_0-P6WaldA6ERDb-CeMuTmMAPY-c

import React, { Component } from 'react';
import ReactDOM from 'react-dom'
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


export default class Map extends Component {
 
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.google !== this.props.google || prevProps.quakes !== this.props.quakes) {
      this.loadMap();
    }
  }



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
export default withRouter(connect(mapStateToProps,  null)(Map));
