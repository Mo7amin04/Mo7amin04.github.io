'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "7b989e7137617a26115e77d2ec6ffecd",
".git/config": "262f9532b24f3982df9971f3543e6a81",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "d08d6d441c06ff0075c28c86a43cd1b7",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "2404a8bd5f42e8c622b1fb1b8e31cb3d",
".git/logs/refs/heads/main": "a56319bb91150a332752e24ba22a76f6",
".git/logs/refs/remotes/origin/main": "ad4df28c23cd14073ddbb4ba634a757c",
".git/objects/00/3ede049c1682101ad0fcdea133e5956bd2639d": "ec7f839fc5b95786eae7247313b37c45",
".git/objects/00/a2211d202ad1b5105ceb34e0f6dcfd71e16cd6": "59003cad9fca71e762fc170b618f24e7",
".git/objects/02/290efd5159f650b8c5530521e1a87dd53b836f": "f6c4dd965ac42183a16627a2d9f3e8e0",
".git/objects/02/2f8d88e8f8bb5c3a4b71dc43b53cf5a11a2e9d": "9aebafc9fd6b103e629516ee681c5ab3",
".git/objects/02/d379985de129bf1118143f9405993014d84a88": "49a3fd720a605cdff3cce75df2a0f8a8",
".git/objects/05/a9058f513cce5faf1704e06e3c150688b0a01f": "e8d02f60cf87abd4c1de4b153dd696dc",
".git/objects/05/c973734b8fb35c994e8b038cbf62df77368cdb": "19b981b7ab64c72e922bc10b519f93ed",
".git/objects/06/7ce4a82333ec86bdd8d395eb48fbde4b3da5b0": "b29742db4c9b0b864888eae7f7146ba1",
".git/objects/07/4f00715e7a77c4e76ab92b9016c9ac940225fd": "e1831ad6dcffc5fdade8a8744f0ee33a",
".git/objects/07/a8a6e22dc3a2ce0e4dfbb19f6c7c78756de4ad": "758365dca6f627865361884bb04deda0",
".git/objects/08/a85dd9d454aadacc5651647db2a20e05bf8ba0": "b7c54e4935f08f4f4b303a477f7ffd8d",
".git/objects/08/d1feadeaa53cf9981073d07717c94dfd508bf7": "bbd9a2cae4ef97da7516feb7531901a4",
".git/objects/09/205877abc6dfa3aa7b7ab2ecee8901db4a254c": "fd3a64444a0182fe4081dfeb92b49bb6",
".git/objects/0d/06da2248b1c616f0a8c41733b19f93b41cbce5": "a49499738de8a71f9b02f2e8aa595abc",
".git/objects/0e/7aeb75367063bed354cca7f134129b42ec43e3": "c72f05163cea38fe6776fa4d56c3f1a9",
".git/objects/0e/7b25e5e2bbf0e56b3b25a6ceacb42ead409d91": "5515e71d069e71b85cfde88d7d88ca8d",
".git/objects/0e/db22c16e2f00a5ed4ca07bb512f315b1c2c8d0": "6a3c5869c849e0b5980c7161138be3d1",
".git/objects/0f/02734f3e1cf89a5d0afbc8bb259715dd7da1be": "708b07d31ce47b9e3275eed24ccac872",
".git/objects/0f/372463fa573ff5e56043126f03070a7274a6e9": "a29d5cda505f98c79982eb96e47d6734",
".git/objects/0f/7c9ad385698ad3c0150260b6a3f20a7c05e09e": "16d43efa19df848f768efa7b529439fc",
".git/objects/0f/c9b07b1c063e55709cfc7998e42a4e7f8730aa": "1b9af267efd0037d610d07792d32d1c0",
".git/objects/12/c47bebcfe3d651ceeae70e86278908c5e44343": "4741d5a8aec9630ecf64877f91727d86",
".git/objects/15/7387d08df0bd8b760d7d40fe3f2500fbe3cb9a": "1ad0813d8cf6cdd513549c233b219c82",
".git/objects/16/ee1b63ed84fc1d8cdedaa04c5d2ccb75ccca80": "8ba71448ee9c0f686b41364f2fa158e5",
".git/objects/17/d6116002a7af2cdb7cd4022557d1398383d4fa": "34be1e5ca0f842fb60969b0c13ac99fd",
".git/objects/1a/41d9ad595764e83d926a5fa5257dc41ee037f7": "e69494f8b8139b4d671fa6840d659136",
".git/objects/1b/3a64175c0a6b5dcd84a05ad54e04c8f15b35e0": "f1d7390550a416a7047c025bdf2d3a5d",
".git/objects/1b/aadfed4d3db6e408428d5c60cd66949b16e1a3": "f2d29dd8aaf20a9f32612ff112002846",
".git/objects/1b/f0b4453567282b762441ad5c5899ea20b0afb5": "f2a9ca0ba79367fa2600905703175d1f",
".git/objects/1d/32b4ffdc8a85fd28eb9e1d8e9cc5b3416b6a4c": "2b3cda43ab63eb462213ab000d512680",
".git/objects/1d/8a5572d2ef69949aee881d2084c51ce8a5520d": "60af5dd1fc270dbd97d84ba78f8288c3",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/1f/d942906aa159a062c408067e4a89d4732f7502": "ba73c1d98dda68bac4daa0158e1049ec",
".git/objects/1f/dbbc1197621e3b40da4d94bf9897e4973077ad": "3260de922612452d1834fb2579ec288a",
".git/objects/22/0814277cda2ffacfa6b0dec7ef0ff93a4fb371": "9d24303d070c43422a9a030185190d0b",
".git/objects/23/9dce780801f6b912c8aa7781b7abe6bba83353": "a05923b8089a63a97c2f74f75ce2c20b",
".git/objects/24/a28a1f11f1401cc16338953921110b46c8785c": "a14208ecb2c9827c4709bb383e1285a7",
".git/objects/25/2d5f82b41e0732e54d5dc65bcdc3a78a0a4728": "191119d1b57a312089b6991309df7208",
".git/objects/25/3b876ea826c42808cd1ba28d7d66f6379bff1c": "77792c824c0b2512cc26ea6923a07cd3",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/26/ef6d11d81211919f6b22c42d8f74c2a3fa300e": "c648ad7556eeb08a260b601128782fe6",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/27/adbc0ffdfaaea33f9e0d5f02d6dcafaa307f6c": "05b2b733942c20d1b94cbf2d61c4f98e",
".git/objects/29/b8f04d2eb35270b83e0df30f9784548da4f14f": "6c1ed7403278d91634b57db6b195c34a",
".git/objects/2a/fc019a1eb5805e7466129afd17c16b2431375b": "db888ddf48e7a9777c7da060a21d7f89",
".git/objects/2b/2c769a812d46c15348b5f0da028028451c53df": "b70ef42668df4d54f468f610835417d8",
".git/objects/2b/88e8b9ba0a755031942162a92ea4d019d5f459": "31bc0059a575ab6b5815ceb4b0a212ad",
".git/objects/2b/da2848ee32a6166f36da48a4204049f16d9417": "6409b0ee9f5aa7d1574a6eb013fee568",
".git/objects/2c/bb5d7780a0d433f10707886c21b4761f6f2eee": "eb8afd9f92e713866c3f75d707e431bc",
".git/objects/2d/b0ef02f5b4d8a00b0ce7497b31040d716f46bc": "1bc8952ad67b3cc6d5bb706d21b83ac5",
".git/objects/30/dae9f3189be5c60c3d4a041282dc450b6212d4": "df8530f0d6473433806b43f5d9c47ffd",
".git/objects/31/735c8509216a638812dd8449ef11b5f69cb8a4": "e40b75172d89ef2b5ccbffbc6163e177",
".git/objects/33/1480aeda5592ae9da83cfaf2edc1772f2d4847": "0b82acf225495885b9e2386641b17491",
".git/objects/33/e236df4233084e8b6d6dc0cb46fdadcde097d0": "dfe94c3a66b2b6276a0a7cfc4c1974b8",
".git/objects/35/b1facb1f9227f3ec8d28c3046ae907c3ffb06d": "c1f493613c7520bfc88612ab84e8f8d3",
".git/objects/36/24b28921eb768fa04e47130cc3332d5365342c": "39a3ded989d5187af7b126f29c5d42df",
".git/objects/36/ce964b651aab60eb015c10cd1f300cdf95fed9": "806a66de9d9b0d9735c835fefc061c8b",
".git/objects/37/f45eba4a351aec10e2dff11ccb715d5625cd7d": "28bfe909cda2f9c67e11a3f27bfdbcda",
".git/objects/38/babb151a3d4ee9a39c9450a9efd53c4263b082": "9c07952fa62259cbb2e7e3c7188d1059",
".git/objects/38/e78d27845b37e90854104601a43b9c4b0e1875": "f25b811c0515a195e24d2e53aa1e2187",
".git/objects/39/60f81f2f8cef92bf684a4689395487663fdb37": "d86feddf9c8795cce42612b10ec379f3",
".git/objects/3b/1b099d918c6084ca0ff4e2425b68c32855209d": "1474fdec75ce5b50b65a059f7206e886",
".git/objects/3c/d52649d2b4214e778489b62a39ff0758e34986": "987c62fcc0fea931a903dcff43306e89",
".git/objects/3d/8df6800cde88cf20ed4a55be68fb024c2d45ec": "cfa27026d3b320c6ede4ad42719cf13f",
".git/objects/3d/e91025a996656afb082bfe2247328c9082a07b": "41356b39999bd0505ccb511fb8d20acc",
".git/objects/3f/431545daec351204f89556a1ea5e0facae0aa7": "c4b4af16a37c3fbdca66b9a82cb1d7e3",
".git/objects/3f/6fd938adaf0de643a51f6ebe6d73df4abcbd7a": "2c8f2f5a124a9dc74e32ae4dba52bd25",
".git/objects/3f/ecc448e5606f482bbaf5d08bd690c9f20fdd3b": "4efae71bd79d4edb2a09f2756b42d80d",
".git/objects/40/84a81ab7d82bd4872019105eedc020cef5b426": "ba6996d370d6a0104d04f8736dde91a8",
".git/objects/40/8e9b45ea9a559b485e56cf38e3ac3ab3928363": "0400fc73874094717954b35f5c685b83",
".git/objects/40/c1bd70b43b364e58a8269d2c32d3202e1b3ff6": "a3a894814d96ce97383801dcaa310769",
".git/objects/41/24f200d6201ff20902529a70958cb18bd4a0cf": "15b8f749b4641c2a6cd675c3bcf5d043",
".git/objects/41/a0e618523e0a7ef08c59283981e3cba1a24ba7": "c5255b6f2666a2b3ccfe11eda39cb50a",
".git/objects/42/3f8613338b1511757fa55e4e8991f708b70baa": "56944d1e0ad8607454aeb4b039eb2ee4",
".git/objects/43/a91675a69951692410ca86af02f2f6c639b96f": "5f9d8702a57ed732b9733b3574b0896b",
".git/objects/44/23669efd326b06c4f215ed7dbcc3c5671859b2": "0593f82133aa44ee0d6935c976726713",
".git/objects/45/5004e77d67ae7f9984ab945f21bb69b3c3eb3a": "46253374fc23c928de8b1b72cb3064d3",
".git/objects/46/3f2c87b6dea60fa778db419cac478da1dfdf49": "68093aaec4d538cddf60ed07f94b4f14",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/4999e976232e728c665832c3e2f603384a773c": "5c1c188306b61d597625f4965adbbf29",
".git/objects/48/440b770476964ef2ead168034ed15c5c092eca": "f2fe5385d9c51b5cafc4f7d990841bc7",
".git/objects/48/d486d53be2a7779b25b7b82f84397ddc2c8242": "32471a2a2978b620e07727c25a43ee96",
".git/objects/4a/67a574ebff2fa9ad53cd14761a0ee0eaf5fa97": "310789e37f8b86084452c15086b88447",
".git/objects/4a/d6a7f9b7d2ff3a82eb88af5b7229af14959bac": "96b1359f5ef42e81fa2a1e5fc390b891",
".git/objects/4a/f8ff40e45706a06619ec2585d51518842e3524": "39c647600e9d0445c3ee59472c4a1e61",
".git/objects/4b/26dc77edfc8a8b81f9ea94c7d08857f9c9a4e5": "18a6555efe3bc8feb57604ac56b7dab6",
".git/objects/4c/6c0969d5dccd88dfbae7ded79d04ca4c126d66": "d7dba45586f2d74cc8f68596d46c196d",
".git/objects/4d/0f0eec920c9221b35c81cb0c2587bb7d28b536": "c2ef4c4626a08de04d33371830d200f4",
".git/objects/4e/04540fd48aa6027e99629bd18dba939e515e18": "0df2db6eeed7b715468ab162a441b8bc",
".git/objects/4f/6d2f54ed97726490c98a47883b2e7f1cdb03ec": "dddefe8832566a5cadcc127e1898cf4c",
".git/objects/4f/7028189d69acc5e28614103527d53de8e86317": "d01a79f055d20cebcb9d9240c0afe181",
".git/objects/4f/c702254d32b493f40df381c114f3b09ed2f04d": "4b7d1359f2307e95d83e8468a98a6b36",
".git/objects/50/f96ce45bc4277a4a9a101b60cb00a813e8af2c": "d0373fbc40fdc759c5e6ea8e809a634c",
".git/objects/51/bf3ea5529fbf07913236e1958598db987608e7": "4bb8946c96ddeb2ee8b58cf43e2e5a00",
".git/objects/52/8927601fe36597f7d9c8bfb8ec29b3cdf7ad0d": "9d01ad2ef62731fd60270bba67b58f4b",
".git/objects/53/2a696f2e17d957ccc2c36a0b441d110c3a6c81": "44075b186b91967becfe5c840a82b4f4",
".git/objects/53/50dde77eba2e8cbf11bf4afede92f039d1bd3d": "db24a0ab4a886ffcfaea5d7c0f853a4f",
".git/objects/53/cef2a52cc7b11200dd7a32e332b6af246a5ccb": "4157f015f2b381be5806261ec29222e5",
".git/objects/55/1cd0e7736de2d35e39de6ae094a72a7cb4fdc2": "62ce8d14924d9bd2a05c02bbb1e34d48",
".git/objects/57/49da09cf962360fcf832a963932c29fe98c3f9": "e25a6e0602eeb44839845271b3352a0d",
".git/objects/59/39d12c0b6ef708d31b876b6d4e9002d8bfa9da": "c0c55d5970fe75f7b9ca71e0bb66bfbb",
".git/objects/59/4a1d638f0468f2894d10187dbb94dff772712a": "4689b5dc2473732951657e6b8677339a",
".git/objects/5a/1078328d557925b12ca901d56286ebf68960b6": "cb257efc84a196adfc6979d6051361f2",
".git/objects/5b/1bfc2c0b26345f0272b19ef4382fb27bc63f49": "74b18fe2b02197429b97d06f2e998487",
".git/objects/5b/2251cae59ab24d792d49d8d2dcf10ec9edbcdd": "9d16b25638b736eeee17a4a53ccdb5d6",
".git/objects/5c/0449da19f698b92c2cd7080fae343dc27f274a": "a666be9260be9a21386533030eb85575",
".git/objects/5c/4980bb19a1f05e0e72e81b6e13a77c354cbcb5": "db95f52b95aec3af216dc08337abb2ab",
".git/objects/5c/a7f490fac05a240c457eddb9d7ac9f29ea2e33": "d88d1baf05c27e0ecb5b720efbe95c37",
".git/objects/5d/d8e1480da1fc180ef858022d6af51796d1982d": "ea5de219a4aab9187fab6d6de05c5a85",
".git/objects/5e/2e899459d0abcc3a8e772c71aa1e28760f48a6": "b5ff96440f52f62962dc201564729e4c",
".git/objects/5f/caab7fb63dde5793c4b63ed3a07702a2800638": "19bbbfa93087b2692996fd5da0dfe5c3",
".git/objects/5f/ff635ddce0df9e102a2e75800bc3238928b46b": "b93e27b43edff5eaf047b1d5901fbcfe",
".git/objects/60/798e27ae8c92fc947b2fffdc7c12200c39bdf1": "9cf55d3b2d9de1f384506000510b03de",
".git/objects/63/390b66ec12d2c30a5c72a75fde5b3ad0189b9b": "f21be891654b169488b7e372b28e9e8c",
".git/objects/63/46978c3bbc68e3a024043e4a6b0c208c9470fb": "a321e913958779a72cc28cae57c5a306",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/65/65fa65983ef00beadde4916c30759c5939c9a6": "e98031d65523e5b3969ea8108b29e209",
".git/objects/67/a864893a2c330a95f8324b04531d00f13d56b1": "6dfb64a60e13ae1055c3d30e6ee83ce7",
".git/objects/67/bdcab3049a38f11e399b96400c0cfe025e7bfb": "71f69f13fb8e0f58703da988f2798d87",
".git/objects/67/e8eb49fe2d07b0c10d23d8691e0ad77c31e9d2": "aa5b749703ce71203d32c5483b307150",
".git/objects/69/4bfa67c6a94ee5bf5e933ec750d212327af543": "d92a962d7d17b2972505a22ee0864ca8",
".git/objects/69/4e095f7adeca31e47a9571df159d145fefe187": "d44b549a5cf12d95a98774f953c82290",
".git/objects/6a/16216496e8930a2ba907f2d70513464f0221c1": "713703db93b01441eab168631659a60a",
".git/objects/6c/5e990650237070bda163fde191d81c079bcd4f": "f18ec2c7e3b2ce96826d32e376296153",
".git/objects/6c/eca31ece477905eb06cdaed135e00c1c7a4466": "2178e32fddb57e577a02f44a8ffaacff",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/6d/99c8f66c4eaa2cc177283080b9d5e7ce63a880": "c51e2ca419dce66ad34e65642bb26fe5",
".git/objects/6d/f4cc17d06303967f630a9763bac6fe88c5f0fa": "cc482ffaf823bda6606d3af7a83c4e99",
".git/objects/6f/60e60942214292c8d7f02ed5c114db8f072d37": "45bd54d0672043a46aef586bf7ad8cdc",
".git/objects/6f/6a0a58ab51989a08aa0c93420a16c607d37a35": "f67f9668f6bd365d3f9a9a79a10844d5",
".git/objects/70/adf9495b4bfd5621c96741bd8ce644cf74ef43": "d000b75a2f28a284f9c25d4e9261caac",
".git/objects/71/c2aaf69b34ff3f0d22179c057d68f6f537eb8d": "544643c75e92323408f8036560652161",
".git/objects/73/4d31e6cffbe9a438e150395edea557321c83a1": "5d7409a881a1b53184a98a3f32034054",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/74/e243c984b57a1d87a7ec5eb27eee27f78fcdc9": "e81a5bafc435e4d0adf8bd750056e483",
".git/objects/75/d5a81d009524ad4a8f428fa0902ba1accc5a75": "5647b7abccb0ff0ea00c42da17812143",
".git/objects/76/5d804b7bce2eaf4c525535f6d303946e766312": "e2d288f62abee00cfeea1057896741e1",
".git/objects/78/58d747e217e82900cea4d1b991187a460ebd2c": "3234292e3d2292a5fcd3ca8c0e11fe5e",
".git/objects/7b/2d602bdc7370d23fb0811ed76c14787c316cae": "85ea10e4d69096f2a052bbc6781d8d29",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/7c/5355d6edcbbe1dac00e463e2ee8ca07116e2f5": "4540b297adc4b63bec1d22994434985d",
".git/objects/7d/1cbadb0fe5e7fd756406e13bea7fd3007e5ff5": "2582c9d981b9a9aec7d2c5ccf42b2c01",
".git/objects/7d/8b89a48170d423751b187d8f16e3298d2aa565": "716ce541a844c93b96eca85284f3d3a8",
".git/objects/7e/684b732ec07aad037aea5efa1c646f853f9251": "7f2b5f7d61227dc9bd4a11b142aae808",
".git/objects/7e/b90bae79bd719a53b3ea9b4a3b37edcaa31d53": "eab64c3ec9172dda91534e4e826daad9",
".git/objects/7f/1136aef2ccbd49174bfed3247ede2248505b85": "be6fe1b3fc32bde74297bfd0b4509023",
".git/objects/7f/c32bc4ee5e00cbfe42d1c3a8bbf1f8ac610982": "cbb13af9bb1e9ccfb012cc59492cb358",
".git/objects/80/4ec628b7c03fc3d519220cba6daac3a1b52f2e": "d7ab464582ff34313f02d913937f4d8f",
".git/objects/80/bd507055f8e791862f8ad38a93d3160b2f7981": "43307b8922361aba3f43d6e0ecb80b68",
".git/objects/81/49c14a708cdbb83d376b1818d8677279eccac8": "b27a791fda143aa69b454b0e15b1d0fa",
".git/objects/82/023336189bd895eeeb45bbff19afe5eaf60805": "93b7bf03e94709f744038254de345772",
".git/objects/82/ca33c5f2b74b7ac0fc91d7c74b1a821f0fd9c4": "a2b905c67a7d37e2b9fcc5942ce2abb4",
".git/objects/83/90b67a0762a9963402dff30294ad47bf33d595": "9c229010641ab52c56e8f65137c4a667",
".git/objects/83/e922c3322662a632edf48a31a98e09b625939c": "6f9a2d10d800236956f6d9ffe2617da8",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/85/efbf623b1b8dd524efbc1e2e838691aca61539": "8546b43d3eba65295bd59cd27d3a5366",
".git/objects/86/8a1f2706b6e7aa00053b55610878ae8aee6762": "1de7416f581476ae8e7bbc83ac164af8",
".git/objects/87/c2c8404b302007bf18ed44f48471ba9aa8f83f": "aeee995748d377d4cf9bb912b777bdd5",
".git/objects/88/47ebbef56b0dec8b9f2c6558f0add0de10780c": "257a6a199a68d4dab72c1b911bad0bb4",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/1ac87823be90ebc521090e6084846c09383ffd": "075135f31a45480635b762f9593b8cf8",
".git/objects/89/46ba0f9e1688c00966d01840be6385ff078726": "89ae1817153a3cede91d452dddad8995",
".git/objects/8a/0b9a71fb4f5d44f3a4ebffac1cfe4bd239f0a7": "958c31719f7dfbd4e8e10342c3e8c1f0",
".git/objects/8a/4eeb8aba85f09dd349a2212c2dfbbc474f417a": "99a0b403064da9d3c8dd17806db1a07f",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/59773bee8314a8ffb4431593d0fb49f52e34c6": "2eb993d30677573ffd0e58484cc6a514",
".git/objects/8c/ca90853239169917de9404cee96b21e96844b8": "673579179ff07133cc7e2766ace0ed1f",
".git/objects/8d/8e7ab297f4c1a885861f567b881f6427d600bf": "467ac5342d156570a18a04794d8f8e99",
".git/objects/8d/a13ad8d9efaf03e9eb26674690b2859f2ce179": "ae5823eb00fb6989a5366e8497ad5fcb",
".git/objects/8d/a2fe791939a708356aa370f7fcc7a114cb1d3e": "b0e96fba753b664e1c43a357e593cd5e",
".git/objects/8f/540bd40aaa65c5513496cb7fc13174ecfd8ffb": "25f8698f7e5db64f2ad48bbdd1b2ee01",
".git/objects/90/1d884ff0d240d8777bd60a394813bdff7bff1f": "3b19fa0175aa59ee5e21a960cec4ef26",
".git/objects/91/879bec593bf00452b52d32f87e4bfe509909d7": "fd8dc8033192371dbccbf84f4eb42939",
".git/objects/91/d5188595737285a02a4ea3eb5a8172148dbcd5": "f90ea6b12496b568e02c45284dd7a2cc",
".git/objects/91/f66e353e057f3d9c4b1579327e32c8bb2728ff": "8a1b1a4bd770589b418e65cdfc30d7d2",
".git/objects/93/bd9309372548bacaacf3871ea0faa4af80f76d": "e5b8ee3047f809327af779472e1cb183",
".git/objects/93/ce8d8df465d95b2258e727a12300673151a570": "3f07065e8153aa4e791d99dfeb218426",
".git/objects/94/37e61c1c686a97e366583721c69856728e9c8a": "8147f090ea550d31b5f30dc8cbeae625",
".git/objects/94/ffba531b1542ff5db986f584bc916bb28cf06f": "13ec791b78678ea7bf35a53bcb889425",
".git/objects/95/fbb0638face5027b549785bdf83893b3b78394": "a18b312267df09cac4a67460e17cf183",
".git/objects/96/3aa0cf4d5cd35b08b2c73811f31f74e5aeb818": "32ae916bd305117ebd218846c35d2638",
".git/objects/96/5ba4dbcd88671086f9569e73a9c49b320eb8e3": "6d9e12d183629a5b731628398f34bac0",
".git/objects/96/948cd3f5f07a9dc13d96f5467125b2e29bcf14": "4894414b95a127a8940a3f43a69f82f0",
".git/objects/97/299655b560143403b94f1acff76fa9b11de5cc": "247d9366454de280325b5152aaf4e76c",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/97/ca4d0a61e9448fe9d9fc4454752bfafa87d900": "6e1b5e76987c30fe5f80f03df4563da9",
".git/objects/98/80f30bd132a764dd49b1514fd283d956da52b1": "02fe04be8b5d0db376b7105e828c9789",
".git/objects/99/7c89ca670a8b88457d96873646af322cfbaee5": "45483b08cdeaa1940edb64f337c8476f",
".git/objects/9b/6926fb7f28f3cc4cdec8de4f9bc1fff68f9ba0": "fd272bc92054be8b426414f79e70da07",
".git/objects/9e/102ce717166d8630a831b2545bef9a6a4e02cc": "69c8bb8c7dd49833a3e81b9ecf9afc7a",
".git/objects/9e/286072d6a43830ed53d50ffb1db5331dfd7b20": "d4ee90350b7608ac7748d50812bf2405",
".git/objects/9f/2c46463ef4e1440902a67466317dd98cbf2477": "6b3577a98fdb070f933c564a9b448ceb",
".git/objects/9f/66778e0a780153496a28c18d7a96dcfa9fe1d0": "39c9825bc9b9d9993ec2a19ad83994ed",
".git/objects/a1/c03711e3a46e79fdd841bb3385c99b6031836b": "01b69ea38631c097c17fe8e282f3000c",
".git/objects/a1/f265ddbd09434b844512a7ba818a4d6fee539d": "8baa1e6d66a695c2122726c8bd502cec",
".git/objects/a2/6ee61f45c3b9223bd5fc255f24a5547c39e3b0": "f43b57b605c9f0d30a9f7a4a6547d33f",
".git/objects/a2/d556389c3dca9edd111e55a0db929a59f1e481": "f652c77dcf3da60d60c8b6fccb1ad1e0",
".git/objects/a3/e5822f4444c8476d3d77be9017fbe313075371": "dabe0b5bc210370bb00df8400fd12d77",
".git/objects/a5/fc79920fd9217986dc71f40f17cab989eaab73": "bd3162a8bf60704b4b25e180b94a8fd2",
".git/objects/a6/1cae60a2fa503bc4ddfb911a01e3293d9d7a6f": "2fda693b5f01515db1d9c250fd19a476",
".git/objects/a6/85c39304bfb9a6450e05d7c243cf34c2c3a106": "c4159f1f1e674b1f517449f404b8dddc",
".git/objects/a7/06e105bbe3d814107c27826d5f8abe2f564129": "3f677460012356bd9edce2ff97c53e29",
".git/objects/a9/5d711f58e21e3cbce6abf74cd8fb114603dfb3": "a9e0aebd91027114e44e7eca15c263b6",
".git/objects/a9/935a43a574c1a2814a05f945e30993e33e9656": "a83d11b854c8cc896a2b5dc2cb94740e",
".git/objects/a9/cb31686a561a377d42560a2ebcfdf479a71852": "e4986faec083f2e8508d23cd6e4463ed",
".git/objects/aa/d07aaa83269aa82b78e47d75ce1d7a845bfee8": "068e7b12b504728237ba2763dad81d5e",
".git/objects/aa/e497ee20e7c0bd68f907e09c6c751033c08685": "645d36bd3461f5c6827a95cda85f6db6",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/af/9ee2378ba8b3c8efa320e472ce00a1b180f4f7": "92d3b889fed175ded35c99b44040abaa",
".git/objects/b0/1ac581c8efca57b1e90c2bd9c46d8ca5f51d09": "3aa70567916a8920db73d67e3f0121ce",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/b2/1345ddc271ba9bc3b7ab5f505ce898039e27db": "0fe091f1d23a34ee9df6fea496c9ed6e",
".git/objects/b2/39a19deab3cd797ed6daf60d276bb97e39e406": "7424e3f7158498de3650c913a84c92bb",
".git/objects/b3/0501ffaca40db547e216d6571bdcdb36ca3d7f": "3138faa628eb30710a93816ebdc5004d",
".git/objects/b6/05b3b0e27db5db74991da63b0dea1d78408117": "c9d655c06eb914a4328db9eb0eba2dca",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/4da4021c94940f9ea7ad82ca7115f86bd6d3f7": "dbf925d6eed4aef53ecbad2f0780350f",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/6091a6ef20356663c8b76ba1a4f8b4d21c732c": "97908875793219e38ec9a74ee4df7a20",
".git/objects/ba/35c778c9bd16fb3c92fc24f6bdfd0da4ca1642": "60cf65615c66220c9e29f7db9b85da31",
".git/objects/ba/383625214bb7c376ca89afe5ee2beacb7e7fab": "a68c77e36f0f6b26380706ac59ccc47f",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bc/0aea6937777da6d823eb573381d6ca75c31ed8": "0c2feae5bb0b0af6d7f63b06faa8e549",
".git/objects/bd/2d3361bb20db6a61a3196dfde4fb4a08ee5b59": "6667a7102acb3412bd3a3aa4ff712e6b",
".git/objects/bd/3bdfa3f9891b2fbca002f6941dfbb515868e2e": "ee86d8390e756ff94f5acf1e465300d2",
".git/objects/bd/525c343a0afc08371f01cba187929279f29610": "52df8b3dc0e1d7e13ad9d4e126e0f8a1",
".git/objects/bd/b02daedf5a89327ed407a1c0f0d1c6f7c3697f": "03b65118b004002b96716339ddf761d6",
".git/objects/be/e3661950036341006cd04e997043b43dc9f0ef": "4eef37f5eb9737de8e4b11ac569b2f51",
".git/objects/bf/94e28378cb62d8594881533854a17c465e8bb6": "3a387f37416d04e8c391eb377cb93494",
".git/objects/c0/7cac5b84128d8cdcdfcd7beeacb5982f11e851": "efa20d700f54326d32e1b84caddb3633",
".git/objects/c0/fb629cc92fb71d04f59f4158b6bdc3dbacffd5": "56cfb22f77ec1a9bd945023cbeb978ed",
".git/objects/c1/103eda5fb7dd4358865482bb0ce7d58e1e0210": "6e2bd8a41c8c9b43a2ade32f3cf95686",
".git/objects/c1/648f5ae26da675ddb33366248d84edec2b70eb": "3495b1c3c0ea86b77ae1446fa7ad245b",
".git/objects/c2/2390db0a40cc29648a137e42c58d59ad03535d": "5602892aa04c960af5e018f9da6f3af9",
".git/objects/c3/993e899af419d9ab6704fe78ffc3bab725c125": "fdee052506a4bed2c17b8e28bb830314",
".git/objects/c3/d601167da3d0badae5c77a77a959a64151d4fc": "2f6c2aa2c573ebc63f3e2d130af4e03b",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/c4/93bce47ce69188e67aa63f79adcd038266b0ec": "51256dd3d07d1ea6eb5d66aa22f2e43e",
".git/objects/c5/47da64876021ad0a86339909c566d686049060": "bffee1a7934034361abc75d98bee1b69",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/c6/ec8e29f5dced2d7a6b4156d5726b6201d79502": "30433b3037c17ed72f037a9ec13c523d",
".git/objects/c7/c8c7465a1162a1f213a96314e4c21989a2a643": "a1120be0ed264d498553a13397789d38",
".git/objects/ca/3992a59625bd4ffa3b9ac50b980e3187ba5539": "97248bc51b97153c22ddabeaceffb20a",
".git/objects/ca/5dd255a29565d92c57d05a765fbe4a9150a523": "a594e5abf2817d250c0cb671c9ff4b00",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/ca/a72d67d7335c8a3da76e9a8e1710b1b1f0c953": "e301cb99a1825c93c3ce8bc109ad6b74",
".git/objects/ca/c9cfe7762dceba01622bef26fe32b490752d27": "4c3a88ef5efbfd851a794add12c0de30",
".git/objects/ca/d51e8fcdb090ddf0784ae212e1721fb3b9e744": "243104ed3afdc5c6b3d09307fb0f4553",
".git/objects/cb/0956786494f445c2d0f9a70da70436dea8b965": "fe765b803fa57bc01eca0dea19c340eb",
".git/objects/cb/38bf338ca094f9c9a8569ca1c19b541a1818d2": "dcec9281708dba3082a647bb3da34902",
".git/objects/cb/4df24f99872cf97daaebcef4bf781ac19c8db7": "7799f7dd929fbb2465b615b4964cf1ac",
".git/objects/cb/f27294d10310005b92c2d73c28049717e58bc2": "e512da2edaca5b49c18febf4e2d7528b",
".git/objects/cd/19c3caa363497f6d49122aa1429a4dad55e789": "0dc7422e1aa870d52a6e4756ad833003",
".git/objects/ce/ba6a66f9090ebf88b5b9a5a0e639868336c877": "136a6cedc253389ff0a5db60253c6632",
".git/objects/ce/d20c1f0aefc5086ee7e4e89e4ba4c293818e01": "1083a0d039bd1dd39c9252fc28dda4db",
".git/objects/cf/15ff78fcc842c06fb8d28caa10b97b28e1f442": "75762deb521a871456e1fb948f86c32a",
".git/objects/cf/70bbab221e3f5f2da30300dfec21bf2dd93f0f": "120c2855b26cd6e1c8366fa857b29306",
".git/objects/d0/2eb71645c843f89cc56ae88a882c112329f277": "ee712e452ec8fb8915035a23dff8e213",
".git/objects/d1/238ab514183d4b11c8c4da50d9ad0b7cae52b9": "e049f3bef424e3bc7db3db6cf55844a4",
".git/objects/d3/5054efa06aef75dd8157329faf81e4e20992d6": "91dd287353a22d1d38ac6709344b2b34",
".git/objects/d3/f04028afa460fee707de0746fd786342b4cdae": "e96dc45c587e457872337ee20e152211",
".git/objects/d4/0dbe34e88b3b97fc9c9428e3f5591186360133": "53094caf2b8ef8a8001c37fc115115e3",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/76fd749d5cd96bd9b156fcc1c13a7d246758a9": "218d9cde87841efbd19c370c4cb06744",
".git/objects/d5/b6e4c3df390085acd2b6f90a28afdd3efb97f3": "314cea9a53a563f09b70c5060f07a5dd",
".git/objects/d6/2549146d7dcdf561b5fce5a163b972076c447c": "add892cf3d3df5fa28e202039af91854",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/dc372f3ccba039d14146dd6b88f1bc467b37ba": "ff4ea4ce125c837916807843a3e3e86e",
".git/objects/d7/de8daa71a9986d105b6243b1aceb69d4a71a89": "f454c87b72c18b9148daaa3166172b8f",
".git/objects/d8/85667fbe9e56405a6f1a5c82b29805d0262fd9": "2002f80dc9d9808c9810e45fc2f6c194",
".git/objects/d8/87c64b91e033e0e91f7d426f3697d447ffe3dd": "804697340666d71ecd0801d151e972e3",
".git/objects/d8/df9aef99e558a6d9be7fdf1399a78636fdd556": "5604c488543eda4cff894238a961f3f2",
".git/objects/da/30e9b25df424625139c1c8f75705fe521e63ab": "80b3a1e688efe5de01ab98bb14946a44",
".git/objects/da/3707df2704f8f271c66977153ff98598e0b23a": "ac3f753173b03dd2c6ba5814821baeae",
".git/objects/da/51738f660daf5c1dfe0dfed58b8bff780b696e": "509049af29409ab586cdcdc3ab9802de",
".git/objects/de/a0fd66b45b1e4fb2d4351e84e42e750deb4b69": "b3dba47dee5b51591a53b24ed6aaf528",
".git/objects/e0/63796dc1eca5eabd8d9e95ead4b8a851cef3ba": "7a3d5186d9f5ea07efe10d54daa5d4b1",
".git/objects/e3/d037f93fd223ae428b8250ca9fc722119396e8": "3af7b25b076853fad117688f4baa3b1e",
".git/objects/e5/aa50576d91305c9c774fd256ddca8b0edc1eaa": "b208e511489948ee0a8b5a4151351fa1",
".git/objects/e7/0ee8caa9ecfb1428318c62da204b774e2379a4": "bd53063201f283e9dfaf57f32ab090d8",
".git/objects/ea/9fa70ad2c39691a66f0419d7d175c562e13e67": "025d1376cbeb6512e9cd85c77e0dbb8d",
".git/objects/ea/cd8fe34cc3f031c1e24e0dacb11fc58cf1868e": "1635f090192d60f119fdf1039092d369",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/c70ae9d8f48ff7f848020b75e5046bde648ccd": "13c294c65738c89650cc42db6404142e",
".git/objects/eb/f844845a518d2f19133c2ed15a84c13029e705": "acf5c91d3e83302a7b594d1e27c1635a",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/ec/ded8da3a9b72dfe37b7ec41db1112a262c6a78": "4a832bb3bd1dace52303ac3ad94ed6b6",
".git/objects/ed/6411cae6b0065d8270a410e1f2e88b1cb89605": "ae3ada6862cfa3157fb5234d73d1c6ee",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/e9165cb5b38081e33f5dcb53767e89631b8a80": "f70ccc7581b5e096c1be991947203b5b",
".git/objects/f2/f46714b3230cb2387e99f271f7564f846e6ad7": "50a9910e8a00e2b61e3e7949085126a9",
".git/objects/f4/91dd5944e611a6f16e17a8f007da473bdd4c9a": "343bb421f22907b7f9b696503bb7145f",
".git/objects/f5/3592ecbc7d3517662873d9e818797d4110be2f": "d331e291ca76837ddfd8c590a9414d70",
".git/objects/f6/14d6291631cb51bb073d52cb6cf6a596850ebc": "61e7f4da2d2825019c441f56945fc7ee",
".git/objects/f6/9feb740ea49468d17f200b5c0887e2f674ae8e": "b8fb27333f65a7e6ac2aaf5d48b21ab3",
".git/objects/f7/6fa605d864cb363fd2953d6953df3e1320bf60": "b6b1dc121ad406caeb5ef8fc9125551f",
".git/objects/f9/2b184baea6e4e38a3e7b79d179e799595d5e14": "b4c64cff8b225b75b35efcc31b6985cc",
".git/objects/f9/fa58bf33e33be4961ec85cdba48626a2d22d47": "706f664917f497023fd80cfc301180ea",
".git/objects/fa/8206434a89897c95f11024029d279249275239": "820108428f727fbe8a574a2cbdd237df",
".git/objects/fb/32d15a4c018733f6ed086ceb3a5242f90a11ce": "c219a54513c5edd3fbcc74de7c0e4049",
".git/objects/fd/db5b5ddf18e2351b9b4e54e2be2fb80dd86b90": "8c8a6ce81b2f60fd5e636cea0e0ea53d",
".git/objects/fe/44dfe7c56ff3f10d28744c7cb4bc36cc2aa175": "1cafa69016bbbc3edcc7a11536c6ec87",
".git/objects/fe/6c986706084c9703e85d903a6fd5cdc938fe68": "9776e9b25f171e74105a36d61b3f774b",
".git/objects/fe/bb4c1353b8f049fb1b5cd368f1935a135e3229": "9314990814a0fdc5c3e7b8ac82cc72d3",
".git/refs/heads/main": "d7dae9a2927c910835295c22cd192812",
".git/refs/remotes/origin/main": "d7dae9a2927c910835295c22cd192812",
"assets/AssetManifest.bin": "07e2ab1862c952ff8fd8fb2780c4b313",
"assets/AssetManifest.bin.json": "345822017643d492a4f853716754091f",
"assets/AssetManifest.json": "a602c7163f8c268b77ebe3e491d2097e",
"assets/flags/ad.png": "41ad30f26f1d4f9cb506db04c8f41be4",
"assets/flags/ae.png": "3b0c5b1ac1dc9cf57de4c61919e5fd32",
"assets/flags/af.png": "938f4448c21db9591d4b5c2d6711b0fc",
"assets/flags/ag.png": "ebf974332ad5d25c5925706d8850115e",
"assets/flags/ai.png": "375502f77b680215a6a6e1e4779c7443",
"assets/flags/al.png": "4549dfe9db3e3fb2744c3e54c234c25f",
"assets/flags/am.png": "6ce104c2da1e2645e85fdecc28fd2059",
"assets/flags/ao.png": "ec18cc3adc0fa01a289ba3454282d8ff",
"assets/flags/aq.png": "ba53ac71276823242784872c974d001f",
"assets/flags/ar.png": "af2415aa09c21e3f5681d0e9ab8ceade",
"assets/flags/as.png": "f55872585c017537deee20e012521756",
"assets/flags/at.png": "babe669f882d2a1df111f8ee594dbf75",
"assets/flags/au.png": "43df5064129910d4461b66e72d7a5fed",
"assets/flags/aw.png": "d05bddc6c542fe1561ce415c02a4f73b",
"assets/flags/ax.png": "19381c04feb395b478c26342dba9a897",
"assets/flags/az.png": "8ae20d806ef9f3d07c4830f720d83f07",
"assets/flags/ba.png": "60bb82dba120886ef4eb476f9aa176f5",
"assets/flags/bb.png": "4977efc57a9c07396e4d08e0f42ca839",
"assets/flags/bd.png": "f8a089994b30cdaf5f140f1eb540db11",
"assets/flags/be.png": "fa1b20c53fdbd6b019a8150b478aa762",
"assets/flags/bf.png": "509cede23d4c4673a36f33d15bc853d0",
"assets/flags/bg.png": "dc97f484f4bdf66be4575663ea7552dc",
"assets/flags/bh.png": "e5b1b9bf427c1871e61330e539acd94a",
"assets/flags/bi.png": "f7cd1183aefb74e4696b0a3b9bc8075a",
"assets/flags/bj.png": "09a89c322142686d08da873fac277503",
"assets/flags/bl.png": "9828e7b26069fdaa19dd5232e39c9144",
"assets/flags/bm.png": "48f18d474541e906d3c9641ec3fa0298",
"assets/flags/bn.png": "a317bde020329f63f4d7b9672b660e0b",
"assets/flags/bo.png": "7a83327871e7727767181773790bea98",
"assets/flags/bq.png": "8efb436ed6cad02c1ff2c3de1da32a93",
"assets/flags/br.png": "9dc8f5fb3b95eb15bb9cdcf58c11eabb",
"assets/flags/bs.png": "add19da1d6fad860101107a05f73867b",
"assets/flags/bt.png": "e9aeb7b8f37b07f7ebd9ff4719cdb055",
"assets/flags/bv.png": "bd544e904644374e9cce50eff6ccb66d",
"assets/flags/bw.png": "6e32a297de13ca1bab37571c3def18e6",
"assets/flags/by.png": "fb412bcc5160d249b48d08e4e2290471",
"assets/flags/bz.png": "52ad1fe5b2d458ccf6d8340e85f6e8bf",
"assets/flags/ca.png": "b84ec92cf133953886779c4e6e529b22",
"assets/flags/cc.png": "2824fea05cb40bd250234efb747043dd",
"assets/flags/cd.png": "5c6077a69a1f5cc8556dbc619319a617",
"assets/flags/cf.png": "8c9a239522f3eb0f0b2fa1422ee43844",
"assets/flags/cg.png": "9af8a33ef49bb5f2ba16e1be3e8bb63b",
"assets/flags/ch.png": "2beea2f0427107d963a8d531de4f5fb7",
"assets/flags/ci.png": "aa6934f9fdc9c8229873128f885bc9c1",
"assets/flags/ck.png": "81a001559a3847b5200af9e717fcf2f5",
"assets/flags/cl.png": "4fa096e9d89caaad7af7c65fd9762657",
"assets/flags/cm.png": "a3c0217b5a01cabf7779939e89ec9be6",
"assets/flags/cn.png": "37924662da513775626a04f31a0a2123",
"assets/flags/co.png": "e4f59cd529d67da34ef0b05bc4f87c09",
"assets/flags/cr.png": "8b412f7a09cb6942a580ed344885d9f9",
"assets/flags/cu.png": "bfbdb0dca6e03dbc656231562b9fb373",
"assets/flags/cv.png": "6ed26634fa0b42c4bf01535dde1d0e33",
"assets/flags/cw.png": "ad8cdf39aff4de19fc211f498a6830f6",
"assets/flags/cx.png": "2eee72c2d3bd65c18dfd64e806cd882d",
"assets/flags/cy.png": "d784e3660cd4b8b7fe47df24b31f04b6",
"assets/flags/cz.png": "862a1c59ceb88e451c7cf83176f644d5",
"assets/flags/de.png": "a595926243e94ef72ab03bac8f7614f5",
"assets/flags/dj.png": "0d006682d0254cc3d79dbea4ba9ad78d",
"assets/flags/dk.png": "abbcde1f551a7b8a455d44256dee18fa",
"assets/flags/dm.png": "5da6779a555494e6287e5a4d7b2d1be3",
"assets/flags/do.png": "dd58a1d1324d2a05a4ac64f613a81083",
"assets/flags/dz.png": "918c187ae48d7f8a7f487d49a10da36e",
"assets/flags/ec.png": "181be0b89cf95afa8fa09fad890d9408",
"assets/flags/ee.png": "a7c8d59ac1f2fdd285c5244ca174b299",
"assets/flags/eg.png": "2ad3c17ebf5f5f5aaabead25d622645a",
"assets/flags/eh.png": "331aed279b58d300b90a1ad9c1ef5ae8",
"assets/flags/er.png": "8af7db91993355fa116ce6f23e55d685",
"assets/flags/es.png": "75aaf6e30f48a15ea976e93067ff7e0d",
"assets/flags/et.png": "1ac260cd8b162c46b644a89ab568855a",
"assets/flags/euro.png": "4a1e5d29519418cf77a87dffdc2c4a13",
"assets/flags/fi.png": "6a313ee41be9e03ec99cab292460c30a",
"assets/flags/fj.png": "954230152aecfab339c281dd160afaa5",
"assets/flags/fk.png": "4f4ec3a2f71514a7edfe949fd1cef167",
"assets/flags/fm.png": "faa67acc5e84476e8f75e1f870ebf931",
"assets/flags/fo.png": "1acadd2a821299f6d2fe77baf1d32179",
"assets/flags/fr.png": "4171a38cd26221b9af646ba04ffe345e",
"assets/flags/ga.png": "4293eecf88ce20d0261b32aa4f6a74a2",
"assets/flags/gb-eng.png": "da938f96585d9d33c0ba7155ceef8c5e",
"assets/flags/gb-nir.png": "434ba081acd5db8d00f0081e9473598f",
"assets/flags/gb-sct.png": "46d11eeccb5ef72cedef7465d2e60bb4",
"assets/flags/gb-wls.png": "4d631dc64409686951821626ae807f65",
"assets/flags/gb.png": "e11d3017f0b161a4d0b8e7618d6ecf50",
"assets/flags/gd.png": "6f653b26d4da4015f2c521838b6d9783",
"assets/flags/ge.png": "5edcb51c7250b7aaa713dfc1b2e725d4",
"assets/flags/gf.png": "cb93d8541c87a289dcea1ed8dfb49507",
"assets/flags/gg.png": "6f487286204e64e1ae76e04ccb8c2f5c",
"assets/flags/gh.png": "13f50bb1a2feb30b2ef2d3d6e42ae2db",
"assets/flags/gi.png": "ab3b14a1c731c393ccc309e7962acc3d",
"assets/flags/gl.png": "465699471d6d46a897431f5c98ca1199",
"assets/flags/gm.png": "52c234e77242617bac8fed7a8a0f71f3",
"assets/flags/gn.png": "ea4366e2f6a942f257023a3204242faa",
"assets/flags/gp.png": "bd5f3c8a393459eab8eec27817614ebc",
"assets/flags/gq.png": "f4d10ab4a537485de31bf4a6619e2dc9",
"assets/flags/gr.png": "a5f5e827cb6603d919332adc7ea9d2ed",
"assets/flags/gs.png": "a1ba33a3f330124765171020a133c454",
"assets/flags/gt.png": "abd740de7aaccaaa4e9bdfe58e16740f",
"assets/flags/gu.png": "846f1d6936514f410d6e629ab3532a3c",
"assets/flags/gw.png": "5d72ca40936227f8d874678f325d2f52",
"assets/flags/gy.png": "c0b9c72c75c7221dcc5537f87345b8f1",
"assets/flags/hk.png": "5090db853ca2b9c3c60966dac932985c",
"assets/flags/hm.png": "70f75522d48fc2f2ae25c981e206bdca",
"assets/flags/hn.png": "a0f3fdd3fd2f265cdb03d4c93ca36f1d",
"assets/flags/hr.png": "8f2dbcfa65b7262d17b7d0f45582a267",
"assets/flags/ht.png": "8754ffed6821a1f271b133527066c14a",
"assets/flags/hu.png": "4d3388259bb7211607445c54c12e13bf",
"assets/flags/id.png": "0d6f99c244d1920ade4fddbc945483ca",
"assets/flags/ie.png": "33f22e43fbdf0419584f516933a0f740",
"assets/flags/il.png": "b05f2ec2103ccad1a8c2f83c2a41ac71",
"assets/flags/im.png": "f9b6be16a8ef6343855d6664d046e4b5",
"assets/flags/in.png": "85ef01515470d3bcff487816d9d6bb42",
"assets/flags/io.png": "bcfe84f7bc66f406fa65713f864c900a",
"assets/flags/iq.png": "97ebfa63544c63e05d0a7e49aa453fb9",
"assets/flags/ir.png": "caf8c455aa02c4cd01c80c02d1604a71",
"assets/flags/is.png": "e9ab06dab7d9a0b4cf4a5ff2042a73c7",
"assets/flags/it.png": "c453be8ba8ea885868064bc8b94f5c4a",
"assets/flags/je.png": "4f45cce8e2597f886e77ead8446dcb96",
"assets/flags/jm.png": "a221d202141c677baf3c8aad179136cf",
"assets/flags/jo.png": "f2de34fb78bc3cd936adc9cc3109c2bb",
"assets/flags/jp.png": "0a9b8ce718ba4b1f38b9d182b9fe43d2",
"assets/flags/ke.png": "d1cb534b8f80377351ffbaa56b64196e",
"assets/flags/kg.png": "bb9d2506eee1cb8aa1cf6bdf1f03ab0e",
"assets/flags/kh.png": "b889965c4759454da9c0c3892b5e6a26",
"assets/flags/ki.png": "5ecea7aa3f13c8ad18c61befa9fbe376",
"assets/flags/km.png": "bda8279b23bda7eb1bf812d7b1bcedb5",
"assets/flags/kn.png": "41f1fcd201d37ebb68b43e65d1fd927d",
"assets/flags/kp.png": "8965adbf0f804dddb55e5c63298995f7",
"assets/flags/kr.png": "f1bc02b3079a9722ae5bb7499450ca6b",
"assets/flags/kw.png": "cf64b4a36f8df8fd80c433a639210330",
"assets/flags/ky.png": "b38445973a91ad30663eec7835943510",
"assets/flags/kz.png": "7e6636fc49e111803858873a0c10e30d",
"assets/flags/la.png": "17f96ee73fa16548c5d4738dc14213e3",
"assets/flags/lb.png": "a7f3597824237c910b52d81edfd221b3",
"assets/flags/lc.png": "9fc51ce0a2e2a035dfc5c0eec4cf9076",
"assets/flags/li.png": "0bf3ef084fbf1ac5306c67476a8f035b",
"assets/flags/lk.png": "673670ba0058a6687e940294e2f67423",
"assets/flags/lr.png": "2fdff8c3e5a080c53b6c3c8f150f24be",
"assets/flags/ls.png": "11f095ecb131542cc1b4d14e87e81daf",
"assets/flags/lt.png": "9d880897c684de6da99a118809bbee99",
"assets/flags/lu.png": "708505b67d961d8a60fd03ac90d956ca",
"assets/flags/lv.png": "eb13ebe42a9493a7e2cde2760f41398d",
"assets/flags/ly.png": "f89d4558a7e49fb37ccef2fa5a24b912",
"assets/flags/ma.png": "b06150d5533bbfc790088c90740f95b8",
"assets/flags/mc.png": "cb84319868e6b729b0a93c772e243607",
"assets/flags/md.png": "890cb1047814ad840e2d8d9a445b7b0a",
"assets/flags/me.png": "9c4d530fe3b90497cd08ded4f23bd6e9",
"assets/flags/mf.png": "4171a38cd26221b9af646ba04ffe345e",
"assets/flags/mg.png": "728032b0b0a25ee9a1afd289b4961b26",
"assets/flags/mh.png": "d107461ebfa4cb4913084c4043d1a841",
"assets/flags/mk.png": "cb23de039bd89d48f61b6cdbef0f4363",
"assets/flags/ml.png": "89a5b772d3f3e6b56d803e7b58fd2c26",
"assets/flags/mm.png": "8e0784ee1a2fb5a14072ff6798d1ba0f",
"assets/flags/mn.png": "7018e84208852af2f0b8e07e5f52b573",
"assets/flags/mo.png": "d212249d78a3dc2b561bb4ca71f9ea0d",
"assets/flags/mp.png": "4e217c182fc2f0791c9b8cfe63fa42b5",
"assets/flags/mq.png": "fd1a2c0a2c409f16b0d2db90c0baa294",
"assets/flags/mr.png": "b30e2dc7499bcdca5da453440d379200",
"assets/flags/ms.png": "6ddedf067572dfb7708c138471727ccf",
"assets/flags/mt.png": "c47c52e6e026723b63c5678838638fe6",
"assets/flags/mu.png": "8dfbeaf1eee329f64b84499320c4f805",
"assets/flags/mv.png": "519c433c77e3ec54130593c95502532f",
"assets/flags/mw.png": "9cb561301c0adcaea665e9905112c01a",
"assets/flags/mx.png": "28395bf979b6164be996b6f3daaeea1f",
"assets/flags/my.png": "94955deaf0cbff7f52d7901f1d25c8ec",
"assets/flags/mz.png": "34242fb3bf37683616111dd4197c5b74",
"assets/flags/na.png": "b30d5ae0826664ce5781c2169c824414",
"assets/flags/nc.png": "aa465f16908fd5f57ba303cf85db29ed",
"assets/flags/ne.png": "a6fcdcad2379e878c776d9cd04bce21b",
"assets/flags/nf.png": "ab7d27b37b40dde04497250cd15de22d",
"assets/flags/ng.png": "0a05f447b8d844c7142a3c727d72a5fa",
"assets/flags/ni.png": "13579b5be9db8a12113d3a558ab5fc5d",
"assets/flags/nl.png": "e3e56ca1dbbeaeac53e763844f638625",
"assets/flags/no.png": "bd544e904644374e9cce50eff6ccb66d",
"assets/flags/np.png": "4bbe669a7c8f0ba73c8f2531b6d2f8ad",
"assets/flags/nr.png": "74e8f8442918f8ac1d6bd0b635c00df1",
"assets/flags/nu.png": "aa0fb642c2dbe26e50f3869d47983982",
"assets/flags/nz.png": "3690e132d6f697a5a31a3164fdfc9a84",
"assets/flags/om.png": "3530786e63d467a1dd32ce5d26bfef03",
"assets/flags/pa.png": "d4e77ca8e56ea1e3987fb1c7adbbd1c3",
"assets/flags/pe.png": "58532e5bfcecdc883e5a59b198b4d21c",
"assets/flags/pf.png": "10dd23e44e42e0b0abfb28dec08dff2d",
"assets/flags/pg.png": "8e14fe774713dc11f57f2bb9090b7376",
"assets/flags/ph.png": "d1724d839f24f18ff29c66e8d4b720a7",
"assets/flags/pk.png": "3265d8af6452a335532ea41cb462226b",
"assets/flags/pl.png": "784cf1acab1eddca4a102cb59ce3572f",
"assets/flags/pm.png": "43f15ecb644b6bf59b72f465e41a3233",
"assets/flags/pn.png": "a611f9b544848463490caec1136b47c2",
"assets/flags/pr.png": "c20a28f5187a7e1fc86f50ed1d74d389",
"assets/flags/ps.png": "a383451ba50bee526ab173b192f4e0d5",
"assets/flags/pt.png": "6d3fc2221d184276d09189a6f1a25337",
"assets/flags/pw.png": "433e9d2cb9c4bb52084e4746e26adac8",
"assets/flags/py.png": "497818906e272d74db6b840fdcb0abce",
"assets/flags/qa.png": "43848b26b62720d553d024ffeabc6edd",
"assets/flags/re.png": "4f17da674024a1ac29b7a2b1a7a81bab",
"assets/flags/ro.png": "6e8339e430460335f9e23282a97e7f99",
"assets/flags/rs.png": "1ca2a334afc869eb129f510eae4983b8",
"assets/flags/ru.png": "3b9d8d5a12260bdad64c53f6a703e8d7",
"assets/flags/rw.png": "baf6acbf138426fa5da7d30cebd94d71",
"assets/flags/sa.png": "c41ab5105a2ae77144f762186ad6f328",
"assets/flags/sb.png": "b50f0cd6552604e8d652f94a3b887af8",
"assets/flags/sc.png": "cd0f171050099dd652d6321eb3bc9770",
"assets/flags/sd.png": "f68d9025ebf360589fe2555203974cb0",
"assets/flags/se.png": "7fc281242a415c5e20511e905bb8ad5d",
"assets/flags/sg.png": "69b4394a8b1c505dec2dd31ba683aef8",
"assets/flags/sh.png": "ce665eb769329b1b34ddda9842c8bacb",
"assets/flags/si.png": "a08f89022f590c8ef333545cb09d1e9e",
"assets/flags/sj.png": "bd544e904644374e9cce50eff6ccb66d",
"assets/flags/sk.png": "27ad552ad19176c8498ac3eb7fadee4f",
"assets/flags/sl.png": "171ef57a09c778a1a54d5e6bf53b62f1",
"assets/flags/sm.png": "4af1b9a15b3db33059a0a17820079d6d",
"assets/flags/sn.png": "7cd9039c0abe09d59169302115e3e871",
"assets/flags/so.png": "f10b9395296ff43fe8ff63e2df289745",
"assets/flags/sr.png": "d1ed06fcb08fd1b27b68f8ac74461227",
"assets/flags/ss.png": "1b838dd5ed39e1688dd827a9f6f0883d",
"assets/flags/st.png": "648131cf78e238c37ab5916234ed44b2",
"assets/flags/sv.png": "f05df87a6a535e3a44c8359445abbd0c",
"assets/flags/sx.png": "e4bb57619a9fb7fa6d55632ad42ead61",
"assets/flags/sy.png": "3f6fc713630cedc036432a67cc2542e0",
"assets/flags/sz.png": "327c90674ddb9423cab8befd7af97c12",
"assets/flags/tc.png": "ceb97bf3112c5ef73346bb4264ee86fd",
"assets/flags/td.png": "53c2d5404a838d3161efe28d5c83d924",
"assets/flags/tf.png": "135f98f4bfa39a4683ba52720e8abb67",
"assets/flags/tg.png": "2bfc53eeaf129898ce5d3e3d560b8842",
"assets/flags/th.png": "2e8a9ec321739fba4f9ab4878b7fb15c",
"assets/flags/tj.png": "c9b8561313bf9d4eb0543d42d5a1e237",
"assets/flags/tk.png": "5c131862fb337c79f2f8d8c6ede57472",
"assets/flags/tl.png": "432c954f00197de1f2da5b680dafba1e",
"assets/flags/tm.png": "5637bd4d79bdf140a22a377865b99f41",
"assets/flags/tn.png": "cfc44f6037888ec45f376fd4821939c7",
"assets/flags/to.png": "9dce2fac56df37b22238f336b2ed2c2a",
"assets/flags/tr.png": "b137e9809f52aa03c8d7a0e6b74aa71a",
"assets/flags/tt.png": "febeacc7b91c273a1394e541ba6e0dfc",
"assets/flags/tv.png": "be082f25b9f35a088e229eee67009578",
"assets/flags/tw.png": "8055787722f62014a98983b5d6ae4036",
"assets/flags/tz.png": "abe95809550f6864a3e447e6d2b1e4cd",
"assets/flags/ua.png": "bb3648dcbac155c096c80a8d8d2938e1",
"assets/flags/ug.png": "042d803d01081673e1cda05bfebd7635",
"assets/flags/um.png": "e80da527c5103fb9a914d82b6984717b",
"assets/flags/us.png": "e80da527c5103fb9a914d82b6984717b",
"assets/flags/uy.png": "1cf5f6b781f521ff990d3b1194d2aac1",
"assets/flags/uz.png": "7d2c18314a0589dab0698b3fe1f23b14",
"assets/flags/va.png": "8420151d5bee8b1cf7ca36291032c1fa",
"assets/flags/vc.png": "26991b8ed9999c89222349bb68be4a6b",
"assets/flags/ve.png": "698e6aa5458a2fd77ddaae8cda4a3be4",
"assets/flags/vg.png": "5570de6e1b7ce02f5b1e3e2da41ece74",
"assets/flags/vi.png": "47d95883ab65a0c9e16ff70bcbb2c193",
"assets/flags/vn.png": "ec1c5f2c2ffa604b4a637bafe5054f0d",
"assets/flags/vu.png": "4eda7be8aaec518d7237779bea68672b",
"assets/flags/w.png": "e833b5402ea0b6e996685ade03d0b1d5",
"assets/flags/wf.png": "8cbea023901271691f3dedfbd4717fb4",
"assets/flags/ws.png": "2450323cd0bd798a167c485fccf2616a",
"assets/flags/xk.png": "7f3501e65bf1aa8f18cee46533016e9e",
"assets/flags/ye.png": "e206a90d887b890ee5da4a865c062b53",
"assets/flags/yt.png": "d622f5f631574e7451493366a2c70815",
"assets/flags/za.png": "fe0365768a85259e1fa41d84ea30deac",
"assets/flags/zm.png": "cad48eafa39c48b010e57066b5bb2717",
"assets/flags/zw.png": "b851e8a51032bd3a70b4aba6dc517218",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "e29223be2fa6451c05f5cab765c52b4b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "7c77bc0619ff74e116fa2b0276f69938",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "eceb6dab2e65740de4d0e47ba2ce9ffe",
"/": "eceb6dab2e65740de4d0e47ba2ce9ffe",
"main.dart.js": "b9d377229d9e0bf993d8e4e5faf9bfaa",
"manifest.json": "36a4e93879d03bef7d1a080187bca2e9",
"version.json": "3e4740273a24838ef6934ac7660a3c94"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
