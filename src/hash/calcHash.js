import { createReadStream } from 'fs'
import { createHash } from 'crypto'
import { URL } from 'url';


const calculateHash = async () => {
    // Write your code here 

    const fileName = new URL('./files/fileToCalculateHashFor.txt', import.meta.url).pathname;

    // the file you want to get the hash    
    const fd = createReadStream(fileName);
    const hash = createHash('sha256');
    hash.setEncoding('hex');

    fd.on('end', function() {
        hash.end();
        console.log(hash.read()); // the desired sha256sum
    });

    // read all file and pipe it (write it) to the hash object
    fd.pipe(hash);
};

await calculateHash()
