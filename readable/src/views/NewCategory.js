import React from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'

//Nao existe a possibilidade de um usuario criar uma categoria ( ainda)

class NewCategory extends React.Component {
  state = {
    category: {
      name: '',
      path: ''
    }
  }

  onSubmit = (e) => {
    e.preventDefault()

    const { categories, dispatch } = this.props

    if (this.state.category.name === '' || this.state.category.path === '')
      return alert("The Category can't be void!!")

    if (categories.find(cat => cat.name === this.state.category.name))
      return alert("This Category already exists!!")

    let resp = window.confirm(`Create new Category ${this.state.category.name}?`)

    if (resp) {
      //dispatch(addCat(this.state.category))
      this.props.history.push('/')
    }

  }

  onChange = (e) => {
    let name = e.target.value

    const category = { name, path: `${name}` }

    this.setState({ category })
  }

  render() {
    const { categories } = this.props

    return (
      <div className='container-fluid'>
        <Link className="back-button" to="/" />

        <div className='list-categories'>
          <table className='table table-bordered'>
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Path</th>
              </tr>
            </thead>
            <tbody>
              {
                categories.map(cat => {
                  return (
                    <tr key={cat.name + cat.path}>
                      <td>{cat.name}</td>
                      <td>'/{cat.path}'</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
        <form className='new-category' onSubmit={this.onSubmit}>
          <div className='form-group'>
            <input
              className='form-control'
              type='text'
              placeholder='New Category'
              value={this.state.name}
              onChange={this.onChange}
            />
            <button className='btn btn-light btn-new-category' type='submit'>
              Create
            </button>
          </div>
        </form>
      </div>
    )
  }
}

function mapStateToProps({ categories }, props) {
  return {
    categories
  }
}

export default withRouter(connect(mapStateToProps)(NewCategory))