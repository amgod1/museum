import React from 'react'
import styles from './Welcome.module.css'
import img from '../../assets/img/welcome-slider/1.jpg'

const Caption = () => {
  return (
    <div className={styles.title}>
        <h2 className={styles.text}>Welcome <br/> to the Louvre</h2>
        <p className={styles.paragraph}>From the castle to the museum</p>
        <a className={styles.btnText} target="_blank" rel="noreferrer" href='https://www.google.com/maps/@48.8618159,2.3366818,3a,75y,81.55h,73.4t/data=!3m7!1e1!3m5!1sAF1QipOVxZQuSy3Bx9T_HpH_7FtBHDTXvI6SF-A10ocT!2e10!3e12!7i5472!8i2736'>
          <button className={styles.btn}>
            Discover the Louvre
          </button>
        </a>
    </div>
  )
}

const Image = () => {
  return (
    <div className={styles.imgWrapper}>
      <img src={img} className={styles.image} alt='slider' />
    </div>
  )
}

const Blur = () => {
  return (
    <div className={styles.imgWrapper}>
        <div className={styles.blur}>
            <div className={styles.black}></div>
        </div>
    </div>
  )
}

const Welcome = () => {
  return (
    <div className={styles.wrapper}>
        <div className={styles.main}>
            <Caption />
            <Image />
            <Blur />
        </div>
    </div>
  )
}

export default Welcome