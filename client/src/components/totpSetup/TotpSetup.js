import React, { Component } from 'react';
import QrCode from './qrCode';
// import Description from './Description';
// import Participants from './Participants';

class TotpSetup extends Component {
  state = {}

  render(){
    return (
      <div>
        <QrCode />
        {/* <Description /> */}
        {/* <Participants /> */}
      </div>
    );
  }
}

export default TotpSetup;