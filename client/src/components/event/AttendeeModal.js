import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Label, Header, Icon, Modal } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import { fetchEvent } from '../../actions';
import './event.css';

class AttendeeModal extends Component {
  constructor(props) {
    super(props);

    this.quizTaken = this.quizTaken.bind(this);
    this.calcNumOfParticipants = this.calcNumOfParticipants.bind(this);
  }
  state = { modalOpen: false };

  quizTaken() {
    const id = this.props.auth ? this.props.auth._id : 'null';
    const quizTaken = this.props.event ? this.props.event.attendees : 'null';
    const quizFailed = this.props.event ? this.props.event.failedquiz : 'null';
    const recruiterList = this.props.event
      ? this.props.event.recruiters
      : 'null';
    let attendeePassed = quizTaken.some(oid => oid._id === id);
    let attendeeFailed = quizFailed.some(oid => oid._id === id);
    let attendingRecruiter = recruiterList.some(oid => oid._id === id);

    if (!attendeePassed && !attendeeFailed && !attendingRecruiter) {
      return (
        <Button
          className="attendButton"
          onClick={this.handleOpen}
          as="div"
          labelPosition="right"
        >
          <Button color="teal">
            <Icon name="fork" />
            Attend
          </Button>
          <Label as="a" basic color="teal" pointing="left">
            {this.calcNumOfParticipants()}
          </Label>
        </Button>
      );
    } else {
      return;
    }
  }

  handleOpen = () => this.setState({ modalOpen: true });

  handleQuiz = () => {
    this.props.history.push('/quiz');
    this.setState({ modalOpen: false });
  };

  handleRecruiter = () => {
    this.props.history.push('/recruiter');
    this.setState({ modalOpen: false });
  };

  calcNumOfParticipants() {
    let sum = 0;
    if (
      this.props.event.companies &&
      this.props.event.recruiters &&
      this.props.event.attendees
    ) {
      sum =
        this.props.event.companies.length +
        this.props.event.recruiters.length +
        this.props.event.attendees.length;
    }
    return sum;
  }

  render() {
    return (
      <Modal
        className="scrolling"
        trigger={
          this.props.event.attendees &&
          this.props.event.failedquiz &&
          this.quizTaken()
        }
        open={this.state.modalOpen}
        onClose={this.handleClose}
        basic
        size="small"
      >
        <Header icon="browser" content="Groupr" />
        <Modal.Content>
          <h3>Are you an attendee or a recruiter?</h3>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={this.handleQuiz} inverted>
            Attendee
          </Button>
          <Button onClick={this.handleRecruiter} inverted>
            Recruiter
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  event: state.event
});

export default withRouter(
  connect(mapStateToProps, {
    fetchEvent
  })(AttendeeModal)
);
