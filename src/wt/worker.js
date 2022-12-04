/**
 * extend given function to work with data received from main thread
 * and implement function which sends result of the computation
 * to the main thread
 */
import { parentPort, workerData } from 'worker_threads'

const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = async () => {
    // This function sends result of nthFibonacci computations to main thread

    await new Promise((resolve) => setTimeout(resolve, 10 * 1000));
    console.log('sendResult::workerData', workerData)

    const x = nthFibonacci(workerData)
    console.log('sendResult::result', x)

    parentPort.postMessage({ x })
};

await sendResult();
