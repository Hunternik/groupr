import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import Login from '../common/header/Login';
import FieldLevelValidationForm from './recruiterForm';
import { Button, Container, Checkbox, Form, Header, Grid, Segment } from 'semantic-ui-react';



class Recruiter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recruiter: null
    };
  }

  render() {
    console.log('****** this.props ', this.props);
    if (!this.props.auth) {
      return <Login quizInit />;
    }

    return (
      <Grid>
        <Grid.Column width={3}>
          <div />
        </Grid.Column>

        <Grid.Column width={10}>
          <h1>Recruiter</h1>
          <FieldLevelValidationForm />
        </Grid.Column>

        <Grid.Column width={3}>
          <div />
        </Grid.Column>
      </Grid>
    );

  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, actions)(Recruiter);


