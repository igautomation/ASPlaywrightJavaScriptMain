// src/utils/common/logger.js

/**
 * Logger Utility for Playwright Framework (ESM Compliant).
 *
 * Responsibilities:
 * - Provides structured logging for tests and framework activities
 * - Logs both to files (error.log, combined.log) and console
 * - Uses JSON formatting with timestamps for consistency
 */

import { createLogger, format, transports } from 'winston';

// Initialize logger instance
const logger = createLogger({
  level: 'info',
  format: format.combine(format.timestamp(), format.json()),
  transports: [
    new transports.File({ filename: 'logs/error.log', level: 'error' }),
    new transports.File({ filename: 'logs/combined.log' }),
    new transports.Console(),
  ],
});

export default logger;
