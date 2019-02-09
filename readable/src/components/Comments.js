import React from 'react'
import Comment from './Comment'
import { connect } from 'react-redux'
import { handleEditCom, handleVoteComm, handleDelComm } from '../actions/comments';


class Comments extends React.Component {
  render() {
    const { comments, user, handleEditBody, handleVote, handleDel, handleSubmitComm } = this.props

    return (
      <React.Fragment>
        {
          comments.lenght !== 0 &&
          comments.map(comm => (
            <Comment
              key={comm.id}
              user={user}
              comment={comm}
              handleSubmitComm={handleSubmitComm}
              handleEditBody={handleEditBody}
              handleVote={handleVote}
              handleDel={handleDel} />
          ))
        }
      </React.Fragment>
    )
  }
}

const mapStateToProps = ({ comments, user }, props) => {
  return {
    user,
    comments: comments.filter(comm => comm.deleted === false)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmitComm: (comment) => dispatch(handleEditCom(comment)),
    handleVote: (type, comment) => dispatch(handleVoteComm(comment, type, 'comments')),
    handleDel: (id) => {
      dispatch(handleDelComm(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments)