import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Modal, Icon } from 'semantic-ui-react';
import * as actions from '../../actions';

class AnswerContainer extends Component {
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
    console.log(this.props);
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

  render() {
    console.log(this.props);
    console.log(this.state);
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
        <Modal.Content>
          <div>Call Benjamin regarding the reports.</div>
        </Modal.Content>
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

export default connect(mapStateToProps, actions)(AnswerContainer);
