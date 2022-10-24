import React from 'react'
import styles from './PictureExplore.module.css'
// import imgBefore from './../../assets/img/explore-slider/before.jpg'
import imgAfter from './../../assets/img/explore-slider/after.jpg'

const PictureExplore = () => {
  return (
    <div className={styles.wrapper}>
        <div className={styles.main}>
            <div className={styles.info}>
                <h2 className={styles.title}>Picture Explore</h2>
                <div className={styles.line}></div>
                <p className={styles.text}>
                    Las Meninas is a 1656 painting by Diego Velázquez, the leading artist of the Spanish Golden Age.
                </p>
                <p className={styles.text}>
                It was cleaned in 1984 to remove a <span className={styles.yellowText}>"yellow veil"</span> of dust that had gathered since the previous restoration in the 19th century.
                </p>
                <p className={styles.text}>
                The cleaning provoked furious protests, not because the picture had been damaged in any way, but because it looked different.
                </p>
            </div>
            <div className={styles.image}>
                <img src={imgAfter} alt='img-before'/>
            </div>
        </div>
    </div>
  )
}

export default PictureExplore