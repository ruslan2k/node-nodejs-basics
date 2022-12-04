/**
 * implement function that writes process.stdin data
 * into file fileToWrite.txt content using Writable Stream
 */

import { createWriteStream } from "fs"
import { URL } from "url"

const write = async () => {
    // Write your code here 
    const fileName = new URL('./files/fileToWrite.txt', import.meta.url).pathname;
    const file = await createWriteStream(fileName);

    process.stdin.pipe(file);

    process.stdin.resume();
};

await write();