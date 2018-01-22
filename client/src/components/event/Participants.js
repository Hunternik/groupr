import React, { Component } from 'react';
import {
  Segment,
  Grid,
  Header,
  Image
} from 'semantic-ui-react';

class Participants extends Component {
  render() {
    return (
      <div>
        <Segment style={{ padding: '0em' }} vertical>
          <Grid celled='internally' columns='equal' stackable>
            {/* <Grid.Row textAlign='center'> */}
            <Grid.Row>
              <Grid.Column style={{ paddingBottom: '2em', paddingTop: '2em' }}>
                <Header as='h3' style={{ fontSize: '2em' }}>Attendees</Header>
                <p style={{ fontSize: '1.33em' }}>
                  {/* <Image avatar src='/assets/images/avatar/large/nan.jpg' /> */}
                  <b>Jane Doe</b> Jr. Mobile Developer seeking work
                </p>
              </Grid.Column>
              <Grid.Column style={{ paddingBottom: '2em', paddingTop: '2em' }}>
                <Header as='h3' style={{ fontSize: '2em' }}>Recruiters</Header>
                <p style={{ fontSize: '1.33em' }}>
                  {/* <Image avatar src='/assets/images/avatar/large/nan.jpg' /> */}
                  <b>John Doe</b> Software Engineer for GitHub
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </div>
    );
  }
}

export default Participants;
