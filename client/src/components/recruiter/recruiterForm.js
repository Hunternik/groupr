import React from 'react'
import { Form } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form'
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


let FieldLevelValidationForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <Form onSubmit={handleSubmit}>
      <Field
        name="company name"
        type="text"
        component={renderField}
        label="Company Name"
        validate={[required, maxLength15, minLength2]}
        warn={alphaNumeric}
      />
			<Field
        name="title"
        type="text"
        component={renderField}
        label="Title"
        validate={[required, maxLength15, minLength2]}
        warn={alphaNumeric}
      />
			<Field
        name="website"
        type="text"
        component={renderField}
        label="Website"
        validate={[required, maxLength15, minLength2]}
        warn={alphaNumeric}
      />
      <div>
        <button type="submit" disabled={submitting}>
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </Form>
  )
}

FieldLevelValidationForm = reduxForm({
  // a unique name for the form
  form: "recruiter"
})(FieldLevelValidationForm);

export default FieldLevelValidationForm;
