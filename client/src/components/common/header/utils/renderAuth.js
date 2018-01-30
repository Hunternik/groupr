import React from 'react';
import { Button, Dropdown, Image, Menu, Grid } from 'semantic-ui-react';
import Login from '../Login';
import Payments from '../../Payments';

const trigger = (auth) => (
  <span>
    <Image src={auth.iconPhotoURL} avatar /> {auth.displayName}
  </span>
);

const renderLoggedInMenu = (auth) => {
  return (
    <div>
      <Grid columns={3} verticalAlign="middle">
        <Grid.Column width={5} key="1">
          <Payments />
        </Grid.Column>
        <Grid.Column width={5} key="2">
          Credits: {auth.credits}
        </Grid.Column>
        <Grid.Column width={5} key="3">
          <Dropdown trigger={trigger(auth)} pointing style={{ padding: 0 }} item simple className="arimo icon">
            <Dropdown.Menu>
              <Dropdown.Item>Profile</Dropdown.Item>
              <Dropdown.Item>
                <a href="/auth/logout">
                  <span style={{ color: 'black' }}>Log out</span>
                </a>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Grid.Column>
      </Grid>
    </div>
  );
};

const renderAuth = (auth) => {
  switch (auth) {
    case null:
      return;
    case false:
      return <Login />;
    default:
      return renderLoggedInMenu(auth);
  }
};

export default renderAuth;
