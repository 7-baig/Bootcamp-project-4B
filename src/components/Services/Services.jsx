import React from 'react'
import services from '../../images/Services/services.svg'
import styles from './Services.module.css'

const Services = () => {

    return (
        <div className={styles.container} >

            <div className={styles.left}>
                <img src={services} alt="photo"/>
            </div>

            <div className={styles.right}>
                <h1>Services</h1>
                <p>We offer customized digital services and scalable operational strategies to prepare your Organization ride through the waves of uncertainty in the form of disruptive technology and government regulations so you can deliver accelerated and cost-effective services for your consumers</p>
            </div>

        </div>
    )
}

export default Services