import React from 'react';
import { Dropdown, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import renderAuth from './utils/renderAuth';
import { renderDropdown } from './utils/renderDropdown';

const MainHeader = (props) => {
  return (
    <Menu size="huge" pointing secondary>
      <Menu.Item as={Link} to="/" header>
        <h1 className="logo-text" style={{ color: '#3ebcb2' }}>
          Groupr
        </h1>
      </Menu.Item>
      <Menu.Menu position="right" style={{ marginRight: '.5em' }}>
        <Menu.Item as={Link} to="" header className="arimo" style={{ height: '100%' }}>
          About
        </Menu.Item>
        <Dropdown item simple text="Events" className="arimo" style={{ height: '100%' }}>
          {renderDropdown()}
        </Dropdown>
        <Menu.Item header className="arimo" style={{ height: '100%' }}>
          {renderAuth(props.auth)}
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};

export default MainHeader;
