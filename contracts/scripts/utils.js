const fs = require("fs");
const path = require("path");
const { ethers } = require('hardhat');
const abiCoder = new ethers.utils.AbiCoder();

const readJson = (fileName) => {
    let json
    try {
        json = fs.readFileSync(path.join(__dirname, fileName));
    } catch (err) {
        json = '{}';
    }
    return JSON.parse(json);
}

const storeSelectors = (topic, funcSelector, funcName, types, typeNames) => {
    const selectors = readJson(`selectors.json`);
    selectors[funcSelector]["name"] = funcName;
    selectors[funcSelector]["topic"] = topic;
    selectors[funcSelector]["types"] = types;
    selectors[funcSelector]["typeNames"] = typeNames;
    fs.writeFileSync(path.join(__dirname, `selectors.json`), JSON.stringify(selectors, null, '    '));
}

const computeFunctionData = (funcInterface) => {
    const funcSelector = (ethers.utils.keccak256(ethers.utils.toUtf8Bytes(funcInterface))).substring(0,10);
    const endIndex = funcInterface.indexOf('(');
    const funcName = funcInterface.substring(0, endIndex);
    const funcTypesCut = funcInterface.substring(endIndex + 1, funcInterface.length - 1);
    const args = funcTypesCut.split(',');
    let types = [];
    let typeNames = [];
    for (const arg in args) {
        arg.split(" ");
        types.push(arg[0] === "uint" ? "uint256" : arg);
        typeNames.push(arg[1] === "memory" || args[1] === "calldata" ? arg[2] : arg[1]);
        //console.log(arg);
    }
    return [funcSelector, funcName, types, typeNames];
}

const decodeArguments = (rawInput) => {
    const c = readJson('selectors.json');
    const funcSelector = rawInput.substring(0,10);
    const funcName = c[funcSelector][0];
    const types = c[funcSelector][2];
    console.log(`Action Called: ${funcName}`);
    console.log(`Arguments:`);
    const calldata = '0x' + rawInput.substring(10);
    const decoded = abiCoder.decode(types, calldata);
    for (let i = 0; i < decoded.length; i++) {
        console.log(` - ${c[funcSelector][3][i]}: ${decoded[i]}`);
    }
}

const testDecode = () => {
    decodeArguments("0x8803dbee00000000000000000000000000000000000000000000000000000001004ccb00000000000000000000000000000000000000000000000000000000012a05f20000000000000000000000000000000000000000000000000000000000000000a00000000000000000000000005b38da6a701c568545dcfcb03fcb875f56beddc4000000000000000000000000000000000000000000000000000000006313493300000000000000000000000000000000000000000000000000000000000000020000000000000000000000009430801ebaf509ad49202aabc5f5bc6fd8a3daf8000000000000000000000000118a612880b8e3f9914b0d4bff702e3fbec91783");
}

//testDecode();

module.exports = {
    readJson,
    storeSelectors,
    computeFunctionData,
    decodeArguments
}