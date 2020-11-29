import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import "./Search.scss"

const Search = () => {
 const [term, setTerm] = useState('')
 const history = useHistory()
 const handleSubmit = (e) => {
  e.preventDefault()
  e.target.reset()
  history.push(`/search/${term}`)
 }
 return (
  <div className="search">
   <div className="overlay"></div>
   <div className="search-container">
      <a href="/"><h1 className="search-header">Flush</h1></a>
      <div className="search-desc">Made by creators for creators</div>
      <form className="form" onSubmit={handleSubmit}>
        <input type="text" name="input" id="input" placeholder="Search free high-resolution images" autoComplete="off" onChange={(e) => setTerm(e.target.value)} required/>
        <button type="submit" className="search-btn"><i className="fas fa-search"></i></button>
      </form>
   </div>
    
  </div>
 )
}

export default Search
