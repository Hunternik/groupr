import React, { Component } from 'react';
import { Segment, Grid, Menu, Label } from 'semantic-ui-react';

class Participants extends Component {
  state = { activeItem: 'companies' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    return (
      <div>
        <Grid container>
          <Grid.Column width={3}>
            <Menu fluid vertical tabular>
              <Menu.Item
                name="companies"
                active={activeItem === 'companies'}
                onClick={this.handleItemClick}
              >
                <Label color="teal">14</Label>
                Companies
              </Menu.Item>
              <Menu.Item
                name="recruiters"
                active={activeItem === 'recruiters'}
                onClick={this.handleItemClick}
              >
                <Label>27</Label>
                Recruiters
              </Menu.Item>
              <Menu.Item
                name="attendies"
                active={activeItem === 'attendies'}
                onClick={this.handleItemClick}
              >
                <Label>128</Label>
                Attendies
              </Menu.Item>
            </Menu>
          </Grid.Column>
          <Grid.Column stretched width={7}>
            <Segment>
              This will be a list of companies, recruiters or attendies.
            </Segment>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default Participants;
