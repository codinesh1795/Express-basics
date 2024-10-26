const colors = require('colors');

const logger = (req,res,next) => {
    const methodColors = {
        GET: 'green',
        POST: 'blue',
        PUT: 'yellow',
        DELETE: 'red'
    }

    const color = methodColors[req.method] || white;

    //console.log(req.protocol);
    console.log(`${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl}`[color]);
    next(); // can be run on route level or app level based on need
};

module.exports = logger;