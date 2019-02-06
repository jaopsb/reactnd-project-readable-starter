import React from 'react'
import Comment from './Comment'

class Commentaries extends React.Component {
  render() {
    const { commentaries } = this.props
    return (
      <React.Fragment>
        {
          commentaries.map(comm => < Comment key={comm.id} comment={comm} />)
        }
      </React.Fragment>
    )
  }
}

export default Commentaries