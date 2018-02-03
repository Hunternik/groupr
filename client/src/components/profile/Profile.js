import React, { Component } from "react";
import { reduxForm } from "redux-form";
import { connect } from "react-redux";
import { Container, Header, Grid, Segment } from "semantic-ui-react";
import ProfileForm from "./ProfileForm";
import ProfileReview from "./ProfileReview";
require("./profile.css");

class Profile extends Component {
  constructor(props) {
    super(props);

    this.handleCancel = this.handleCancel.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
	}

  state = { showProfileReview: true };

  handleCancel() {
    this.setState({ showProfileReview: true });
  }

  handleUpdate() {
    this.setState({ showProfileReview: false });
  }

  renderContent() {
    if (this.state.showProfileReview)
      return (
        <ProfileReview
          onCancel={this.handleCancel}
          onUpdate={this.handleUpdate}
        />
      );

    return (
      <ProfileForm onCancel={this.handleCancel} onUpdate={this.handleUpdate} />
    );
  }

  render() {
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
              {this.renderContent()}
            </Segment>
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

const mapStateToProps = ({ auth }) => ({ initialValues: auth });

Profile = reduxForm(
  { form: "profile", enableReinitialize: true },
  mapStateToProps
)(Profile);

export default connect(mapStateToProps)(Profile);
