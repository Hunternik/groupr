import React, { Component } from "react";
import { Container, List } from "semantic-ui-react";
import Images from "../../constants/eventPreview";
import EventItem from "./EventItem";
import SectionHead from "./SectionHead";
import "./landing.css";

class Events extends Component {
  renderImages() {
    const listItems = Images.map((image, index) => (
      <List.Item key={image.id}>
        <EventItem image={image} />
      </List.Item>
    ));

    return listItems;
  }

  render() {
    return (
      <Container fluid>
        <Container className="event-title">
          <SectionHead name="Events" />
          <List ref="listNode">{this.renderImages()}</List>
        </Container>
      </Container>
    );
  }
}

export default Events;
