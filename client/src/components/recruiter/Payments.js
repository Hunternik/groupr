// mike: looking for recommendation on where to place this file
// placement will affect renderAuth.js

import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { Button } from 'semantic-ui-react';

class Payments extends Component {
<<<<<<< HEAD:client/src/components/recruiter/Payments.js
	render () {
		return (
			<StripeCheckout 
				image='http://www.liberallifestyles.com/wp-content/uploads/2017/01/quoka-5.jpg'
				// 1 = $0.01 usd  
				//amount={5000}
				token={token => this.props.handleToken(token)}
				stripeKey={process.env.REACT_APP_STRIPE_KEY}
				name='Grouper'
				description='$50 Sponsorship Fee'
				panelLabel='Sponsor'
				allowRememberMe='false'
			>
			<div>
    			<Button color='teal' size='large'>
					Pay Sponsorship Fee
				</Button>
  			</div>
			</StripeCheckout>
		);
	}
=======
  render() {
    return (
      <StripeCheckout
        image="http://www.liberallifestyles.com/wp-content/uploads/2017/01/quoka-5.jpg"
        token={token => this.props.handleToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
        name="Grouper"
        description="$50 Sponsorship Fee"
        panelLabel="Sponsor"
        allowRememberMe="false"
      >
        <div>
          <Button color="teal" size="large" className="fluid ui button">
            Pay Recruiter Fee
          </Button>
        </div>
      </StripeCheckout>
    );
  }
>>>>>>> master:client/src/components/common/Payments.js
}

export default connect(null, actions)(Payments);
