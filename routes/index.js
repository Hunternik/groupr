const authRoutes = require('./authRoutes');
const quizRoutes = require('./quizRoutes');
const eventRoutes = require('./eventRoutes');
const billingRoutes = require('./billingRoutes');
const profileRoutes = require('./profileRoutes');
// const companyRoutes = require('./companyRoutes');

module.exports = app => {
	app.use('/auth', authRoutes);
	app.use('/auth', billingRoutes);
  app.use('/api/quiz', quizRoutes);
  app.use('/api/current_event', eventRoutes);
	// app.use('/api/company', companyRoutes);
	app.use('/api/profile', profileRoutes);
};
