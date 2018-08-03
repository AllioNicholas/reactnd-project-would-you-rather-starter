import React, { Component } from 'react'
import Pool from './Pool'

class PoolList extends Component {
  render() {
    const { pools } = this.props

    return(
      <div>
        PoolList
        <ul>
          {pools.map((p) => (
            <li key={p.id}>
              <Pool name={p.name} />
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default PoolList
