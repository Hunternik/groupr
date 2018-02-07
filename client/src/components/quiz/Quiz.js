import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Button } from 'semantic-ui-react';
import * as actions from '../../actions';
import QuizPassModal from './QuizPassModal';
import QuizFailModal from './QuizFailModal';
import Login from '../common/header/Login';
import AnswerModal from './AnswerModal';

require('./quiz.css');

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      complete: false,
      answer: null,
      score: 0,
      selectedAnswer: null,
      checked: null
    };

    this.validateAnswer = this.validateAnswer.bind(this);
    this.nextQuestion = this.nextQuestion.bind(this);
    this.getAnswers = this.getAnswers.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextState.complete && this.state.complete !== nextState.complete) {
      if (nextState.score > 1) {
        // this is the current state before it happens
        this.passQuiz();
      } else if (nextState.score <= 1) {
        console.log('hi');
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
    console.log(this.props);
    this.props.failed_quiz({ eventId: this.props.event.eventId });
  }

  render() {
    const { index } = this.state;
    const quiz = this.props.quiz ? this.props.quiz.questions : 'null';
    const currentQ = quiz[index].q;

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
        <div className="question_title">{currentQ}</div>
        <pre className="question_container">
          <code language="language-javascript" className="current_question">
            <div
              className="qs"
              dangerouslySetInnerHTML={{ __html: quiz[index].question }}
            />
          </code>
        </pre>
        <pre className="answer_container">
          {quiz && this.getAnswers(quiz.answers)}
        </pre>
        <div className="btn">
          <AnswerModal
            {...this.state}
            nextQuestion={this.nextQuestion}
            validateAnswer={this.validateAnswer}
          />
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
