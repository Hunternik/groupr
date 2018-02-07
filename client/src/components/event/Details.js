import React, { Component } from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import { DayPickerSingleDateController } from 'react-dates';
import { Button, Popup, Grid, Card, Embed, Divider } from 'semantic-ui-react';
import 'react-dates/lib/css/_datepicker.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import MapContainer from './MapContainer';
import Segment from 'semantic-ui-react/dist/commonjs/elements/Segment/Segment';

class Details extends Component {
  constructor(props) {
    super(props);
    this.copyAddress = this.copyAddress.bind(this);
    this.renderButton = this.renderButton.bind(this);
  }

  state = {
    copyAddress: 'Click to copy!'
  };

  copyAddress() {
    this.setState({ copyAddress: 'Copied!' });
    return <Button icon="world" bordered color="teal" />;
  }

  renderButton() {
    return (
      <CopyToClipboard text={this.props.event.location}>
        <Button icon="world" bordered color="teal" />
      </CopyToClipboard>
    );
  }

  render() {
    return (
      <div>
        <Card color='teal' style={{ backgroundColor: '#f6f7f8', boxShadow: '0 0 0 0px #d4d4d5, 0 2px 0 0 #00b5ad, 0 1px 3px 0 #d4d4d5' }}>
          <Card.Content>
          <Card.Description>
                <Popup
                  trigger={<Button icon="calendar" bordered color="teal" />}
                  on="click"
                >
                  <Popup.Header>Calendar</Popup.Header>
                  <Popup.Content>
                    <DayPickerSingleDateController />
                  </Popup.Content>
                </Popup>
            <p>{this.props.event.date}</p>
            </Card.Description>
            <Divider hidden />
            <Card.Description>
                <Popup trigger={this.renderButton()} on="click" hideOnScroll>
                  <Popup.Header>
                    <i>Copied!</i>
                  </Popup.Header>
                </Popup>
                <p>{this.props.event.location}</p>
            </Card.Description>
          </Card.Content>
          <Divider hidden />
          <Embed
            active
            url="https://www.google.com/maps/embed/v1/place?key=AIzaSyBnwpbLJU6xN2xDKaCvYE_QmtoHyzW9DnI&q=Eiffel+Tower,Paris+France"
          />
        </Card>
      </div>
    );
  }
}

export default Details;
