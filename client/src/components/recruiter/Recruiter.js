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
  }
  
  // buttonUpdated = (prevProps) => {
  //   if (prevProps.data !== this.props.auth.credits) {
  //     return 
  //   } else {
  //     // change submit button to false
  //   }
  // }

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
        
        Credits: {this.props.auth.credits}
        
        

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


