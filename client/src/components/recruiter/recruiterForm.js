import React, { Component } from 'react'
import { Form, Button } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form'
import { connect } from "react-redux";
import * as actions from '../../actions';
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
import FormField from '../../constants/recruiterFields';
import Payments from '../common/Payments';

class RecruiterForm extends Component {
  renderForm() {
    const validationType =
      FormField.name === "Email" ? email : [required, maxLength25, minLength2];
    const fieldForm = FormField.map(FormField => (
      <Field
        key={FormField.name}
        name={FormField.name}
        type={FormField.type}
        component={renderField}
        label={FormField.label}
        validate={validationType}
      />
    ));
    return fieldForm;
  }

  render() {
    // const { handleSubmit, pristine, reset, submitting } = props
    return (
      <Form>
        {this.renderForm()}
        <br/>
        <div>
          <Button type="button" size='large'>
            Clear Values
          </Button>
          <Button type="submit" size='large'>
            Submit
          </Button>
        </div>
      </Form>
    )
  }
}

const mapStateToProps = ({ auth }) => ({ initialValues: auth });

RecruiterForm = reduxForm({
  // a unique name for the form
  form: "recruiter"
})(RecruiterForm);

export default connect(mapStateToProps, actions)(RecruiterForm);
