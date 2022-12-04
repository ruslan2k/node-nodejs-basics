/**
 * implement function that creates number of worker threads
 * (equal to the number of host machine logical CPU cores)
 * from file worker.js and able to send data to those threads and to receive
 * result of the computation from them. You should send incremental number
 * starting from 10 to each worker. For example: on host machine with 4 cores
 * you should create 4 workers
 * and send 10 to first worker,
 * 11 to second worker, 12 to third worker, 13 to fourth worker.
 * After all workers will finish, function should log array of results into console.
 * The results are array of objects with 2 properties:
 *     status - 'resolved' in case of successfully received value from worker
 *               or 'error' in case of error in worker
 *     data - value from worker in case of success or null in case of error in worker
 */

import os from 'os'
import { Worker, isMainThread } from 'worker_threads'

const startWorker = (num) => {
    return new Promise((resolve, reject) => {
        const workerFileName = new URL('./worker.js', import.meta.url).pathname;
        const worker = new Worker(workerFileName, {
            workerData: num
        })

        worker.on('message', resolve)
        worker.on('error', reject)
        worker.on('exit', (code) => {
            if (code !== 0) {
                new Error(`Worker stopped with exit code ${code}`);
            }
        })
    })
}

const main = async () => {
    const cpusNumber = os.cpus().length

    const cpusArr = Array(cpusNumber).fill(null).map((_, i) => 10 + i)

    const x = await startWorker(2)
    console.log('main::x', x)
}

const performCalculations = async () => {
    // Write your code here
    if (isMainThread) {
        console.log('MainThread')
        await main()
    }
};

await performCalculations();

