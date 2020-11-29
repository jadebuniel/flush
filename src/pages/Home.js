import React, { useState } from 'react'
import ImageList from '../components/ImageList'
import Search from '../components/Search'

const Home = () => {
 const text = ''
 return (
  <div>
   <Search />
   <ImageList  term={text}/>
  </div>
 )
}

export default Home
