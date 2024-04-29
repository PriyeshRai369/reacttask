import React, { useContext } from 'react'
import style from './PopUp.module.css'
import { Context } from '../../context/Context';

function PopUp() {
    const { showPopUp, setShowPopUp,productDetails}= useContext(Context);
  return (
    <div className={style.container}>
        <div className={style.box}>
            <h4 className={style.closeBtn} onClick={()=>setShowPopUp(false)}>&#10008;</h4>
            <div className={style.detailsContainer}>
                <div className={style.imgContainer}>
                    <img src={productDetails.image} alt="" />
                </div>
                <div className={style.infoContainer}>
                    <h4>{productDetails.title} </h4>
                    <hr />
                    <h5>Details</h5>
                    <p>{productDetails.description}</p>
                    <h5>Price = ${productDetails.price}</h5>
                    <h5>Category = {productDetails.category}</h5>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PopUp