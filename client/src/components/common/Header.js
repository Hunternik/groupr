// mike: if we're not using this file then let's delete. agree?

import React, { Component } from 'react';
import { Container, Dropdown, Image, Menu } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class FixedMenuLayout extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return <a href="/auth/google">Log In</a>;
      default:
				return <a href="/auth/logout">Log out</a>;
    }
  }

  render() {
    return (
      <div>
        <Menu fixed="top" inverted>
          <Container>
            <Menu.Item as="a" header>
              <Image size="mini" src="/logo.png" style={{ marginRight: '1.5em' }} />
              Project Name
            </Menu.Item>
            <Menu.Item as={Link} to="/">Home</Menu.Item>
            {/* Temporary for development */}
            <Menu.Item as={Link} to="/event-page">Event Page (test)</Menu.Item>
            <Menu.Item>
              {this.renderContent()}
            </Menu.Item> 
            <Dropdown item simple text="Dropdown">
              <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/totp-setup">Setup 2FA</Dropdown.Item>
                <Dropdown.Item>List Item</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Header>Header Item</Dropdown.Header>
                <Dropdown.Item>
                  <i className="dropdown icon" />
                  <span className="text">Submenu</span>
                  <Dropdown.Menu>
                    <Dropdown.Item>List Item</Dropdown.Item>
                    <Dropdown.Item>List Item</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown.Item>
                <Dropdown.Item>List Item</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Container>
        </Menu>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}



export default connect(mapStateToProps)(FixedMenuLayout);
