import React, { useState } from 'react'
import ImageList from '../components/ImageList'
import Search from '../components/Search'

const Home = () => {
 const text = ''
 document.title =`Flush - Free High Resolution Images for Creators`
 return (
  <div>
   <Search />
   <ImageList  term={text}/>
  </div>
 )
}

export default Home
