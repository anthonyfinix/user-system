import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { user } from '../../../store';
import { useRecoilValue } from 'recoil';

export default ({ component: Component, ...rest }) => {
    let userState = useRecoilValue(user);
    if (!userState) return <Route {...rest} render={props => { return <Redirect to="/login" /> }}></Route>
    return <Route {...rest} render={props => <Component props />}></Route>
}