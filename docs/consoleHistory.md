
```
willywangkaa@wangyulis-MacBook-Pro myFirstSolidity % truffle migrate --network sepolia

Compiling your contracts...
===========================
> Everything is up to date, there is nothing to compile.


Migrations dry-run (simulation)
===============================
> Network name:    'sepolia-fork'
> Network id:      11155111
> Block gas limit: 30000000 (0x1c9c380)


1_deploy_WWKF.js
================

   Deploying 'SafeMath'
   --------------------
   > block number:        3296020
   > block timestamp:     1681578007
   > account:             0x29F4E2b19BEBc88F6BD3cf794D1F93af0D76B4E4
   > balance:             0.399819297499043752
   > gas used:            72281 (0x11a59)
   > gas price:           2.500000008 gwei
   > value sent:          0 ETH
   > total cost:          0.000180702500578248 ETH


   Deploying 'willywangkaaFirstContract'
   -------------------------------------
   > block number:        3296021
   > block timestamp:     1681578011
   > account:             0x29F4E2b19BEBc88F6BD3cf794D1F93af0D76B4E4
   > balance:             0.397660354992135136
   > gas used:            863577 (0xd2d59)
   > gas price:           2.500000008 gwei
   > value sent:          0 ETH
   > total cost:          0.002158942506908616 ETH

   -------------------------------------
   > Total cost:     0.002339645007486864 ETH

Summary
=======
> Total deployments:   2
> Final cost:          0.002339645007486864 ETH




Starting migrations...
======================
> Network name:    'sepolia'
> Network id:      11155111
> Block gas limit: 30000000 (0x1c9c380)


1_deploy_WWKF.js
================

   Deploying 'SafeMath'
   --------------------
   > transaction hash:    0x2db34c1dd6d0e9d5279962f8f6535b5726babaa0bfb60a8038bcc3678d20f937
   > Blocks: 2            Seconds: 17
   > contract address:    0x26Aa5e5F393AaA79083364FB559E9B0383F28a49
   > block number:        3296027
   > block timestamp:     1681578036
   > account:             0x29F4E2b19BEBc88F6BD3cf794D1F93af0D76B4E4
   > balance:             0.399819267498971363
   > gas used:            72293 (0x11a65)
   > gas price:           2.500000009 gwei
   > value sent:          0 ETH
   > total cost:          0.000180732500650637 ETH

   Pausing for 2 confirmations...

   -------------------------------
   > confirmation number: 1 (block: 3296028)
   > confirmation number: 2 (block: 3296029)

   Deploying 'willywangkaaFirstContract'
   -------------------------------------
   > transaction hash:    0xc8ba741daff2597b3b805dd093273d908f69ad601a639fa64a954ce3b00b176e
   > Blocks: 2            Seconds: 22
   > contract address:    0x03378DAa43739f2361FE67175aD6bF2666309748
   > block number:        3296031
   > block timestamp:     1681578084
   > account:             0x29F4E2b19BEBc88F6BD3cf794D1F93af0D76B4E4
   > balance:             0.397659724992060827
   > gas used:            863817 (0xd2e49)
   > gas price:           2.500000008 gwei
   > value sent:          0 ETH
   > total cost:          0.002159542506910536 ETH

   Pausing for 2 confirmations...

   -------------------------------
   > confirmation number: 1 (block: 3296032)
   > confirmation number: 2 (block: 3296033)
   > Saving artifacts
   -------------------------------------
   > Total cost:     0.002340275007561173 ETH

Summary
=======
> Total deployments:   2
> Final cost:          0.002340275007561173 ETH
```