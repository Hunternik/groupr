import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Segment, Grid, Menu, Label, Image } from 'semantic-ui-react';
// Actions
import { fetchEvent, fetchEventSponsors } from '../../actions';

class Participants extends Component {
  constructor(props) {
    super(props);
    this.renderEventCompanies = this.renderEventCompanies.bind(this);
    this.renderEventRecruiters = this.renderEventRecruiters.bind(this);
    this.renderEventAttendees = this.renderEventAttendees.bind(this);
  }

  state = { activeItem: 'companies' };

  componentDidMount() {
    this.props.fetchEventSponsors(this.props.eventId);
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  renderEventCompanies() {
    if (this.props.event.companies) {
      return this.props.event.companies.map((company) => {
        return (
          <Grid.Column>
            <Image
              src={company.imgLogoURL}
              fluid
              rounded
            />
          </Grid.Column>
        );
      });
    }
  }

  renderEventRecruiters() {
    if (this.props.event.recruiters) {
      return this.props.event.recruiters.map((recruiter) => {
        return (
          <Grid.Column>
            <Image
              src={recruiter.bigPhotoURL}
              fluid
              rounded
            />
          </Grid.Column>
        );
      });
    }
  }

  renderEventAttendees() {
    if (this.props.event.attendees) {
      return this.props.event.attendees.map((attendee) => {
        return (
          <Grid.Column>
            <Image
              src={attendee.bigPhotoURL}
              fluid
              rounded
            />
          </Grid.Column>
        );
      });
    }
  }

  render() {
    console.log(this.props.event, "mmmmmmmmm EVENT PROPS PARTICAPANTS mmmmmm")
    const { activeItem } = this.state;
    return (
      <div>
        <Grid container>
          <Grid.Column width={3}>
            <Menu fluid vertical tabular>
              <Menu.Item
                name="companies"
                active={activeItem === 'companies'}
                onClick={this.handleItemClick}
              >
                <Label color="teal">14</Label>
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
            </Menu>
          </Grid.Column>
          <Grid.Column stretched width={7}>
            <Segment>
              <Grid relaxed columns={4}>
                {activeItem === "companies" && this.renderEventCompanies()}
                {activeItem === "recruiters" && this.renderEventRecruiters()}
                {activeItem === "attendies" && this.renderEventAttendees()}
              </Grid>
            </Segment>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = ({ event, companies }) => ({
  event,
  companies
});

export default
  connect(mapStateToProps, {
    fetchEvent,
    fetchEventSponsors
  })(Participants);
