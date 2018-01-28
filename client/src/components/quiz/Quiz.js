import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Quiz extends Component {
  componentDidMount() {
    this.props.fetch_quiz();
  }

  render() {
    const quiz = this.props.quiz ? this.props.quiz.num1 : 'null';
    return <div>{quiz.question}</div>;
  }
}

const mapStateToProps = ({ quiz }) => {
  return { quiz };
};

export default connect(mapStateToProps, actions)(Quiz);
