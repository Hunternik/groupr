import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { Grid, Button } from 'semantic-ui-react';
import Login from '../common/header/Login';
import RecruiterForm from './RecruiterForm';

class Recruiter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recruiter: null
    };
  }

  componentDidMount() {
    this.props.auth
  }

  componentDidUpdate (oldProps,oldState) {
    if (this.state.show){
      return null;
    }
    else {
      return <Button/>
    }
  }

  render() {
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
          <RecruiterForm />
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


