import { useConnect } from "wagmi";

import { metamaskConnector } from "../../../config";

const useMetamaskConnection = () =>
	useConnect({ connector: metamaskConnector });

export { useMetamaskConnection };
