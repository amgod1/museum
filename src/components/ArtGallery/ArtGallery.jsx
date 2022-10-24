import React from 'react'
import styles from './ArtGallery.module.css'

import img1 from './../../assets/img/galery/galery1.jpg'
import img2 from './../../assets/img/galery/galery2.jpg'
import img3 from './../../assets/img/galery/galery3.jpg'
import img4 from './../../assets/img/galery/galery4.jpg'
import img5 from './../../assets/img/galery/galery5.jpg'
import img6 from './../../assets/img/galery/galery6.jpg'
import img7 from './../../assets/img/galery/galery7.jpg'
import img8 from './../../assets/img/galery/galery8.jpg'
import img9 from './../../assets/img/galery/galery9.jpg'
import img10 from './../../assets/img/galery/galery10.jpg'
import img11 from './../../assets/img/galery/galery11.jpg'
import img12 from './../../assets/img/galery/galery12.jpg'
import img13 from './../../assets/img/galery/galery13.jpg'
import img14 from './../../assets/img/galery/galery14.jpg'
import img15 from './../../assets/img/galery/galery15.jpg'

let images = [ 
    {key: 1,image: img1, alt: img1},
    {key: 2,image: img2, alt: img2},
    {key: 3,image: img3, alt: img3},
    {key: 4,image: img4, alt: img4},
    {key: 5,image: img5, alt: img5},
    {key: 6,image: img6, alt: img6},
    {key: 7,image: img7, alt: img7},
    {key: 8,image: img8, alt: img8},
    {key: 9,image: img9, alt: img9},
    {key: 10,image: img10, alt: img10},
    {key: 11,image: img11, alt: img11},
    {key: 12,image: img12, alt: img12},
    {key: 13,image: img13, alt: img13},
    {key: 14,image: img14, alt: img14},
    {key: 15,image: img15, alt: img15},
]

images.sort(() => Math.random() - 0.5)

let getImagesThird = images.splice(-5).map(el => <img src={el.image} alt={el.alt} key={el.key} />)
let getImagesSecond = images.splice(-5).map(el => <img src={el.image} alt={el.alt} key={el.key} />)
let getImagesFirst = images.map(el => <img src={el.image} alt={el.alt} key={el.key} />)

const Blur = () => {
  return (
    <div className={styles.blur}>
        <div className={styles.black}></div>
    </div>
  )
}

const ArtGallery = () => {
  return (
    <div className={styles.wrapper}>
        <div className={styles.main}>
            <h2 className={styles.title}>
                Art Gallery
            </h2>
            <Blur />
            <div className={styles.imagesWrapper}>
                <div className={`${styles.imagesColumn} ${styles.imagesDown}`}>
                    { getImagesFirst }
                </div>
                <div className={styles.imagesColumn}>
                    { getImagesSecond }
                </div>
                <div className={`${styles.imagesColumn} ${styles.imagesDown}`}>
                    { getImagesThird }
                </div>
            </div>
        </div>
    </div>
  )
}

export default ArtGallery