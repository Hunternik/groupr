import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Modal, Icon } from 'semantic-ui-react';
import * as actions from '../../actions';

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
    console.log(index);
    const quiz = this.props.quiz ? this.props.quiz.questions : 'null';
    if (this.props.selectedAnswer === quiz[index].correct) {
      return <div>Congrats! That's correct!</div>;
    } else {
      return <div>I'm sorry, the correct answer is {quiz[index].correct}.</div>;
    }
  }
  render() {
    return (
      <Modal
        trigger={
          <Button.Group size="small">
            <Button onClick={this.handleOpen} disabled={!this.props.userChoice}>
              Submit
            </Button>
          </Button.Group>
        }
        open={this.state.modalOpen}
        size="small"
      >
        <Modal.Content>{this.showAnswers()}</Modal.Content>
        <Modal.Actions>
          <Button color="green" onClick={this.handleClose} inverted>
            <Icon name="checkmark" /> Got it
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
