import React, { Component } from "react";
import { Button, Form } from "semantic-ui-react";
import { connect } from "react-redux";
import profileFields from "../../constants/profileFields";

require("./profile.css");

class ProfileReview extends Component {
  state = { profileValues: null };

  componentDidMount() {
    if (this.props.profile) {
      const { values: profileValues } = this.props.profile;

      this.setState({ profileValues });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.profile && this.props.profile !== nextProps.profile) {
      const { values: profileValues } = nextProps.profile;

      this.setState({ profileValues });
    }
  }

  renderFields() {
    return profileFields.map(field => (
      <Form.Input fluid label={field.label} readOnly>
        {this.state.profileValues[field.name]}
      </Form.Input>
    ));
  }

  render() {
    return (
      <Form>
        {this.state.profileValues && this.renderFields()}
        <div className="button-group">
          <Button
            type="button"
            onClick={this.props.onCancel}
            className="profile-button"
            size="large"
          >
            Cancel
          </Button>
          <Button
            onClick={this.props.onUpdate}
            type="button"
            className="profile-button"
            size="large"
          >
            Update
          </Button>
        </div>
      </Form>
    );
  }
}

const mapStateToProps = ({ form: { profile } }) => ({ profile });

export default connect(mapStateToProps)(ProfileReview);
