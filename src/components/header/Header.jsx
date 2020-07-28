import React, { useState } from 'react'
import logo from '../../images/logo3.svg'
import menu from '../../images/menu.svg'
import cross from '../../images/cross.svg'
import styles from './Header.module.css'

const Header = () => {

    const [isClicked, setIsClicked] = useState(false)
    
    const menuClick = () => {
        setIsClicked(true)
    }
    const crossClick = () => {
        setIsClicked(false)
    }


    return (

        <div className={styles.container}>
{/* left */}
            <div className={styles.left}>
                <div>
                    <img src={logo} alt="logo"/>
                    <h3>Curved Technologies</h3>
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
                <img
                    onClick={menuClick} 
                    src={menu} 
                    className={styles.menuIcon} 
                />
                <img 
                    onClick={crossClick} 
                    src={cross} 
                    className={styles.crossIcon} 
                    style={ isClicked ? { display: 'block' } : { display: 'none' }}
                />
            </div>
{/* menu */}
            <div 
                className={styles.menu}
                style={ isClicked ? { transform: 'translate(0px)' } : { transform: 'translate(280px)' }}
            >
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