// novaSignal.ts
import React, { useMemo, useState } from "react";
import { OnchainKitProvider } from "@coinbase/onchainkit";
import { Wallet } from "@coinbase/onchainkit/wallet";
import { Connected } from "@coinbase/onchainkit/connected";
import { createPublicClient, http, formatEther, type Address } from "viem";
import { base, baseSepolia } from "viem/chains";

type NetworkKey = "base" | "baseSepolia";

const RPC = {
  base: "https://mainnet.base.org",
  baseSepolia: "https://sepolia.base.org",
};

const EXPLORER = {
  base: "https://basescan.org",
  baseSepolia: "https://sepolia.basescan.org",
};

const CHAIN_ID = {
  base: 8453,
  baseSepolia: 84532,
};

function isAddress(v: string): v is Address {
  return /^0x[a-fA-F0-9]{40}$/.test(v.trim());
}

export default function NovaSignal() {
  const [network, setNetwork] = useState<NetworkKey>("baseSepolia");
  const [queryAddress, setQueryAddress] = useState("");
  const [status, setStatus] = useState("Idle");
  const [rpcChainId, setRpcChainId] = useState<number | null>(null);
  const [block, setBlock] = useState<bigint | null>(null);
  const [balance, setBalance] = useState<bigint | null>(null);

  const chain = network === "base" ? base : baseSepolia;

  const client = useMemo(
    () =>
      createPublicClient({
        chain,
        transport: http(RPC[network]),
      }),
    [chain, network]
  );

  async function runSnapshot() {
    setStatus("Taking Base snapshot…");
    const [cid, bn] = await Promise.all([client.getChainId(), client.getBlockNumber()]);
    setRpcChainId(cid);
    setBlock(bn);

    if (isAddress(queryAddress)) {
      const bal = await client.getBalance({ address: queryAddress });
      setBalance(bal);
    } else {
      setBalance(null);
    }

    setStatus("Ready");
  }

  return (
    <OnchainKitProvider chain={chain}>
      <div style={{ maxWidth: 880, margin: "44px auto", fontFamily: "system-ui" }}>
        <h1>NovaSignal — Built for Base</h1>

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
          <label>
            Network:&nbsp;
            <select value={network} onChange={(e) => setNetwork(e.target.value as NetworkKey)}>
              <option value="baseSepolia">Base Sepolia (84532)</option>
              <option value="base">Base Mainnet (8453)</option>
            </select>
          </label>

          <button onClick={runSnapshot} style={{ padding: "6px 12px" }}>
            Run Snapshot
          </button>

          <span>
            Status:&nbsp;<strong>{status}</strong>
          </span>
        </div>

        <div style={{ marginTop: 14 }}>
          <Wallet />
          <Connected>
            <div style={{ marginTop: 10 }}>
              <div style={{ marginBottom: 6 }}>Address to query (native balance):</div>
              <input
                value={queryAddress}
                onChange={(e) => setQueryAddress(e.target.value)}
                placeholder="0x…"
                style={{ width: "100%", padding: 8 }}
              />
            </div>
          </Connected>
        </div>

        <div style={{ marginTop: 18, lineHeight: 1.65 }}>
          <div>Expected chainId: {CHAIN_ID[network]}</div>
          <div>RPC chainId: {rpcChainId ?? "—"}</div>
          <div>Latest block: {block?.toString() ?? "—"}</div>
          <div>Native balance: {balance !== null ? `${formatEther(balance)} ETH` : "—"}</div>
          <div>Explorer: {EXPLORER[network]}</div>
        </div>
      </div>
    </OnchainKitProvider>
  );
}
