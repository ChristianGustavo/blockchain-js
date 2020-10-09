const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();

bitcoin.createNewBlock(987987, 'AS0A9S9ASAN0A9N0A9', 'NA09NA9N0A90AN');

bitcoin.createNewTransaction(100, 'ALEXD9AS89DSA', 'JENN1D23AS1ASD1');

bitcoin.createNewBlock(123123, 'QE87QW9EQW7E9Q', 'V97N9VB87N9V7B');

bitcoin.createNewTransaction(50, 'ALEXD9AS89DSA', 'JENN1D23AS1ASD1');
bitcoin.createNewTransaction(300, 'ALEXD9AS89DSA', 'JENN1D23AS1ASD1');
bitcoin.createNewTransaction(2000, 'ALEXD9AS89DSA', 'JENN1D23AS1ASD1');

bitcoin.createNewBlock(9879879, 'ASDASDA8S97D', 'ASDASD321ASDAS1');

console.log(bitcoin.chain[2]);