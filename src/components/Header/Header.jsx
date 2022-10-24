import React from 'react'
import { useRef } from 'react'
import logo from '../../assets/logo.svg'
import styles from './Header.module.css'

let links = [
    {link: 'Visiting'},
    {link: 'Explore'},
    {link: 'Video'},
    {link: 'Gallery'},
    {link: 'Tickets'},
    {link: 'Contacts'},
]

let navMenu = links.map(el => <a className={styles.link} key={el.link} rel="noreferrer">{el.link}</a>)

const Header = (props) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <div className={styles.logoBox}>
                    <img src={logo} className={styles.image} alt='logo' />
                    <h1 className={styles.title}>Louvre</h1>
                </div>
                <nav className={styles.nav}>
                    {navMenu}
                </nav>
            </div>
        </div>
    )
}

export default Header