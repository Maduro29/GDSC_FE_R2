import React from 'react'
import './Home.scss'
import Banner from '../component/Banner'
import Shop from '../component/Shop'

const Home = () => {
  return (
    <div className='home'>
      <Banner />
      <Shop />
    </div>
  )
}

export default Home