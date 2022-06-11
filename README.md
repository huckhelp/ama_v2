# MrWeb Finance Token Smart Contracts

Sections below describes the following : 
1) The purpose of contract
2) How to deploy
3) Scope of Audit

## Table of Content

- [Overview](#overview)
- [How to deploy](#deployment)
- [Audit scope](#scope)

## Overview

| Contract Name | File and Location | Description |
|--|--| --|
|MFTERC20| [`MFTERC20.sol`](./contracts/MFTERC20.sol) | Upgradeable ERC20 token with preminted tokens, burn, pause and snapshot functionalities. |

## Deployment

Use `deploy.js` to deploy the token smart contract

## Links

- [Openzeppelin Defender](https://defender.openzeppelin.com/)
- [ABI of Token](./artifacts/contracts/MFTERC20.sol/MFTERC20.json)
- [Testnet Token Contract - 0x2B9244F33D42033B9309a7C394738D9A70B7eb5c](https://testnet.bscscan.com/address/0x89438588d0663967f280cdfa362b0b074ce67398)

## Audit Scope
Solidity files that need auditing
|--|
[`MFTERC20.sol`](./contracts/ERC20.sol) |
