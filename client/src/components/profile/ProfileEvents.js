import React from "react";
import { connect } from "react-redux";
import eventPreview from "../../constants/eventPreview";
import pastEvents from "../../constants/pastEvents";
import { Container, Divider, Image, List } from "semantic-ui-react";

const renderImages = images => {
  return images.map(image => <Image src={image.src} rounded />);
};

const ProfileEvents = ({ profile }) => {
  const allEvents = [...eventPreview, ...pastEvents];
  const profileEvents = profile.events.map(event => event.eventId);
  const attendingEvents = allEvents.filter(event =>
    profileEvents.includes(event.id)
  );

  return (
    <Image.Group size="medium" style={{ height: '65vh', overflow: 'scroll' }}>{renderImages(attendingEvents)}</Image.Group>
  );
};

export default ProfileEvents;
