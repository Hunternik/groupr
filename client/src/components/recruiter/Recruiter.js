import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import { Grid, Button, Container } from "semantic-ui-react";
import Login from "../common/header/Login";
import RecruiterForm from "./RecruiterForm";

class Recruiter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recruiter: null
    };
  }

  componentDidMount() {
    this.props.auth;
  }

  render() {
    if (!this.props.auth) {
      return (
        <Container style={{height: "100vh"}}>
          <Login quizInit />
        </Container>
      );
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
