import React, { Component } from 'react';
import { Card, Image, Icon, Container } from 'semantic-ui-react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import Cards from '../../constants/teamInfo';
import './team.css';

class Team extends Component {
	renderCards() {
		return Cards.map((card, index) => (
			<Card key={index} className="card-container">
				<Image 
					className="card-image"
					src={card.image} />
				<Card.Content>
					<Card.Header>{card.name}</Card.Header>
					<Card.Meta>
						<span className="date">{card.title}</span>
					</Card.Meta>
					<Card.Description>
						{card.description}
					</Card.Description>
				</Card.Content>
				<Card.Content extra>
					<a href={card.url}>
					<Icon name="code" />
						GitHub
					</a>
					</Card.Content>
      </Card>
		));
	}

  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Container className="team-container">
        <Container
          className="team"
          textAlign="center"
          text
          style={{ position: 'relative' }}
        >
          <div className="about-team">
            <h1>Our Team</h1>
          </div>
          <div className="about-team">
            <p>
              We're a bunch of passionate engineers who have a broad
              range of skills and expertise to provide the best networking
              experience for professionals in technology.
            </p>
            <p>
              When we're not coding, you'll finding us climbing Mt. Kilmanjaro,
              gardening, playing Overwatch, playing basketball, or wine tasting
              in Napa.
            </p>
          </div>
          <div className="gallery">
            <Slider {...settings}>
							{this.renderCards()}
            </Slider>
          </div>
        </Container>
      </Container>
    );
  }
}

export default Team;
