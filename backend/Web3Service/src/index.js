const express = require('express')
const app = express()
const ethers = require('ethers');
const abiCoder = new ethers.utils.AbiCoder();
app.use(express.json());

app.post('/test', async (request, response) => {

    // Take address from body.
    const selectors = request.body.selectors
    const rawInput = request.body.raw_input


    return response.json({
        "status" : 'ok',
        "result" : decodeArguments(rawInput, selectors)
    });
});

const decodeArguments = (rawInput, selectors) => {
    const funcSelector = rawInput.substring(0,10);
    const funcName = selectors[funcSelector]["name"];
    const types = selectors[funcSelector]["types"];
    console.log(`Action Called: ${funcName}`);
    console.log(`Arguments:`);
    const calldata = '0x' + rawInput.substring(10);
    const decoded = abiCoder.decode(types, calldata);

    const result = {};


    for (let i = 0; i < decoded.length; i++) {

        let key = selectors[funcSelector]["typeNames"][i];
        let value = decoded[i];

        result[key] = result[key] || [];
        result[key].push(value);
    }

    return result;
}

app.listen(process.env.PORT || 3000 , () => {
    console.log(`🚀  Running on the ${3000 || process.env.PORT} port.`);
});
