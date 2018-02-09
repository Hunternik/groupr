import React, { Component } from 'react';
import { Form, Button, Grid } from 'semantic-ui-react';
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import * as actions from '../../actions';
// import { withRouter } from "react-router-dom";

class LoginOtp extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    // this.handleChange = this.handleChange.bind(this);
    this.onQrSubmit = this.onQrSubmit.bind(this);
  }

  // to see value as we type
  // handleChange(data) {
  //   this.setState({ value: data.target.value });
  //   console.log("handleChange: event.target.value", data.target.value);
  // }

  onQrSubmit(data) {
    console.log(data);
    const { qrCode } = data;

    this.props.fetchOtp(qrCode);
  }
  componentDidMount() {
    
    this.props.auth;
  }
  
  
  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;

    const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
		<div>
    <Grid verticalAlign='middle'>
        <label>Enter 6-digit QR Code</label>
        <div>
          <input {...input} placeholder={label} type={type} />
          {touched && ((error && <span>
                {error}
              </span>) || (warning && <span>{warning}</span>))}
        </div>
			</Grid>
      </div>
      )

    return (
      <Grid centered columns={4}>
				<Grid.Column>
					<Form onSubmit={this.props.handleSubmit(this.onQrSubmit)}>
						<Field
							name="qrCode"
							type="number"
							label="000000"
							component={renderField}
						/>
						<br />
						<div>
							<Button
								type="button"
								size="large"
								onClick={reset}
							>
								Clear Values
							</Button>
							<Button type="submit" size="large">
								Submit
							</Button>
						</div>
					</Form>
				</Grid.Column>
			</Grid>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

LoginOtp = reduxForm({
  form: "qrInfo"
})(LoginOtp);

export default connect(mapStateToProps, actions)(LoginOtp);
