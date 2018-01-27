import React, { Component } from 'react';
import { connect } from "react-redux";

class Quiz extends Component { 
    render() {
        return (
            <div>
                Hi Grace
            </div>
        );
    }
}

const mapStateToProps = (state) => ({ fetchQuiz: state.quiz })

export default connect(mapStateToProps)(Quiz);
