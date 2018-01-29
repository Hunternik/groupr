import React from 'react';
import Payments from '../../Payments';
import { List, Grid } from 'semantic-ui-react';


const renderAuth = (auth) => {
	switch (auth) {
		case null:
			return;
		case false:
			return <a href="/auth/google">Log In</a>;
		default:
			// return <a href="/auth/logout">Log out</a>;
			return [
				<Grid columns={3} verticalAlign='middle'>
						<Grid.Column width={5} key='1'><Payments /></Grid.Column>
						<Grid.Column width={5} key='2'>Credits: {auth.credits}</Grid.Column>
						<Grid.Column width={5} key='3'><a href="/auth/logout">Log out</a></Grid.Column>
				</Grid>
			];
	}
}

export default renderAuth;

