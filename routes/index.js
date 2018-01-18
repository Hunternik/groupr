const authRoutes = require('./authRoutes');

module.exports = (app) => {
	app.use('/', (req, res) => res.json({hi: 'there'}))
	app.use('/auth', authRoutes);
};
