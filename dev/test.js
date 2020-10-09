const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();

bitcoin.createNewBlock(2389, 'OINA90SSDNF90N', '90ASDAS90ASDASD');
bitcoin.createNewBlock(111, 'IQOWUEIOPQWU', '0ZX9C0XZXZCZX0C');
bitcoin.createNewBlock(2899, 'NMNBMBNERTRTMB', 'DFGTTTDFGTERT');

console.log(bitcoin);