import React, { Component } from "react";
import { reduxForm } from "redux-form";
import { connect } from "react-redux";
import { Container, Header, Grid, Segment } from "semantic-ui-react";
import ProfileEdit from "./ProfileEdit";
import ProfileRead from "./ProfileRead";
require("./profile.css");

class Profile extends Component {
  constructor(props) {
    super(props);

    this.handleCancel = this.handleCancel.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleReturn = this.handleReturn.bind(this);
  }

	state = { showProfileReview: true, success: false };
	
	componentDidMount() {
		if (this.props.initialValues) 
			this.setState({ profile:  this.props.initialValues });
	}

  componentWillReceiveProps(nextProps) {
    if (this.props.initialValues !== nextProps.initialValues) {
      // Update profile when receive updated profile data
      if (nextProps.initialValues)
        this.setState({ profile: nextProps.initialValues });
      // Set success message when receive updates from express server
      if (this.props.initialValues) this.setState({ success: true });
    }
  }

  handleReturn() {
    this.setState({ showProfileReview: true });
  }

  handleCancel() {
    this.setState({ showProfileReview: true, success: false });
  }

  handleUpdate() {
    this.setState({ showProfileReview: false });
  }

  renderContent() {
    if (this.state.showProfileReview)
      return (
        <ProfileRead
          onUpdate={this.handleUpdate}
          success={this.state.success}
          profile={this.state.profile}
        />
      );

    return (
      <ProfileEdit
        onCancel={this.handleCancel}
        onReturn={this.handleReturn}
      />
    );
  }

  render() {
		console.log(this.state.profile)
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
