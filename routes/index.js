const authRoutes = require('./authRoutes');
const quizRoutes = require('./quizRoutes');
const eventRoutes = require('./eventRoutes');
const billingRoutes = require('./billingRoutes');
// const companyRoutes = require('./companyRoutes');

module.exports = app => {
  app.use('/auth', authRoutes);
  app.use('/api', quizRoutes);
  app.use('/api/current_event', eventRoutes);
  app.use('/auth', billingRoutes);
  // app.use('/api/sponsor', companyRoutes);
};
