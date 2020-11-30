import React from 'react'
import './Modal.scss'

const Modal = ({modalStatus, toggleModal, info}) => {
 const userProfile = `https://pixabay.com/users/${info.user}-${info.user_id}/`
 const modalClick = (e) => {
  if (e.target.classList.contains("modal")){
   toggleModal(false)
  }
 }
 return (
  <div className="modal" style={{display: modalStatus ? "block" : "none"}} onClick={(e) => modalClick(e)}>
   <div className="modal-container">
    <div className="modal-overlay">
    <div className="image-action">
     <div className="author">
      <div className="author-image">
       <a href={userProfile} target="_blank"><img src={info.userImageURL ? info.userImageURL : "https://orbitermag.com/wp-content/uploads/2017/03/default-user-image.png"} alt="author-image"/></a>
      </div>
       <a href={userProfile} target="_blank"><h3 className="author-name">{info.user}</h3></a>
     </div>
     <a href={info.pageURL} target="_blank"><button className="download-btn"><i className="fas fa-download"></i></button></a>
    </div>
    </div>
    <img src={info.largeImageURL} alt=""/>
   </div>
  </div>
 )
}

export default Modal
