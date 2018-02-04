import React from 'react';
import { connect } from 'react-redux';

const events = (props) => {
	
}	

const mapStateToProps = ({ auth }) => ({ auth });

connect(mapStateToProps)(events);