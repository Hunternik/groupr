import React, { Component } from 'react';
import { Button, Container, Checkbox, Form, Header, Grid, Segment } from 'semantic-ui-react';
import { reduxForm, Field } from 'react-redux-form';
import { connect } from 'react-redux';

class Profile extends Component {
  renderForm() {
    return (
      <Form>
        <Form.Field>
          <label>First Name</label>
          <input placeholder="First Name" />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input placeholder="Last Name" />
        </Form.Field>
				<Form.Field>
          <label>Email</label>
          <input placeholder="Email" />
        </Form.Field>
				<Form.Field>
          <label>Company</label>
          <input placeholder="Company" />
        </Form.Field>
				<Form.Field>
          <label>Position</label>
          <input placeholder="Position" />
        </Form.Field>
				<Form.Group>
					<Form.Button>Cancel</Form.Button>
        	<Form.Button type="submit">Update</Form.Button>
				</Form.Group>
      </Form>
    );
  }

  render() {
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

export default connect(mapStateToProps)(Profile);
