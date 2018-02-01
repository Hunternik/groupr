import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button, Container, Checkbox, Form, Header, Grid, Segment } from 'semantic-ui-react';
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

class Profile extends Component {
  renderForm() {
    const fieldForm = FormField.map((FormField) => {
      const validationType = FormField.name === 'Email' ? email : [ required, maxLength25, minLength2 ];

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
		console.log(this.props);
		
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
              <Form>{this.renderForm()}</Form>
              <div className="button-group">
                <Button className="profile-button" size="large">
                  Cancel
                </Button>
                <Button type="submit" className="profile-button" size="large">
                  Update
                </Button>
              </div>
            </Segment>
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({ initialValues: state.auth });

Profile = reduxForm({ form: 'profile', enableReinitialize: true })(Profile);

export default connect(mapStateToProps, { submitProfile })(Profile);
