import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button, Form } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { submitProfile } from '../../actions';
import {
  required,
  email,
  maxLength,
  maxLength25,
  minLength,
  minLength2,
  alphaNumeric,
  renderField
} from '../utils/formValidations.js';
import FormField from '../../constants/profileFields';

require('./profile.css');

class ProfileForm extends Component {
  renderForm() {
    const fieldForm = FormField.map(FormField => {
      const validationType =
        FormField.name === 'Email'
          ? email
          : [required, maxLength25, minLength2];

      return (
        <Field
          key={FormField.name}
          name={FormField.name}
          type={FormField.type}
          component={renderField}
          label={FormField.name}
          validate={validationType}
        />
      );
    });
    return fieldForm;
  }

  render() {
    return (
      <Form onSubmit={this.props.handleSubmit}>
        {this.renderForm()}
        <div className="button-group">
          <Button
            onClick={this.props.onCancel}
            className="profile-button"
            size="large"
          >
            Cancel
          </Button>
          <Button
            onClick={this.props.onUpdate}
            type="submit"
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

const mapStateToProps = ({ auth }) => ({ initialValues: auth });

ProfileForm = reduxForm({ form: 'profile', enableReinitialize: true })(
  ProfileForm
);

export default connect(mapStateToProps, { submitProfile })(ProfileForm);
