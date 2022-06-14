# MrWeb Finance Token Smart Contracts

Sections below describes the following : 
1) The purpose of contract
2) How to deploy
3) Scope of Audit

## Table of Content

- [Overview](#overview)
- [How to deploy](#deployment)
- [Audit scope](#audit-scope)

## Overview

| Contract Name | File and Location | Description |
|--|--| --|
|MFTERC20| [`MFTERC20.sol`](./contracts/MFTERC20.sol) | ERC20 token with preminted tokens, burn, pause and snapshot functionalities. Cannot be upgraded and no functionality can be changed once deployed.|
|MFTERC20Upg| [`MFTERC20Upg.sol`](./contracts/MFTERC20Upg.sol) | Upgradeable ERC20 token with preminted tokens, burn, pause and snapshot functionalities. |

## Deployment

Use `deploy.js` to deploy the MFTERC20 token smart contract
Use `deployUpg.js` to deploy the MFTERC20Upg token smart contract

## Links

- [MFTERC20 (non upgradeable) Testnet Token Contract -  0x941c167Accb3D4C50C275183B96c7e7f47D67AB3 ](https://testnet.bscscan.com/address/0x941c167Accb3D4C50C275183B96c7e7f47D67AB3)
- [ABI of Token](./artifacts/contracts/MFTERC20.sol/MFTERC20.json)
- [Openzeppelin Defender](https://defender.openzeppelin.com/)
- [MFTERC20 Upgradeable Testnet Token Contract - 0x2B9244F33D42033B9309a7C394738D9A70B7eb5c](https://testnet.bscscan.com/address/0x2b9244f33d42033b9309a7c394738d9a70b7eb5c)

## Audit-Scope
Solidity files that need auditing
|--|--|--|
[`MFTERC20.sol`](./contracts/MFTERC20.sol) | Non Upgradeable MFTERC20 token contract is to be deployed on BSC chain. |
