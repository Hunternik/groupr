import React from 'react'
import { Form, Button } from 'semantic-ui-react';
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
        validate={[required, maxLength25, minLength2]}
        warn={alphaNumeric}
      />
			<Field
        name="title"
        type="text"
        component={renderField}
        label="Title"
        validate={[required, maxLength25, minLength2]}
        warn={alphaNumeric}
      />
			<Field
        name="website"
        type="text"
        component={renderField}
        label="Website"
        validate={[required, maxLength25, minLength2]}
      />
      <div>
        <Button type="submit" disabled={submitting}>
          Submit
        </Button>
        <Button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </Button>
      </div>
    </Form>
  )

  
}

FieldLevelValidationForm = reduxForm({
  // a unique name for the form
  form: "recruiter"
})(FieldLevelValidationForm);

export default FieldLevelValidationForm;
