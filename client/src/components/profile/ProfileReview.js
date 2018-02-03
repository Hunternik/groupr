import React, { Component } from "react";
import { Button } from "semantic-ui-react";
import { connect } from "react-redux";
import FormField from "../../constants/profileFields";

require("./profile.css");

class ProfileReview extends Component {
	state = { profileValues: null };
	
	componentDidMount() {
		if(this.props.profile) {
			const { values: profileValues } = this.props.profile;

      this.setState({ profileValues });
		}
	}

  componentWillReceiveProps(nextProps) {
    if (nextProps.profile && this.props.profile !== nextProps.profile) {
      const { values: profileValues } = nextProps.profile;

      this.setState({ profileValues });
    }
  }

  renderFields() {
    return FormField.map(FormField => (
      <div key={FormField.name}>
        <label>{FormField.label}:</label>
        <span>{this.state.profileValues[FormField.name]}</span>
      </div>
    ));
  }

  render() {
    return (
      <div>
        {this.state.profileValues && this.renderFields()}
        <div className="button-group">
          <Button
						type="button" 
            onClick={this.props.onCancel}
            className="profile-button"
            size="large"
          >
            Cancel
          </Button>
          <Button
            onClick={this.props.onUpdate}
            type="button" 
            className="profile-button"
            size="large"
          >
            Update
          </Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ form: { profile } }) => ({ profile });

export default connect(mapStateToProps)(ProfileReview);
