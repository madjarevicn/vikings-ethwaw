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
    selectors[funcSelector] = selectors[funcSelector] || {};
    selectors[funcSelector]["name"] = funcName;
    selectors[funcSelector]["topic"] = topic;
    selectors[funcSelector]["types"] = types;
    selectors[funcSelector]["typeNames"] = typeNames;
    fs.writeFileSync(path.join(__dirname, `selectors.json`), JSON.stringify(selectors, null, '    '));
}

const computeFunctionData = (funcInterface) => {
    const endIndex = funcInterface.indexOf('(');
    const funcName = funcInterface.substring(0, endIndex);
    const funcTypesCut = funcInterface.substring(endIndex + 1, funcInterface.length - 1);
    const args = funcTypesCut.split(',');
    let types = [];
    let typeNames = [];
    for (let i = 0; i < args.length; i++) {
        const a = args[i].split(" ");
        types.push(a[0] === "uint" ? "uint256" : a[0]);
        typeNames.push(a[1] === "memory" || a[1] === "calldata" ? a[2] : a[1]);
    }
    const cleanFuncInterface = funcName + '(' + types.join(',') + ')';

    console.log(cleanFuncInterface);
    const funcSelector = (ethers.utils.keccak256(ethers.utils.toUtf8Bytes(cleanFuncInterface))).substring(0,10);
    return [funcSelector, funcName, types, typeNames];
}

const decodeArguments = (rawInput) => {
    const c = readJson('selectors.json');
    const funcSelector = rawInput.substring(0,10);
    const funcName = c[funcSelector]["name"];
    const types = c[funcSelector]["types"];
    console.log(`Action Called: ${funcName}`);
    console.log(`Arguments:`);
    const calldata = '0x' + rawInput.substring(10);
    const decoded = abiCoder.decode(types, calldata);
    for (let i = 0; i < decoded.length; i++) {
        console.log(` - ${c[funcSelector]["typeNames"][i]}: ${decoded[i]}`);
    }
}

const testDecode = () => {
    decodeArguments("0x8803dbee00000000000000000000000000000000000000000000000000000001004ccb00000000000000000000000000000000000000000000000000000000012a05f20000000000000000000000000000000000000000000000000000000000000000a00000000000000000000000005b38da6a701c568545dcfcb03fcb875f56beddc4000000000000000000000000000000000000000000000000000000006313493300000000000000000000000000000000000000000000000000000000000000020000000000000000000000009430801ebaf509ad49202aabc5f5bc6fd8a3daf8000000000000000000000000118a612880b8e3f9914b0d4bff702e3fbec91783");
}

testDecode();

module.exports = {
    readJson,
    storeSelectors,
    computeFunctionData,
    decodeArguments
}