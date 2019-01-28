import React from 'react'

const Categories = ({ categories }) => (
  <div className='categories'>
    <h3>Categories</h3>
    <ul>
      {categories.map(cat => <li key={cat.name + cat.path}>{cat.name}</li>)}
    </ul>
  </div>
)

export default Categories