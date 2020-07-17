require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict clock orphan spray educate robot net purchase install clog orange total'; 
let testAccounts = [
"0x110baaa92c24360fec38167c27d10b0474719bcd1c031d9cba490eb63047f111",
"0x611d0ffb3368789c7a684c0e540d9a9b1fa7d8a3dc2f806151f5914b88e3babf",
"0x7ec19f042b31ec101c408556957d11699aa5f5b441ec6c9932230e1dbc5799b2",
"0xfa0d2272079db795815ed74909397aaec0d68bc64efce9d1f2fe33965dfbdaad",
"0xda7af715b88ae76a49eec04a35cfb61fe15c54608a0e0689fee632ee792013aa",
"0x859e5eb53ad182d1be711a3bbb147951fadb829c1e113cb51c7014c672391b8d",
"0xa40a4e33883ac6a7ad7237ce55eaa28990ab0034cd2c1f797f8983c2e2330f55",
"0x2f3d365facb4e319ed3136eb294cba6002ad7f53f176bf1fbe846838e8e87714",
"0xe014d57c0a8569187bd9607e7b2b3a7d7e7220a6a94a6f9b7c7265437dbac47a",
"0x130d86fe210d7be45d31141a7215050ac77b5b2e2116cfa6f94024e6c8076270"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
