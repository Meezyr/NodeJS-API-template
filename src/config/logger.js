const { createLogger, format, transports } = require('winston');

const logger = createLogger({
    level: 'info',
    format: format.combine(
        format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),
        format.errors({ stack: true }),
        format.splat(),
        format.json()
    ),
    defaultMeta: { type: '', user: '' },
    transports: [
        new transports.File({ filename: 'combined.log', dirname: './src/assets/logs' }),
    ],
});

module.exports = logger;