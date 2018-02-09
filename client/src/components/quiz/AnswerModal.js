import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Modal } from 'semantic-ui-react';
import * as actions from '../../actions';
import './quiz.css';

class AnswerModal extends Component {
  constructor(props) {
    super(props);
  }
  state = { modalOpen: false };

  handleOpen = () => {
    this.props.validateAnswer();
    this.setState({ modalOpen: true });
  };

  handleClose = () => {
    this.setState({ modalOpen: false });
    this.props.nextQuestion();
  };

  validateAnswer() {
    let index = this.props.index;
    this.setState({ modalOpen: true });
    if (
      this.props.selectedAnswer === this.props.quiz.questions[index].correct
    ) {
      this.setState({ score: this.props.score + 1 });
    }
    this.setState({ userChoice: null });
  }

  showAnswers() {
    let index = this.props.index;
    const quiz = this.props.quiz ? this.props.quiz.questions : 'null';
    if (this.props.selectedAnswer === quiz[index].modalanswer) {
      return (
        <div className="content_qmodal">Congratulations, that's correct!</div>
      );
    } else {
      return (
        <div>
          <div className="content_qmodal">
            I'm sorry, the correct answer is:
          </div>
          <div
            className="modal_pre"
            dangerouslySetInnerHTML={{ __html: quiz[index].correct }}
          />
        </div>
      );
    }
  }
  render() {
    return (
      <Modal
        trigger={
          <Button.Group>
            <Button
              size="large"
              onClick={this.handleOpen}
              disabled={!this.props.userChoice}
            >
              Submit
            </Button>
          </Button.Group>
        }
        open={this.state.modalOpen}
        size="small"
      >
        <Modal.Content>{this.showAnswers()}</Modal.Content>
        <Modal.Actions>
          <Button size="medium" onClick={this.handleClose} inverted>
            Got it
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

const mapStateToProps = state => ({
  quiz: state.quiz,
  event: state.event
});

export default connect(mapStateToProps, actions)(AnswerModal);
