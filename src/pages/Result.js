import React, {useState} from 'react'
import Search from '../components/Search'
import {useParams} from 'react-router-dom'
import './Result.scss'
import ImageList from '../components/ImageList'

const Result = () => {
 const {query} = useParams()
 return (
  <div>
    <Search/>
    <h1 className="result-query">{query}</h1>
    <ImageList term={query}/>
  </div>
 )
}

export default Result
