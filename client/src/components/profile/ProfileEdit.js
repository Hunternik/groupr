import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import ReactDOM from "react-dom";
import { Button, Divider, Form, Segment } from "semantic-ui-react";
import { connect } from "react-redux";
import { submitProfile } from "../../actions";
import {
  required,
  email,
  maxLength25,
  minLength2,
  renderField
} from "../utils/formValidations.js";
import profileFields from "../../constants/profileFields";

class ProfileEdit extends Component {
  constructor() {
    super();

    this.onProfileSubmit = this.onProfileSubmit.bind(this);
    this.handleSizing = this.handleSizing.bind(this);
  }

  state = { loading: false };

  componentDidMount() {
    window.scrollTo(0, 0);
    window.addEventListener("resize", this.handleSizing);
    this.handleSizing();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleSizing);
  }

  handleSizing() {
    const height = ReactDOM.findDOMNode(this.refs.profileEdit).offsetHeight;

    this.props.height(height);
  }

  componentWillReceiveProps(nextProps) {
    // Wait for response from server before updating state to remove spinner
    if (this.props.initialValues !== nextProps.initialValues) {
      this.setState({ loading: false });
      this.props.onReturn();
    }
  }

  renderForm() {
    const validationType =
      profileFields.name === "Email"
        ? email
        : [required, maxLength25, minLength2];
    const fields = profileFields.map(field => (
      <Field
        key={field.name}
        name={field.name}
        type={field.type}
        component={renderField}
        label={field.label}
        validate={field.validation && validationType}
      />
    ));
    return fields;
  }

  isEqual(updated, initial) {
    for (let field in updated) {
      if (updated[field] !== initial[field]) return true;
    }
    return false;
  }

  onProfileSubmit(data) {
    const {
      _id,
      firstName,
      lastName,
      email,
      company,
      position,
      linkedInProfileURL,
      googleProfileURL
    } = data;
    const updateProfile = {
      _id,
      firstName,
      lastName,
      email,
      company,
      position,
      linkedInProfileURL,
      googleProfileURL
    };
    const initialProfile = { _id, ...this.props.initialValues };
    const fieldsChanged = this.isEqual(updateProfile, initialProfile);
    // Check to see if there were updates to the form, if there are changes update the db
    if (fieldsChanged) {
      updateProfile.displayName = `${firstName} ${lastName}`;

      this.props.submitProfile(updateProfile);
      this.setState({ loading: true });
    } else this.props.onCancel();
  }

  render() {
    return (
      <div ref="profileEdit">
        <Segment>
          <Form
            onSubmit={this.props.handleSubmit(this.onProfileSubmit)}
            loading={this.state.loading}
					>
            {this.renderForm()}
            <Divider />
            <div className="ui two buttons">
              <Button
                onClick={this.props.onCancel}
                basic
                color="red"
                size="large"
              >
                Cancel
              </Button>
              <Button type="submit" basic color="teal" size="large">
                Save
              </Button>
            </div>
          </Form>
        </Segment>
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => ({ initialValues: auth });

ProfileEdit = reduxForm({ form: "profile", destroyOnUnmount: false })(
  ProfileEdit
);

export default connect(mapStateToProps, { submitProfile })(ProfileEdit);
