# My First Solidity

Practice the naive development of Solidity using Truffle.

Checkout [console history](./docs/consoleHistory.md) to obtain comprehensive information.

- [Transection of token creation](https://sepolia.etherscan.io/tx/0xc8ba741daff2597b3b805dd093273d908f69ad601a639fa64a954ce3b00b176e)
- [Address of WWKF token](https://sepolia.etherscan.io/address/0x03378daa43739f2361fe67175ad6bf2666309748)
- [Token history](https://sepolia.etherscan.io/token/0x03378daa43739f2361fe67175ad6bf2666309748)

## Reviews

### Applied commands for initilization

```bash
npm install -g node-gyp
npm install -g truffle

willywangkaa@wangyulis-MacBook-Pro ~ % truffle version
Truffle v5.8.2 (core: 5.8.2)
Ganache v7.7.7
Solidity v0.5.16 (solc-js)
Node v18.16.0
Web3.js v1.8.2
```

```bash
truffle init
truffle create contract willywangkaaFirstContract
npm init
npm i @truffle/hdwallet-provider --save
npm i dotenv --save
```

### Migrate the contract to Sepolia

Config the networks to **Sepolia**. (`truffle-configs.js`)
```bash
truffle compile
truffle migrate --network sepolia
```

### Generate contract bindings in golang

Add the following command at the end of `~/.zprofile` (MacOS environment):
```bash
export GOPATH=$HOME/go
export PATH=$PATH:$GOPATH/bin
```

Outside this workspace to keep clean, do the following step to obtain `abigen`:
```bash
# 📌 https://www.metachris.com/2021/05/creating-go-bindings-for-ethereum-smart-contracts/#the-abigen-tool
# 📌 Download go-ethereum, build and install the devtools (which includes abigen)
git clone https://github.com/ethereum/go-ethereum.git
cd go-ethereum
make devtools

# 📌 Run abigen and print the version
abigen -version
abigen -help
```

Back to this workspace, run the following command to generate `.abi` and the corresponding `.go` (the binding). 😊
```bash
# 📌 https://www.npmjs.com/package/@chainsafe/truffle-plugin-abigen
# 📌 https://www.metachris.com/2021/05/creating-go-bindings-for-ethereum-smart-contracts/#smart-contracts-with-truffle
mkdir ./abigenBindings
mkdir ./abigenBindings/binding
truffle run abigen
abigen --abi=abigenBindings/abi/willywangkaaFirstContract.abi --pkg=wwkf --out=abigenBindings/binding/wwkf.go
```

# Reference

- ✅ [How to Create an ERC20 Token](https://www.toptal.com/ethereum/create-erc20-token-tutorial)
  - [ERC20 detail](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-20.md)
  - 📖 [Other examples](https://solidity-by-example.org/app/erc20/)
  - 📖 [Library for secure smart contract development](https://github.com/OpenZeppelin/openzeppelin-contracts)
- 🫡 [Artifacts are't generated when Truffle compiling](https://ethereum.stackexchange.com/questions/90290/truffle-artifacts-are-not-being-generated-when-compiling)
- 📖 [Sepolia testnet](https://www.alchemy.com/overviews/sepolia-testnet)
  - [Etherscan - Sepolia](https://sepolia.etherscan.io/)
- Truffle (`npm i @truffle/hdwallet-provider`)
  - [Installation](https://trufflesuite.com/docs/truffle/how-to/install/)
  - [VScode](https://trufflesuite.com/docs/vscode-ext/quickstart/)
  - 📖 [hdwallet-provider](https://github.com/trufflesuite/truffle-hdwallet-provider/blob/master/README.md) ([1️⃣](https://ethereum.stackexchange.com/questions/32145/how-to-specify-which-wallet-address-to-deploy-contract-with#:~:text=Here%27s%20an%20example%20where%20the%20mnemonic%20is%20read%20from%20an%20environment%20variable%20and%20the%20provider%20is%20set%20to%20rinkeby%20testnet%3A))
