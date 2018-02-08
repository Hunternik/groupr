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
    this.calcEventDate = this.calcEventDate.bind(this);
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

  calcEventDate(eventDate) {
    let newDate = moment().add({day: 10, months: 3}).format('MMMM Do YYYY');
    // if (this.props.event.date) {
    //   const date = eventDate.substring(0, 10);
    //   newdate = moment(date).add({day: 10, months: 3}).format('MMMM Do YYYY');
    // }
    return newDate;
  }

  render() {
    return (
      <div>
        <Card
          color="teal"
          style={styles.card}
        >
          <Card.Content style={styles.cardContent}>
            <Card.Description style={styles.cardContentItemOne}>
              <Popup
                trigger={<Button icon="calendar" bordered color="teal" />}
                on="click"
              >
                <Popup.Header>Calendar</Popup.Header>
                <Popup.Content>
                  <DayPickerSingleDateController />
                </Popup.Content>
              </Popup>
              <span style={{textAlign: 'left', marginLeft: '0.75em'}}>{this.props.event.date ? this.calcEventDate(this.props.event.date) : this.calcEventDate()}</span>
            </Card.Description>
            {/* <Divider hidden /> */}
            <Card.Description style={styles.cardContentItemTwo}>
              <Popup trigger={this.renderButton()} on="click" hideOnScroll>
                <Popup.Header>
                  <i>Copied!</i>
                </Popup.Header>
              </Popup>
              <span style={{textAlign: 'left', marginLeft: '0.5em'}}>{this.props.event.location}</span>
            </Card.Description>
          </Card.Content>
          {/* <Divider hidden /> */}
          <Embed
            active
            url="https://www.google.com/maps/embed/v1/place?key=AIzaSyBnwpbLJU6xN2xDKaCvYE_QmtoHyzW9DnI&q=Eiffel+Tower,Paris+France"
          />
        </Card>
      </div>
    );
  }
}

const styles = {
  card: {
    backgroundColor: '#f6f7f8',
    boxShadow: '0 0 0 0px #d4d4d5, 0 2px 0 0 #00b5ad, 0 1px 3px 0 #d4d4d5'
    
  },
  cardContent: {
    margin: '0',
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column'
  },
  cardContentItemOne: {
    marginBottom: '1em',
    display: 'flex',
    // flexDirection: 'column'
    order: '1',
    textAlign: 'left'
  },
  cardContentItemTwo: {
    marginBottom: '1.125em',
    display: 'flex',
    // flexDirection: 'row'
    order: '2',
    textAlign: 'left'
  }
};

export default Details;
