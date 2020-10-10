const Blockchain = require('./blockchain');
const bitcoin = new Blockchain();


const bc1 = {
  "chain": [
    {
      "index": 1,
      "timestamp": 1602372645417,
      "transactions": [],
      "nonce": 100,
      "hash": "0",
      "previousBlockHash": "0"
    },
    {
      "index": 2,
      "timestamp": 1602372661473,
      "transactions": [],
      "nonce": 18140,
      "hash": "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100",
      "previousBlockHash": "0"
    },
    {
      "index": 3,
      "timestamp": 1602372717195,
      "transactions": [
        {
          "amount": 12.5,
          "sender": "00",
          "recipient": "9ec87a800b5011eba68d8155da6da762",
          "transactionId": "a85e17800b5011eba68d8155da6da762"
        },
        {
          "amount": 10,
          "sender": "A98S7D89AS7D89AS",
          "recipient": "32AS1D3AS4D56AS13D",
          "transactionId": "bbaabc300b5011eba68d8155da6da762"
        },
        {
          "amount": 20,
          "sender": "A98S7D89AS7D89AS",
          "recipient": "32AS1D3AS4D56AS13D",
          "transactionId": "bdbcac400b5011eba68d8155da6da762"
        },
        {
          "amount": 20,
          "sender": "A98S7D89AS7D89AS",
          "recipient": "32AS1D3AS4D56AS13D",
          "transactionId": "bdd0d0800b5011eba68d8155da6da762"
        },
        {
          "amount": 30,
          "sender": "A98S7D89AS7D89AS",
          "recipient": "32AS1D3AS4D56AS13D",
          "transactionId": "c06055000b5011eba68d8155da6da762"
        }
      ],
      "nonce": 57634,
      "hash": "0000de00ea08bc56d45512f34d92cb6cd24a92df7a2ff0ff54424e9f584bd622",
      "previousBlockHash": "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100"
    },
    {
      "index": 4,
      "timestamp": 1602372738843,
      "transactions": [
        {
          "amount": 12.5,
          "sender": "00",
          "recipient": "9ec87a800b5011eba68d8155da6da762",
          "transactionId": "c9918ae00b5011eba68d8155da6da762"
        },
        {
          "amount": 40,
          "sender": "A98S7D89AS7D89AS",
          "recipient": "32AS1D3AS4D56AS13D",
          "transactionId": "cfb4bd700b5011eba68d8155da6da762"
        },
        {
          "amount": 50,
          "sender": "A98S7D89AS7D89AS",
          "recipient": "32AS1D3AS4D56AS13D",
          "transactionId": "d13088000b5011eba68d8155da6da762"
        },
        {
          "amount": 60,
          "sender": "A98S7D89AS7D89AS",
          "recipient": "32AS1D3AS4D56AS13D",
          "transactionId": "d26cd8900b5011eba68d8155da6da762"
        },
        {
          "amount": 70,
          "sender": "A98S7D89AS7D89AS",
          "recipient": "32AS1D3AS4D56AS13D",
          "transactionId": "d38219200b5011eba68d8155da6da762"
        }
      ],
      "nonce": 98388,
      "hash": "00002cc32e473076332c687d14de997a4e9f260d7d6c5a7f4f39701699f108f5",
      "previousBlockHash": "0000de00ea08bc56d45512f34d92cb6cd24a92df7a2ff0ff54424e9f584bd622"
    },
    {
      "index": 5,
      "timestamp": 1602372750322,
      "transactions": [
        {
          "amount": 12.5,
          "sender": "00",
          "recipient": "9ec87a800b5011eba68d8155da6da762",
          "transactionId": "d6789cd00b5011eba68d8155da6da762"
        }
      ],
      "nonce": 162994,
      "hash": "0000f85f3cc1f5724d89096927f6430ac9ed7a3eb25be4c8eb872535ad83821f",
      "previousBlockHash": "00002cc32e473076332c687d14de997a4e9f260d7d6c5a7f4f39701699f108f5"
    },
    {
      "index": 6,
      "timestamp": 1602372755062,
      "transactions": [
        {
          "amount": 12.5,
          "sender": "00",
          "recipient": "9ec87a800b5011eba68d8155da6da762",
          "transactionId": "dd50ee900b5011eba68d8155da6da762"
        }
      ],
      "nonce": 138409,
      "hash": "00003847acc2e90b5c0c39fca76311d8ff2f2785eea1364de7f1636d46f436e2",
      "previousBlockHash": "0000f85f3cc1f5724d89096927f6430ac9ed7a3eb25be4c8eb872535ad83821f"
    }
  ],
  "pendingTransactions": [
    {
      "amount": 12.5,
      "sender": "00",
      "recipient": "9ec87a800b5011eba68d8155da6da762",
      "transactionId": "e02396900b5011eba68d8155da6da762"
    }
  ],
  "currentNodeUrl": "http://localhost:3001",
  "networkNodes": []
};

console.log('VALID: ', bitcoin.chainIsValid(bc1.chain));