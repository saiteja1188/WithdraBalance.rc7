// Write your code here
import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {
    balance: 2000,
  }

  onUpdateBalance = value => {
    this.setState(prevState => ({
      balance: prevState.balance - value,
    }))
  }

  render() {
    const {denominationsList} = this.props
    const {balance} = this.state

    const name = 'Sarah Williams'
    const initalise = name.slice(0, 1)
    return (
      <div className="app-container">
        <div className="cash-widrawal-container">
          ś
          <div className="user-details-container">
            <div className="initalise-content">
              <p className="initalise">{initalise}</p>
            </div>
            <p className="name">{name}</p>
          </div>
          <div className="balance-details-container">
            <p className="balance-name">Your Balance</p>
            <div className="balance-container">
              <p className="balance">{balance}</p>
              <p className="rupees">In Rupees</p>
            </div>
          </div>
          <p className="withdrawal">Withdraw</p>
          <p className="description">CHOOSE SUM (IN RUPEES)</p>
          <ul className="list-items">
            {denominationsList.map(eachValue => (
              <DenominationItem
                valueDetails={eachValue}
                key={eachValue.id}
                updateBalance={this.onUpdateBalance}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
