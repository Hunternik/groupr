import React, { Component } from 'react';
import { 
  Segment,
  Grid,
  Header, 
  Image,
} from 'semantic-ui-react';

class Description extends Component {
  render() {
    return (
      <div>
        <Segment style={{ padding: '8em 0em' }} vertical>
          <Grid container stackable verticalAlign='middle'>
            <Grid.Row>
              <Grid.Column width={9}>
                <Header as='h3' style={{ fontSize: '2em' }}>
                  Description
                </Header>
                <p style={{ fontSize: '1.33em' }}>
                  Doors open from 11-4PM. Come early to get free swag gear!
                </p>
                <Header as='h3' style={{ fontSize: '2em' }}>
                  Companies Attending
                </Header>
                <p style={{ fontSize: '1.33em' }}>
                  Google, Snapchat
                </p>
              </Grid.Column>
              <Grid.Column floated='right' width={5}>
                <Image
                  bordered
                  rounded
                  size='large'
                  src='https://i.stack.imgur.com/dApg7.png'
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </div>
    )
  }
}

export default Description;
