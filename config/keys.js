if (process.env.NODE_ENV === 'production') {
    // use these keys for production environment
    module.exports = require('./prod');
} else {
    // use these keys for development environment
    module.exports = require('./dev');
}