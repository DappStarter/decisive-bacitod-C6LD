require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good climb surge traffic number crater remain equip gloom entry bridge siege'; 
let testAccounts = [
"0x49bce80a00b4c5b1ae2f2b1506885efbc8884812219a0604c5f58d5b897dcb6a",
"0x261138b0d7e247a2fd250a9742ff224c80d77ffda09be3f834e7a423fac2a8b6",
"0x9518302101e88a7ec10f1903f6a42e38d1a3a7f12bc7ffe418e9ba32d7a93973",
"0x640e87e09d83b9207f124d53aff194ef1e33747621171cd78f9596ab23a5614b",
"0x34096aeb7b90380bd67b255625fd2078de8425d4ec7171c33cfd98c262a3a57b",
"0xbcf69f0cf953006e23da4b62c24bdf15c0796783995f428822a5a8227d71876f",
"0x4ad184d6e2b1ff7ed1360dde1db37585d71ec9d554405494d91f1eae2000c501",
"0x9353d67b27ddc7eb3c1d6eceac36cc4a16191ac0ce1f89b5bb93728f2e65d427",
"0xf562be47cdfbe248b6121746700cfaaa33cefa389cbe111d697af9ce2caf5595",
"0x21aad01a8b38b29522d9d16dadd7b835081177a85afd13de4cfb3dae1e3f5bfe"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


