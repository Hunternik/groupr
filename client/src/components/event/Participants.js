import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Segment,
  Grid,
  Menu,
  Label,
  Image,
  Card,
  Input
} from 'semantic-ui-react';
import { fetchEvent, fetchEventSponsors } from '../../actions';

class Participants extends Component {
  constructor(props) {
    super(props);
    this.renderEventCompanies = this.renderEventCompanies.bind(this);
    this.calcNumOfCompanies = this.calcNumOfCompanies.bind(this);
    this.renderEventRecruiters = this.renderEventRecruiters.bind(this);
    this.renderEventAttendees = this.renderEventAttendees.bind(this);
  }

  state = {
    activeItem: 'companies',
    numOfCompanies: 0,
    numOfRecruiters: 0,
    numOfAttendees: 0
  };

  componentDidMount() {
    this.props.fetchEventSponsors(this.props.eventId);
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  renderEventCompanies() {
    if (this.props.event.companies) {
      return this.props.event.companies.map(company => {
        return (
          <Card>
            <Image src={company.imgLogoURL} fluid rounded />
          </Card>
        );
      });
    }
  }

  calcNumOfCompanies() {
    return this.props.event.companies ? this.props.event.companies.length : 0
  }

  renderEventRecruiters() {
    if (this.props.event.recruiters) {
      return this.props.event.recruiters.map((recruiter, index) => {
        return (
          <Card color="teal" style={styles.card}>
            <Image src={recruiter.bigPhotoURL} fluid rounded />
          </Card>
        );
      });
    }
  }

  renderEventAttendees() {
    console.log(this.props.event.attendees);
    if (this.props.event.attendees) {
      return this.props.event.attendees.map((attendee, index) => {
        return (
          <Card color="teal" style={styles.card}>
            <Image src={attendee.bigPhotoURL} fluid rounded />
          </Card>
        );
      });
    }
  }

  render() {
    console.log(this.props.event, 'mmmmmmmmm EVENT PROPS PARTICAPANTS mmmmmm');
    const {
      activeItem,
      numOfCompanies,
      numOfRecruiters,
      numOfAttendees
    } = this.state;
    return (
      <div>
        <Grid container>
          <Grid.Column width={3}>
            <Menu vertical>
              <Menu.Item
                name="companies"
                active={activeItem === 'companies'}
                onClick={this.handleItemClick}
              >
                <Label color="teal">{this.calcNumOfCompanies()}</Label>
                Companies
              </Menu.Item>
              <Menu.Item
                name="recruiters"
                active={activeItem === 'recruiters'}
                onClick={this.handleItemClick}
              >
                <Label>27</Label>
                Recruiters
              </Menu.Item>
              <Menu.Item
                name="attendies"
                active={activeItem === 'attendies'}
                onClick={this.handleItemClick}
              >
                <Label>128</Label>
                Attendies
              </Menu.Item>
              <Menu.Item>
                <Input icon="search" placeholder="Search mail..." />
              </Menu.Item>
            </Menu>
          </Grid.Column>
          <Grid.Column stretched width={7}>
            <Segment style={styles.card}>
              <Card.Group itemsPerRow={4}>
                {activeItem === 'companies' && this.renderEventCompanies()}
                {activeItem === 'recruiters' && this.renderEventRecruiters()}
                {activeItem === 'attendies' && this.renderEventAttendees()}
              </Card.Group>
            </Segment>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

const styles = {
  card: {
    backgroundColor: '#f6f7f8',
    boxShadow: '0 0 0 0px #d4d4d5, 0 0px 0 0 #00b5ad, 0 1px 3px 0 #d4d4d5'
  },
  cardCompanies: {
    backgroundColor: '#f6f7f8',
    boxShadow: '0 0 0 0px #d4d4d5, 0 0px 0 0 #00b5ad, 0 0px 0px 0 #d4d4d5'
  }
};

const mapStateToProps = ({ event, companies }) => ({
  event,
  companies
});

export default connect(mapStateToProps, {
  fetchEvent,
  fetchEventSponsors
})(Participants);
