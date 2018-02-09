import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Header from './common/header/Header';
import Landing from './landing/Landing';
import EventPage from './event/EventPage';
import Quiz from './quiz/Quiz';
import Footer from './common/Footer';
import ScrollToTop from './common/ScrollToTop';
import Recruiter from './recruiter/Recruiter';
import Profile from './profile/Profile';

class Router extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <BrowserRouter>
        <ScrollToTop>
          <Header />
          <Route exact path="/" component={Landing} />
          <Route path="/event-page/:eventId" component={EventPage} />
          <Route path="/about" component={Landing} />
          <Route path="/quiz" component={Quiz} />
          <Route path="/profile" component={Profile} />
          <Route path="/recruiter" component={Recruiter} />
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    );
  }
}

export default connect(null, actions)(Router);
