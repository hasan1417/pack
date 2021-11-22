import style from './main.css'
import web3 from 'web3'
import {Transaction} from '@ethereumjs/tx'
import { ethers } from 'ethers'

// var gateway = new web3('https://rinkeby.infura.io/v3/0f3d9f30356e48c7b048c0b6a6c8ceae')
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

const privateKey = new Buffer.from('238ac0d1df6546ace3f62cfc8022caf1305d28bd7a474b67f085f4eedb9ff2d0','hex')

  // var con = new gateway.eth.Contract(abi,'0x444C514e0AE9dA12Db399A2d30124ADbB96f8EC4')

// console.log(privateKey)

const txParams = {
    from: '0x20f2E66DA9315D447b22059F154ed1E016d41369',
    nonce: '0x0c',
    gasPrice: '0x4a717c800',
    gasLimit: '0xc340',
    to: '0x9b1B39881355869821f83096eB1a2B9B4DF15286',
    value: '0x00',
    data: '0x',
  }



  const tx = new Transaction(txParams)

  // console.log(tx)

  // tx.sign(privateKey,'0x20f2E66DA9315D447b22059F154ed1E016d41369')

  // const serializedTx = tx.serialize()



const infuraProvider = new ethers.providers.InfuraProvider('rinkeby', '0f3d9f30356e48c7b048c0b6a6c8ceae');
const wallet = new ethers.Wallet(privateKey, infuraProvider);
const signer = wallet.connect(infuraProvider);
// const contract = new ethers.Contract('0x444C514e0AE9dA12Db399A2d30124ADbB96f8EC4', abi, signer);

// contract.functions.claimStar()

// contract.functions.starOwner().then(data=>console.log(data))
  // infuraProvider.sendTransaction('0x'+serializedTx.toString('hex'))
  // infuraProvider.getTransactionCount('0x20f2E66DA9315D447b22059F154ed1E016d41369').then(nonce => console.log(ethers.utils.hexlify(nonce)))

  signer.signTransaction(txParams).then(signedTx => {
    console.log(signedTx)
    infuraProvider.sendTransaction(signedTx).then(data=>console.log(data))
  })