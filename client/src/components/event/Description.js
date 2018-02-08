import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';

class Description extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header as="h3" style={{ fontSize: '2em' }}>
          Description
        </Header>
        <p dangerouslySetInnerHTML={{__html: this.props.event.description}} style={{ fontSize: '1.33em' }} />
      </div>
    );
  }
}

export default Description;
