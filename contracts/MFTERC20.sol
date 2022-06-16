// SPDX-License-Identifier: MIT

pragma solidity 0.8.2;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Snapshot.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./TokensRecoverable.sol";

contract MFTERC20 is
    ERC20,
    ERC20Burnable,
    ERC20Snapshot,
    Ownable,
    TokensRecoverable
{
    constructor() ERC20("Mrweb Finance", "AMA") Ownable() {
        _mint(msg.sender, 100000000 ether);
    }

    function snapshot() public onlyOwner {
        _snapshot();
    }

    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 amount
    ) internal override(ERC20, ERC20Snapshot) {
        super._beforeTokenTransfer(from, to, amount);
    }
}
