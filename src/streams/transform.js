/**
 * implement function that reads data from process.stdin,
 * reverses text using Transform Stream
 * and then writes it into process.stdout
 */

import { Transform } from "stream";

const transform = async () => {
    // Write your code here 
    const reverter = new Transform({
        transform: (chunk, enc, cb) => {
            //console.log('[', chunk.toString(), ']');
            var splitString = chunk.toString().trim().split("");
            var reverseArray = splitString.reverse();
            cb(null, reverseArray.join("") + '\n');
        }
    })

    process.stdin.pipe(reverter).pipe(process.stdout);
};

await transform();