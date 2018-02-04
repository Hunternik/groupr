import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Button } from 'semantic-ui-react';
import * as actions from '../../actions';
import QuizPassModal from './QuizPassModal';
import QuizFailModal from './QuizFailModal';
import Login from '../common/header/Login';

require('./quiz.css');

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      complete: false,
      answer: null,
      active: true,
      score: 0,
      selectedAnswer: null,
      checked: null
    };
    this.nextQuestion = this.nextQuestion.bind(this);
    this.validateAnswer = this.validateAnswer.bind(this);
    this.getAnswers = this.getAnswers.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.toggleActive = this.toggleActive.bind(this);
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextState.complete && this.state.complete !== nextState.complete) {
      if (nextState.score > 1 && this.state.score !== nextState.score) {
        // this is the current state before it happens
        this.passQuiz();
      } else if (nextState.score <= 1 && this.state.score !== nextState.score) {
        this.failQuiz();
      }
    }
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

  toggleActive() {
    this.setState({
      active: false
    });
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
            <Form.Group grouped key={key}>
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
  }

  renderLoginModal() {
    this.refs.login.renderLoginItems();
  }

  passQuiz(data) {
    this.props.passed_quiz({ eventId: this.props.event.eventId });
  }

  failQuiz(data) {
    this.props.failed_quiz({ eventId: this.props.event.eventId });
  }

  render() {
    console.log(this.state.active);
    const { index } = this.state;
    const quiz = this.props.quiz ? this.props.quiz.questions : 'null';
    const currentQuestion = quiz[index].question;

    if (this.state.complete === true && this.state.score > 1) {
      return <QuizPassModal score={this.state.score} />;
    }

    if (this.state.complete === true && this.state.score <= 1) {
      return <QuizFailModal score={this.state.score} />;
    }

    if (!this.props.auth) {
      return <Login quizInit />;
    }

    return (
      <div className="quiz_container">
        <div className="current_question">{currentQuestion}</div>
        <div className="answer_container">
          {quiz && this.getAnswers(quiz.answers)}
        </div>
        <div className="btn">
          <Button.Group size="big">
            <Button
              onClick={this.validateAnswer}
              disabled={!this.state.userChoice}
            >
              Submit
            </Button>
          </Button.Group>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  quiz: state.quiz,
  auth: state.auth,
  event: state.event
});

export default connect(mapStateToProps, actions)(Quiz);
