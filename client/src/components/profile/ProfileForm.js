import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Button, Form } from "semantic-ui-react";
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

require("./profile.css");

class ProfileForm extends Component {
  constructor() {
    super();

    this.onProfileSubmit = this.onProfileSubmit.bind(this);
	}
	
  renderForm() {
    const validationType =
      profileFields.name === "Email" ? email : [required, maxLength25, minLength2];
    const fields = profileFields.map(field => (
      <Field
        key={field.name}
        name={field.name}
        type={field.type}
        component={renderField}
        label={field.label}
        validate={validationType}
      />
    ));
    return fields;
  }

  onProfileSubmit(data) {
    const { _id, firstName, lastName, email, company, position } = data;
    const updateProfile = {
      _id,
      firstName,
      lastName,
      email,
      company,
      position
    };

    this.props.submitProfile(updateProfile);
    this.props.onCancel();
  }

  render() {
    return (
      <Form onSubmit={this.props.handleSubmit(this.onProfileSubmit)}>
        {this.renderForm()}
        <div className="button-group">
          <Button
            type="button"
            onClick={this.props.onCancel}
            className="profile-button"
            size="large"
          >
            Cancel
          </Button>
          <Button type="submit" className="profile-button" size="large">
            Update
          </Button>
        </div>
      </Form>
    );
  }
}

const mapStateToProps = ({ auth }) => ({ initialValues: auth });

ProfileForm = reduxForm({ form: "profile", destroyOnUnmount: false })(
  ProfileForm
);

export default connect(mapStateToProps, { submitProfile })(ProfileForm);
