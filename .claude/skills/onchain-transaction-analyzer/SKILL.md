---
name: onchain-transaction-analyzer
description: "Analyzes blockchain transactions by tracing wallets, contracts, and token movements and providing simple, understandable explanations. Trigger on: 'analyze this transaction', 'trace this wallet', 'what happened in this tx', 'explain this onchain activity', 'decode this transaction', 'wallet analysis', 'token flow for [address]', 'what did this contract do', 'trace the funds', or when the user provides a transaction hash, wallet address, or contract address and wants to understand the activity. Do NOT use for writing about crypto compliance (use floronchain-writer), AML policy documents (use mlro-aml-compliance), or general research (use deep-research-synthesizer)."
---

# Onchain Transaction Analyzer

## Purpose

Decode blockchain transactions, wallet activity, and contract interactions into clear, human-readable explanations. Turn raw onchain data into something anyone can understand.

## When to Use

- Tracing funds through wallets and contracts
- Understanding what a specific transaction did
- Mapping token movements and interactions
- Explaining smart contract behaviour in plain language
- Compliance-relevant transaction analysis (pair with mlro-aml-compliance for formal reporting)

## Workflow

### Step 1: Identify the chain and input
Determine the blockchain (Ethereum, Polygon, Solana, etc.) and what the user has provided — transaction hash, wallet address, contract address, or a set of addresses to trace.

### Step 2: Trace the activity
- Map the flow: who sent what to whom
- Identify contract interactions (swaps, bridges, mints, approvals, transfers)
- Note token types and amounts
- Track the chain of custody if tracing funds

### Step 3: Identify key actors
- Label known addresses (exchanges, protocols, bridges, mixers)
- Flag unknown intermediary wallets
- Note patterns: round-number transfers, rapid movement, layering behaviour

### Step 4: Explain in plain language

**Output format:**

```
TRANSACTION SUMMARY
One sentence: what happened, in plain English.

STEP-BY-STEP BREAKDOWN
Numbered list of each action in the transaction/trace:
1. [Actor] sent [amount] [token] to [recipient] via [method]
2. [Contract] swapped [X] for [Y] on [protocol]
...

KEY ACTORS
- [Address]: [Label or role — e.g., "Uniswap V3 Router", "Unknown wallet", "Binance hot wallet"]

OBSERVATIONS
Notable patterns, red flags, or unusual behaviour.

SUMMARY
What this activity likely represents, in one paragraph.
```

### Step 5: Flag compliance-relevant patterns
If the analysis reveals patterns relevant to AML (layering, structuring, mixer use, rapid cross-chain bridging), note them clearly but without accusation — frame as "patterns consistent with [typology]" not "this is money laundering."

## Rules

1. Always specify the chain and block explorer link where applicable.
2. Label known addresses using public label databases where available.
3. Never accuse — describe patterns, not intent.
4. If the data is ambiguous, say so. Don't fill gaps with speculation.
5. Use plain language. "Swapped 2 ETH for 4,000 USDC on Uniswap" not "Executed a swap function call on router contract 0x..."
6. For multi-hop traces, present chronologically.

## What This Skill Does NOT Do

- Write compliance articles about crypto → use `floronchain-writer`
- Draft AML case notes → use `mlro-decision-note`
- Create AML policies → use `mlro-aml-compliance`
