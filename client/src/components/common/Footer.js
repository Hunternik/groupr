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
import './footer.css';

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
                    <List link>
                      <List.Item>
                        <Link to="/meet-the-team">Meet the Team</Link>
                      </List.Item>
                    </List>
                  </Grid.Column>
                  <Grid.Column width={3}>
                    <Header as="h4" content="Events" />
                    <List link>
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
<<<<<<< HEAD
                    <Header as="h4" inverted>
                      Contact Us
                    </Header>
                    <p>
                      <a href="mailto:arkrewucla@gmail.com">arkrewucla@gmail.com</a>
                    </p>
=======
                    <Header as="h4">Contact Us</Header>
                    <a
                      className="email"
                      href="mailto:arkrewucla@gmail.com?subject=Feedback"
                    >
                      Send us a message
                    </a>
>>>>>>> 59fc309d2decf4f7f5abcf96b5e779a734cf007d
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
