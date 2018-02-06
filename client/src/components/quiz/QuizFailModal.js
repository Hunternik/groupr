import React, { Component } from 'react';
import { Image, Button, Modal } from 'semantic-ui-react';
import * as actions from '../../actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class QuizFailModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: true
    };
  }
  handleOpen = () => this.setState({ modalOpen: true });

  handleClose = () => {
    this.props.history.push('/');
    this.setState({ modalOpen: false });
  };

  render() {
    return (
      <Modal open={this.state.modalOpen} onClose={this.handleClose} size="tiny">
        <Modal.Content>
          <Image
            className="fail-image"
            src={require('../../assets/images/ModalImages/error.png')}
            centered
          />
          <h3>You need 2/3 to pass. Take a look at our other events!</h3>
          <Modal.Description>
            <p className="user_score">
              You scored {this.props.score} out of 3 questions
            </p>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={this.handleClose} inverted>
            Home Page
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

const mapStateToProps = ({ quiz }) => ({
  quiz
});

export default withRouter(connect(mapStateToProps, actions)(QuizFailModal));
