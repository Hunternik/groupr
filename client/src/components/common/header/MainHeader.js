import React from 'react';
import { Button, Container, Dropdown, Image, Menu, List } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import renderAuth from './utils/renderAuth';

const MainHeader = (props) => {
  {
    /* <Menu pointing secondary>
          <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
          <Menu.Item name='messages' active={activeItem === 'messages'} onClick={this.handleItemClick} />
          <Menu.Item name='friends' active={activeItem === 'friends'} onClick={this.handleItemClick} />
          <Menu.Menu position='right'>
            <Menu.Item name='logout' active={activeItem === 'logout'} onClick={this.handleItemClick} />
          </Menu.Menu>
        </Menu> */
  }

  return (
    <Menu size="huge">
      {/* <Menu.Item fitted borderless> */}
        <h1 className='logo-text' style={{marginLeft: '.5em'}}>Grouper</h1>
      {/* </Menu.Item> */}
      <Menu.Menu position="right" style={{ marginRight: '.5em' }}>
				<Menu.Item as={Link} to="/" header color='teal' className='arimo'>
					Home
				</Menu.Item>
        <Menu.Item as={Link} to="" header color='teal' className='arimo'>
          About
        </Menu.Item>
        <Dropdown item simple text="Events" header color='teal' className='arimo'>
          <Dropdown.Menu>
            <Dropdown.Item>Austin</Dropdown.Item>
            <Dropdown.Item>Los Angeles</Dropdown.Item>
            <Dropdown.Item>New York</Dropdown.Item>
            <Dropdown.Item>San Francisco</Dropdown.Item>
            <Dropdown.Item>Seattle</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Menu.Item header className='arimo'>{renderAuth(props.auth)}</Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};

export default MainHeader;
