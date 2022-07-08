const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("ChainId", () => {

    it("should return chain id 1 (first function)", async () => {
        const ChainId = await ethers.getContractFactory("ChainId");
        const contract = await ChainId.deploy();
        
        const chainId = await contract.getChainId();
        console.log("chainId -->", chainId.toString());
        expect(chainId).to.equal(1);
    });

    it("should return chain id 1 (second function)", async () => {
        const ChainId = await ethers.getContractFactory("ChainId");
        const contract = await ChainId.deploy();
        
        const chainId = await contract.getChainId2();
        console.log("chainId -->", chainId.toString());
        expect(chainId).to.equal(1);
    });
});