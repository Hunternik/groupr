import React from 'react';
import { Dropdown, Image, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Login from '../Login';
import Payments from '../../Payments';

const renderName = (auth) => (
  <span>
    <Image src={auth.iconPhotoURL} avatar /> {auth.displayName}
  </span>
);

const renderLoggedInMenu = (auth) => {
  return (
    <div>
      <Grid columns={3} verticalAlign="middle">
        
        <Grid.Column width={5} key="2">
          Credits: {auth.credits}
        </Grid.Column>
        <Grid.Column width={5} key="3">
          <Dropdown trigger={renderName(auth)} pointing style={{ padding: 0 }} item simple className="arimo icon">
            <Dropdown.Menu>
              <Dropdown.Item as={Link} to="/profile">Profile</Dropdown.Item>
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
