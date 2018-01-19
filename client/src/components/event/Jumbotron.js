import React, { Component } from 'react';
import { Container, Header, Button, Icon } from 'semantic-ui-react';

class Jumbotron extends Component {
  render() {
    return (
    <Container text>
      <Header
        as="h1"
        content="Coffee Meets Code Event"
        inverted
        style={{ fontSize: "4em", fontWeight: "normal", marginBottom: 0, marginTop: "3em", color: "black"}}
      />
      <Header
        as="h2"
        content="Do whatever you want when you want to."
        inverted
        style={{ fontSize: "1.7em", fontWeight: "normal" }}
      />
      <Button color="teal" primary size="huge">
        Test Your Skills
        <Icon name="right arrow" />
      </Button>
    </Container>
    )
}
}

export default Jumbotron;
