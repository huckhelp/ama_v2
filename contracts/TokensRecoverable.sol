// SPDX-License-Identifier: MIT

pragma solidity 0.8.2;

import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC1155/IERC1155.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";

contract TokensRecoverable is Ownable {
    using SafeERC20 for IERC20;

    function recoverTokens(IERC20 token) public onlyOwner {
        require(canRecoverTokens(token), "Cannot recover this token");
        token.safeTransfer(msg.sender, token.balanceOf(address(this)));
    }

    function recoverETH(uint256 amount) public onlyOwner {
        payable(msg.sender).transfer(amount);
    }

    function recoverERC1155(
        IERC1155 token,
        uint256 tokenId,
        uint256 amount
    ) public onlyOwner {
        token.safeTransferFrom(
            address(this),
            msg.sender,
            tokenId,
            amount,
            "0x"
        );
    }

    function recoverERC721(IERC721 token, uint256 tokenId) public onlyOwner {
        token.safeTransferFrom(address(this), msg.sender, tokenId);
    }

    function canRecoverTokens(IERC20 token)
        internal
        view
        virtual
        returns (bool)
    {
        return address(token) != address(this);
    }
}
