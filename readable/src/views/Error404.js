import React from 'react'
import { Link } from 'react-router-dom'

class Error404 extends React.Component {
  render() {
    return (
      <div className="error-page">
        <h1>ERRO 404</h1>
        <h3>A página que você procurou não existe</h3>
        <Link to='/' className="btn btn-light">Voltar</Link>
      </div>
    )
  }
}
export default Error404