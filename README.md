# query-lon-claimed

Subgraph for Tokenlon's MerkleRedeem contract events, collecting Claimed events and their related events on Ethereum mainnet blockchain.

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
