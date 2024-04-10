export namespace TransactionInputSample {
  // Refer: https://etherscan.io/tx/0x126017fe53cb762222313c4fe92de096544ed325d32b472f9c302cd992e628f2
  // Cmd: cast calldata-decode "claimPeriod(address,uint256,uint256,bytes32[])" "${transactionInput}"
  // Result:
  //   |                 recipient                  | period |        balance        |
  //   | :----------------------------------------: | :----: | :-------------------: |
  //   | 0x90e5e30d3A891693d6822e06b52562Dd4dBacC83 |   0    | 570759569000000000000 |
  export const claimPeriodInput: string =
    "0x8dbfd5e800000000000000000000000090e5e30d3a891693d6822e06b52562dd4dbacc83000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001ef0e153fde00e100000000000000000000000000000000000000000000000000000000000000000800000000000000000000000000000000000000000000000000000000000000013410749d4d1c1126ad8dc459d1ccf1ee40017036511f81fddb0f3e02c35d7cd60d3b4489831eb87c1a1644cf1bdbff685dce85a50df7cd3daa0cdbde9b1e164a29f4af8f41a19580999867d417f42506d3dec72577b8d0202704b8522ac1b93f50ad867d40e5acd890c136b03334a7bacd79e84a69dbf0f8ccf2011045a8c50b84faf10c2555d5b3f04f22d9c06c1ed10f9bd7ca5795a95463d473a8d4e8bcd6746e85f7e5e688ffd50f6106db8f0891831f7b2b952a8d79f8d172106ead63fb07d60e16595d5d1eea5a8c41940f6658fffea1ad46aef3a7c24b4666d9f0938520677784c34e60221e86c4ddafaf316fb8fe8b90412f1165e6e1c6e7c3cdbc2b94554589fc8b4e5c74daf51648d032b1855fdd88fc7b5e329ac11a4835600fb7da497bc3cfb7e6606f464b93b01a54748c07d62d81436210fdc723f1f7278fc191b62e41d26203ae1a413086d4b92cd5f7941e87e811a6a31e7e76bd341c7a8ee36831029ce5be0064b6488e337ff2f30cf9774ceebe904cb8b9a9aa4f0a492bb5f0ff28ad11af57e6e9dd76529fa6da1b8a33c1f3d4461117ba33c9e358b2fb8d86be693dbfd5e331c594317d60e63990d041e0323df453513421a3852f406b92bb78501010a85da7ad080af9da3614ae445e99717a526d9b975ed35a3d3d63f48fc0eb72563838064bcf2f5b5bf5214d5ee99995d2e8540803e9ca9587531652a547acaeac531fc4f2f44caaab68da04734a0c0daaeca1c646063ec6d2b056237922012f937af7e2abdde29328b3b26207e83557b5ec493ff86acb06da8d1f82e43f3260bf0c3bd1be8573379e88b5692eca73ffab33d94ed843ad437fd4835"

  // Refer: https://etherscan.io/tx/0x8b510abb60acf348aff1b612764160c24b74274a1bb651d615eb914fd63fddf3
  // Cmd: cast calldata-decode "claimPeriods(address,(uint256,uint256,bytes32[])[])" "${transactionInput}"
  // Result:
  //   |                 recipient                  | period |        balance        |
  //   | :----------------------------------------: | :----: | :-------------------: |
  //   | 0x32BF0Ea129625Be1EF65072eb0115CB91F4182Ba |   0    | 20000000000000000000 |
  export const claimPeriodsSingleInput: string =
    "0xb03d8c2f00000000000000000000000032bf0ea129625be1ef65072eb0115cb91f4182ba0000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001158e460913d00000000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000000136684a2eb61af4e61ad03f15cd4ac2e35706d247c74ee450ed6e75cd0a47a87a50571901faac1e922da35c04fa2d838b74007b4d9c6dad24f61b189bda9a1631c29877c3e152fd5ce85f4b1b50123b2b5e765a0a61422ea0d1303948a7a772e7f001ad033d360781f1455c5dba184e5b71b22f032dd8c37cfb71e8e0eb8db7306af5bb939c9876821f30f94a22a599570020ea70a05a0f8353cd3688cbaec631102041541c001312b33000aa0780ed1e817db55a39ad56d5aed617e4f6b3866458cc109722dd520077b5cabda9b9f870d0f36d6365dafa01e0cdfee348ffd0e69b8ec32bb1bb6141e5dfcab12c480959de5f4913069101734d8a2bdad38ce5872ef87e9709b4826ed710956c86a89fb15c560a27e7c6b631321c54511261c3bac04759b546e924d5afdadce3b0f6c8bcd661c72d092ce4b0887a43133f15bf366f005f7545d6950c056504433e059e5debba056527ed6059f6036f7a375015efe4d7f679a65de9b17f4520008e0a7412e0a4a5b2af96fb18ff4aa60ab4f774bd28111c47cc4720db21c9c5ca99c9fdc37826e535f7ad9d0a5d7e6026d2a31a0d6a6538751d2eba3ace306122ab34d06bc49e5331518b17e0a92a8b9b43e4979f966b47695c09e2a8296a28abb2421bb6682cb7803488e2a3da761898fbaef1916c6479d589e82f8f29a935868125e2231318272dfadc67d9ca13bf331b0dd2be633d08bc3574ca73a990ecacc502bf177000b6c3f42e6f4fd2b15a123ac5ce288d99933749cb5ce5dc1750bb865192fba88c0b61701d0f18ea6039265c1da43672e43f3260bf0c3bd1be8573379e88b5692eca73ffab33d94ed843ad437fd4835"

  // Refer: https://etherscan.io/tx/0xa4262ddcb02b29be1da9db6c4e5ad33d3a881f9bce077eaebea6f85b617f12b4
  // Cmd: cast calldata-decode "claimPeriods(address,(uint256,uint256,bytes32[])[])" "${transactionInput}"
  // Result:
  // |                 recipient                  | period |        balance        |
  // | :----------------------------------------: | :----: | :-------------------: |
  // | 0x2250dd2642F60730f5FDBfdd978626E61EBe864e |   13   | 55178538000000000000  |
  // | 0x2250dd2642F60730f5FDBfdd978626E61EBe864e |   14   | 60676810000000000000  |
  // | 0x2250dd2642F60730f5FDBfdd978626E61EBe864e |   15   | 86257147000000000000  |
  // | 0x2250dd2642F60730f5FDBfdd978626E61EBe864e |   16   | 139978163000000000000 |
  // | 0x2250dd2642F60730f5FDBfdd978626E61EBe864e |   17   |  9925028000000000000  |
  // | 0x2250dd2642F60730f5FDBfdd978626E61EBe864e |   18   | 70154602000000000000  |
  // | 0x2250dd2642F60730f5FDBfdd978626E61EBe864e |   19   |  4276680000000000000  |
  // | 0x2250dd2642F60730f5FDBfdd978626E61EBe864e |   20   |  1677993000000000000  |
  // | 0x2250dd2642F60730f5FDBfdd978626E61EBe864e |   21   |  1252679000000000000  |
  // | 0x2250dd2642F60730f5FDBfdd978626E61EBe864e |   22   |  2247909000000000000  |
  // | 0x2250dd2642F60730f5FDBfdd978626E61EBe864e |   23   |  2316868000000000000  |
  // | 0x2250dd2642F60730f5FDBfdd978626E61EBe864e |   25   | 130630468000000000000 |
  // |                                            |        |                       |
  // |                   total                    |        | 564572885000000000000 |
  export const claimPeriodsMultipleInput: string =
    "0xb03d8c2f0000000000000000000000002250dd2642f60730f5fdbfdd978626e61ebe864e0000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000000c000000000000000000000000000000000000000000000000000000000000018000000000000000000000000000000000000000000000000000000000000003a000000000000000000000000000000000000000000000000000000000000005c000000000000000000000000000000000000000000000000000000000000007c000000000000000000000000000000000000000000000000000000000000009e00000000000000000000000000000000000000000000000000000000000000be00000000000000000000000000000000000000000000000000000000000000e00000000000000000000000000000000000000000000000000000000000000102000000000000000000000000000000000000000000000000000000000000012400000000000000000000000000000000000000000000000000000000000001460000000000000000000000000000000000000000000000000000000000000168000000000000000000000000000000000000000000000000000000000000018a0000000000000000000000000000000000000000000000000000000000000001900000000000000000000000000000000000000000000000714dca6893f0840000000000000000000000000000000000000000000000000000000000000000060000000000000000000000000000000000000000000000000000000000000000db5f55f254e2a6b5af055647956257ef676920e437b2ff9dfe51716d04beb63a8f8c8c6b732a30ed1d197fffb9e81595d8f6dfcbd071cd6dc449e7fd8e9917f04c5877fb52e2ac5a70dc889cc9f20266fd0bef1399656e62bb1786b248b1a4383ef99b5384e8165e743c4f80c14d3d4d503af6b9eff43a3069cf120f18e329191f583894ea82b6f6437f36a9bc0c6cf3cf910e66ade453ff8296a74944941d55785cd13e8e54fe07a558a58350bc9dcf11c0bf69d36ec932f662c99d031c6b80309252e9cb27be4c110e63faf4b261ea4c9d589f783af4b27b9a47bb81896aa1706d0ee3d240fbf7d0f2306f0312300c540af4d909bac5c86850d50b187b51b3b4115c6d566cf247bb99776d1ff673d5df011bfdf065cbb8bc61ab904d8da60d9f0b991f2b23eeb8ba566e34d67efd7ad5f6b5374822fa71965e97fb4cd4f80a0cbc998f5b72f21957918230e5dbb524a520475ac81be7bb9dda73c532115548f4c68892af6fcc3a8664ef138e8cc427c583f430743663c6698fb2b3225ab7b61c5730adf8bf1e20eb20348e95e7d5aa5b514b937a772e672533734ce2b33f6ac000000000000000000000000000000000000000000000000000000000000001700000000000000000000000000000000000000000000000020272b2bb37840000000000000000000000000000000000000000000000000000000000000000060000000000000000000000000000000000000000000000000000000000000000d0ebc09530ee910fe7fb55127753c1f04a05f019ba7a3c7d76e003bd88d4255df9bd04bd671639218433b87f85fe65fd250d101e2549a4d7a24420f4402ee405a3fae3e210c06d231f575acf798c1b4daf606fd3df0085fe8ba7c27ec24fd529753c363f9678ca3a0432068dc0b5fe6d904f71ff3d07ce33f1d2d765d99cd165b09522ed3027d0bd21559c8aaa26cead6c0971528b992e08e5b4389b5f42df8f5b9194b617b0fb535d80da6d494bace6b5f0b145fa7e452e8443e04727e2cd2e752583cb26d618caae1f0b9d9412db9df1dc6e3d6687a75ff1c5c30f8b9e10a1bc5da79340f6f3fdd978990964f9582d21e0094ed5956878436ac417da869165237b17b71131744fa8f140205e897202c51c81aa9f91154df3fe6f1c27719072e745fbc5dd46b88b0444eab7ed79f920fdbcb88259f9ebb5968705c61efbbc26b9ea24af9af2fdc8d88b2f87c2877b67da42cb951d8ec147fce9408b7ae55e1dcd0bed12227ceda1fa917551979fd490f3bf633924f9b1757263ba9dce98e1ea43754d2004f3e21a02b247078e4fd2f6ffa9b3174288dddf5bfaa1fde0901d27300000000000000000000000000000000000000000000000000000000000000160000000000000000000000000000000000000000000000001f322d53586750000000000000000000000000000000000000000000000000000000000000000060000000000000000000000000000000000000000000000000000000000000000c6a8e47bdd64acd79097fe7061c57b831c81203aff682754e5a5332e47b5ff932620dd206b8f0956a7b07cb0c5e60b8ec0bc4118701ba360d11a1fcc3cc5961b9bc01bdd83864a55a615a84745b3cf45c3e5a083c3173da58c815a977d43ab82d9ea656b814cdab1481141f5d925336fc085282a378b9cdb62709379f8d26984aa7372a3e9e6b4b3d26032e5e3704b9efc5163920e7bfc638d5ebe3854fa87a2f510ceadd70ad22dfc14eeb95d1cbf82e327ea1ad3c983d5b1c6f66669052198d1b6d6edffe5beb30b1b3af0bf146772afe0dd3bc42feff9533175a81be481bef8cfa38942b4c81669a15aa1e3a90e2cff4b7f9053be64a67f1d26ca2ee5dd6b1c57048b38178f8809efa44f01749d8d2e33f40dc8b31952fd45eff0872e1059288aea13dbc5b78cb406964cdfa1c71e8809306118c5ef4a5db7ce4884b25c05ba637d02dc02f90a97be409a4b0fa6560b148cb4cd2014ab679584d5958c1cd79f8e8e32ad64ad28905b21c674792606523387ad3c940561c8e756e9085e11a3a0000000000000000000000000000000000000000000000000000000000000015000000000000000000000000000000000000000000000000116268e9dc9770000000000000000000000000000000000000000000000000000000000000000060000000000000000000000000000000000000000000000000000000000000000d9fbd68313fbc3ee5d5617338dc2d43b990773fde55fc752fc8ee9216778131dd89f3370afac94932feeb42118987105f12c8c520f8298df7cff41d11ed744683579e040a4b910b5979e299d72f7124673a4579d8405789b096bf5301165a35cac46d9012062f31d3c2fef187ff9a3ea3c98bb30866ee9b25e4370ecd72bd198d80390983dc7aaff4291a6b2a2be112c09e4db3a91f663a62845b443bd3d78c03ece7315eafe66db6687db437139cd7b191cac206b49170d87e0e6b673f7e0c67763a50cffdfb5f4436f3190c95d7c7aa2fca34cbb6b1c3cfb9191e766c06a1e9d7c612b665ea961f14d17f9a7181841ee4bbab1eb3260514dbfd97902fa5473693ba750e207452766391dc22fc2dcef3e27a739d43bae5a67c2ec7d91f19f8a182dc855503bf547176d7af543e37d9f19be431409947b07ce8d64c9265526f3e12e9a98035c7abff4270cf384f9ab88d8ce4c469ac139d76d6928c6901f7b93b5d60c82489c2dbca3af0bae4dbc158b973f1db3739cfa89f082ffed3f5822706dbaee8d078343c68c5a30b09ffdf08d3388158055bcdd58af2a7abe9ac34192e000000000000000000000000000000000000000000000000000000000000001400000000000000000000000000000000000000000000000017496dbe3c9790000000000000000000000000000000000000000000000000000000000000000060000000000000000000000000000000000000000000000000000000000000000c38c878c6f4b3f513276c01fc2c96b72f64cc05516eaf11afdb4a19e5bfbe968cec76dcbec40a9d05f2448d323ccbea59b5c5ba84c39ff253d3335f1ac94363aeda5dec10542ee6ea468f8ef9598b3073a6d28c29bae4979d2c9d469a63672245b2bf45ce5cc436d9a88a19b4f5b5591dd178413e4973af4f217e7a67fad23deeba73cada00a9f03869f81be914f9a3f9fb58025aef426e95e2e77f5cbf68607c394e83d1e9503ae9d7df79ae293b9e15b687d439fd52d685c862c5afda7cac77b5616542a3105dc0fcb78f2f37dc3c6920fa2afbd202161a604abfd86f233b2193167b2a28055b1ef3dc77ed4a04e2ebb270e101602f95a21a774bff38e00ee3d5409c83e0c852231bd805ec188341b758730311cf193670d1e7cb9bc44b69f9d8ac0d359dc797869f8775bdb8e45b655caffc976d78e9f8a896dc453edf1b5b2ec1b84db5a485119845be9dbd4a29f6fc2620379d9b49a0eafdd6f962386e05892126efb876f197cfbb9063c02b14d59d49e41de31042635607175a2b5112df00000000000000000000000000000000000000000000000000000000000000130000000000000000000000000000000000000000000000003b59d1cd1a0480000000000000000000000000000000000000000000000000000000000000000060000000000000000000000000000000000000000000000000000000000000000dd3a6499fc9e016a4686372525b921e1b1aab75408cfaf8d86463830d1b9afabdae8599aa374161496a6560f669a3c28a9bea46965ccdf0d2e6ec740048f065630b6f8c0b549207bb9889063152eba41b6d7607b106595e30873c5576e84b98025423b886dc814fa19931c25a43f78dc755244a34cad512c35c4ed2cc02a3993997a86a7e8a95f81b0e4b8ae64b7332fc04b789a58b093dc04a84836063cf9bb37a77289184a5715bbecdc04bbdb7e56f62de1c180da8730ac72ca20c3a820622d89b885625fa1ec51c9eebcf76370bbfaf7df30da7ba039b5afc389e41bceef328e16b082ba37180175680d67a4099b7acde51d2c557664892b631e1e264c5f793d2fa215c510a1324f5d28d386a1336d72094205291d0c822d635ab2e93a6eafcff0d2f35af2aae5ef9d466d7a19feb5581ec00aa8e762e765b68880aee76fc6a7876b2d18842a78997d98c4b1981f8b62957f7de5d2cb388587e140198b3fcd3f8bc77f79d1ad3fb8b4e10e5f9748d85d14f26c9c620247201b2da21a2ceebbdea6bca4c8962c0f740e2f959ed3f0143a23137f4970eb97c692ccd4b5223410000000000000000000000000000000000000000000000000000000000000012000000000000000000000000000000000000000000000003cd9736d2f0e8a0000000000000000000000000000000000000000000000000000000000000000060000000000000000000000000000000000000000000000000000000000000000dca8b9f15372b4849a882b1bae9b25826aa81d5f1f3cb6535886beb1eb148db0312447f4fc5bd467017762d3c2398e9df3ea59d31aa8220da99729a8f5aca8637b53112d76a74f00e350a09d91b23f16b6bca75e016ecc7be10b90565d85f9084b865032f5da3545952b03b0e0c626367be501ed695258a712dd0f502607c1f5740143cb4e893993e421e35d04b77f397d89187513e60f491f421306b94e5f009d65be6c7ac20ddf36d15dd6a3503ad1ea0f872816c741d0b07028058d4c3f0f0ba61fc07ba2c895f2b8dd93d45fb7b087cb04b9d44700041bd810d18ccc7b51edfc4b80722b3305efc128e22434499f11a7fc46b381491b8766a5b3ae19076fe053fd4d2f8aa671b7fb1081ce28a8716f5428c17d4e815ea6fe1ea670832edae70791ed8c4b524c11bbd5622dcd75815bcfdcfe27cd5561369d1fa2edb1fdcfb05af9a51fc4258f7c246ee5f143b2c1bd92af14294a4572a305f28e3d2ee517d52459bdec57e8ae32a837c7b8496ec4236c3e1e9d97bb92cdc4b1d565153504625f4171066c3467d2c94611a7361f7588c864ed66c6881c81c472b5694161e19000000000000000000000000000000000000000000000000000000000000001100000000000000000000000000000000000000000000000089bcc86185ce40000000000000000000000000000000000000000000000000000000000000000060000000000000000000000000000000000000000000000000000000000000000d13d742d7fbb7848a82915ff90763317e27d59ad967e45769a1815a02883157a4edb702b91a0183203789ff90a408e63e1ee8e12f39d32463b85cb5a1e6ff5446fb74d8939b27463a5ef39c31ebe52a76d1413cc83ddd051220ae59232745fc13ccbf136b27691a2367e68b7d94978f9d4fbd43ec5fd7ad4df942f2d8ec99ea8f03011a16b36b3618d660e5eeb0aff0cf65da4d0a42f66c9dc081d1196802ec7b817b3e76f78e0fd7c74d2fdb9c45efe423372afac0d69499dbe8c1f0f9187c28921e70b4e73d83830490d874644a91f34f5cf84f9b673bd459003708a5c94abacda43ed31abe2ec9a855708af6cfb10270a8af017735d4ff6d7c2f0276473f04987165380c9a260822bd2cc25258fd9cda379483475ec73d19a2180639015e04e4ed84297a1c686935fb30ecb3f2bb650b92a922150c45a6f168a74ad9fe3c200e5563d1e744f32ba6bf2ecafb765781f1d92c40a742af6dff773ac0f3c09eae55afb1312e8e308af04ef51fb65fed89ffb82072127957c2880a17b20c89bdaad069ca10f560990c08e2fb5bfa3f36529febfb46c45338cbf62854a9108fa8d500000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000079696559cc6ba30000000000000000000000000000000000000000000000000000000000000000060000000000000000000000000000000000000000000000000000000000000000d7cd005e16b93fc03f0ca621210979cbf74acc1aab69eb6afedd8718e38f18ff26eb2a6447bddb8fa26bef7b861cd5088d455e1078ed3fdcec8b603e634fafda47d99a864d27e8b3b63872534b483990348df0913e665eecf2622d28c781449d9a67f031e0ffc698fd61a4c8bd435443c228c29eb0326d86ad5aee5ac6ae2f9dce011df105090e083a205bd53e3fb61854abf057865c0074601a4dbd9476102b7d77ee89bcdbc1eced5e9b6e476be830bdf3180733e13cdbb9c6fcbccf932fa710635ef2c581fd9ff043b753b8e13b02e991e96471f2918f9cffb3661bea77a673b3b7b8ca0daa872fc0c179761ee027914487f5273c2938c1502b8f92dbe4f4c5c12ccc7eacbe1eeede430f7d426ac8130203ade42beee06f03968d196882ff05547231eea8deaecce108f7dd6b3514bbf49e94f69e951ea73176b0cdcea5cb54467331ea19c95707605982dd4e31d7f8b7cdc802b22725631a8952a7478f77fa1ec3651fcc0799d83c3229ec5ed7bad4a001343aea937661911915e8d7432f582daadbdc3dd23d6b62b0ad1521105ade65412389f22f2dbc7a13e141ca4ac88000000000000000000000000000000000000000000000000000000000000000f000000000000000000000000000000000000000000000004ad0ef22fc1a6b0000000000000000000000000000000000000000000000000000000000000000060000000000000000000000000000000000000000000000000000000000000000d9fe475b2606c27858a742c1117c4553d849098015a8ec3a0d991b64659e7e03f25e0efd335933186368881ac54d8b26c3401fc4bb54232e04bf20ae538c659b42232966d1dbfb01b0c18d903c2514ad4eab1f192ddfac7479c5138b502d687f384968b718e419494b87623db971ab06efdf6ea792544641c918200580705845e388542560c9eea8d6bda7a08429352e93acb65ddf42fc844b516847a4068c002dec197c6ca5a8313420aaebe4551f955c0311852e006d08dd72b6562aff8520ffa441147ddb151f98692400539d624183ce0c74df78957978770186d9cfcdadb19dac78b55d4c7fa1d7ef2afaf0a65300fd2c0846d456552659451725237b259053cefead7da21bd7c6fe6c0e2a8ead813ead5b8db758d3af1236bc1cdf9d559054dfc3eda2d397bb1781046a64126538415d22fc5fe99cf85107e60ef365f73eb79d12c36065cb8b36e0a2084013d34d085ea0c8304dd0d92bd9970abb807a56a9b04eb5826c51479433cf44b1cf893ea4955e27d33d309e3868f31924e3a662d02de77683238eb9bdbfd053a254bc3baa602edce314b61782d88956430b7d2000000000000000000000000000000000000000000000000000000000000000e0000000000000000000000000000000000000000000000034a0f553729dea0000000000000000000000000000000000000000000000000000000000000000060000000000000000000000000000000000000000000000000000000000000000dbfaf3f50737d8d1f25b05a72e5eb23b8ba6b4a2434a18980c723f26eb2d979be6449e1b03ec71f20eb0d6f40fa6c248960254ebe70a1828de51abe3bbf6f16ce151edd2ce799e583d9d0b258992ecedc97027a19b34d1518ae50631de02a4be0d494f279f983d3bde6c2feda08f68c6b4e44c1a9b05035a92eb2773751fa6ef6ff1abf7ade9879eb549788506eb032a54305da8c8d6ba11a705357fda30534c9cd3ae16c0eafca69195eb07de0c2a562c7cf6e16ee3b092e2f19102cceffbe720d6552c89819807a001919a246bf68ab552302b2be12677c6e65dae366454c4ed5a75534d6397002cc07a8baf67276b24c442d9493afef06eeeb9cbfcddccf326e1b011e1977b3dfcefd74804aada3957beb019b37f1b259b510d51173add5021358faac62b4b494c324e1e82154cbe705905dd7728ed3391b63cdb39ca3d1d1e3d2087e38d12fb9910d4bbd21de1d38ba02de8f6b63efdd7aed2a5ba0ae289ed2eef6b42999d1e585a127d72c31249a19372dd64061659f284a42f102598220ca2408ea7087c9667a6b04c7671492a599999565b46742f075954e1cc0f28ada000000000000000000000000000000000000000000000000000000000000000d000000000000000000000000000000000000000000000002fdc18bf66b64a0000000000000000000000000000000000000000000000000000000000000000060000000000000000000000000000000000000000000000000000000000000000d74bd44948e90bdf5dfc1d8f501ff6fe676e3f9a3505b94f3d289284e398e46ae29763ace37f53c96297f8447ca3c9240aff17ed322f581f58feb40ac3498744a21df180b5425a171fc90d0c0dbfc1ca8c6129773dd6193ba7215cbc2bea5e749948dc86839a7e71636de3a65cc055f166308ed4c424ce9084e0bf374bf3e0b78f6fffc4e5ae818e6ca502731a0653f917445c0b046a6fb32355f1040ee5ae31025c283ba1012097f9509a440dcfef6912b2aede5d89c74e2586485cc7c85d67570efd104a0b3911d141b1b66c6f0e9ed7e946b71267a77a6db46345a031068296000da24ed58df86d2cce8669180bc32b9e667aa1631dca42a02e46427bf232b152d38b607683f13d561cb5eae3634b733652042c7ff0545bc62109772abf4881a800c47f972b83f2adf0200d0249b8ce268ae959a9b4a8e9f6199a30260c6c88c873db66295d6467d96ced8483e2024554e210c78c090c37e4d6c267c4c020263f1eb17b0cfb2b0587959e95fa7da5cb15e436bfc0cfd297e26114f471a9494f523de16b480882272273dd6a0f7c3c45cb28c1b3bd708f17bd1fb10762b508c"

  // Refer: https://etherscan.io/tx/0xe78ecb606b56b4393acf9b46f0ceb53edfc4fabf23ee6c4d6c8d9d90aa41dc53
  // Cmd: cast calldata-decode "execute(address,bytes)" "${transactionInput}"
  // Result:
  //   |                 recipient                  | period |        balance         |
  //   | :----------------------------------------: | :----: | :--------------------: |
  //   | 0x3021B1A8bB7d73d0afaA3537040EfAb630dB2958 |  null  | 1000000000000000000000 |
  export const executeInput: string =
    "0x1cff79cd000000000000000000000000a21789b1b2422590a944f5a31cb5c14fa32a9bd1000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000007e41cff79cd00000000000000000000000042f8fc305c17c59a24032261404c3211ad5e6a2000000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000764913149ae000000000000000000000000000000000000000000000000000000006002fa06000000000000000000000000f97b96d0749001d65c09e21a86a2ac156be704d0000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000005800000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000001200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc200000000000000000000000000000000000000000000000000000000000000600000000000000000000000000000000000000000000000000000000000000044095ea7b30000000000000000000000007a250d5630b4cf539739df2c5dacb4c659f2488dff000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005f252769bfde25207bf06e72fd54a632cd3f4bb400000000000000000000000000000000000000000000000000000000000000600000000000000000000000000000000000000000000000000000000000000324cd8c648500000000000000000000000000000000000000000000000000000000000000e00000000000000000000000003021b1a8bb7d73d0afaa3537040efab630db2958000000000000000000000000f97b96d0749001d65c09e21a86a2ac156be704d0000000000000000000000000000000000000000000000000000000000000001b8f9dfafbdcfeaa1a5e73320e734a86e6b33b774876ac629482283fe82d19b81e07398f63b2b73f805fd0b580dfc5813e1f30b317fe8cbcba2df7a18862f81a2600000000000000000000000000000000000000000000003635c9adc5dea000000000000000000000000000000000000000000000000000000000000000000011d3d333b459c833b588b108dc2f9717135bdbcc8760640cd047c623e48b04e8dd1276c2741f08d16630daee452a66fd3ace536a9c7bf005406b52adba4f2c9e86cbd2b4ef2589edad2455043beffde8b08ed5a4e4919fbec0c984d62a755b7ebfce203e5d42f224e78670820498ad180dbd8c63888902348e754586349702b973e3a42af4df7b0931bf5750b90766510c21b2d7ee8bb0fee78ca0332152a64c427294b9e85f66aa55b6c5f862542a358b9f9964ad2a449c190df59d439c26406a4c68dee4be70ac701bbbcf04fa5c6ccbc70d25640c7bb1e50ce1480e06eaa850253ec12f0902a3e7a081cefe87c5579cce955fbb4ae6f7e61a2504e566398e39a465a884037ff256bce740a407156d3adef34a9fdb4fafdb37bd9a5eb48bf94b0ac40c4077e5b38afefde2ae5ac88030aaa28fc25deb317295f4eeae6b9bf9be2e422739d3d16bb1622896e2c24330158e5f52be71c69dc6ba4e9c7a178db6ea7e151f58f774428ac98a0d40a98d6503148f89032b55eaba3e567dc811a34edff77016095eb1530397a06b2d51b1eb97dc6c198c789940c65b3d8074b4a2be64b227cbb9f8acccaae923bad9896a1db1a27b29ceb1fa18404677c7b46f7982f24de8102afa6bff36981dfa6f09f6f7f7b39f546b66a7893e5b727154873ea4d59114c35533e63aced647965a972cbff8d47771ad52aa07e1080570f5d75fcc3334545ea343f4acd75929ec2a3367fc9ff90170bc908151eed7643fbf8a20ec3b000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc200000000000000000000000056178a0d5f301baf6cf3e1cd53d9863437345bf9000000000000000000000000000000000000000000000042563fba8f3d840000000000000000000000000000000000000000000000000042563fba8f3d840000000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000051bbfb8d6874f8000000000000000000000000000000000000000000000000005ab277ebda98a8000000000000000000000000000000000000000000095413afc295d19edeb1ad7b71c9520000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"

  // Refer: https://etherscan.io/tx/0xc304f3eeb8a9f438697d83c5fa9c7028462ba7eb343b8589140829d65639c627
  export const unknownInput_0xa2d41b9e: string =
    "0xa2d41b9e0000000000000000000000000000000000000000000000000000000000000080000000000000000000000000000000000000000000000000000000000000001bc2783766b10ff082ece9b7f2e3e8b757f48ca41e50a7879f39ebf901ceabb145695f7765548e03e501492a5114aaa52cb0dec0714d7fd85d861143cbb69735250000000000000000000000000000000000000000000000000000000000000013642ed9d5a413e59f66ef461bcc207a67a678e47790c9e696170aca686b33619b7f5776df7fe583ccf021330f6d6cd5d4c2d86f86a7862e6462618046e401ec09104889547407f340e552ef1f747ead1574f3e08f4195e1fbc905f5c78ec9774770b6c1ebd2608423e9b14f037c95b5280616e594ed0e01c1841f5f47349599ce466d9d93ab7661e3d861d5145a6373f083272bf101abada946c6dbd11a3af542f3a7d8aefbabc6aa6116c0ba427ee424011cc71f12dd8c8a7b513563012d572a8f19aa0cb92af9e14fa7ca11fa8c43f87d856cc891b6c22af1f72cb27db920dfcdc3019560ec01c8a8f4c3a0475a70f8d5e4a6d41759b7a9f1d47d2f6290805ab02e9cbd7361de38f3cd6384d821e3b8805776a2a0bddf0396bf790eafa1ddd408b97380f26479566a48777fddb23f602fe430b89fa5230e59378587cd98d17a8992ec03913a459a72cfe1421cb11125abc73625096a02019042b76ec7547f047d039d0c15522b0addccbe6171f4724fbdced718cf413d477b4cd32768b95312a335c9f2a0a08f588bbf2a50a8a52493fd748449be5ac71ba6dc308cb235e537e21d44edee2c44dd478729243c5df21b4907631048d9123fe991b1b770c546842183de50f10eb099250874d0b35a513dfe0ec278c06175b35e29c9c6f0f1588194165a22c5c167cbd028cb73ec84712f0d0f983e72c4220bf9f25848bac587662a547acaeac531fc4f2f44caaab68da04734a0c0daaeca1c646063ec6d2b056237922012f937af7e2abdde29328b3b26207e83557b5ec493ff86acb06da8d1f82e43f3260bf0c3bd1be8573379e88b5692eca73ffab33d94ed843ad437fd4835"

  // Refer: https://etherscan.io/tx/0x8e434a79bdf9fdee70dfc77ef6e1e23b9d3ef076593999fba2cdd15f909748d8
  export const unknownInput_0x477564b4: string =
    "0x477564b4000000000000000000000000d6952dd30a4f699213f60386c7c45eb2801a75090000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003cb71f51fc558000000000000000000000000000000000000000000000000000000000000000000e0000000000000000000000000000000000000000000000000000000000000001bd1915c4b42b84322dab15a712064c64540b60fd83c0ee5046cff48499693363970e69d2f283da24925328e916447051a49a1d35f6ff256eba14dcfc7edb739910000000000000000000000000000000000000000000000000000000000000013ba7a8109c10fda39cb98f8840ec159f7636bfd93f0ebf02dc24880e7568aaba41b2558a6c5f5c26302e7067e3c5c4a7a45c24968c3d5bcc680d68f32b7d9e3446f898314c69aa8e2b14ab6e2052f41bd5dff62cb0c1d022dc802ec50dcf481a28126e3b2f02b65b5a5245faec896353fc6763a8e42bf049bd2b271de21f1efa13f405f15c7f63c559c6d1372022eecd7b956f7bc254b64920bf593ac0fc579def02de84855e9a8e24427b73daf09f92e09edd784497f384d07b05692eeb2e612d4b6bccd624a82c1cb1a66b9b7fcc0597165eeb13ed808818e67b51721e512fa182c34181321f453e5fb6754f2966bcade7877477432030b4348a31bd82ce1949d2ab9871a8d7ad050efc190f0b840c63317937d5d8c503c10d8fa953609f7eb2217c41ca69e60ea82ab56ca4a62c75aec3e8cbc5b3db6c2d833da48719937e044986c66af6507e2cb757f5595a746c5f67efafb408aa3722d62596b5bcba550a06e7e4c9c43617978356ba54c65b687612945b51f9b68aeb7168627df2a786521ffdcbbb7fe46526f657d34080a91df162042bdfc609a99e2c732a47ef108c7319a4322105e2f8308b503a4c13ee96648d329cc5042d0583a645b123cb3058edb828a9861057d6d25633719143319d5e40fe8e0b4a07ae9f8e8294e951ba70717228532830d1d594a6f6e037aad3229cd475b6c57bc8e2d89e48134f0476aab68f94b3f305c9f4c23974f6760b8353cb1062e7069c7cf89b8264b25971fb515d99933749cb5ce5dc1750bb865192fba88c0b61701d0f18ea6039265c1da43672e43f3260bf0c3bd1be8573379e88b5692eca73ffab33d94ed843ad437fd4835"

  // Refer: https://etherscan.io/tx/0x56e9da9f1fecb79d5e1d6c6fd601b89ee91544652d768e2050f4871b86360e15
  export const unknownInput_0x8607c220: string =
    "0x8607c2200000000000000000000000000000000006a0403952389b70d8ee4e45479023db00000000000000000000000000000000000000000000000000000000000000e00000000000000000000000000000000000095413afc295d19edeb1ad7b71c95200000000000000000000000010fe00249a0ca7b827c9d4072686434165263bf9000000000000000000000000000000000000000000000000000000000000001b270461c6ba7585cedf5cc13364429a7109eb459f7438d200d66a9f8a285929fe56148016278ce53db0143db7994e2bcc09866b143648b3fd76523d95806f281000000000000000000000000000000000000000000000000000000000000002c48dbfd5e800000000000000000000000010fe00249a0ca7b827c9d4072686434165263bf90000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001158e460913d0000000000000000000000000000000000000000000000000000000000000000000800000000000000000000000000000000000000000000000000000000000000011eb960e7adb36549d98f9317a5141797f84303e59e05bed4af864b9e5e87f5b953791ef2db5e82c1b4ee825a617dcb6f6af551d56e1d81faffc3418acc979e64fd32dadb4eb7a66df7b50f087d447f88306808ee9b6e97be81cf95f901041093954bdb62e3b56b3de171a56a8d489022ddf8e4b15e451fb12a4b592c1a5cfd92b5743cf285bfdf9e9a53f0373872fc81a9e430f623ce1fb38fd61c3e2cea5cd6d78c515d7f210e53c9522bbf8e366a3df557f8e8aca7330999fce61ff55de9aef8b102504728ffb924f2ab2aba052253bdd7b32feed88c1ca25f84a7f4c9612415e761dd06e1a64dbe5a062678af04455e2e643351fdd024b47e89c716c4c1440e595e60b88b22516e141467c27aee5f8b5a5264fe8bd60c03c51a75eb7e73be6b994e0de132b8cd5b355dfd848ac2b64897c1df455c4a1ec3401a93b04178666a6327a49f96cb97ae5e02a7cf8cc2fff6f1cf8037c77bac7244a29bd34d265a9ceee6a56a4d92a27784e030c4295cd6e9b9a3d91806d5244ec806f60c396900dfc9a6b8d7b1587d06cf8191c5ce96d3035fe41f077d8c270d5f82bb3116bd32c818dccaa86ebf4a578254c1a01fd79a0860c8fb10bef2254b6e67c9b6244ac1d4ebee15067ee5dbac07222214f92b8b3719ed4035249714fdf8d8ec6e065906132a9022873d5b3ae0d5ca580ee15446a744ed35346f6735f8f57cf1e34f6eebc34545ea343f4acd75929ec2a3367fc9ff90170bc908151eed7643fbf8a20ec3b00000000000000000000000000000000000000000000000000000000"
}
