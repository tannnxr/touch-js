import chalk from 'chalk';

class Logger {
    constructor(loggable, functionEnv, defaultPrefix) {
        
        // Validate Required Parameters
        if (typeof loggable === 'undefined') {
            throw new Error('loggable is required');
        }
        if (typeof functionEnv === 'undefined') {
            throw new Error('functionEnv is required');
        }

        // Validate Parameter Types
        // Function Environment and loggable are required so we don't check for undefined
        if (typeof loggable !== 'boolean') {
            throw new Error('loggable must be a boolean');
        }
        if (typeof functionEnv !== 'string') {
            throw new Error('functionEnv must be a string');
        }

        // Default Prefix is not required so we check for undefined
        if (typeof defaultPrefix !== 'string' && defaultPrefix !== undefined) {
            throw new Error('defaultPrefix must be a string');
        }
        this.loggable = loggable;
        this.defaultPrefix = defaultPrefix;
        this.functionEnv = functionEnv;
    }

    log = (msg, type) => {
        if (!this.loggable) return;
        var color = '';
        var msg_prfx = '';
        switch (type) {
            case 'error':
                color = 'red';
                msg_prfx = '!';
                break;
            case 'success':
                color = 'green';
                msg_prfx = '✓';
                break;
            case 'info':
                color = 'blue';
                msg_prfx = 'i';
                break;
            case 'warn':
                color = 'yellow';
                msg_prfx = '#';
                break;
            case 'debug':
                color = 'purple';
                msg_prfx = '*';
                break;
            default:
                color = 'gray';
                msg_prfx = this.defaultPrefix || '?';
                break;
        };
        console.log(chalk[color](`[${this.functionEnv}][${msg_prfx}]: ${msg}`));
    }
}

// Export the logger class
export default Logger;