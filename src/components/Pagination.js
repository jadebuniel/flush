import React from 'react'
import "./Pagination.scss"

const Pagination = ({ clickPage, page, total, term}) => {
 const handlePrev = () => {
  if (page === 1){
   return
  } else {
   clickPage(page - 1)
  }
  scrollToTop()
 }
 const handleNext = () => {
  if (page === total){
   return
  } else {
   clickPage(page + 1)
   
  }
  scrollToTop()
 }
 const scrollToTop = () => {
  document.documentElement.scrollTop = 0
 }
 return (
  <div className="pagination">
   <button className="prev" onClick={handlePrev} style={{display: (page === 1) ? "none" : "inline-block"}}>Prev</button>
   <button className="next" onClick={handleNext} style={{display: (page === total) ? "none" : "inline-block"}}>Next</button>
  </div>
 )
}

export default Pagination
