import React, { useRef } from 'react'
import styles from './Solutions.module.css'
import useWebAnimations from "@wellyshen/use-web-animations";
import { Bounce } from 'react-reveal'

const Solutions = () => {

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
        <div className={styles.container}>

            <div className={styles.top}>
                <Bounce right>
                    <div ref={circle} className={styles.circle}></div>
                </Bounce>
                <Bounce clear>
                    <h1>Economical,<br/>
                    dynamic and managed business solutions.</h1>
                </Bounce>
            </div>

            
            <div className={styles.bottom}>
                <Bounce left>
                    <div className={styles.card}>
                        <h2>Improved efficiency</h2>
                        <p>By reducing the burden of managing support functions, staffing and day to day         operations, your business can concentrate further on core...</p>
                    </div>
                </Bounce>
                <Bounce bottom>
                    <div className={styles.card}>
                        <h2>Reduced Cost</h2>
                        <p>Our solutions are crafted to bring effective change in your business by ensuring cost-effective and reliable operation...</p>
                    </div>
                </Bounce>
                <Bounce right>
                    <div className={styles.card}>
                        <h2>Overarching Impact</h2>
                        <p>By ensuring quality process management we can ensure a comprehensive impact on your business.</p>
                    </div>
                </Bounce>
            </div>

        </div>
    )
}

export default Solutions