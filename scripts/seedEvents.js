const mongoose = require('mongoose');
const db = require('../models');
mongoose.Promise = global.Promise;
const keys = require('../config/keys');
const mongoURI = process.argv[2] === 'prod' ? keys.mongoURIPROD : keys.mongoURI
mongoose.connect(mongoURI);

module.exports = async () => {
	const eventSeed = [
		{
			eventId: 'ATX',
			title: 'Girls in Tech ATX',
			description:
				'<p>Come enjoy an evening with Girls in Tech! We invite you to our monthly networking dinner to meet new people around the Texas. Whether you are looking to hire brilliant talent for your new startup or want to learn from experts in different industries, come out to our networking dinner and make some new friends. You will connect with tons of people and learn about all the awesome projects and events going on around the Bay. People of all backgrounds and genders are welcome to attend. Be sure to reserve your seat by purchasing your ticket here (dinner and drinks included).</p> <h3>Schedule</h3> <ul> <li> 5 - 5:30 AM: Arrival</li> <li> 6 - 6:30 PM: Introduction </li> <li> 6:00 - 8:00 PM: Drinks & Networking with Companies</li> </ul> <h3>A few topics covered...</h3> <ul> <li>Coding Bootcamps: Breaking into the Industry</li> <li>Algorithm Resources</li> <li>Engineering Mentorships</li> </ul> <h3>Come join us for Food & Drinks (21+)!</h3>',
			date: new Date(Date.now()),
			location: '804 Congress Avenue, Austin, TX 78701',
			attendees: [],
			failedquiz: [],
			recruiters: [],
			companies: [],
			active: true,
			passed: false
		},
		{
			eventId: 'LA',
			title: 'TechFest LA',
			description:
				'<p>LA\'\s Largest Technology Job Fair will be returning to LA for an even bigger and better event for the second year in a row, co-hosted by Comparably, Annenberg Foundation and Office of Mayor Eric Garcetti. Over 250 most prominent tech companies in attendance along with 10,000+ job-seekers in Engineering, Product, Sales, Marketing, Design and more attending.</p> <h3>Schedule</h3> <ul> <li> 8:45 - 9:00 AM: Arrival</li> <li>10:30 - 2:00 PM: Tech Talks </li> <li> 2:30 - 5:00 PM: Tech Demos & Workshops</li> <li> 5:00 - 7:00 PM: Drinks & Networking with Companies</li> </ul> <h3>A few of the workshops offered...</h3> <ul> <li>Socket to me: An Introduction to Web Sockets WebRTyeeezy: Communicating live with WebRTC</li> <li>Web Worker Pooling: a Dive into the Deep End</li> <li>ASAP: The Secret Life of Life-Cycle Methods</li> </ul> <h3>Free Food & Drinks (21+)!</h3>',
			date: new Date(Date.now()),
			location: '1933 South Broadway Los Angeles, CA 90007',
			attendees: [],
			failedquiz: [],
			recruiters: [],
			companies: [],
			active: true,
			passed: false
		},
		{
			eventId: 'NY',
			title: 'Tech Networking Mixer NYC',
			description:
				'<p>New York Tech Talent job fair attracts the best talent in the tri-state area. Come meet employers, ask questions, and make connections.</p> <h3>Schedule</h3> <ul> <li> 5 - 5:30 PM: Arrival</li> <li> 6:00 - 8:00 PM: Explore Companies</li> </ul> <h3>Get connections with...</h3> <ul> <li>Top Recruiters from Established Companies</li> <li>Lead Start-up Applications</li> <li>Find Contract Work!</li> </ul> <h3>Food & Drinks (21+)!</h3>',
			date: new Date(Date.now()),
			location: '163 Williams Street 18th Floor New York, NY 10038',
			attendees: [],
			failedquiz: [],
			recruiters: [],
			companies: [],
			active: true,
			passed: false
		},
		{
			eventId: 'SF',
			title: 'Speed Recruiting SF',
			description:
				'<p>Are you looking for a job or looking to transition into a new career? Would you like to get tips and advice to help you land your dream job? Join us for our Speed Networking/Mentoring event where you will get face time and job search advice from recruiters, hiring managers and career counselors. \r\n The evening will start with lightning talks by each recruiter followed by the speed networking. Jobseekers will then meet recruiters, hiring managers and career counselors in a group mentoring format, asking questions and advice about your job search and making valuable connections. The groups will switch every 10 minutes.</p> <h3>Schedule</h3> <ul> <li> 5 - 5:30 PM: Arrival</li> <li> 6 - 6:30 PM: Introduction </li> <li> 6:30 - 8:00 PM: Speed Networking</li> </ul> <h3>Get connections with...</h3> <ul> <li>Top Recruiters from Established Companies</li> <li>Lead Start-up Applications</li> <li>Find Contract Work!</li> </ul> <h3>Food & Drinks (21+)!</h3>',
			date: new Date(Date.now()),
			location: '101 Townsend St, San Francisco, CA 94107',
			attendees: [],
			failedquiz: [],
			recruiters: [],
			companies: [],
			active: true,
			passed: false
		},
		{
			eventId: 'SEA',
			title: 'Women in Tech Seattle',
			description:
				'<p>This month, join us to celebrate and empower women in the tech industry, discuss ways we can ensure women will be fully represented, and advance the conversation forward. \r\n Our theme for this month is Women In Tech. It is no secret, companies with more women and more gender diversity perform better than those with less. We’re excited to invite you to learn about the difficulties, successes, and benefits of women in the tech industry, and what we can all do to ensure women are not just fully represented, but thrive.</p> <h3>Schedule</h3> <ul> <li> 5 - 5:30 PM: Arrival</li> <li> 5:30 - 6:00 PM: Introduction</li> <li> 6:00 - 7:30 PM: Networking with Food and Drinks</li> <li> 7:30PM - 8:00 PM : Empowerment Talk</li> </ul> <h3>A few of the workshops offered...</h3> <ul> <li>Socket to me: An Introduction to Web Sockets WebRTyeeezy: Communicating live with WebRTC</li> <li>Web Worker Pooling: a Dive into the Deep End</li> <li>ASAP: The Secret Life of Life-Cycle Methods</li> </ul> <h3>Free Food & Drinks (21+)!</h3>',
			date: new Date(Date.now()),
			location: '220 2nd Avenue South Seattle, WA 98104',
			attendees: [],
			failedquiz: [],
			recruiters: [],
			companies: [],
			active: true,
			passed: false
		},
		{
			eventId: 'SD',
			title: 'Start-Up & TechX SD',
			description:
				'<p>San Diego Startup & TechX is the fastest growing startup, digital & tech networking organization in the country. Our events are comprised of the most influential professionals in the area. Our purpose is to help our members forge strong, lasting relationships within the community combining Fortune 500 & 1000s with Entrepreneurs and Startups. We are creating unique opportunities & connections to help you grow your business and network! \r\n Enjoy The Most Successful Startup & Tech Mixer In A Fun, Relaxed Atmosphere \r\n Mingle With Highly Successful Men & Women In The Entrepreneur, Startup, TECH Space \r\n Find Your Next Client, Employee, Business Partner or Co-founder \r\n Your Network Is Your Net Worth. Come Build Your Network With Us!</p> <h3>Schedule</h3> <ul> <li> 5 - 5:30 PM: Arrival</li> <li> 5:30 - 6:00 PM: Introduction</li> <li> 6:00 - 7:30 PM: Networking with Food and Drinks</li> <li> 7:30PM - 8:00 PM : Empowerment Talk</li> </ul> <h3>A few of the workshops offered...</h3> <ul> <li>Socket to me: An Introduction to Web Sockets WebRTyeeezy: Communicating live with WebRTC</li> <li>Web Worker Pooling: a Dive into the Deep End</li> <li>ASAP: The Secret Life of Life-Cycle Methods</li> </ul> <h3>Free Food & Drinks (21+)!</h3>',
			date: new Date(Date.now()),
			location: '509 Ninth Avenue, San Diego, CA 92101',
			attendees: [],
			failedquiz: [],
			recruiters: [],
			companies: [],
			active: false,
			passed: true
		},
		{
			eventId: 'DET',
			title: 'HackerFest Detroit',
			description:
				'<p>You are invited to HackerFest, an invite-only recruiting event for developers. It is a one-of-a-kind opportunity to meet with and learn from some of the most innovative and fastest growing companies in a casual environment.</p> <h3>Schedule</h3> <ul> <li> 5 - 5:30 PM: Arrival</li> <li> 5:30 - 6:00 PM: Introduction</li> <li> 6:00 - 7:30 PM: Networking with Food and Drinks</li> <li> 7:30PM - 8:00 PM : Empowerment Talk</li> </ul><h3>Get connections with...</h3> <ul> <li>Top Recruiters from Established Companies</li> <li>Lead Start-up Applications</li> <li>Find Contract Work!</li> </ul> <h3>Food & Drinks (21+)!</h3>',
			date: new Date(Date.now()),
			location: '1520 Woodward Ave #500 Detroit, MI 48226',
			attendees: [],
			failedquiz: [],
			recruiters: [],
			companies: [],
			active: false,
			passed: true
		},
		{
			eventId: 'DEN',
			title: 'WomenHackerX Denver',
			description:
				'<p>You\'re invited to WomenHackerX, an invite-only recruiting event for women developers, designers, and product managers. Whether you are actively looking for your next challenge, or are curious about the hiring landscape, attending our events can help you gain an understanding of the market dynamics and see which companies will fit your requirements and support the growth of your career.</p> <h3>Schedule</h3> <ul> <li> 5 - 5:30 PM: Arrival</li> <li> 5:30 - 6:00 PM: Introduction</li> <li> 6:00 - 7:30 PM: Networking with Food and Drinks</li> <li> 7:30PM - 8:00 PM : Empowerment Talk</li> </ul> <h3>Get connections with...</h3> <ul> <li>Top Recruiters from Established Companies</li> <li>Lead Start-up Applications</li> <li>Find Contract Work!</li> </ul> <h3>Food & Drinks (21+)!</h3>',
			date: new Date(Date.now()),
			location: '1048 Pearl St Suite 200 Boulder, Colorado 80302',
			attendees: [],
			failedquiz: [],
			recruiters: [],
			companies: [],
			active: false,
			passed: true
		},
		{
			eventId: 'OR',
			title: 'Orlando People Power Summit',
			description:
				'<p>The Center for Millennial Engagement presents: The People Power Summit. \r\n Companies send their millennial leaders to the People Power Summit to experience a full day of career development, coaching, and mentorship. Designed with millennials in mind, the People Power Summit is a place where professional leaders from healthcare, law, hospitality, tech, business, and media accelerate their careers and leave with practical strategies to support the growth and sustainability of their companies, with over 100 companies represented. Leaders sent to this exclusive one-day event will also leave with a renewed sense of purpose, a clear plan of action, and a network of support to achieve their goals in 2018.</p> <h3>Schedule</h3> <ul> <li> 5 - 5:30 PM: Arrival</li> <li> 5:30 - 6:00 PM: Introduction</li> <li> 6:00 - 7:30 PM: Networking with Food and Drinks</li> <li> 7:30PM - 8:00 PM : Empowerment Talk</li> </ul> <h3>Get connections with...</h3> <ul> <li>Top Recruiters from Established Companies</li> <li>Lead Start-up Applications</li> <li>Find Contract Work!</li> </ul> <h3>Food & Drinks (21+)!</h3>',
			date: new Date(Date.now()),
			location: '1050 W NASA Blvd. Melbourne, FL 32901',
			attendees: [],
			failedquiz: [],
			recruiters: [],
			companies: [],
			active: false,
			passed: true
		},
		{
			eventId: 'WAS',
			title: 'Speed Mentoring for Tech DC',
			description:
				'<p>Speed mentoring is a super casual and fun way for people to meet others in their field and learn more about what’s needed to grow. We’ll have 3-4 sessions throughout the night and you can sign up to be in 1 or all 4. Each session is 30-45 minutes. We’ll guide & prompt you and in each session you’ll get to provide wisdom to multiple mentees. You feel good, they feel good. Win-win..</p> <h3>Schedule</h3> <ul> <li> 5 - 5:30 PM: Arrival</li> <li> 5:30 - 6:00 PM: Introduction</li> <li> 6:00 - 7:30 PM: Speed Mentoring with Food and Drinks</li> <li> 7:30PM - 8:00 PM : Empowerment Talk</li> </ul> <h3>A few of the workshops offered...</h3> <ul> <li>Socket to me: An Introduction to Web Sockets WebRTyeeezy: Communicating live with WebRTC</li> <li>Web Worker Pooling: a Dive into the Deep End</li> <li>ASAP: The Secret Life of Life-Cycle Methods</li> </ul> <h3>Free Food & Drinks (21+)!</h3>',
			date: new Date(Date.now()),
			location: '2009 8th St NW Washington, DC 20001',
			attendees: [],
			failedquiz: [],
			recruiters: [],
			companies: [],
			active: false,
			passed: true
		}
	];
	
	try {
		await db.Event.remove({})
		const data = await db.Event.collection.insertMany(eventSeed);
    console.log(`${data.insertedCount} events successfully seeded`);
		return;
	} catch (err) {
		console.log(err);
		process.exit(1);
	}
};
