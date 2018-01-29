import React from 'react';
import { Button, Container, Dropdown, Image, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import renderAuth from './utils/renderAuth';

const MainHeader = (props) => {
  console.log(props.auth);
  return (
    <Menu size="huge" pointing secondary>
      <Link to="/">
        <h1 className="logo-text" style={{ marginLeft: '.5em', marginRight: '.5em', color: '#3ebcb2' }}>
          Grouper
        </h1>
      </Link>
      <Menu.Menu position="right" style={{ marginRight: '.5em' }}>
        <Menu.Item as={Link} to="" header className="arimo">
          About
        </Menu.Item>
        <Dropdown item simple text="Events" className="arimo">
          <Dropdown.Menu>
            <Dropdown.Item>Austin</Dropdown.Item>
            <Dropdown.Item>Los Angeles</Dropdown.Item>
            <Dropdown.Item>New York</Dropdown.Item>
            <Dropdown.Item>San Francisco</Dropdown.Item>
            <Dropdown.Item>Seattle</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Menu.Item header className="arimo">
          {renderAuth(props.auth)}
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};

export default MainHeader;
