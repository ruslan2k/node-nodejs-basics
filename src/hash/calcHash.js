import { createReadStream } from 'fs'
import { createHash } from 'crypto'
import { URL } from 'url';


const calculateHash = async () => {
    // Write your code here 

    const fileName = new URL('./files/fileToCalculateHashFor.txt', import.meta.url).pathname;

    const fd = createReadStream(fileName);
    const hash = createHash('sha256');
    hash.setEncoding('hex');

    fd.on('end', function() {
        hash.end();
        console.log(hash.read());
    });

    fd.pipe(hash);
};

await calculateHash();