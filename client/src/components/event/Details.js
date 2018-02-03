import React, { Component } from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import { DayPickerSingleDateController } from 'react-dates';
import { Button, Popup, Grid, Card } from 'semantic-ui-react';
import 'react-dates/lib/css/_datepicker.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import MapContainer from './MapContainer';

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
        <Card>
        <Grid container>
          <Grid.Row>
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
          </Grid.Row>
          <Grid.Row>
            <Popup trigger={this.renderButton()} on="click" hideOnScroll>
              <Popup.Header>
                <i>Copied!</i>
              </Popup.Header>
            </Popup>
            <p>{this.props.event.location}</p>
          </Grid.Row>
          <Grid.Row style={{position: 'relative'}}>
            <MapContainer />
          </Grid.Row>
        </Grid>
        </Card>
      </div>
    );
  }
}

export default Details;
