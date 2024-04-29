import React, { useContext } from 'react'
import HeroContainer from '../HeroContainer/HeroContainer'
import Cards from '../Cards/Cards'
import Products from '../Products/Products'
import { Context } from '../../context/Context'

function Home() {
  const { isLogin}= useContext(Context)
  return (
    <>
        <HeroContainer />
        <Cards />
        {isLogin && <Products />}
        
    </>
  )
}

export default Home