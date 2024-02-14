// Write your code here

import './index.css'

const DenominationItem = props => {
  const {valueDetails, updateBalance} = props
  const {value} = valueDetails

  const onClickDenomination = () => {
    updateBalance(value)
  }

  return (
    <li className="list-value">
      <button type="button" className="button" onClick={onClickDenomination}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
