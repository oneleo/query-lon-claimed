# query-lon-claimed

Subgraph for Tokenlon's MerkleRedeem contract events, collecting Claimed events and their related events on Ethereum mainnet blockchain.

## Description

- This Subgraph stores information about the Claimed events of the MerkleRedeem ([0x0000000006a0403952389B70d8EE4E45479023db](https://etherscan.io/address/0x0000000006a0403952389B70d8EE4E45479023db)) contract, including:
  - `ClaimedPerPeriod` entity stores recipient and balance data per period and recipient address, using u64.MAX_VALUE if a period is unknown.
  - `TotalClaimed` entity stores Claimed event occurrences, period count, and cumulative balance claimed.
  - `TotalClaimedPerFrom` entity stores claimed period count and total balance per 'from' address.
  - `TotalClaimedPerRecipient` entity stores claimed period count and total balance per 'recipient' address.
  - `TotalClaimedPerPeriod` entity stores total balance per 'period'.

## Preparation

```shell
% npm install --global npm yarn@1 @graphprotocol/graph-cli
```

## Building

```shell
% yarn install
% yarn run codegen
% yarn run build
```

## Testing

```shell
% yarn run test
```

## Deployment

```shell
% graph auth --studio <DEPLOY_KEY>
% graph deploy --studio <SUBGRAPH_SLUG>
```
