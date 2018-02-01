import React from 'react';
import { Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import FormField from '../../constants/profileFields';

require('./profile.css');

const ProfileReview = (props) => {
  const reviewProfile = FormField.map(FormField => {
    return (
      <div key={FormField.name}>
        <label>{FormField.name}:</label>
      </div>
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

const mapStateToProps = (state) => ({ profile: state });

export default connect(mapStateToProps)(ProfileReview);
