import React from 'react';

class InputForm extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      address: '',
      ccNumber: ''
    }
  }

  handleChange(e) {
    // If you are using babel, you can use ES 6 dictionary syntax { [e.target.name] = e.target.value }
    var change = {}
    change[e.target.name] = e.target.value
    this.setState(change)
  }

  render() {
    return (
      <form>
        <h2>Enter you credit card details</h2>

        <label>
          Full Name
          <input type="name" onChange={this.handleChange.bind(this)} value={this.state.name} />
        </label>

        <label>
          Home address
          <input type="address" onChange={this.handleChange.bind(this)} value={this.state.address} />
        </label>

        <label>
          Credit card number
          <input type="ccNumber" onChange={this.handleChange.bind(this)} maxLength="16" value={this.state.ccNumber} />
        </label>

        <button type="submit">Pay now</button>
      </form>
    )
  }
}

export default InputForm;