import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Radio } from 'semantic-ui-react';
import * as actions from '../../actions';

class Quiz extends Component {
  constructor() {
    super();

    this.getAnswers = this.getAnswers.bind(this);
  }
  componentDidMount() {
    this.props.fetch_quiz();
  }

  getAnswers(answers) {
    console.log(this.props);
    if (this.props.quiz) {
      return Object.entries(this.props.quiz.num1.answers).map(
        ([key, value], i) => {
          return (
            <div key={key}>
              {key}. {value.toString()}
            </div>
          );
        }
      );
    }
  }

  render() {
    const quiz = this.props.quiz ? this.props.quiz.num1 : 'null';
    console.log(quiz.answers);
    return (
      <div>
        <div>{quiz.question}</div>
        <div>{quiz && this.getAnswers(quiz.answers)}</div>
      </div>
    );
  }
}

const mapStateToProps = ({ quiz }) => {
  return { quiz };
};

export default connect(mapStateToProps, actions)(Quiz);
