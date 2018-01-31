import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import {
  Button,
  Container,
  Checkbox,
  Form,
  Header,
  Grid,
  Segment
} from 'semantic-ui-react';
import { connect } from 'react-redux';
require('./profile.css');

const required = value => (value ? undefined : 'Required');
const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined;
const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;
const maxLength25 = maxLength(25);
export const minLength = min => value =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined;
export const minLength2 = minLength(2);
const alphaNumeric = value =>
  value && /[^a-zA-Z0-9 ]/i.test(value)
    ? 'Only alphanumeric characters'
    : undefined;
const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
);

class Profile extends Component {
  renderForm() {
    return (
      <Form>
        <Field
          name="First Name"
          type="text"
          component={renderField}
          label="First Name"
          validate={[required, maxLength25, minLength2]}
          warn={alphaNumeric}
        />
        <Field
          name="Last Name"
          type="text"
          component={renderField}
          label="Last Name"
          validate={[required, maxLength25, minLength2]}
          warn={alphaNumeric}
        />
        <Field
          name="email"
          type="email"
          component={renderField}
          label="Email"
          validate={email}
        />
        <Field
          name="Company"
          type="text"
          component={renderField}
          label="Company"
          validate={[required, maxLength25, minLength2]}
          warn={alphaNumeric}
        />
        <Field
          name="Position"
          type="text"
          component={renderField}
          label="Position"
          validate={[required, maxLength25, minLength2]}
          warn={alphaNumeric}
        />
        <div className="button-group">
          <Button className="profile-button" size="large">
            Cancel
          </Button>
          <Button type="submit" className="profile-button" size="large">
            Update
          </Button>
        </div>
      </Form>
    );
  }

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;
    return (
      <Container>
        <Header as="h1" textAlign="center">
          {this.props.auth && this.props.auth.displayName}
        </Header>
        <Grid stackable columns={2} textAlign="center" centered>
          <Grid.Column textAlign="center" centered>
            <Segment>
              <h1>My Events</h1>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>
              <h1>Profile</h1>
              {this.renderForm()}
            </Segment>
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

const mapStateToProps = ({ auth }) => ({ auth });

Profile = reduxForm({ form: 'Profile' })(Profile);
Profile = connect(mapStateToProps)(Profile);

export default Profile;
