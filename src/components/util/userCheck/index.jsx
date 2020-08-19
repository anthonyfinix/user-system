import React, { useState, useContext, useEffect } from 'react';
import { UserContext } from '../../../store/userContext';
import fetchUserDetailsWithToken from './util/fetchUserDetailsWithToken';
import Loading from '../loading';


export default (props) => {
    const { user, setUser } = useContext(UserContext);
    const [isLoaded, setIsLoaded] = useState(true);
    useEffect(() => {
        if (!user.name) {
            if (localStorage.getItem('token') !== 'undefined') {
                fetchUserDetailsWithToken(localStorage.getItem('token'))
                    .then((response) => {
                        if (response.err) {
                            setIsLoaded(false)
                        } else {
                            setUser(response)
                            setIsLoaded(false)
                        }
                    })
            } else {
                setIsLoaded(false)
            }
        }
    }, [])
    if (isLoaded) return <Loading />
    return (
        <React.Fragment>
            {props.children}
        </React.Fragment>
    )
}