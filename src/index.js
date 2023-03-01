// Touch

import chalk from 'chalk';
import Logger from './Logger.js';
import application from '../package.json' assert {type: "json"};

const checkForUpdates = async () => {
    const curVersion = application.version;
    const latestVersion = await fetch('https://raw.githubusercontent.com/tannnxr/touch-js/master/version.txt').then(res => res.text());

    const logger = new Logger(true, 'Update Checker');

    if (curVersion !== latestVersion) {
        logger.log(`There is an update available for touch-js. Current Version: ${curVersion} Latest Version: ${latestVersion}`, 'warn');
    } else {
        logger.log(`touch-js is up to date. Current Version: ${curVersion}`, 'success');
    }
}

const main = async () => {

    const name = application.name;

    const logger = new Logger(true, name);

    logger.log(`${name} Started`, 'info');

    await checkForUpdates();

}

await (main)();