import React from 'react';
import { Button } from 'semantic-ui-react';
import FormField from '../../constants/profileFields';

require('./profile.css');

const ProfileReview = () => {
  const reviewProfile = FormField.map(FormField => {
    return (
      <div
        key={FormField.name}
        name={FormField.name}
        type={FormField.type}
        label={FormField.name}
      />
    );
  });

  return (
    <div>
      {reviewProfile}
      <div className="button-group">
        <Button className="profile-button" size="large">
          Cancel
        </Button>
        <Button type="submit" className="profile-button" size="large">
          Update
        </Button>
      </div>
    </div>
  );
};
export default ProfileReview;
