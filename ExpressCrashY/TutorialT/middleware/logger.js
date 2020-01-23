//customize middleware

/**
 * Note:  the middleware just is a function.  And it must contain the next.
 * if not the next in it, the program will not be carried out.
 * */  
const moment = require('moment');

const logger = (req, res, next) => {
    // console.log('Hello');
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}: ${moment().format()}`);
    
    next();
}

module.exports = logger;