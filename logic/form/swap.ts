import { isNil } from 'lodash'
import { FormValidationBuilder } from './validate'

export type SwapProps = {
  amount: number
  desiredChainId?: number
  balance?: number
  metamaskChainIDGetter?: () => Promise<number>
  // address: string2
}

export const SwapError = {
  // eslint-disable-next-line unicorn/error-message
  SilentError: new Error(''),
  InvalidAmount: new Error('Invalid amount passed'),
  InsufficientBalance: new Error('Insufficient balance'),
  InvalidChainID: new Error('Invalid metamask network')
}

export const formValidatorBuilder: FormValidationBuilder<SwapProps> = (props) => {
  return async function () {
    if (props.metamaskChainIDGetter && !isNil(props.desiredChainId)) {
      const chainID = await props.metamaskChainIDGetter()

      if (chainID !== props.desiredChainId) {
        return SwapError.InvalidChainID
      }
    }
    if (props.amount < 0 || isNaN(props.amount)) {
      return SwapError.InvalidAmount
    }

    if ((!isNil(props.balance) && props.balance < props.amount) || (!isNil(props.balance) && props.balance === 0)) {
      return SwapError.InsufficientBalance
    }

    return null
  }
}
