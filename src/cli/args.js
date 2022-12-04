/**
 * implement function that parses command line
 * arguments (given in format --propName value --prop2Name value2,
 * you don't need to validate it) and prints them to the console
 * in the format propName is value, prop2Name is value2
 */

import { argv } from 'node:process';

const parseArgs = () => {
    // Write your code here 
    const cliArgs = argv.map((arg, index) => {
        const match = arg.match(/--(\S+)/);
        if (match) {
            return `${match[1]} is ${argv[index+1]}`;
        }
    })
        .filter((str) => str !== undefined)

    console.log(cliArgs.join(', '))
};

parseArgs();