import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Segment,
  Container,
  Grid,
  Header,
  List,
  Visibility,
  Transition
} from 'semantic-ui-react';
import handleVisibility from '../utils/handleVisible';

class Footer extends Component {
  constructor() {
    super();

    this.handleVisibility = handleVisibility.bind(this);
  }

  state = {
    animation: null,
    visible: false,
    pass: 'slide up',
    reverse: 'slide down'
  };

  render() {
    const { animation, visible, pass, reverse } = this.state;

    return (
      <Container fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
        <Visibility
          onTopVisible={() => this.handleVisibility(pass, true)}
          onTopVisibleReverse={() => this.handleVisibility(reverse, false)}
          once={false}
        >
          <div style={{ height: '10px', width: '10px' }} />
        </Visibility>
        <Transition animation={animation} visible={visible} duration={700}>
          <Segment inverted vertical style={{ padding: '2em 0em' }}>
            <Container>
              <Grid divided inverted>
                <Grid.Row>
                  <Grid.Column width={3}>
                    <Header inverted as="h4" content="Company" />
                    <List link inverted>
                      <List.Item>About</List.Item>
                    </List>
                  </Grid.Column>
                  <Grid.Column width={3}>
                    <Header inverted as="h4" content="Events" />
                    <List link inverted>
                      <List.Item>
                        <Link to="/event-page/ATX">Austin</Link>
                      </List.Item>
                      <List.Item>
                        <Link to="/event-page/LA">Los Angeles</Link>
                      </List.Item>
                      <List.Item>
                        <Link to="/event-page/NY">New York</Link>
                      </List.Item>
                      <List.Item>
                        <Link to="/event-page/SF">San Francisco</Link>
                      </List.Item>
                      <List.Item>
                        <Link to="/event-page/SEA">Seattle</Link>
                      </List.Item>
                    </List>
                  </Grid.Column>
                  <Grid.Column width={7}>
                    <Header as="h4" inverted>
                      Contact Us
                    </Header>
                    <p>
                      <a href="mailto:arkrewucla@gmail.com">arkrewucla@gmail.com</a>
                    </p>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row className="centered">© Groupr</Grid.Row>
              </Grid>
            </Container>
          </Segment>
        </Transition>
      </Container>
    );
  }
}

export default Footer;
