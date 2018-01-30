import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export const renderDropdown = () => (
  <Dropdown.Menu>
    <Dropdown.Item as={Link} to="/event-page/ATX">
      Austin
    </Dropdown.Item>
    <Dropdown.Item as={Link} to="/event-page/LA">
      Los Angeles
    </Dropdown.Item>
    <Dropdown.Item as={Link} to="/event-page/NY">
      New York
    </Dropdown.Item>
    <Dropdown.Item as={Link} to="/event-page/SF">
      San Francisco
    </Dropdown.Item>
    <Dropdown.Item as={Link} to="/event-page/SEA">
      Seattle
    </Dropdown.Item>
  </Dropdown.Menu>
);
