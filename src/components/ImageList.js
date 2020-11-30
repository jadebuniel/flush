import React, { useState, useEffect } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import Masonry from 'react-masonry-css'
import ImageCard from './ImageCard'
import "./ImageList.scss"
import Modal from './Modal'


const ImageList = ({term}) => {
 const [images, setImages] = useState([])
 const [loading, setLoading] = useState(false)
 const [totalPage, setTotalPage] = useState(0)
 const [currentPage, setCurrentPage] = useState(1)
 const [openModal, setOpenModal] = useState(false)
 const [imageModal, setImageModal] = useState([])

 const body = document.querySelector('body')
 body.style.overflowY = openModal ? "hidden" : "scroll"

 

 const fetchData = async (query) => {
  setLoading(true)
  const res = await fetch(`https://pixabay.com/api/?key=19273103-9fda3e0c5e653fb65d691e169&q=${query}&image_type=&page=${currentPage}`)
  const data = await res.json()
  try {
   setImages(prev => {
     setLoading(false)
     return [...prev, ...data.hits]
   })
   setTotalPage(Math.ceil(data.totalHits / 20))
  } catch (err) {
    console.log(err)
  }
 }
 useEffect(() => {
  setImages([])
 }, [term])

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
  <InfiniteScroll dataLength={images.length} next={() => setCurrentPage(currentPage + 1)} hasMore={(currentPage < totalPage) ? true : false}>
   <Masonry breakpointCols={breakpointColumnsObj} className="my-masonry-grid" columnClassName="my-masonry-grid_column">
   {images.map((image, index) => (
    <ImageCard image={image} key={index} toggleModal={(toggle) => setOpenModal(toggle)} clickImage={(click) => setImageModal(click)}/>
    ))}
  </Masonry>
   <Modal modalStatus={openModal} toggleModal={(toggle) => setOpenModal(toggle)} image={images} info={imageModal}/>
   <img src={loading ? "https://media.giphy.com/media/MDrmyLuEV8XFOe7lU6/giphy.gif" : "none"} className="loading-image" alt=""/>
  </InfiniteScroll>
  </>
 )
}

export default ImageList
