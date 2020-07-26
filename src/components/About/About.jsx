import React from 'react'
import styles from './About.module.css'
import about from '../../images/About/about.svg'

const About = () => {

    return (
        <div className={styles.container}>

            <div className={styles.left}>
                <h1>We Are</h1>
                <p>A highly specialized Management team with over 20 combined years of experience in the Healthcare industry with proven ability to optimally combine digital technology, skilled resources and efficient business processes to implement creative as well as proven market solutions to suit an ever-evolving market. Our forte has been to successfully tailor our solutions to support your needs whether it is in the space of Consulting, Product Management or Service Delivery</p>
            </div>

            <div className={styles.right}>
                <img src={about} alt="photo"/>
            </div>

        </div>
    )
}

export default About