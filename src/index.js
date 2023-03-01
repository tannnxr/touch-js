// Touch

import chalk from 'chalk';
import Logger from './Logger.js';
import { version } from '../package.json';

const checkForUpdates = async () => {
    const curVersion = version;
    const latestVersion = await (await fetch('')).json();

}

const main = async () => {

    const logger = new Logger(true);

    logger.log('TouchJS Started', 'info');

}

await (main)();