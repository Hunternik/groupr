const authRoutes = require('./authRoutes');

module.exports = (app) => {
	app.use('/auth', authRoutes);
};
// mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm
// mike: need to create route for /api to handle /api/logout?
// mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm
