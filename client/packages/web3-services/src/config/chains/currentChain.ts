import { chain } from "wagmi";

const isStaging = true;

const currentChain = isStaging ? chain.goerli : chain.mainnet;

export { currentChain };
