import { stat, writeFile } from 'node:fs/promises';
 
// https://github.com/AlreadyBored/nodejs-assignments/blob/main/assignments/nodejs-basics/assignment.md

// create.js - implement function that creates new file fresh.txt with content I am fresh and young inside of the files folder (if file already exists Error with message FS operation failed must be thrown)

export const create = async () => {
    // Write your code here    
    const content = 'I am fresh and young'
    const filePath = 'files/fresh.txt'
    const folderStat = await stat('files').catch(() => null)
    if (folderStat === null) {
        throw new Error('Files folder does not exist')
    }
    const fileStat = await stat(filePath)
        .catch(() => null)
    if (fileStat !== null) {
        throw new Error('FS operation failed')
    }

    await writeFile(filePath, content)
};

await create();