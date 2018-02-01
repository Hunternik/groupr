import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import FormField from '../../constants/profileFields';

require('./profile.css');

class ProfileReview extends Component {
	state = { profileValues: null}

  componentWillReceiveProps(nextProps) {
    if (this.props.profile !== nextProps.profile) {
			const { values: profileValues } = nextProps.profile;
			
      this.setState({ profileValues });
    }
  }

  renderFields() {
    return FormField.map((FormField) => (
      <div key={FormField.name}>
        <label>{FormField.label}:</label>
      </div>
    ));
  }

  render() {
    return (
      <div>
        {this.renderFields()}
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
  }
}

const mapStateToProps = ({ form: { profile } }) => ({ profile });

export default connect(mapStateToProps)(ProfileReview);
