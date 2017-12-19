'use strict';

var log4js = require('log4js');

module.exports = {
    trace: function(msg) {
        var logger = log4js.getLogger('cheese');
        logger.trace('Entering cheese testing');
        logger.debug('Got cheese.');
        logger.info('Cheese is Gouda.');
        logger.warn('Cheese is quite smelly.');
        logger.error('Cheese is too ripe!');
        logger.fatal('Cheese was breeding ground for listeria.');
    },

    config: function () {
        log4js.configure({
            appenders: { cheese: { type: 'file', filename: 'cheese.log' } },
            categories: { default: { appenders: ['cheese'], level: 'error' } }
        });
    }
}