/**
 * env.js - implement function that parses environment
 * variables with prefix RSS_ and prints them to the
 * console in the format RSS_name1=value1; RSS_name2=value2
*/

const parseEnv = () => {
    // Write your code here 
    const results = []
    for (const [key, value] of Object.entries(process.env)) {
        if (key.startsWith('RSS_')) {
            results.push(`${key}=${value}`);
        }
    }

    console.log(results.join(', '));
};

parseEnv();