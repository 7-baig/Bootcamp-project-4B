import React, { useRef } from 'react'
import advantages from '../../images/Advantages/advantages.svg'
import styles from './Advantages.module.css'
import useWebAnimations from "@wellyshen/use-web-animations";
import { Bounce } from 'react-reveal'

const Advantages = () => {

    const ref = useRef(null)

    const { ref:circle } = useWebAnimations({
        keyframes: [
            { transform: 'rotate(0deg)' },
            { transform: 'rotate(360deg)' },
        ],
        timing: {
            iterations: Infinity,
            duration: 8000,
            direction: 'normal',
        }
    })
     
    return (
        <div className={styles.container} >

            <Bounce bottom>
                <div className={styles.left}>
                    <div ref={circle} className={styles.circle}></div>
                    <h1>Curved Advantages</h1>
                    <ul>
                        <li>- US experienced management team</li>
                        <li>- Compliance driven process</li>
                        <li>- Workforce management</li>
                        <li>- Secure work environment</li>
                        <li>- Data driven quality review</li>
                        <li>- 24x7 coverage</li>
                    </ul>
                </div>
            </Bounce>

            <Bounce bottom>
                <div className={styles.right}>
                    <img src={advantages} alt="advantages"/>
                </div>
            </Bounce>

        </div>
    )
}

export default Advantages