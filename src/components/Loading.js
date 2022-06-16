import spinner from '../spinner.png'
import styles from './Loading.module.css'
import React from 'react';
const Loading = () => {

    return(
        <>
        <img src={spinner} className={styles.spinner} alt="spinner" />
        <p>Loading...</p>
        </>
        )
}

export default Loading