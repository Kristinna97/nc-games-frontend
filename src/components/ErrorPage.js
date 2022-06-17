import React from 'react'
import { Link } from 'react-router-dom';
const ErrorPage = () =>{

    return(<>
        <h1>Oops, something went wrong :(</h1>
        <Link  to={`/`} key="home">
        Go Back To Home Page</Link>
        </>
    )
}

export default ErrorPage;
