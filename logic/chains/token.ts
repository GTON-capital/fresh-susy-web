import { AvailableChains, Chain } from './chain'

type BridgeTokenCfg = {
  assetId: string
  decimals: number
}

export interface ChainBridgeConfig {
  meta?: Record<string, any>
  token: {
    origin: BridgeTokenCfg
    dest: BridgeTokenCfg
  }
  sourcePort: string
  destinationPort: string
}

export class GatewayBridge {
  origin: Chain
  destination: Chain
  cfg: ChainBridgeConfig

  constructor({ origin, destination, cfg }: { origin: Chain; destination: Chain; cfg: ChainBridgeConfig }) {
    this.origin = origin
    this.destination = destination
    this.cfg = cfg
  }
}

export const availableOriginChains = (bridge?: GatewayBridge[]) => {
  return (
    bridge?.reduce((acc: Chain[], current: GatewayBridge) => {
      const existing = acc.map((x) => x.id)

      if (!existing.includes(current.origin.id)) {
        return [...acc, current.origin]
      }

      return acc
    }, []) ?? []
  )
}
export const availableDestChains = (bridge?: GatewayBridge[]) => {
  return bridge?.map((x: GatewayBridge) => x.destination) ?? []
}
export const pickBridgeGateway = (bridgeList: GatewayBridge[], origin: Chain, dest: Chain): GatewayBridge | null => {
  for (const bridge of bridgeList) {
    if (bridge.destination.id === dest.id && bridge.origin.id === origin.id) {
      return bridge
    }
  }

  return null
}

export class MultichainGateway {
  origin: Chain
  destination: Chain[]

  constructor({ origin, destination }: { origin: Chain; destination: Chain[] }) {
    this.origin = origin
    this.destination = destination
  }

  // consumeDirection(from: Chain, to: Chain) {
    
  // }
}

export type Token = {
  ticker: string
  label: string
  icon: string
  bg: string
  gateway: MultichainGateway
}

export const AvailableTokens: Record<string, Token> = {
  SUSY: {
    ticker: 'SUSY',
    label: 'SuSy Token',
    bg: 'black',
    icon: '/img/icons/tokens/SUSY.svg',
    gateway: new MultichainGateway({
      origin: AvailableChains.Solana,
      destination: [AvailableChains.BSC, AvailableChains.Fantom, AvailableChains.Polygon]
    })
  }
}

export function formLinkForChain(chain: Chain, address: string): string {
  switch (chain.id) {
    case AvailableChains.BSC.id:
      return `https://bscscan.com/address/${address}#tokentxns`
    case AvailableChains.Avax.id:
      return `https://cchain.explorer.avax.network/address/${address}#tokentxns`
    case AvailableChains.Ethereum.id:
      return `https://etherscan.io/address/${address}#tokentxns`
    case AvailableChains.Heco.id:
      return `https://hecoinfo.com/address/${address}#tokentxns`
    case AvailableChains.Fantom.id:
      return `https://ftmscan.com/address/${address}#tokentxns`
    case AvailableChains.Solana.id:
      return `https://explorer.solana.com/address/${address}/tokens`
  }

  return ''
}

export function getAvailableTokens(): Token[] {
  return [AvailableTokens.GTONMainnet]
}

export function grabSolanaUserTokens(): string[] {
  return []
}

export function grabEVMUserTokens(): string[] {
  return []
}
