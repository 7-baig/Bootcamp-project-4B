import React, { useRef } from 'react'
import styles from './MainSection.module.css'
import main from '../../images/Main Section/main.svg'
import useWebAnimations, { fadeIn, slideInRight } from "@wellyshen/use-web-animations";

const MainSection = () => {

    const ref = useRef(null)

    const { ref:image } = useWebAnimations({ ...fadeIn })
    const { ref:text } = useWebAnimations({ ...slideInRight })

    return (

        <div className={styles.container} >

            <div className={styles.left}>
                <img ref={image} src={main} alt="photo"/>
            </div>

            <div className={styles.right}>
                <h1 ref={text} >
                    Customized solutions
                    to meet the needs of
                    the changing market
                </h1>
            </div>

        </div>
    )
}

export default MainSection