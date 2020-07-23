import React from 'react'
import logo from '../../images/logo.svg'
import menu from '../../images/menu.svg'
import styles from './Header.module.css'

const Header = () => {

    const menuClick = () => {
        alert('hello')
    }

    return (

        <div className={styles.container}>
{/* left */}
            <div className={styles.left}>
                <div>
                    <img src={logo} alt="logo"/>
                    <h3>Zapare Technologies</h3>
                </div>
            </div>
{/* right */}
            <div className={styles.right}>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Services</li>
                    <li>Career</li>
                    <li>Contact</li>
                </ul>
                <img onClick={menuClick} src={menu} className={styles.menuIcon} />
            </div>
{/* menu */}
            <div className={styles.menu}>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Services</li>
                    <li>Career</li>
                    <li>Contact</li>
                </ul>
            </div>

        </div>

    )
}

export default Header