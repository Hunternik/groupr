import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import Login from '../common/header/Login';
import FieldLevelValidationForm from './recruiterForm';


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
      <div>
        <h1>Recruiter</h1>
        <FieldLevelValidationForm />
      </div>
    );

  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, actions)(Recruiter);

