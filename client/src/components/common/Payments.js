import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { Button } from 'semantic-ui-react';


class Payments extends Component {
	render () {
		return (
			<StripeCheckout 
				// 1 = $0.01 usd  
				amount={100}
				token={token => this.props.handleToken(token)}
				stripeKey={process.env.REACT_APP_STRIPE_KEY}
				name='Grouper'
				description='$1 to make you holla credits'
			>
			<div>
    		<Button positive>Add Credit</Button>
  		</div>
			</StripeCheckout>
		);
	}
}

export default connect(null, actions)(Payments); 

