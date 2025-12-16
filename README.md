# NovaSignal

Built for Base

NovaSignal is a minimal Base-facing repository that pairs OnchainKit wallet UX with Viem-based RPC reads. It is intended as a small “signal check” for Base infrastructure: connectivity, chainId correctness, and basic balance/block reads.

## Core Idea

- Keep the surface area small
- Use official Coinbase tooling where possible
- Make Base visibility explicit (chainId 8453 / 84532 + Basescan references)

## Networks

Base Sepolia  
chainId (decimal): 84532  
Explorer: https://sepolia.basescan.org  
RPC: https://sepolia.base.org  

Base Mainnet  
chainId (decimal): 8453  
Explorer: https://basescan.org  
RPC: https://mainnet.base.org  

## What Runs

Primary file: app/novaSignal.ts

When executed, the app:
- Boots an OnchainKitProvider against the selected Base chain
- Exposes wallet connection via OnchainKit Wallet
- Uses Viem to fetch:
  - RPC chainId
  - latest block number
  - native ETH balance for an entered address
- Shows explorer context via Basescan URLs

## Layout

app/  
- novaSignal.ts  
  React component: OnchainKit wallet UI + Base reads.

Recommended supporting files:
- package.json
- tsconfig.json
- index.html / main.tsx
- .env (optional)

## Libraries

OnchainKit  
https://github.com/coinbase/onchainkit  

Viem  
RPC client for Base reads

## Installation / Running

Requirements:
- Node.js 18+
- Browser environment with wallet support

Install dependencies and run with a standard React/Vite or Next.js dev server.

Optional environment variables:
- VITE_BASE_RPC_URL
- VITE_BASE_SEPOLIA_RPC_URL

## Base Mainnet Deployment

Deployed on Base Mainnet

Network: Base Mainnet  
chainId (decimal): 8453  
Explorer: https://basescan.org  

Deployed contract address:  
your_adress  

Basescan deployment and verification links:
Contract address: https://basescan.org/address/your_adress  
Contract verification (source code): https://basescan.org/address/your_adress#code  

## Author

GitHub: https://github.com/your-handle  
Public contact (email): your-name@proton.me  
Public contact (X): https://x.com/your-handle  

## License

MIT License

## References

createBaseAccount reference:  
https://docs.base.org/base-account/reference/core/createBaseAccount?utm_source=chatgpt.com

Account Abstraction on Base:  
https://docs.base.org/base-chain/tools/account-abstraction?utm_source=chatgpt.com

OnchainKit repository:  
https://github.com/coinbase/onchainkit

## Testnet Deployment (Base Sepolia)
A smart contract has been deployed to the Base Sepolia test network for validation and testing purposes.

Network: Base Sepolia  
chainId (decimal): 84532  
Explorer: https://sepolia.basescan.org  
Deployed contract #1 address: your_adress  
Deployed contract #2 address: your_adress  
Basescan deployment and verification links:  
Contract #1 address: https://sepolia.basescan.org/address/your_adress  
Contract #2 address: https://sepolia.basescan.org/address/your_adress  
Contract #1 verification (source code): https://sepolia.basescan.org/your_adress/0#code  
Contract #2 verification (source code): https://sepolia.basescan.org/your_adress/0#code  
This deployment is used to validate Base-compatible tooling, account abstraction flows, and onchain read operations in a test environment prior to mainnet usage.
