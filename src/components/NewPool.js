import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { handleAddPool } from '../actions/pools'

class NewPool extends Component {
  state = {
    optionOneText: '',
    optionTwoText: '',
    toHome: false
  }

  handleOptionOneChange = (e) => {
    const optionOneText = e.target.value

    this.setState(() => ({
      optionOneText
    }))
  }

  handleOptionTwoChange = (e) => {
    const optionTwoText = e.target.value

    this.setState(() => ({
      optionTwoText
    }))
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const { optionOneText, optionTwoText } = this.state
    const { dispatch, id } = this.props

    dispatch(handleAddPool({optionOneText, optionTwoText}))

    this.setState(() => ({
      optionOneText: '',
      optionTwoText: '',
      toHome: id ? false : true
    }))
  }

  render() {
    const { optionOneText, optionTwoText, toHome } = this.state

    if (toHome === true) {
      return <Redirect to='/' />
    }

    return(
      <div>
        <h3>New Pool</h3>
        <form onSubmit={this.handleSubmit}>
          <textarea
            placeholder='Insert option one'
            value={optionOneText}
            onChange={this.handleOptionOneChange} />
          <textarea
            placeholder='Insert option two'
            value={optionTwoText}
            onChange={this.handleOptionTwoChange} />
          <button
            type='submit'
            disabled={optionOneText === '' && optionTwoText === ''} >
            Add pool
          </button>
        </form>
      </div>
    )
  }
}

export default connect()(NewPool)
