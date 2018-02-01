import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import {
  Button,
  Container,
  Header,
  Grid,
  Segment,
  Form
} from 'semantic-ui-react';
import ProfileForm from './ProfileForm';
import ProfileReview from './ProfileReview';
require('./profile.css');

class Profile extends Component {
  state = { showProfileReview: true };

  renderContent() {
    if (this.state.showProfileReview) {
      return (
        <ProfileReview
          onCancel={() => this.setState({ showProfileReview: true })}
        />
      );
    }

    return (
      <ProfileForm
        onCancel={() => this.setState({ showProfileReview: true })}
      />
    );
  }

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;
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
              <Form>{this.renderContent()}</Form>
            </Segment>
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}
const mapStateToProps = state => ({ initialValues: state.auth });

export default reduxForm({
  form: 'profile'
})(Profile);
