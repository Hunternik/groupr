import React, { Component } from 'react';
import { 
  Segment,
  Grid,
  Header, 
	Image,
	Button
} from 'semantic-ui-react';

class QrCode extends Component {
  render() {
    return (
      <div>
        <Segment style={{ padding: '8em 0em' }} vertical>
          <Grid container stackable verticalAlign='middle'>
            <Grid.Row>
              <Grid.Column width={9}>
                <Header as='h3' style={{ fontSize: '2em' }}>
                  QR Page
                </Header>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </div>
    )
  }
}

export default QrCode;
