import React from 'react'
import './ImageCard.scss'

const ImageCard = ({ image, toggleModal, clickImage }) => {
 const userProfile = `https://pixabay.com/users/${image.user}-${image.user_id}/`

 const handleClick = () => {
   toggleModal(true)
   clickImage(image)

 }
 return (
  <div className="image-container" onClick={() => handleClick()}>
   <div className="image-overlay">
    <div className="image-action">
     <div className="author">
      <div className="author-image">
       <a href={userProfile} target="_blank"><img src={image.userImageURL ? image.userImageURL : "https://orbitermag.com/wp-content/uploads/2017/03/default-user-image.png"} alt="author-image"/></a>
      </div>
       <a href={userProfile} target="_blank"><h3 className="author-name">{image.user}</h3></a>
     </div>
     <a href={image.pageURL} target="_blank"><button className="download-btn"><i className="fas fa-download"></i></button></a>
    </div>
   </div>
   <img className="image" src={image.webformatURL} alt="sample"/>
  </div>
 )
}

export default ImageCard

