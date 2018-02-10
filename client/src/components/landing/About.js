import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import SectionHead from './SectionHead';

class About extends Component {
  render() {
    return (
      <Container className="about-main" fluid>
        <SectionHead name="Our Story" />
        <Container className="about-us" textAlign="center" text>
          <div className="about-text">
            <h1>A Better Process For Technical Hiring</h1>
          </div>
        </Container>
        <Container className="about-description">
          Grouper connects the technology companies with technical talent in
          your area. We understand that the hiring process can be difficult not
          only for recruiters, but also the candidates. We want to help
          engineers find amazing jobs, and help recruiters connect with
          candidates based on their technical abilities rather than their resume
          credentials. Every attendee has passed a rigorous coding challenge
          that is objective and standardized, which provides recruiters that all
          attendees have a strong baseline understanding of technology.
        </Container>
      </Container>
    );
  }
}

export default About;
