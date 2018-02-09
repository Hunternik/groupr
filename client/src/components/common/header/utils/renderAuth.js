import React from 'react';
import { Dropdown, Image, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Login from '../Login';
import ProfilePlaceholder from '../../../../assets/images/ProfilePlaceholder.png';

const renderName = (auth) => (
  <span>
    <Image src={auth.iconPhotoURL || ProfilePlaceholder} avatar /> {auth.displayName}
  </span>
);

const renderLoggedInMenu = (auth) => {
  return (
    <div>
      <Grid verticalAlign="middle">
        <Grid.Column>
          <Dropdown trigger={renderName(auth)} pointing style={{ padding: 0 }} item simple className="arimo icon">
            <Dropdown.Menu>
              <Dropdown.Item as={Link} to="/profile">Profile</Dropdown.Item>
              <Dropdown.Item>
                <a href="/totpsetup">
                  <span style={{ color: 'black' }}>Setup 2FA</span>
                </a>
              </Dropdown.Item>              
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
