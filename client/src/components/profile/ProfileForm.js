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

  state = { loading: false };

  componentWillReceiveProps(nextProps) {
		// Wait for response from server before updating state to remove spinner
    if (this.props.initialValues !== nextProps.initialValues) {
      this.setState({ loading: false });
      this.props.onCancel();
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
        validate={validationType}
      />
    ));
    return fields;
	}
	
	isEqual(updated,initial) {
		for (let field in updated) {
			if (updated[field] !== initial[field]) {
				return true
			}
		}
		return false;
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
		const initialProfile = { _id, ...this.props.initialValues};
		const fieldsChanged = this.isEqual(updateProfile,initialProfile);
		// Check to see if there were updates to the form, if there are changes update the db
		if (fieldsChanged) {
			this.props.submitProfile(updateProfile);
    	this.setState({ loading: true });
		} else {
			this.props.onCancel();
		}
  }

  render() {
    return (
      <Form
        onSubmit={this.props.handleSubmit(this.onProfileSubmit)}
        loading={this.state.loading}
      >
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
