import React, {useState} from 'react'
import Search from '../components/Search'
import {useParams} from 'react-router-dom'
import './Result.scss'
import ImageList from '../components/ImageList'

const Result = () => {
 const {query} = useParams()
 const title = query.split(" ")
 const titleSearch = title.map((ti) => ti.charAt(0).toUpperCase() + ti.slice(1))
 const titleFinal = titleSearch.join().replaceAll(",", " ")
 document.title = `${titleFinal} - Flush - Free High Resolution Images for Creators`
 return (
  <div>
    <Search/>
    <h1 className="result-query">{query}</h1>
    <ImageList term={query}/>
  </div>
 )
}

export default Result
