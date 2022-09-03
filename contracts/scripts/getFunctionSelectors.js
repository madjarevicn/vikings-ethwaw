const { readJson, computeFunctionData, storeSelectors, decodeArguments} = require('./utils.js');
const {ethers} = require("hardhat");

const main = () => {
    const methods = readJson(`methods.json`);
    for (const topic in methods) {
        for (let i = 0; i < methods[topic].length; i++) {
            const method = methods[topic][i];
            const data = computeFunctionData(method);
            console.log(data);
            storeSelectors(topic, data[0], data[1], data[2], data[3]);
        }
    }
    console.log(`Done.`);
}

main();
