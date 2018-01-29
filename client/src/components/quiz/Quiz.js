import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Radio, Button } from 'semantic-ui-react';
import * as actions from '../../actions';
import CorrectPage from './CorrectPage';

class Quiz extends Component {
  constructor() {
    super();
    this.state = {
      index: 0,
      complete: false,
      answer: null,
      score: 0,
      selectedAnswer: null,
      checked: null
    };
    this.nextQuestion = this.nextQuestion.bind(this);
    this.validateAnswer = this.validateAnswer.bind(this);
    this.getAnswers = this.getAnswers.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.finishQuiz = this.finishQuiz.bind(this);
  }

  validateAnswer() {
    const { index } = this.state;
    if (
      this.state.selectedAnswer === this.props.quiz.questions[index].correct
    ) {
      this.setState({ score: this.state.score + 1 });
    }
    this.setState({ userChoice: null });
    this.nextQuestion();
  }

  finishQuiz = () => {
    if (this.state.complete === true) {
      console.log('Quiz is finished!');
    } else {
      console.log('Quiz in progress!');
    }
  };

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
    this.finishQuiz();
  }

  handleChange = e => {
    this.setState({
      selectedAnswer: e.currentTarget.value,
      userChoice: e.currentTarget.value
    });
  };

  componentDidMount() {
    this.props.fetch_quiz();
  }

  getAnswers(answers) {
    const { index } = this.state;
    if (this.props.quiz) {
      return Object.entries(this.props.quiz.questions[index].answers).map(
        ([key, value], i) => {
          return (
            <Form.Group grouped>
              <Form.Field
                control="input"
                type="radio"
                name="htmlRadios"
                checked={value === this.state.userChoice}
                label={value.toString()}
                value={value.toString()}
                onClick={this.handleChange}
              />
            </Form.Group>
          );
        }
      );
    }
    console.log(this.state);
  }

  render() {
    const { index } = this.state;
    const quiz = this.props.quiz ? this.props.quiz.questions : 'null';
    const currentQuestion = quiz[index].question;

    return (
      <div>
        <div>{currentQuestion}</div>
        <div>{quiz && this.getAnswers(quiz.answers)}</div>
        <Button onClick={this.validateAnswer} disabled={!this.state.userChoice}>
          Submit
        </Button>
        <CorrectPage />
      </div>
    );
  }
}

const mapStateToProps = ({ quiz }) => {
  return { quiz };
};

export default connect(mapStateToProps, actions)(Quiz);
