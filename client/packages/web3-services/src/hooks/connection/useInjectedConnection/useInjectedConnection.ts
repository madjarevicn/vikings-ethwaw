import { useConnect } from "wagmi";

import { injectedConnector } from "../../../config";

const useInjectedConnection = () =>
	useConnect({ connector: injectedConnector });

export { useInjectedConnection };
