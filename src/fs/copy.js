/**
 * copy.js - implement function that copies folder files files
 * with all its content into folder files_copy at the same level (if files
 * folder doesn't exists or files_copy has already been created Error with
 * message FS operation failed must be thrown)
 */

import { readdir, stat, copyFile, mkdir } from 'fs/promises'
import { join } from 'path'

const copyRecursively = async (src, dest) => {
    const srcStat = await stat(src)
    console.log(srcStat.isDirectory() ? 'Dir ' : 'File', src)
    if (srcStat.isDirectory()) {
        await mkdir(dest)

        for (const file of await readdir(src)) {
            await copyRecursively(join(src, file), join(dest, file))
        }
    } else {
        await copyFile(src, dest)
    }
}

const copy = async () => {
    // Write your code here 
    const srcFolder = 'files'
    const destFolder = 'files_copy'

    const srcFolderStat = await stat(srcFolder)
        .catch(({ message }) => {
            console.error(message)
            throw new Error('FS operation failed')
        })

    const destFolderStat = await stat(destFolder).catch(() => null)
    if (destFolderStat) {
        throw new Error('FS operation failed')
    }

    await copyRecursively(srcFolder, destFolder)
};

copy();
