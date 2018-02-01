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
import Payments from '../common/Payments';


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
        <br />
        <Button type="submit" size='large' disabled={submitting}>
          Submit
        </Button>
        <Button type="button" size='large' disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </Button>
      </div>
      
      
      <Payments />
      

    </Form>
  )

  
}

FieldLevelValidationForm = reduxForm({
  // a unique name for the form
  form: "recruiter"
})(FieldLevelValidationForm);

export default FieldLevelValidationForm;
