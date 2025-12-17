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

## Author

GitHub: https://github.com/nativetams  
Public contact (email): native_tams_0z@icloud.com  
Public contact (X): https://x.com/taisiaaivanova  

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

As part of pre-production validation, one or more contracts may be deployed to the Base Sepolia test network to confirm correct behavior and tooling compatibility.

Network: Base Sepolia  
chainId (decimal): 84532  
Explorer: https://sepolia.basescan.org  

Contract "storage" address:  
0xb98e742d1724de87632001c2ea6463599ad173ee  

Deployment and verification:
- https://sepolia.basescan.org/address/0xb98e742d1724de87632001c2ea6463599ad173ee  
- https://sepolia.basescan.org/0xb98e742d1724de87632001c2ea6463599ad173ee/0#code  

Contract "arrays" address:  
0xe63fc8a3bd2806bc67942341d4d2bb3280733558  

Deployment and verification:
- https://sepolia.basescan.org/address/0xe63fc8a3bd2806bc67942341d4d2bb3280733558  
- https://sepolia.basescan.org/0xe63fc8a3bd2806bc67942341d4d2bb3280733558/0#code  

These testnet deployments provide a controlled environment for validating Base tooling, account abstraction flows, and read-only onchain interactions prior to Base Mainnet usage.
