/**
 * implement function that reads file fileToRead.txt content
 * using Readable Stream 
 * and prints it's content into process.stdout
 */

import { createReadStream } from "fs"
import { URL } from "url"

const read = async () => {
    // Write your code here
    const fileName = new URL('./files/fileToRead.txt', import.meta.url).pathname;

    const fd = createReadStream(fileName);
    fd.on('end', () => {
        console.log()
    })

    fd.pipe(process.stdout);
};

await read();

