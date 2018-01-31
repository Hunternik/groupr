import React, { Component } from 'react';
import { Button, Container, Checkbox, Form, Header, Grid, Segment } from 'semantic-ui-react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { fetchUser } from '../../actions/';
require('./profile.css');

class Profile extends Component {
  renderForm() {
    return (
      <Form>
        <Form.Field>
          <label>First Name</label>
          <input placeholder="First Name" />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input placeholder="Last Name" />
        </Form.Field>
        <Form.Field>
          <label>Email</label>
          <input placeholder="Email" />
        </Form.Field>
        <Form.Field>
          <label>Company</label>
          <input placeholder="Company" />
        </Form.Field>
        <Form.Field>
          <label>Position</label>
          <input placeholder="Position" />
        </Form.Field>
        <div className="button-group">
          <Button className="profile-button" size="large">
            Update
          </Button>
          <Button className="profile-button" size="large">
            Cancel
          </Button>
        </div>
      </Form>
    );
  }

  render() {
    console.log(this.props, 'look here');
    return (
      <Container>
        <Header as="h1" textAlign="center">
          {this.props.auth && this.props.auth.displayName}
        </Header>
        <Grid stackable columns={2} textAlign="center" centered>
          <Grid.Column textAlign="center" centered>
            <Segment>
              <h1>My Events</h1>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>
              <h1>Profile</h1>
              {this.renderForm()}
            </Segment>
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

const mapStateToProps = ({ auth }) => ({ initialValues: auth });

// export default connect(mapStateToProps)(Profile);

Profile = reduxForm({
  form: 'profile'
})(Profile);

// You have to connect() to any reducers that you wish to connect to yourself
Profile = connect(
  state => ({
    initialValues: state.auth // pull initial values from account reducer
  }),
  { load: fetchUser } // bind account loading action creator
)(Profile)

export default Profile;