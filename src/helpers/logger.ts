import log4js from 'log4js';
import * as Const from './constants'

// using log4js as Logger
// ========================================
const logger = log4js.getLogger();

//  LOG_LEVEL = 'debug' | 'info' | 'error'
logger.level = Const.LOG_LEVEL;