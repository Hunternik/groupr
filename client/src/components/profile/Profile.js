import React, { Component } from "react";
import { reduxForm } from "redux-form";
import { connect } from "react-redux";
import { Container, Header, Image, Grid, Segment } from "semantic-ui-react";
import ProfileEdit from "./ProfileEdit";
import ProfileRead from "./ProfileRead";
import ProfileEvents from "./ProfileEvents";
import ProfilePlaceholder from "../../assets/images/ProfilePlaceholder.png";

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
      this.setState({ profile: this.props.initialValues });
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

  renderEventContent() {
    return <ProfileEvents profile={this.state.profile} />;
  }

  renderProfileContent() {
		const { profile, showProfileReview, success } = this.state;
		
    if (showProfileReview)
      return (
        <ProfileRead
          onUpdate={this.handleUpdate}
          success={success}
          profile={profile}
        />
      );

    return (
      <ProfileEdit onCancel={this.handleCancel} onReturn={this.handleReturn} />
    );
  }

  render() {
		const { profile } = this.state;
    return (
      <Container>
        <Header as="h1" textAlign="center">
          {this.props.initialValues && this.props.initialValues.displayName}
        </Header>
        <Grid stackable columns={2} textAlign="center" centered>
          <Grid.Column textAlign="center">
            <Segment>
              <h1>My Events</h1>
              {profile && <ProfileEvents profile={profile} />}
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>
              <Header as="h1" textAlign="center">Profile</Header>
							{profile && <Image src={profile.bigPhotoURL || ProfilePlaceholder} size="medium" centered bordered/>}
              {this.renderProfileContent()}
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
