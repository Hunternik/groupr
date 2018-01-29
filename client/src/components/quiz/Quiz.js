import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Radio, Button } from 'semantic-ui-react';
import * as actions from '../../actions';

class Quiz extends Component {
  constructor() {
    super();
    this.state = {
      index: 0,
      complete: false,
      answer: null,
      score: 0
    };
    this.nextQuestion = this.nextQuestion.bind(this);
    this.correctAnswer = this.correctAnswer.bind(this);
    this.wrongAnswer = this.wrongAnswer.bind(this);
    this.getAnswers = this.getAnswers.bind(this);
  }

  correctAnswer() {
    this.setState({
      index: 0,
      answer: true,
      score: this.state.score + 1
    });
  }

  wrongAnswer() {
    this.setState({
      answer: false
    });
  }

  nextQuestion() {
    const length = Object.keys(this.props.quiz.questions).length;
    const { index } = this.state;
    if (index === length - 1) {
      this.setState({
        complete: true
      });
    } else {
      this.setState({
        index: this.state.index + 1,
        answer: null
      });
    }
  }

  componentDidMount() {
    this.props.fetch_quiz();
  }

  getAnswers(answers) {
    const { index } = this.state;
    if (this.props.quiz) {
      return Object.entries(this.props.quiz.questions[index].answers).map(
        ([key, value], i) => {
          return (
            <div>
              <Form.Group grouped>
                <Form.Field
                  control="input"
                  type="radio"
                  name="htmlRadios"
                  label={value.toString()}
                />
              </Form.Group>
            </div>
          );
        }
      );
    }
  }

  render() {
    const { index } = this.state;
    const quiz = this.props.quiz ? this.props.quiz.questions : 'null';
    const currentQuestion = quiz[index].question;
    console.log(index);

    // if (this.props.quiz) {
    //   this.nextQuestion();
    // } else {
    //   return null;
    // }

    return (
      <div>
        <div>{currentQuestion}</div>
        <div>{quiz && this.getAnswers(quiz.answers)}</div>
        <Button>Submit</Button>
      </div>
    );
  }
}

const mapStateToProps = ({ quiz }) => {
  return { quiz };
};

export default connect(mapStateToProps, actions)(Quiz);
