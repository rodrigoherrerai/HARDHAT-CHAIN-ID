//SPDX-License-Identifier: MIT
pragma solidity >= 0.8.0;

import "hardhat/console.sol";

contract ChainId {
    function getChainId() external view returns (uint256 chainId) {
        assembly {
            chainId := chainid()
        }
    }

    function getChainId2() external view returns (uint256) {
        console.log("chain id from the contract: ", block.chainid);
        return block.chainid;
    }
     
} 