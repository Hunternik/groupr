import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Segment, Grid, Menu, Label } from 'semantic-ui-react';
// Actions
import { fetchEvent, fetchEventSponsors } from '../../actions';

class Participants extends Component {
  constructor(props) {
    super(props);;
  }

  state = { activeItem: 'companies' };

  componentDidMount() {
    this.props.fetchEventSponsors(this.props.eventId);
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    console.log(this.props.eventId, "mmmmmmmm PARTICIPANTS mmmmmmmm");
    console.log(this.props)
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
              This will be a list of companies, recruiters or attendies.
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
