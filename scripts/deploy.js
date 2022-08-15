async function main() {
  const NonFungibleToken = await ethers.getContractFactory("NonFungibleToken");
  const MyNft = await NonFungibleToken.deploy();

  await MyNft.deployed();

  console.log("MyNFT has been deployed to:", MyNft.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
