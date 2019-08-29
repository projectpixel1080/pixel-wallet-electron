var config = {};

// self explanatory, your application name, descriptions, etc
config.appName = 'The Pixel Project';
config.appDescription = 'Pixel Wallet';
config.appSlogan = 'Welcome to our 8 bit dreamland!';
config.appId = 'pixel.rocks';
config.appGitRepo = 'https://github.com/projectpixel1080/Project-Pixel';

// default port number for your daemon (e.g. TurtleCoind)
config.daemonDefaultRpcPort = 43111;

// wallet file created by this app will have this extension
config.walletFileDefaultExt = 'pxl';

// change this to match your wallet service executable filename
config.walletServiceBinaryFilename = 'pixel-service';

// version on the bundled service (turtle-service)
config.walletServiceBinaryVersion = "V1.1.0";

// config file format supported by wallet service, possible values:
// ini -->  for turtle service (or its forks) version <= v0.8.3
// json --> for turtle service (or its forks) version >= v0.8.4
config.walletServiceConfigFormat = "json";

// default port number for your wallet service (e.g. pixel-service)
config.walletServiceRpcPort = 8070;

// block explorer url, the [[TX_HASH]] will be substituted w/ actual transaction hash
config.blockExplorerUrl = 'https://explorer.pixel.rocks/?hash=[[TX_HASH]]';

// default remote node to connect to, set this to a known reliable node for 'just works' user experience
config.remoteNodeDefaultHost = '185.105.4.162:43111';


// remote node list update url, set to null if you don't have one
// for TRTL:
// raw list: https://raw.githubusercontent.com/turtlecoin/turtlecoin-nodes-json/master/turtlecoin-nodes.json
// filtered: https://trtl.nodes.pub/api/getNodes
config.remoteNodeListUpdateUrl = 'null';

// set to false if using raw/unfiltered node list
config.remoteNodeListFiltered = true;

// fallback remote node list, in case fetching update failed, fill this with known to works remote nodes
config.remoteNodeListFallback = [
  '185.105.4.127:43111',
  '142.54.191.58:43111',
  '192.243.108.166:43111',
];
config.remoteNodeCacheSupported = false;
config.remoteNodeSslSupported = false;

// your currency name
config.assetName = 'Pixel';
// your currency ticker
config.assetTicker = 'PXL';
// your currency address prefix, for address validation
config.addressPrefix = 'PixEL';
// standard wallet address length, for address validation
config.addressLength = 99;
// integrated wallet address length, for address validation. Added length is length of payment ID encoded in base58.
config.integratedAddressLength = config.addressLength + ((64 * 11) / 8);

// minimum fee for sending transaction
config.minimumFee = 0.1;
// minimum amount for sending transaction
config.mininumSend = 0.1;
// default mixin/anonimity for transaction
config.defaultMixin = 3;
// to represent human readable value
config.decimalPlaces = 2;
// to convert from atomic unit
config.decimalDivisor = 10 ** config.decimalPlaces;

// obfuscate address book entries, set to false if you want to save it in plain json file.
// not for security because the encryption key is attached here
config.addressBookObfuscateEntries = true;
// key use to obfuscate address book contents
config.addressBookObfuscationKey = '79009fb00ca1b7130832a42de45142cf6c4b7f333fe6fba5';
// initial/sample entries to fill new address book
config.addressBookSampleEntries = [
  {
    name: 'Pixel Donation',
    address: 'PixELT66wQ6QRSyiXbqs5vNAnVRv8GD8m36puU99wCfRL1BGRwGYxxr4unzGPDNRp8bfoLwCjbjyNTwqCzyMrwimCahXWvv8W4N',
    paymentId: '',
  }
];
// cipher config for private address book
config.addressBookCipherConfig = {
  algorithm: 'aes-256-gcm',
  saltLenght: 128,
  pbkdf2Rounds: 10000,
  pbkdf2Digest: 'sha512'
};

module.exports = config;
