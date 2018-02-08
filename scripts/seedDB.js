const seedUsers = require('./seedUsers');
const seedEvents = require('./seedEvents');
const seedCompanies = require('./seedCompanies');
const seedEventCompanies = require('./seedEventCompanies');
const seedAttendees = require('./seedAttendees');
const seedQuiz = require('./seedQuiz');

(async () => {
	await seedUsers();
	await seedEvents();
	await seedCompanies();
	await seedEventCompanies();
	await seedAttendees();
	await seedQuiz();

	console.log('seed successful');

	process.exit(0);
})();