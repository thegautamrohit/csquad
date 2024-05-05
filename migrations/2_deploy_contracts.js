const CSquad = artifacts.require("CSquad");

module.exports = async function (deployer) {
  await deployer.deploy(CSquad);
};
