import React from "react";
import { Container, Dropdown, Menu, Transition } from "semantic-ui-react";
import { Link } from "react-router-dom";
import renderAuth from "./utils/renderAuth";
import { renderDropdown } from "./utils/renderDropdown";
import "./header.css";

const CompactHeader = props => {
  const { animation, auth, visible } = props;

  return (
    <Transition animation={animation} visible={visible} duration={500} fluid>
      <Menu fixed="top" inverted className="compact">
        <Container fluid>
          <Menu.Item as={Link} to="/" header>
            <h3 className="logo-text">Groupr</h3>
          </Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item
              as={Link}
              to="/meet-the-team"
              header
              className="arimo"
            >
              Meet the Team
            </Menu.Item>
            <Dropdown item simple text="Events" className="arimo">
              {renderDropdown()}
            </Dropdown>
            <Menu.Item header className="arimo">
              {renderAuth(auth)}
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    </Transition>
  );
};

export default CompactHeader;
