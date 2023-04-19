
const SafeMath = artifacts.require("SafeMath");
const WWKF = artifacts.require("willywangkaaFirstContract");

module.exports = function (deployer, network) {
    deployer.deploy(SafeMath);
    deployer.deploy(WWKF, 1000000000, { overwrite: false });
};