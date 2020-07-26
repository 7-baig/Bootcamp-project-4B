import React from 'react'
import Header from '../header/Header'
import MainSection from '../MainSection/MainSection'
import styles from './Main.module.css'

const Main = () => {

    return (

        <div className={styles.container} >  

            <Header />
            <MainSection />

        </div>

    )
}

export default Main