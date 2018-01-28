import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actions from '../../actions';

class Quiz extends Component { 
    componentDidMount() {
        this.props.fetch_quiz();
    };

    render() {
        console.log(this.props.quiz);
        return (
            <div>
                {/* {this.props.quiz} */}
                Hi Grace
            </div>
        );
    }
}

const mapStateToProps = ({quiz}) => {
    return { quiz };
};

export default connect(mapStateToProps, actions)(Quiz);
