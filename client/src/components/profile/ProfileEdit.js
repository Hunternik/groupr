import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Button, Divider, Form, Segment } from "semantic-ui-react";
import { connect } from "react-redux";
import { submitProfile } from "../../actions";
import {
  required,
  email,
  maxLength25,
  minLength2,
  renderField
} from "../utils/formValidations.js";
import profileFields from "../../constants/profileFields";

class ProfileEdit extends Component {
  constructor() {
    super();

    this.onProfileSubmit = this.onProfileSubmit.bind(this);
  }

  state = { loading: false };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  componentWillReceiveProps(nextProps) {
    // Wait for response from server before updating state to remove spinner
    if (this.props.initialValues !== nextProps.initialValues) {
      this.setState({ loading: false });
      this.props.onReturn();
    }
  }

  renderForm() {
    const validationType =
      profileFields.name === "Email"
        ? email
        : [required, maxLength25, minLength2];
    const fields = profileFields.map(field => (
      <Field
        key={field.name}
        name={field.name}
        type={field.type}
        component={renderField}
        label={field.label}
        validate={field.validation && validationType}
      />
    ));
    return fields;
  }

  isEqual(updated, initial) {
    for (let field in updated) {
      if (updated[field] !== initial[field]) return true;
    }
    return false;
  }

  onProfileSubmit(data) {
		console.log(data);
    const { _id, firstName, lastName, email, company, position, linkedInProfileURL, googleProfileURL } = data;
    const updateProfile = {
      _id,
      firstName,
      lastName,
      email,
      company,
			position,
			linkedInProfileURL,
			googleProfileURL
    };
    const initialProfile = { _id, ...this.props.initialValues };
    const fieldsChanged = this.isEqual(updateProfile, initialProfile);
    // Check to see if there were updates to the form, if there are changes update the db
    if (fieldsChanged) {
      updateProfile.displayName = `${firstName} ${lastName}`;

      this.props.submitProfile(updateProfile);
      this.setState({ loading: true });
    } else this.props.onCancel();
  }

  render() {
    return (
      <Segment ref="profileEdit">
        <Form
          onSubmit={this.props.handleSubmit(this.onProfileSubmit)}
          loading={this.state.loading}
        >
          {this.renderForm()}
          <Divider />
          <div className="ui two buttons">
            <Button
              onClick={this.props.onCancel}
              basic
              color="red"
              size="large"
            >
              Cancel
            </Button>
            <Button type="submit" basic color="teal" size="large">
              Save
            </Button>
          </div>
        </Form>
      </Segment>
    );
  }
}

const mapStateToProps = ({ auth }) => ({ initialValues: auth });

ProfileEdit = reduxForm({ form: "profile", destroyOnUnmount: false })(
  ProfileEdit
);

export default connect(mapStateToProps, { submitProfile })(ProfileEdit);
