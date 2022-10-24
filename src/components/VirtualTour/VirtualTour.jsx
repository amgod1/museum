import React from 'react'
import styles from './VirtualTour.module.css'
import img1 from '../../assets/img/virtual-tour/1.svg'
import img2 from '../../assets/img/virtual-tour/2.svg'
import img3 from '../../assets/img/virtual-tour/3.svg'
import img4 from '../../assets/img/virtual-tour/4.svg'
import img5 from '../../assets/img/virtual-tour/5.svg'
import img6 from '../../assets/img/virtual-tour/6.svg'

let itemInfo = [
    {img: img1, name: 'Royal Palace', link: 'https://www.google.com/maps/@48.8606882,2.3356791,3a,90y,328.36h,87.55t/data=!3m7!1e1!3m5!1sAF1QipMZ9YgnArbwEIbTDANeSQYFu9gNqpW_2Sv8FBvY!2e10!3e12!7i4352!8i1815'},
    {img: img2, name: 'Denon Wing', link: 'https://www.google.com/maps/@48.8563254,2.3352706,3a,75y,90t/data=!3m7!1e1!3m5!1sAF1QipNRj_CwP4coDMYdCHj6qHeBeJpI2VxU5BUsOX4F!2e10!3e12!7i11000!8i5500'},
    {img: img3, name: 'Collonade Perrault', link: 'https://www.google.com/maps/@48.8601723,2.3395439,3a,88.4y,322.04h,84.25t/data=!3m7!1e1!3m5!1sAF1QipNMZGQuEA-pAUvIG_eP_2f3gWTKZEJ6XLVJ-Pgb!2e10!3e12!7i10240!8i5120'},
    {img: img4, name: 'Greek Hall', link: 'https://www.google.com/maps/@48.860183,2.3356156,3a,90y,177.69h,95.61t/data=!3m7!1e1!3m5!1sAF1QipP7uFZnTITRe-7AEVAgHAfqiCL-03gvBHcYWgF3!2e10!3e12!7i5472!8i2736'},
    {img: img5, name: 'Mona Lisa', link: 'https://www.google.com/maps/@48.860183,2.3356156,3a,90y,177.69h,95.61t/data=!3m7!1e1!3m5!1sAF1QipP7uFZnTITRe-7AEVAgHAfqiCL-03gvBHcYWgF3!2e10!3e12!7i5472!8i2736'},
    {img: img6, name: 'Night Palace', link: 'https://www.google.com/maps/@48.8563254,2.3352706,3a,90y,21.26h,79.91t/data=!3m7!1e1!3m5!1sAF1QipPpGAowYatVyk3MMGnZAaQkYm2EUk-Dlca06SS5!2e10!3e12!7i11304!8i5652'}
]



const TourItem = (props) => {
  return (
    <div className={styles.item}>
        <a href={props.link} target="_blank" rel="noreferrer">
            <img src={props.img} className={styles.img} alt='img' />
        </a>
        <h3 className={styles.text}>{props.name}</h3>
        <div className={styles.shortLine}></div>
        <p className={styles.paragraph}>
            360° Virtual Tour
        </p>
        <a href={props.link} className={styles.link} target="_blank" rel="noreferrer">
            <p className={styles.paragraph}>
                Google Street Panorama View
            </p>
        </a>
    </div>
  )
}

let createItems = itemInfo.map(el => <TourItem img={el.img} name={el.name} link={el.link} key={el.name} />);

const VirtualTour = () => {

  return (
    <div className={styles.wrapper}>
        <div>
            <h2 className={styles.title}>Virtual Tour</h2>
            <div className={styles.line}></div>
        </div>
        <div className={styles.main}>
            { createItems }
        </div>
    </div>
  )
}

export default VirtualTour