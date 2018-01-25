import React, { Component } from 'react';
import { Button, Label, Header, Icon, Modal } from 'semantic-ui-react';

export default class BasicModal extends Component {
  state = { modalOpen: false };

  handleOpen = () => this.setState({ modalOpen: true });

  handleClose = () => this.setState({ modalOpen: false });

  render() {
    return (
      <Modal
        className="scrolling"
        trigger={
          <Button onClick={this.handleOpen} as="div" labelPosition="right">
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
        <Header icon="browser" content="Cookies policy" />
        <Modal.Content>
          <h3>A Basic Modal for Use</h3>
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
