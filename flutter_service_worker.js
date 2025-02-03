'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "44b85a4e71c3a1362a56f86672ea0df0",
"assets/AssetManifest.bin.json": "3048a84312a0e710a549caef1ae2baf1",
"assets/AssetManifest.json": "bbd9514620762d12eeb022cfbd09fd81",
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
"flutter_bootstrap.js": "daec2355aee8fb4faa1b37c195df74c5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "eceb6dab2e65740de4d0e47ba2ce9ffe",
"/": "eceb6dab2e65740de4d0e47ba2ce9ffe",
"main.dart.js": "747a0ff5fc773651072fdbacb480faaf",
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
