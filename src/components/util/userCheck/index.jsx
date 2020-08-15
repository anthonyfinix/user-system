import React from 'react';
import { useUser, user } from '../../../store';
import { useState } from 'react';
import Axios from 'axios';
import { useRecoilValue } from 'recoil';


export default (props) => {
    const userState = useRecoilValue(user);
    const setUser = useUser();
    const [isLoaded, setIsLoaded] = useState(false);
    if (!userState && localStorage.getItem('token')) {
        Axios({
            method: 'POST',
            url: `${process.env.REACT_APP_API_URI}/user/softRefresh`,
            data: { token: localStorage.getItem('token') }
        })
            .then(response => {
                if (!response.err) setUser({ ...response })
                setIsLoaded(true);
            })
    }
    return (
        <React.Fragment>
            {isLoaded}
            {props.children}
        </React.Fragment>
    )
}