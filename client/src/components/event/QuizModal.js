import React, { Component } from 'react';
import { Button, Label, Icon, Modal } from 'semantic-ui-react';

class NestedModal extends Component {
  state = { open: false };

  open = () => this.setState({ open: true });
  close = () => this.setState({ open: false });

  render() {
    const { open } = this.state;

    return (
      <Modal
        class="quiz"
        dimmer={false}
        open={open}
        onOpen={this.open}
        onClose={this.close}
        trigger={
          <Button primary icon>
            Proceed <Icon name="right chevron" />
          </Button>
        }
      >
        <Modal.Header>Question #1</Modal.Header>
        <Modal.Content>
          <p>That's everything!</p>
        </Modal.Content>
        <Modal.Actions>
          <Button icon="check" content="All Done" onClick={this.close} />
        </Modal.Actions>
      </Modal>
    );
  }
}

const QuizModal = () => (
  <Modal
    trigger={
      <Button as="div" labelPosition="right">
        <Button color="teal">
          <Icon name="fork" />
          Attend
        </Button>
        <Label as="a" basic color="teal" pointing="left">
          228
        </Label>
      </Button>
    }
  >
    <Modal.Header>Event Quiz</Modal.Header>
    <Modal.Content image>
      <div className="image">
        <Icon name="right arrow" />
      </div>
      <Modal.Description>
        <p>
          This is a short 5 question quiz. If you get 80% correct, you can
          attend the event!
        </p>
      </Modal.Description>
    </Modal.Content>
    <Modal.Actions>
      <NestedModal />
    </Modal.Actions>
  </Modal>
);

export default QuizModal;
