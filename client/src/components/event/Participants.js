import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Segment,
  Grid,
  Menu,
  Label,
  Image,
  Card,
  Input,
  Popup
} from "semantic-ui-react";
import { fetchEvent, fetchEventSponsors } from "../../actions";

class Participants extends Component {
  constructor(props) {
    super(props);
    this.calcNumOfCompanies = this.calcNumOfCompanies.bind(this);
    this.calcNumOfRecruiters = this.calcNumOfRecruiters.bind(this);
    this.calcNumOfAttendees = this.calcNumOfAttendees.bind(this);
    this.renderEventCompanies = this.renderEventCompanies.bind(this);
    this.renderEventRecruiters = this.renderEventRecruiters.bind(this);
    this.renderEventAttendees = this.renderEventAttendees.bind(this);
  }

  state = {
    activeItem: "companies"
  };

  componentDidMount() {
    this.props.fetchEventSponsors(this.props.eventId);
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  calcNumOfCompanies() {
    return this.props.event.companies ? this.props.event.companies.length : 0;
  }

  calcNumOfRecruiters() {
    return this.props.event.recruiters ? this.props.event.recruiters.length : 0;
  }

  calcNumOfAttendees() {
    return this.props.event.attendees ? this.props.event.attendees.length : 0;
  }

  renderEventCompanies() {
    if (this.props.event.companies) {
      return this.props.event.companies.map(company => {
        return (
          <Card basic color="teal" className="grow" floated>
            <Image src={company.imgLogoURL} fluid rounded />
          </Card>
        );
      });
    }
  }

  renderEventRecruiters() {
    if (this.props.event.recruiters) {
      return this.props.event.recruiters.map((recruiter, index) => {
        return (
          <Card basic color="teal" style={styles.card} className="grow" floated>
            <Popup
              key={recruiter._id}
              trigger={<Image src={recruiter.bigPhotoURL} fluid rounded />}
              header={recruiter.displayName}
              content={recruiter.email}
            />
            <Card.Content>
              <Card.Header color="teal" centered>
                {recruiter.company}
              </Card.Header>
            </Card.Content>
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
          <Card basic color="teal" style={styles.card} className="grow" floated>
            <Popup
              key={attendee._id}
              trigger={<Image src={attendee.bigPhotoURL} fluid rounded />}
              header={attendee.displayName}
              content={attendee.email}
            />
            <Card.Content>
              <Card.Meta color="teal" centered>
                {attendee.position}
              </Card.Meta>
            </Card.Content>
          </Card>
        );
      });
    }
  }

  render() {
    const { activeItem } = this.state;

    return (
      <div>
        <Grid container>
          <Grid.Column width={3}>
            <Menu vertical>
              <Menu.Item
                name="companies"
                active={activeItem === "companies"}
                onClick={this.handleItemClick}
              >
                <Label color="teal">{this.calcNumOfCompanies()}</Label>
                Companies
              </Menu.Item>
              <Menu.Item
                name="recruiters"
                active={activeItem === "recruiters"}
                onClick={this.handleItemClick}
              >
                <Label>{this.calcNumOfRecruiters()}</Label>
                Recruiters
              </Menu.Item>
              <Menu.Item
                name="attendies"
                active={activeItem === "attendies"}
                onClick={this.handleItemClick}
              >
                <Label>{this.calcNumOfAttendees()}</Label>
                Attendies
              </Menu.Item>
              <Menu.Item>
                <Input icon="search" placeholder="Search..." />
              </Menu.Item>
            </Menu>
          </Grid.Column>
          <Grid.Column stretched width={7}>
            <Segment style={styles.card} className="card-container">
              <Card.Group itemsPerRow={4} className="card-group">
                {activeItem === "companies" && this.renderEventCompanies()}
                {activeItem === "recruiters" && this.renderEventRecruiters()}
                {activeItem === "attendies" && this.renderEventAttendees()}
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
    backgroundColor: "#f6f7f8",
    boxShadow: "0 0 0 0px #d4d4d5, 0 0px 0 0 #00b5ad, 0 1px 3px 0 #d4d4d5",
    overflow: "hidden"
  },
  cardCompanies: {
    backgroundColor: "#f6f7f8",
    boxShadow: "0 0 0 0px #d4d4d5, 0 0px 0 0 #00b5ad, 0 0px 0px 0 #d4d4d5",
    overflow: "hidden"
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
