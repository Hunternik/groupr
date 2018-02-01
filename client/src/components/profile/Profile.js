import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Button, Container, Header, Grid, Segment, Form } from 'semantic-ui-react';
import ProfileForm from './ProfileForm';
import ProfileReview from './ProfileReview';
require('./profile.css');

class Profile extends Component {
	constructor() {
		super();

		this.handleCancel = this.handleCancel.bind(this);
	}

	state = { showProfileReview: true };

	handleCancel() {
		this.setState({ showProfileReview: true });
	}

  renderContent() {
    if (this.state.showProfileReview) {
      return <ProfileReview onCancel={this.handleCancel} />;
    }

    return <ProfileForm onCancel={this.handleCancel} />;
  }

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;
    return (
      <Container>
        <Header as="h1" textAlign="center">
          {this.props.auth && this.props.auth.displayName}
        </Header>
        <Grid stackable columns={2} textAlign="center" centered>
          <Grid.Column textAlign="center">
            <Segment>
              <h1>My Events</h1>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>
              <h1>Profile</h1>
              {/* {this.renderContent()} */}
              <ProfileReview onCancel={() => this.setState({ showProfileReview: true })} />
            </Segment>
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

const mapStateToProps = ({ auth }) => ({ initialValues: auth });

Profile = reduxForm({ form: 'profile', enableReinitialize: true })(Profile);

export default connect(mapStateToProps)(Profile);
