import Web3 from 'web3'
import { ERC20ABI } from '~/logic/abi/erc20'

declare global {
  interface Window {
    ethereum: any
    web3: any
  }
}

export class Web3Invoker {
  contractsABI = {
    ERC20ABI
  }

  async approve(spender: string, token: string, amount: string) {
    const web3Obj = new Web3(window.ethereum)
    await window.ethereum.enable()

    // @ts-ignore
    const contract = new web3Obj.eth.Contract(JSON.parse(this.contractsABI.ERC20ABI), token)

    await contract.methods.approve(spender, amount).send({ from: await this.resolveCurrentAddress() })
  }

  async getBalanceOf(holder: string, token: string): Promise<{ balance: number }> {
    const web3Obj = new Web3(window.ethereum)
    await window.ethereum.enable()

    // @ts-ignore
    const contract = new web3Obj.eth.Contract(JSON.parse(this.contractsABI.ERC20ABI), token)
    const balance = await contract.methods.balanceOf(holder).call()
    // const allowance = await contract.methods.allowance(address, spender).call()

    return { balance }
  }

  async getBalanceAndAllowance(address: string, token: string, spender: string): Promise<{ balance: number; allowance: number }> {
    const web3Obj = new Web3(window.ethereum)
    await window.ethereum.enable()

    // @ts-ignore
    const contract = new web3Obj.eth.Contract(JSON.parse(this.contractsABI.ERC20ABI), token)
    const balance = await contract.methods.balanceOf(address).call()
    const allowance = await contract.methods.allowance(address, spender).call()

    return { balance, allowance }
  }

  async resolveCurrentAddress() {
    const accs = await window.web3.eth.getAccounts()
    return accs[0]
  }
}

class Web3WalletConnector {
  ethEnabled(): boolean {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      window.ethereum.enable()
      return true
    }
    return false
  }
}

export default Web3WalletConnector
