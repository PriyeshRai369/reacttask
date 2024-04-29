import React from 'react'
import style from './Cards.module.css'

function Cards() {
  return (
    <div className={style.cardContainer}>
        <div className={style.cardBox}>
            <img src='../images/Coffee.png' alt="Card Image" />
        </div>
        <div className={style.cardBox}>
            <img src="../images/Coffee.webp" alt="Card Image" />
        </div>
        <div className={style.cardBox}>
            <img src="../images/Coffee 2.webp" alt="Card Image" />
        </div>
    </div>
  )
}

export default Cards