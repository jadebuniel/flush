import React, { useState, useEffect } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import Masonry from 'react-masonry-css'
import ImageCard from './ImageCard'
import "./ImageList.scss"


const ImageList = ({term}) => {
 const [images, setImages] = useState([])
 const [totalPage, setTotalPage] = useState(0)
 const [currentPage, setCurrentPage] = useState(1)

 

 const fetchData = async (query) => {
  const res = await fetch(`https://pixabay.com/api/?key=19273103-9fda3e0c5e653fb65d691e169&q=${query}&image_type=photo&page=${currentPage}`)
  const data = await res.json()
  try {
   setImages([...images, ...data.hits])
   setTotalPage(Math.ceil(data.totalHits / 20))
  } catch (err) {
    console.log(err)
  }
 }

 useEffect(() => {
  fetchData(term)
 }, [term, currentPage])

 const breakpointColumnsObj = {
  default: 3,
  1200: 2,
  900: 1
};
 return (
  <>
  <InfiniteScroll dataLength={images.length} next={() => setCurrentPage(currentPage + 1)} hasMore={true}>
   <Masonry breakpointCols={breakpointColumnsObj} className="my-masonry-grid" columnClassName="my-masonry-grid_column">
   {images.map((image, index) => (
    <ImageCard image={image} key={index}/>
   ))}
  </Masonry>
  </InfiniteScroll>
  </>
 )
}

export default ImageList