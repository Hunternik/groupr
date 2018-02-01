import React, { Component } from 'react';
import { Field, reduxForm, formValueSelector } from 'redux-form';
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

require('./profile.css');

class Profile extends Component {
  renderForm() {
		const { handleSubmit, submitProfile } = this.props;

    return (
      <Form onSubmit={handleSubmit(submitProfile)}>
        <Field
          name="First Name"
          type="text"
          component={renderField}
          label="First Name"
          validate={[ required, maxLength25, minLength2 ]}
          warn={alphaNumeric}
        />
        <Field
          name="Last Name"
          type="text"
          component={renderField}
          label="Last Name"
          validate={[ required, maxLength25, minLength2 ]}
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
          validate={[ required, maxLength25, minLength2 ]}
          warn={alphaNumeric}
        />
        <Field
          name="Position"
          type="text"
          component={renderField}
          label="Position"
          validate={[ required, maxLength25, minLength2 ]}
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
		console.log(this.props)
    const { handleSubmit, pristine, reset, submitting } = this.props;
    return (
      <Container>
        <Header as="h1" textAlign="center">
          {this.props.auth && this.props.auth.displayName}
        </Header>
        <Grid stackable columns={2} textAlign="center" centered>
          <Grid.Column textAlign="center">
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
const selector = formValueSelector('profile')

const mapStateToProps = (state) => ({ initialValues: state.auth, form: selector(state) });

Profile = reduxForm({ form: 'profile', enableReinitialize: true })(Profile);

export default connect(mapStateToProps, { submitProfile })(Profile);
