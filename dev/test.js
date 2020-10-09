const Blockchain = require('./blockchain');
const bitcoin = new Blockchain();

const previousBlockHash = 'ASD89A7S89DA5SD65A4';
const currentBlockData = [
    {
        amount: 10,
        sender: 'ANSDNASNDASDAPOSEQ',
        recipient: 'WQE87QW89E7QAS4D56A4S'
    },
    {
        amount: 30,
        sender: 'QWIOUEOIPQWU123IOU1P',
        recipient: 'LSDJALÇK23ASLDKKAS12'
    },
    {
        amount: 200,
        sender: '8D7F8SAD5DSF65SDA',
        recipient: '1F2SDA1FSADDS3F21ASD'
    }
];
const nonce = 100;

console.log(bitcoin.hashBlock(previousBlockHash, currentBlockData, nonce));
