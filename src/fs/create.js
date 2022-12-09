
/**
 * implement function that creates new file fresh.txt with content
 * I am fresh and young
 * inside of the files folder
 * (if file already exists Error with message FS operation failed must be thrown)
 */

import { stat, writeFile } from 'node:fs/promises';

const create = async () => {
    // Write your code here 
    const content = 'I am fresh and young';
    const folderName = new URL('./files', import.meta.url).pathname;
    const folderStat = await stat(folderName).catch(() => null);
    if (folderStat === null) {
        throw new Error('Files folder does not exist');
    }

    const filePath = new URL('./files/fresh.txt', import.meta.url).pathname;
    const fileStat = await stat(filePath).catch(() => null);
    if (fileStat !== null) {
        throw new Error('FS operation failed');
    }

    await writeFile(filePath, content);
};

await create();