import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { Grid, Button } from 'semantic-ui-react';
import Login from '../common/header/Login';
import FieldLevelValidationForm from './recruiterForm';

class Recruiter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recruiter: null
    };
    this.buttonFunction = this.buttonFunction.bind(this);
    this.newFunction = this.newFunction.bind(this);
  }

  componentDidMount() {
    this.props.auth
  }

  newFunction (auth) {
    if (this.props.auth.credits === 6) {
      this.setState({ credits: 0 })
    console.log(auth);
    }
  }

  buttonFunction (auth) {
    if (this.props.auth.credits < 6){
      return null;
    }
    else {
      return <Button onClick={this.newFunction}>Hi Mike</Button>
    }
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
    console.log('****** this.props ', this.props.auth);

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
          {this.buttonFunction(this.props)}
          {/* <Button onClick={this.newFunction(this.props)}>
            Decrease credit
          </Button> */}
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


