import React from 'react'
import Categories from './Categories'
import Posts from './Posts'

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <div className='wrapper'>
          <Categories />
          <Posts />
        </div>
      </div>
    )
  }
}

export default Home