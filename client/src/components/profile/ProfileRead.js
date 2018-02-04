import React, { Component } from "react";
import { Button, Form, Message } from "semantic-ui-react";
import { connect } from "react-redux";
import profileFields from "../../constants/profileFields";

require("./profile.css");

const renderFields = profile => {
  return profileFields.map(field => (
    <Form.Input fluid label={field.label} readOnly>
      {profile[field.name]}
    </Form.Input>
  ));
};

const ProfileRead = ({ profile, onUpdate, success }) => {
  return (
    <Form success={success}>
      <Message
        success
        header="Save Successful!"
        content="Your information has been updated!"
      />
      {profile && renderFields(profile)}
      <div className="button-group">
        <Button
          onClick={onUpdate}
          type="button"
          className="profile-button"
          size="large"
        >
          Update
        </Button>
      </div>
    </Form>
  );
};

export default ProfileRead;
