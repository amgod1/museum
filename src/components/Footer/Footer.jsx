import React from 'react'
import logo from '../../assets/logo.svg'
import yt from '../../assets/logos/yt.svg'
import ig from '../../assets/logos/ig.svg'
import fb from '../../assets/logos/fb.svg'
import tw from '../../assets/logos/tw.svg'
import pi from '../../assets/logos/pi.svg'
import styles from './Footer.module.css'

let links = [
    {link: 'Visiting'},
    {link: 'Explore'},
    {link: 'Video'},
    {link: 'Gallery'},
    {link: 'Tickets'},
    {link: 'Contacts'},
]

let icons = [
    {img: yt, link: 'https://www.youtube.com/user/louvre'},
    {img: ig, link: 'https://www.instagram.com/museelouvre/'},
    {img: fb, link: 'https://www.facebook.com/museedulouvre'},
    {img: tw, link: 'http://twitter.com/museelouvre'},
    {img: pi, link: 'https://www.pinterest.fr/museedulouvre/'},
]

let navMenu = links.map(el => <a href='#' className={styles.link} key={el.link} rel="noreferrer">{el.link}</a>)

const Footer = () => {
    return (
        <div className={styles.wrapper}>
            <footer className={styles.footer}>
                <div className={styles.footerBox}>
                    <div className={styles.logoBox}>
                        <img src={logo} className={styles.image} alt='logo' />
                        <h1 className={styles.title}>Louvre</h1>
                    </div>
                    <div className={styles.navbar}>
                        { navMenu }
                    </div>
                </div>
                <div className={styles.allLinks}>
                    { icons.map(el => 
                        <a href={el.link} className={styles.linkImg} target="_blank" rel="noreferrer" key={el.link} >
                        <div className={styles.circle}>
                            <img src={el.img} alt='img' />
                        </div>
                        </a> 
                    )}
                </div>
            </footer>
        </div>
    )
}

export default Footer