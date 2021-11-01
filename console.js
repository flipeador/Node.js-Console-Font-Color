const util = require('util');

class Console
{
    // Style:
    static reset      = '\x1b[0m';
    static normal     = '\x1b[0;29m';
    static bright     = '\x1b[1;29m';
    static dim        = '\x1b[2;29m';
    static underscore = '\x1b[4;29m';
    static blink      = '\x1b[5;29m';
    static reverse    = '\x1b[7;29m';
    static hidden     = '\x1b[8;29m';

    // Color:        [        FG,         BG,  BRIGHT_FG,   BRIGHT_BG]
    static black   = ['\x1b[30m', '\x1b[40m', '\x1b[90m', '\x1b[100m'];
    static red     = ['\x1b[31m', '\x1b[41m', '\x1b[91m', '\x1b[101m'];
    static green   = ['\x1b[32m', '\x1b[42m', '\x1b[92m', '\x1b[102m'];
    static yellow  = ['\x1b[33m', '\x1b[43m', '\x1b[93m', '\x1b[103m'];
    static blue    = ['\x1b[34m', '\x1b[44m', '\x1b[94m', '\x1b[104m'];
    static magenta = ['\x1b[35m', '\x1b[45m', '\x1b[95m', '\x1b[105m'];
    static cyan    = ['\x1b[36m', '\x1b[46m', '\x1b[96m', '\x1b[106m'];
    static white   = ['\x1b[37m', '\x1b[47m', '\x1b[97m', '\x1b[107m'];

    static date()
    {
        return new Date().toLocaleString('default',
            { dateStyle: 'short', timeStyle: 'medium' });
    }

    /**
     * @param {input.BasicOptions} options
     */
    static input(query, options)
    {
        const input = require('readline-sync');
        this.write('%s%s%s', this.cyan[0], query, this.magenta[0]);
        const result = input.question('', options);
        this.write(this.reset);
        return result;
    }

    static write(...args)
    {
        process.stdout.write(util.format(...args));
        return this;
    }

    static print(...args)
    {
        if (args.length)
            args[0] = `[${this.date()}] ${args[0]}`;
        console.log(...args);
        return this;
    }

    static log(...args)
    {
        return this.print('%s%s%s', this.black[2], util.format(...args), this.reset);
    }

    static info(...args)
    {
        return this.print('%s%s%s', this.white[0], util.format(...args), this.reset);
    }

    static warn(...args)
    {
        return this.print('%s%s%s', this.yellow[0], util.format(...args), this.reset);
    }

    static error(...args)
    {
        return this.print('%s%s%s', this.red[0], util.format(...args), this.reset);
    }

    static event(...args)
    {
        return this.print('%s%s%s', this.blue[0], util.format(...args), this.reset);
    }

    static success(...args)
    {
        return this.print('%s%s%s', this.green[0], util.format(...args), this.reset);
    }
    
    static debug = this.log;
}

module.exports = {
    Console: Console
};
