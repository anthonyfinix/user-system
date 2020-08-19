import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { UserContext } from '../../../store/userContext';

export default ({ component: Component, ...rest }) => {
    const { user } = useContext(UserContext)
    if (!user.name) return <Route {...rest} render={props => { return <Component props /> }}></Route>
    return <Route {...rest} render={props => <Redirect to={'/app'} />}></Route>
}