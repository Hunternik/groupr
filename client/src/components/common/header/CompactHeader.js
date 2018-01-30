import React from 'react';
import { Container, Dropdown, Image, Menu, Segment, Transition } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import renderAuth from './utils/renderAuth';
import LoginModal from './Login';

require('./header.css');

const CompactHeader = (props) => {
  const { animation, auth, visible } = props;

  return (
    <Transition animation={animation} visible={visible} duration={500} fluid>
      <Menu fixed="top" inverted className="compact">
        <Container fluid>
          <Menu.Item as={Link} to="/" header>
            <h3 className='logo-text'>Grouper</h3>
          </Menu.Item>
          <Menu.Menu position="right">
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
        </Container>
      </Menu>
    </Transition>
  );
};

export default CompactHeader;
