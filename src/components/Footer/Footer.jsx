import React from 'react'
import styles from './Footer.module.css'
import logo from '../../images/Footer/footer-logo.svg'
import fbIcon from '../../images/Footer/facebook.svg'
import linkedinIcon from '../../images/Footer/linkedin.svg'
import githubIcon from '../../images/Footer/github2.svg'

const Footer = () => {

    return (
        <div className={styles.container}>

            <div className={styles.top}>
                <img src={logo} alt="logo" />
                <h1>Care To Join Us?</h1>
                <h3>Embark on an exciting career with us to learn 
                    and grow alongside the best in the industry</h3>
                <button>View current openings</button>
            </div>

            <div className={styles.bottom}>

                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Services</li>
                    <li>Career</li>
                    <li>Contact</li>
                </ul>

                <div className={styles.socialMedia}>
                    <span><p>Follow us: </p> &nbsp; <img src={fbIcon} /> <img src={linkedinIcon} /></span>
                </div>

                <div className={styles.copyrights}>

                    <p>All right reserved ©2020 curvedtechnologies.com</p>
                    <p>Designed by: Saad Baig</p>   
                    <span><img src={githubIcon} /> &nbsp; <p><a href="https://github.com/7-baig">@7-baig</a></p></span>

                </div>

            </div>

        </div>
    )
}

export default Footer