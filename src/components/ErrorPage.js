import React from 'react'
import { Link } from 'react-router-dom';
import styles from "./ErrorPage.module.css"
const ErrorPage = () =>{

    return(<>
        <h1 className={styles.error}>Oops, something went wrong :(</h1>
        <Link className={styles.errorBtn}  to={`/`} key="home">
        Go Back To Home Page</Link>
        </>
    )
}

export default ErrorPage;
