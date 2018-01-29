import React, { Component } from 'react';
import { Button, Label, Header, Icon, Modal } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';

class AttendeeModal extends Component {
  state = { modalOpen: false };

  handleOpen = () => this.setState({ modalOpen: true });

  handleClose = () => {
    this.props.history.push('/quiz');
    this.setState({ modalOpen: false });
  };

  render() {
    return (
      <Modal
        className="scrolling"
        trigger={
          <Button className="attendButton" onClick={this.handleOpen} as="div" labelPosition="right">
            <Button color="teal">
              <Icon name="fork" />
              Attend
            </Button>
            <Label as="a" basic color="teal" pointing="left">
              228
            </Label>
          </Button>
        }
        open={this.state.modalOpen}
        onClose={this.handleClose}
        basic
        size="small"
      >
        <Header icon="browser" content="Meetup" />
        <Modal.Content>
          <h3>Are you an attendee or a recruiter?</h3>
        </Modal.Content>
        <Modal.Actions>
          <Button color="green" onClick={this.handleClose} inverted>
            <Icon name="checkmark" /> Attendee
          </Button>
          <Button color="green" onClick={this.handleClose} inverted>
            <Icon name="checkmark" /> Recruiter
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

export default withRouter(AttendeeModal);
