import type { Address } from "viem";
import { forumAbi } from "./generated";

const deployedAddress = process.env
	.NEXT_PUBLIC_DEPLOYED_CONTRACT_ADDRESS as Address;

// Type inference correctly
// Ok
const ABI = forumAbi;
export { ABI, deployedAddress };
