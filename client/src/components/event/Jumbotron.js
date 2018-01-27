import React, { Component } from 'react';
import {
  Segment,
  Container,
  Header,
  Button,
  Icon,
  Label,
  Divider
} from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';

class Jumbotron extends Component {
  state = {};

  handleOpen = () => {
    this.props.history.push('/quiz');
  };

  render() {
    return (
      <div>
        <Segment
          inverted
          textAlign="center"
          style={{
            minHeight: 700,
            padding: '1em 0em',
            display: 'flex',
            flexDirection: 'column'
          }}
          vertical
        >
          <Segment
            inverted
            style={{
              fontSize: '4em',
              fontWeight: 'normal',
              marginBottom: 0,
              marginTop: '1em',
              alignSelf: 'left'
            }}
          />
          <Container text>
            <Header
              as="h1"
              content="Coffee Meets Code Event"
              inverted
              style={{
                fontSize: '4em',
                fontWeight: 'normal',
                marginBottom: 0,
                marginTop: 0
              }}
            />
            <Header
              as="h2"
              content="Network with developers and technical recruiters from high quality companies."
              inverted
              style={{ fontSize: '1.7em', fontWeight: 'normal' }}
            />
            <Button onClick={this.handleOpen} as="div" labelPosition="right">
              <Button color="teal">
                <Icon name="fork" />
                Attend
              </Button>
              <Label as="a" basic color="teal" pointing="left">
                228
              </Label>
            </Button>
          </Container>
        </Segment>
      </div>
    );
  }
}

export default withRouter(Jumbotron);
