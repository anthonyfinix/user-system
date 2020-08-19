import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { UserContext } from '../../../store/userContext';

export default ({ component: Component, ...rest }) => {
    const { user } = useContext(UserContext)
    if (!user.name) return <Route {...rest} render={props => { return <Redirect to="/login" /> }}></Route>
    return <Route {...rest} render={props => <Component props />}></Route>
}