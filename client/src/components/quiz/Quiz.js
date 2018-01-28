import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actions from '../../actions';

class Quiz extends Component { 
    componentDidMount() {
        this.props.fetch_quiz();
    };

    render() {
        return (
            <div>
                Hi Grace
            </div>
        );
    }
}

export default connect(null, actions)(Quiz);
