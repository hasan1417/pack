import style from './main.css'
import web3 from 'web3'
import {Transaction} from '@ethereumjs/tx'

var gateway = new web3('https://rinkeby.infura.io/v3/0f3d9f30356e48c7b048c0b6a6c8ceae')
var abi = [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [],
      "name": "starName",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "starOwner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "claimStar",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]

var con = new gateway.eth.Contract(abi,'0x444C514e0AE9dA12Db399A2d30124ADbB96f8EC4')

const privateKey = new Buffer.from('238ac0d1df6546ace3f62cfc8022caf1305d28bd7a474b67f085f4eedb9ff2d0','hex')

console.log(privateKey)