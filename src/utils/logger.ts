import { createLogger, transports, format } from 'winston';

const logger = createLogger({
  format: format.combine(
    format.colorize(),
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }),
    format.printf(
      info => `${info.timestamp} ${info.level}: ${info.method ? `[${info.method}]::` : ''}${info.message}`
    )
  ),
  transports: [
    new transports.File({
      filename: './logs/all-logs.log',
      maxsize: 5242880,
      maxFiles: 5,
    }),
    new transports.Console(),
  ]
});

export default logger