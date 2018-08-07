import React, { Component } from 'react'
import { connect } from 'react-redux'
import Pool from './Pool'

class PoolList extends Component {
  render() {
    const { pools, ids } = this.props

    return(
      <div>
        PoolList
        <ul>
          {ids.map((i) => (
              <li key={pools[i]['id']}>
                <Pool id={pools[i]['id']} />
              </li>
            )
          )}
        </ul>
      </div>
    )
  }
}

function mapStateToProps({ pools }, { ids }) {
  return {
    pools,
    ids
  }
}

export default connect(mapStateToProps)(PoolList)
