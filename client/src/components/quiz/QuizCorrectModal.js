import React, { Component } from 'react';
import { Button, Label, Header, Icon, Modal } from 'semantic-ui-react';
import * as actions from '../../actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class QuizCorrectModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: true
    };
  }

  handleOpen = () => this.setState({ modalOpen: true });

  handleClose = () => {
    this.props.history.goBack(-2);
    this.setState({
      modalOpen: false
    });
  };

  printQA = () => {
    const quiz = this.props.quiz.questions;
    console.log(quiz[1]);
    const qandas = [];
    for (let i = 0; i < quiz.length; i++) {
      qandas.push(
        <div>
          <div>
            Question {i + 1}: {quiz[i].question}
          </div>
          <div>Answer: {quiz[i].correct}</div>
        </div>
      );
    }
    return qandas;
  };

  render() {
    console.log(this.props.quiz.questions[0]);
    return (
      <Modal
        className="scrolling"
        open={this.state.modalOpen}
        onClose={this.handleClose}
        size="small"
      >
        <Header icon="browser" content="Grouper" />
        <Modal.Content>
          <h3>Welcome to the Event!</h3>
          <Modal.Description>
            <p class="user_score">
              You scored {this.props.score} out of 3 questions!
            </p>
            <p class="question_review">Here is a review of the questions:</p>
            {this.printQA()}
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={this.handleClose} inverted>
            <Icon name="checkmark" /> Back to the Event
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

const mapStateToProps = ({ quiz }) => ({
  quiz
});

export default withRouter(connect(mapStateToProps, actions)(QuizCorrectModal));
