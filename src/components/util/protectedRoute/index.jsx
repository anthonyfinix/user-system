import React from 'react';
import { Route } from 'react-router-dom';
import { user } from '../../../store';
import { useRecoilValue } from 'recoil';

export default ({ component: Component, ...rest }) => {
    let userState = useRecoilValue(user);
    if (!userState) return <Route {...rest} render={props => { return <Component {...rest} /> }}></Route>
    return <Route {...rest} render={props => { return <h1>Welcome User</h1> }}></Route>
}